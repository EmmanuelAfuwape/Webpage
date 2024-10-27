import React from 'react';
import "./Help.css";

const Help = () => {
  return (
    <div className='container'>
      <main>
        <section>
          <h2>Getting Started</h2>
          <p>Learn how to get started with our services and make the most out of your experience.</p>
        </section>
        <section>
          <h2>Common Issues</h2>
          <ul>
            <li><strong>Issue 1:</strong> How to reset your password?</li>
            <li><strong>Issue 2:</strong> Troubleshooting login problems.</li>
            <li><strong>Issue 3:</strong> What to do if you encounter errors.</li>
          </ul>
        </section>
        <section>
          <h2>Contact Support</h2>
          <p>If you need further assistance, please reach out to our support team:</p>
          <ul>
            <li>Email: <a href="mailto:support@example.com">support@example.com</a></li>
            <li>Phone: 12345678901</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Help;