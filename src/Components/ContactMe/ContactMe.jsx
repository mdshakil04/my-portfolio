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
      <div className=" md:grid md:grid-cols-2 items-center h-screen">
        <div className=" h-full lg:mt-72">
            <h2 className=" text-6xl text-center">Email Me</h2>
          <form 
          className=" flex flex-col p-12"
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
        <div>
            <img src={contact} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
{/* <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div> */}