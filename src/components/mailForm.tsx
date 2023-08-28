"use client";

// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   host:
// })

export default function MailForm() {
  return (
    <div className="">
      <form className="flex flex-col p-3 bg-cyan-950 text-white rounded-md">
        <label className="mb-2">Your Email</label>
        <input type="text" id="email" className="text-black p-1"></input>
        <label className="mb-2">Subject</label>
        <input type="text" id="subject" className="text-black p-1"></input>
        <label className="mb-2">Message</label>
        <input
          type="text"
          id="message"
          className="text-start text-black h-60 p-1"
        ></input>
        <button onClick={sendMail} className="bg-yellow-400 text-black my-2">
          Submit
        </button>
      </form>
    </div>
  );
}

function sendMail() {
  console.log("hi");
}
