import React, { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hqhwm75",
        "template_kj10qds",
        form.current,
        "tJplAxMMPC2Bzxaaj"
      )
      .then(
        (result) => {
          alert("✅ تم إرسال الرسالة بنجاح");
          form.current.reset();
        },
        (error) => {
          alert("❌ حصلت مشكلة: " + error.text);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex flex-col items-center justify-center px-4 py-10">
      <h2 className="text-3xl font-bold mb-2 text-center">📩 Contact</h2>
      <p className=" text-center mb-6">
       Any inquiries or comments? We are here for you.
      </p>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-4 w-full max-w-md backdrop-blur-2xl bg-amber-50/5  p-6 rounded-lg shadow"
      >
        <input
          type="text"
          name="user_name"
          placeholder="your name"
          className="p-3  border-2  rounded-xl  "
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="your email"
          className="p-3 border-2 rounded-xl"
          required
        />
        <textarea
          name="message"
          placeholder="message"
          rows="5"
          className="p-3 border-2 rounded-xl "
          required
        />
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </div>
  );
}
