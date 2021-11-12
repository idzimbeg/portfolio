import React, { useState } from "react";
import { send } from "emailjs-com";

import { SectionText } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";

const ContactForm = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      "service_crmg3lf",
      "template_z1n94kl",
      toSend,
      "user_PfOX7VQsqKnPfcqZhVwUs"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setToSend({
          from_name: "",
          message: "",
          reply_to: "",
        });
        alert("Thank You for reaching out, I'll be answering You shortly");
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <form action="" onSubmit={onSubmit}>
      <SectionText>
        <input
          type="text"
          name="from_name"
          placeholder="Your name"
          value={toSend.from_name}
          onChange={handleChange}
          required
        />
      </SectionText>
      <SectionText>
        <textarea
          rows="5"
          cols="20"
          type="text"
          name="message"
          placeholder="Your message"
          value={toSend.message}
          onChange={handleChange}
          required
        ></textarea>
      </SectionText>
      <SectionText>
        <input
          type="text"
          name="reply_to"
          placeholder="Your email"
          value={toSend.reply_to}
          onChange={handleChange}
          required
        />
      </SectionText>
      <Button type="submit">
        Send
      </Button>
    </form>
  );
};

export default ContactForm;
