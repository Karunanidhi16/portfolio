import {
  Code2,
  TrendingUp,
  ExternalLink,
  RefreshCw,
  AlertCircle,
  CheckCircle
} from 'lucide-react';
import { useState, useEffect } from 'react';

const DSA = () => {
  const [leetcodeData, setLeetcodeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  const LEETCODE_USERNAME = 'Karunanidhi16';
  const GFG_USERNAME = 'karunanidh5pe4';

  const fetchLeetCodeStats = async () => {
    try {
      const response = await fetch(
        `https://leetcode-stats-api.herokuapp.com/${LEETCODE_USERNAME}`
      );

      if (!response.ok) throw new Error();

      const data = await response.json();

      setLeetcodeData({
        totalSolved: data.totalSolved || 0,
        easySolved: data.easySolved || 0,
        mediumSolved: data.mediumSolved || 0,
        hardSolved: data.hardSolved || 0,
        ranking: data.ranking || 0
      });

      setError(null);
    } catch {
      setError(true);
    }
  };

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      await fetchLeetCodeStats();
      setLoading(false);
      setLastUpdated(new Date());
    };
    load();
    const interval = setInterval(load, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const calculateProficiency = t => {
    if (t >= 500) return 95;
    if (t >= 300) return 85;
    if (t >= 200) return 75;
    if (t >= 100) return 65;
    if (t >= 50) return 50;
    return Math.min((t / 50) * 50, 45);
  };

  const getLabel = p => {
    if (p >= 90) return 'Expert';
    if (p >= 75) return 'Advanced';
    if (p >= 60) return 'Intermediate';
    if (p >= 40) return 'Beginner';
    return 'Learning';
  };

  return (
    <section
      id="dsa"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Code2 className="text-blue-400" size={40} />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              DSA Profiles
            </h2>
            <button
              onClick={fetchLeetCodeStats}
              className="ml-4 p-2 bg-gray-700 rounded-lg"
            >
              <RefreshCw
                className={`text-gray-300 ${loading ? 'animate-spin' : ''}`}
                size={20}
              />
            </button>
          </div>
          <p className="text-gray-500 text-sm">
            {error
              ? 'Manual Mode'
              : `Last updated: ${lastUpdated.toLocaleTimeString()}`}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* ================= LEETCODE CARD ================= */}
          <div className="relative bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-orange-500/50 transition">
            <div className="absolute top-4 right-4">
              {leetcodeData && !error ? (
                <CheckCircle className="text-green-400" size={18} />
              ) : (
                <AlertCircle className="text-yellow-400" size={18} />
              )}
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br  flex items-center justify-center shadow-lg">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                  alt="LeetCode"
                  className="w-9 h-9 object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">LeetCode</h3>
                <a
                  href={`https://leetcode.com/${LEETCODE_USERNAME}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 flex items-center gap-1"
                >
                  @{LEETCODE_USERNAME}
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {leetcodeData && (
              <>
                <div className="mb-6">
                  <div className="flex justify-between mb-2 text-sm text-gray-400">
                    <span>Proficiency</span>
                    <span className="text-orange-400">
                      {getLabel(
                        calculateProficiency(leetcodeData.totalSolved)
                      )}
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 h-3 rounded-full">
                    <div
                      className="h-full bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"
                      style={{
                        width: `${calculateProficiency(
                          leetcodeData.totalSolved
                        )}%`
                      }}
                    />
                  </div>
                </div>

                <div className="text-center mb-4">
                  <p className="text-5xl font-bold text-orange-400">
                    {leetcodeData.totalSolved}
                  </p>
                  <p className="text-gray-400 text-sm">Total Solved</p>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="text-center text-green-400">
                    {leetcodeData.easySolved}
                    <div className="text-xs text-gray-400">Easy</div>
                  </div>
                  <div className="text-center text-yellow-400">
                    {leetcodeData.mediumSolved}
                    <div className="text-xs text-gray-400">Medium</div>
                  </div>
                  <div className="text-center text-red-400">
                    {leetcodeData.hardSolved}
                    <div className="text-xs text-gray-400">Hard</div>
                  </div>
                </div>

                {leetcodeData.ranking > 0 && (
                  <div className="flex items-center justify-between bg-gray-700/30 rounded-lg p-3 mt-4">
                    <div className="flex items-center gap-2 text-purple-400">
                      <TrendingUp size={16} />
                      <span className="text-sm text-gray-400">
                        Global Ranking
                      </span>
                    </div>
                    <span className="text-sm font-bold text-white">
                      #{leetcodeData.ranking.toLocaleString()}
                    </span>
                  </div>
                )}
              </>
            )}
          </div>

          {/* ================= ALL CODING PROFILES ================= */}
          <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg text-3xl">
                🚀
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Coding Profiles
                </h3>
                <p className="text-sm text-gray-400">
                  Visit all my competitive profiles
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <a
                href={`https://leetcode.com/${LEETCODE_USERNAME}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-gradient-to-r border border-orange-500/30 rounded-xl p-4 hover:border-orange-500 transition"
              >
                <div className="flex items-center gap-3">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                    className="w-8 h-8 object-contain"
                  />
                  <div>
                    <p className="text-white font-semibold">LeetCode</p>
                    <p className="text-xs text-gray-400">
                      @{LEETCODE_USERNAME}
                    </p>
                  </div>
                </div>
                <ExternalLink className="text-orange-400" size={18} />
              </a>

              <a
                href={`https://auth.geeksforgeeks.org/user/${GFG_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-gradient-to-r  to-emerald-500/10 border border-green-500/30 rounded-xl p-4 hover:border-green-500 transition"
              >
                <div className="flex items-center gap-3">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg"
                    className="w-8 h-8 object-contain"
                  />
                  <div>
                    <p className="text-white font-semibold">
                      GeeksforGeeks
                    </p>
                    <p className="text-xs text-gray-400">
                      @{GFG_USERNAME}
                    </p>
                  </div>
                </div>
                <ExternalLink className="text-green-400" size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DSA;
