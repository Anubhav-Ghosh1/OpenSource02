import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  const [userName, setUserName] = useState(null);
  const [user_email, setUserEmail] = useState(null);
  const sendEmail = (e) => {
    e.preventDefault();
    if (userName.length === 0) {
        return;
    }
    emailjs
      .sendForm(
        "service_7iyfjgy",
        "template_1k0go8k",
        form.current,
        "XT20oPh8ILKspy_EO"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully");
        },
        (error) => {
          toast.error("Error while sending message");
        }
      );
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-r from-[#0f0f0f] to-slate-900 justify-center items-center">
      <div className="text-white text-3xl font-semibold mb-5">Contact Us</div>
      <form ref={form} className="flex w-[400px] flex-col" onSubmit={sendEmail()}>
        <label className="text-white text-lg">Name</label>

        <input
          type="text"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          name="user_name"
          className="rounded-md p-2 h-10"
        />

        <label className="text-white text-lg mt-2">Email</label>

        <input
          type="email"
          onChange={(e) => {
            setUserEmail(e.target.value);
          }}
          name="user_email"
          className="rounded-md p-2 h-10"
        />

        <label className="text-white text-lg mt-2">Message</label>
        <textarea name="message" className="rounded-md px-2 h-24" />
        <input
          type="submit"
          className="rounded-md mt-5 py-2 text-white bg-[#F9690E]"
          value="Send"
        />
      </form>
    </div>
  );
};

export default Contact;
