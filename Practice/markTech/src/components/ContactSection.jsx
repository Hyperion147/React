import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    const serviceID = 'service_8o139kk';
    const templateID = 'template_al3vrod';
    const publicKey = 'FdfQUeSigwKo_bMmS';

    emailjs.send(
      serviceID,
      templateID,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      publicKey
    )
      .then(
        (response) => {
          console.log('Email sent successfully!', response);
          setSubmitStatus('Message sent successfully!');
          setShowAlert(true); // Show the alert
          setFormData({ name: '', email: '', message: '' });

          setTimeout(() => {
            setShowAlert(false);
          }, 5000);
        },

        (error) => {
          console.error('Failed to send email:', error);
          setSubmitStatus('Failed to send message. Please try again.');
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };
  return (
    <div className=" text-black max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 relative mb-40">
      {showAlert && (
        <div className="absolute -top-10 left-0 right-0 mx-auto w-full max-w-md p-4 bg-green-100 border border-indigo-400 text-indigo-700 rounded-md shadow-lg transition-opacity duration-300 ">
          <div className="flex justify-between items-center">
            <span>We've received your email! We'll get back to you soon.</span>


            <button
              onClick={() => setShowAlert(false)}
              className="text-green-700 hover:text-green-900"
            >
              &times;
            </button>
          </div>
        </div>
      )}
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
        Contact Us
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Have a question or want to work together? Reach out!
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-300"
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </div>
      </form>
      {submitStatus && (
        <p className="mt-4 text-center text-sm font-medium text-gray-700">
          {submitStatus}
        </p>
      )}
    </div>
  );
};

export default ContactSection;