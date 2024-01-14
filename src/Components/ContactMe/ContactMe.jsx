/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import contact from "../../assets/Images/My W-bg pic/contact.jpg"
import Swal from 'sweetalert2'
import { motion } from "framer-motion";

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
            title: "Email sent!",
            text:"Thank Your For your Message",
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
    <div className=" container shadow-xl p-4 rounded-xl mx-auto">
         <h2 className=" text-6xl text-center">Contact<span className=" text-7xl text-cyan-400">..</span></h2>
      <div className=" md:grid md:grid-cols-2 items-center h-">
        <div 
        className=" h-full">
          <form 
          className="  flex flex-col p-8"
          ref={form} onSubmit={sendEmail}>
            <label className="label">Name</label>
            <input className="input input-bordered text-black" type="text" name="user_name" />
            <label className="label">Email</label>
            <input className="input input-bordered text-black" type="email" name="user_email" />
            <label className="label ">Message</label>
            <textarea className="input input-bordered text-black h-[100px]" name="message" />
            <motion.input 
            whileHover={{
                scale:1.05,
                boxShadow:"0px 0px 8px rgb(255,255,255)",
              }}
            className=" btn btn-outline btn-info mt-4 text-xl" type="submit" value="Send Email" />
          </form>
        </div>
        <div 
        className=" md:mt-16">
            <img className=" rounded-xl" src={contact} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
