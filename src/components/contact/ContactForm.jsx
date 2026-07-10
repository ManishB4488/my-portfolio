import { useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setSuccess("");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSuccess(" Message sent successfully!");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSuccess(" Failed to send message.");
      console.error(error);
    }

    setLoading(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-2xl"
    >
      <input
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        className="w-full bg-zinc-900 rounded-xl p-4"
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        className="w-full bg-zinc-900 rounded-xl p-4"
        required
      />

      <input
        name="subject"
        placeholder="Subject"
        value={form.subject}
        onChange={handleChange}
        className="w-full bg-zinc-900 rounded-xl p-4"
        required
      />

      <textarea
        name="message"
        rows="6"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        className="w-full bg-zinc-900 rounded-xl p-4"
        required
      />

      <button
        disabled={loading}
        className="bg-cyan-500 hover:bg-cyan-400 transition px-8 py-3 rounded-xl"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {success && (
        <p className="text-lg mt-4">{success}</p>
      )}
    </form>
  );
}

export default ContactForm;