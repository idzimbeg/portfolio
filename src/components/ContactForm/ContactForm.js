import { useState } from "react";
import { send } from "emailjs-com";

import {
  Form,
  Backdrop,
  Close,
  CloseButton,
  Input,
  Textarea,
} from "./ContactFormStyles.js";
import Button from "../../styles/GlobalComponents/Button";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const ContactForm = (props) => {
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    send(
      "service_crmg3lf",
      "template_z1n94kl",
      toSend,
      "user_PfOX7VQsqKnPfcqZhVwUs"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        toast.success("Thanks for reaching out!");
        setToSend({
          from_name: "",
          message: "",
          reply_to: "",
          show: false,
        });
      })
      .catch((err) => {
        console.log("FAILED...", err);
        toast.error("Something went wrong!");
      });
  };
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <Backdrop>
      <Form action="" onSubmit={handleOnSubmit}>
        <Close>
          <CloseButton href="/" onClick={props.onClose} />
        </Close>
        <br />
        <Input
          type="text"
          name="from_name"
          placeholder="Your name"
          value={toSend.from_name}
          onChange={handleChange}
          required
        />
        <Textarea
          rows="5"
          cols="20"
          type="text"
          name="message"
          placeholder="Your message"
          value={toSend.message}
          onChange={handleChange}
          required
        ></Textarea>
        <Input
          type="text"
          name="reply_to"
          placeholder="Your email"
          value={toSend.reply_to}
          onChange={handleChange}
          required
        />
        <br />
        <Button>Send</Button>
      </Form>
      <ToastContainer theme="dark" />
    </Backdrop>
  );
};

export default ContactForm;
