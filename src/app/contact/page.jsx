'use client'

import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/header'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all fields.')
      return
    }
    
    setIsSubmitting(true)
    
    try {
     
      console.log('Form data:', formData)
      
      
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      alert('Thank you for your message! We will get back to you soon.')
      

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Sorry, there was an error sending your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
    <div>   
    <Header />
    </div>
    <div className="contact-page">
        
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;500;600;700&display=swap');
        
        .contact-page {
          font-family: 'Barlow Condensed', sans-serif;
          background-image: url('/bg3.jpg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          position: relative;
          min-height: 100vh;
          color: #c1c6c0;
        }

        .contact-page::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('/bg3.jpg');
          background-size: cover;
          background-position: center;
          filter: blur(8px);
          z-index: -2;
        }

        .contact-page::after {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(24, 98, 67, 0.15);
          z-index: -1;
        }

        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 40px 20px;
          position: relative;
          z-index: 1;
        }

        .contact-header {text-align: center;margin-bottom: 50px;background: rgba(255, 255, 255, 0.95);
          padding: 40px 30px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(24, 98, 67, 0.3);
          backdrop-filter: blur(10px);
        }

        .contact-header h1 {
          font-size: 3.5rem;
          font-weight: 300;
          color: #186243;
          margin-bottom: 15px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .contact-header p {
          font-size: 1.3rem;
          font-weight: 400;
          color: #555;
          line-height: 1.6;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        .contact-form {
          background: rgba(255, 255, 255, 0.95);
          padding: 40px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(24, 98, 67, 0.3);
          backdrop-filter: blur(10px);
        }

        .contact-info {
          background: rgba(24, 98, 67, 0.95);
          color: white;
          padding: 40px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
        }

        .form-group {
          margin-bottom: 25px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-size: 1.1rem;
          font-weight: 600;
          color: #186243;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px 15px;
          border: 2px solid #186243;
          border-radius: 8px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 1rem;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          background: white;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #0d3c24;
          box-shadow: 0 0 10px rgba(24, 98, 67, 0.3);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          background: linear-gradient(135deg, #186243, #0d3c24);
          color: white;
          padding: 15px 30px;
          border: none;
          border-radius: 8px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 1.2rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          width: 100%;
          opacity: ${isSubmitting ? '0.7' : '1'};
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(24, 98, 67, 0.4);
        }

        .submit-btn:disabled {
          cursor: not-allowed;
          transform: none;
        }

        .info-section {
          margin-bottom: 30px;
        }

        .info-section h3 {
          font-size: 1.4rem;
          font-weight: 600;
          margin-bottom: 15px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .info-section p {
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 10px;
        }

        .info-section a {
          color: #c8e6c9;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .info-section a:hover {
          color: white;
        }

        .social-links {
          margin-top: 30px;
        }

        .social-links a {
          display: inline-block;
          margin-right: 15px;
          padding: 10px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          transition: background 0.3s ease;
          text-decoration: none;
        }

        .social-links a:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .surreal-quote {
          text-align: center;
          margin-top: 40px;
          padding: 30px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 15px;
          backdrop-filter: blur(10px);
        }

        .surreal-quote p {
          font-size: 1.2rem;
          font-style: italic;
          color: #186243;
          font-weight: 500;
          margin: 0;
        }

        .surreal-quote cite {
          font-size: 1rem;
          color: #555;
          margin-top: 10px;
          display: block;
        }

        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .contact-header h1 {
            font-size: 2.5rem;
          }

          .contact-form,
          .contact-info {
            padding: 30px 20px;
          }
        }
      `}</style>
    
      <div className="container">
        <div className="contact-header">
          <h1>Contact</h1>
          <p>Connect with the world of surrealism and imagination</p>
        </div>

        <div className="contact-content">
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Share your thoughts about surrealism, art, or any inquiries..."
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          <div className="contact-info">
            <div className="info-section">
              <h3>Gallery Information</h3>
              <p><strong>Address:</strong><br />
              123 Surrealist Avenue<br />
              Brussels, Belgium 1000</p>
            </div>

            <div className="info-section">
              <h3>Contact Details</h3>
              <p><strong>Phone:</strong> +32 2 123 4567</p>
              <p><strong>Email:</strong> <a href="mailto:info@renemagritte.art">info@renemagritte.art</a></p>
              <p><strong>Gallery Hours:</strong><br />
              Tuesday - Sunday: 10:00 - 18:00<br />
              Closed Mondays</p>
            </div>

            <div className="info-section">
              <h3>Exhibitions</h3>
              <p>For exhibition inquiries and private viewings, please contact our curator at <a href="mailto:curator@renemagritte.art">curator@renemagritte.art</a></p>
            </div>

            <div className="social-links">
              <a href="#" title="Instagram">📷</a>
              <a href="#" title="Facebook">📘</a>
              <a href="#" title="Twitter">🐦</a>
              <a href="#" title="YouTube">📺</a>
            </div>
          </div>
        </div>

        <div className="surreal-quote">
          <p>"The mind loves the unknown. It loves images whose meaning is unknown, since the meaning of the mind itself is unknown."</p>
          <cite>— René Magritte</cite>
        </div>
      </div>
    </div>
    </>
  )
}