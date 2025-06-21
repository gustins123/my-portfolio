// src/components/ContactForm.tsx

"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success" | "error"

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="w-full py-16 md:py-24">
      <div className="container mx-auto max-w-2xl px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold">Contact Me</h2>
        <p className="mb-8 text-foreground/80">
          Have a question or want to work together? Let me know.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          {/* Form fields */}
          <div>
            <label htmlFor="name" className="mb-2 block font-medium">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full rounded-md border border-foreground/20 bg-background p-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50" />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block font-medium">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full rounded-md border border-foreground/20 bg-background p-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50" />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block font-medium">Message</label>
            <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} required className="w-full rounded-md border border-foreground/20 bg-background p-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"></textarea>
          </div>
          
          {/* Submit Button */}
          <div className="text-center">
            <button type="submit" disabled={status === "loading"} className=" cursor-pointer rounded-md bg-primary px-8 py-3 font-semibold text-white transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:bg-gray-500">
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>

        {/* Status Messages */}
        {status === "success" && <p className="mt-6 text-white-500">Message sent successfully! Thank you.</p>}
        {status === "error" && <p className="mt-6 text-red-500">Something went wrong. Please try again later.</p>}
      </div>
    </section>
  );
};

export default ContactForm;