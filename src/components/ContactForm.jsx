import { useState } from "react";
import "./contactForm.css";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className="modal">
      <form>
        <div>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
          />
        </div>
        <div>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
          />
        </div>
        <div>
          <textarea
            name="message"
            rows="10"
            cols="40"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Leave a message after the beep..."
          />
        </div>
        <div>
          <button onClick={handleSubmit}>Send</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
