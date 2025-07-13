"use client";
import React, { useState } from 'react';
import AnimatedContent from '../AnimatedContent';

const ContactPage = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    issueType: 'bug', // Default to bug report
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // In a real application, this would redirect to GitHub issues with pre-filled information
    // For now, we'll simulate the submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      // Reset form after successful submission
      setFormData({ name: '', email: '', issueType: 'bug', description: '' });
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 1500);
  };

  // Function to handle direct GitHub navigation
  const handleGitHubRedirect = () => {
    // This would be replaced with your actual GitHub repository URL
    window.open('https://github.com/pranav9487/bitlinks', '_blank');
  };

  return (
    <main className="min-h-screen">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="container mx-auto px-4 py-12">
        <AnimatedContent
          distance={50}
          direction="vertical"
          duration={0.6}
          ease="power3.out"
        >
          <h1 className="text-4xl font-bold text-purple-700 text-center mb-8">Report Issues & Suggest Features</h1>
        </AnimatedContent>

        <div className="max-w-2xl mx-auto mt-8">
          <AnimatedContent
            distance={80}
            direction="horizontal"
            duration={0.8}
            delay={0.2}
          >
            <div className="bg-white p-6 rounded-lg shadow-lg">
              {submitStatus === 'success' && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  Thank you for your submission! We'll review it soon.
                </div>
              )}
              
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-purple-600 mb-2">Help us improve Bitlinks</h2>
                <p className="text-gray-600">
                  Found a bug or have a feature suggestion? Let us know by filling out the form below or directly creating an issue on GitHub.
                </p>
              </div>
              
              <div className="mb-6">
                <button 
                  onClick={handleGitHubRedirect}
                  className="w-full bg-gray-800 text-white py-2 px-4 rounded-md font-bold shadow-md hover:bg-gray-700 transition duration-300 flex items-center justify-center"
                >
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  Open an issue on GitHub
                </button>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Or submit using this form:</h3>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="issueType" className="block text-gray-700 font-medium mb-2">What are you reporting?</label>
                    <select
                      id="issueType"
                      name="issueType"
                      value={formData.issueType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    >
                      <option value="bug">Bug Report</option>
                      <option value="feature">Feature Request</option>
                      <option value="improvement">Improvement Suggestion</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
                      {formData.issueType === 'bug' ? 'Describe the bug' : 'Describe your suggestion'}
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                      placeholder={formData.issueType === 'bug' 
                        ? 'Please include: what happened, what you expected to happen, and steps to reproduce the issue'
                        : 'Please describe your feature request or improvement suggestion in detail'}
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-purple-600 text-white py-2 px-4 rounded-md font-bold shadow-md hover:bg-purple-700 transition duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Report'}
                  </button>
                </form>
              </div>
            </div>
          </AnimatedContent>
          
          <div className="mt-8 text-center text-gray-600">
            <p>Thank you for helping us improve Bitlinks!</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
