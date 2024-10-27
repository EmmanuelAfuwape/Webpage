import React from 'react';
import "./Support.css";


const Support = () => {
  return (
    <div className="container">
      <main className="support-main">
        <section className="support-section" id="faq">
          <h2>Frequently Asked Questions</h2>
          <ul>
            <li>
              <h3>What is the purpose of this support page?</h3>
              <p>This support page is designed to provide helpful resources and answers to common questions.</p>
            </li>
            <li>
              <h3>How do I contact support?</h3>
              <p>You can contact support by filling out the form below or by emailing us at <a href="mailto:support@example.com">support@example.com</a>.</p>
            </li>
          </ul>
        </section>
        <section className="support-section" id="contact">
          <h2>Contact Us</h2>
          <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <label>
              Email:
              <input type="email" name="email" />
            </label>
            <label>
              Message:
              <textarea name="message" />
            </label>
            <button type="submit">Submit</button>
          </form>
        </section>
        <section className="support-section" id="resources">
          <h2>Resources</h2>
          <ul>
            <li><a href="https://example.com/docs">Documentation</a></li>
            <li><a href="https://example.com/community">Community Forum</a></li>
            <li><a href="https://example.com/blog">Blog</a></li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Support;