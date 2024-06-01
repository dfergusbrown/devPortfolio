import { useState, useRef } from "react";
import { Box, Button, FormControl, TextField } from "@mui/material";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  emailjs.init({ publicKey: "hYofmJLA_9s5dzJcj" });
  const form = useRef();

  const handleSubmit = (e) => {
    const formData = {
      email: email,
      from_name: name,
      message: message,
    };
    e.preventDefault();
    console.log(form);
    emailjs.sendForm("service_m0j4g1f", "template_xgs3u7p", form.current).then(
      () => {
        console.log("SUCCESS!");
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
  };

  return (
    <Box className="modal" sx={{ width: "250px" }}>
      <form  ref={form}>
        <FormControl>
          <TextField
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Your Email"
            variant="filled"
            fullWidth
          />
          <TextField
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Your Name"
            variant="filled"
            fullWidth
          />
          <TextField
            name="message"
            value={message}
            multiline
            rows={4}
            onChange={(e) => setMessage(e.target.value)}
            label="Message"
            variant="filled"
          />
          <Box>
            <Button type="submit" onClick={handleSubmit}>
              Send
            </Button>
          </Box>
        </FormControl>
      </form>
    </Box>
  );
};

export default ContactForm;
