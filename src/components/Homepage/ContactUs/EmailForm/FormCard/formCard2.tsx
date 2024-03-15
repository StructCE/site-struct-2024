/* eslint-disable @typescript-eslint/no-unsafe-member-access */
"use client";
import emailjs from "@emailjs/browser";
import React, { useEffect, useRef, useState } from "react";

export default function FormEmail() {
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => emailjs.init("kZ78OEEu3j46UXZat"), []);

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const serviceId = "service_48ldfnb";
    const templateId = "template_1fmx5ky";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        nome: nameRef.current!.value,
        email: emailRef.current!.value,
      });
      alert("email successfully sent check inbox");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section>
      <aside></aside>
      <form className="for" onSubmit={handleSubmit}>
        <div className="form_group">
          <label htmlFor="">name</label>
          <input ref={nameRef} placeholder="enter your name" />
        </div>
        <div className="form_group">
          <label htmlFor="">email</label>
          <input ref={emailRef} type="email" placeholder="enter your email" />
        </div>
        <button className="btn" disabled={loading}>
          subscribe
        </button>
      </form>
    </section>
  );
}
