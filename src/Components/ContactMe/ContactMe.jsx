/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import contact from "../../assets/Images/My W-bg pic/contact.jpg"
import Swal from 'sweetalert2'

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jvwm3w9",
        "template_pi4ymhg",
        form.current,
        "iq0b9rFMGsjRUNiQ4"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            title: "Message sent!",
            icon: "success"
          });
          console.log("Message sent")
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
         <h2 className=" text-6xl text-center">Email Me<span className=" text-7xl text-cyan-400">..</span></h2>
      <div className=" md:grid md:grid-cols-2 items-center h-">
        <div className=" h-full">
          <form 
          className=" flex flex-col p-8"
          ref={form} onSubmit={sendEmail}>
            <label className="label">Name</label>
            <input className="input input-bordered text-black" type="text" name="user_name" />
            <label className="label">Email</label>
            <input className="input input-bordered text-black" type="email" name="user_email" />
            <label className="label ">Message</label>
            <textarea className="input input-bordered text-black h-[100px]" name="message" />
            <input  className=" btn btn-outline btn-info mt-4" type="submit" value="Send" />
          </form>
        </div>
        <div className=" md:mt-16">
            <img src={contact} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
