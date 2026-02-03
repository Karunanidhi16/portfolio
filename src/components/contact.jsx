import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(''); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch(' https://portfoliobackend-jigr.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      console.error(err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">

     
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg">
            Have a project in mind? Let's work together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

       
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Contact Information
            </h3>

            <div className="flex items-start gap-4 mb-6">
              <Mail className="text-blue-400 mt-1" size={24} />
              <div>
                <p className="font-semibold text-white">Email</p>
                <a
                  href="mailto:24234@iiitu.ac.in"
                  className="text-blue-400 hover:text-blue-300 transition"
                >
                  karunanidhisharma89@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <MapPin className="text-blue-400 mt-1" size={24} />
              <div>
                <p className="font-semibold text-white">Location</p>
                
                <p className="text-gray-300">Bhilwara, Rajasthan – 311001, India
</p>
              </div>
            </div>

            
            <div className="mt-8">
              <p className="font-semibold text-white mb-4">Connect with me</p>
              <div className="flex gap-4">

                <a
                  href="https://github.com/Karunanidhisharma16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition"
                >
                  <Github size={24} />
                </a>

                <a
                  href="https://www.linkedin.com/in/karunanidhi-sharma-154465323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-400 transition"
                >
                  <Linkedin size={24} />
                </a>

                <a
                  href="mailto:24234@iiitu.ac.in"
                  className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-red-400 transition"
                >
                  <Mail size={24} />
                </a>

              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              {submitStatus === 'success' && (
                <div className="mb-4 p-3 bg-green-500/20 border border-green-500 text-green-400 rounded">
                  ✓ Message sent successfully!
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-4 p-3 bg-red-500/20 border border-red-500 text-red-400 rounded">
                  ✗ Failed to send message
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Send size={18} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
