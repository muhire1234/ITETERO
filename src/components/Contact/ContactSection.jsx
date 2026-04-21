import { useState } from "react";
import {
  contactFooter,
  contactHeader,
  contactInfo,
} from "../../data/contact";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", text: "" });
  const phoneHref = `tel:${contactInfo.phone.replace(/[^\d+]/g, "")}`;
  const emailHref = `mailto:${contactInfo.email}`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const buildMailtoHref = () => {
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      "",
      "Message:",
      form.message,
    ].join("\n");

    return `${emailHref}?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus({ type: "error", text: "Please complete all fields." });
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email)) {
      setStatus({ type: "error", text: "Please enter a valid email address." });
      return;
    }

    window.location.href = buildMailtoHref();
    setStatus({
      type: "success",
      text: `Your email app is opening to send this message to ${contactInfo.email}.`,
    });
    setForm(initialForm);
  };

  return (
    <section id="contact" className="bg-[#FDF6EC] text-[#3D1A00]">
      <header className="py-14 text-center">
        <h1 className="text-3xl font-bold tracking-wide md:text-4xl">
          {contactHeader.title}
        </h1>
        <p className="mt-2 text-sm tracking-widest text-[#7B3F00]/70">
          {contactHeader.subtitle}
        </p>
      </header>

      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-6 text-xl font-semibold tracking-wide">
          {contactInfo.sectionTitle}
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-2xl border border-[#7B3F00]/10 bg-[#E8D5C0]/60 p-6 shadow-sm backdrop-blur">
            <p className="mb-4 text-sm text-[#7B3F00]/70">{contactInfo.intro}</p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
                required
                className="w-full rounded-xl border border-[#7B3F00]/20 px-4 py-3 focus:border-[#7B3F00] focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
                required
                className="w-full rounded-xl border border-[#7B3F00]/20 px-4 py-3 focus:border-[#7B3F00] focus:outline-none"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-[#7B3F00]/20 px-4 py-3 focus:border-[#7B3F00] focus:outline-none"
              />
              <textarea
                rows="4"
                name="message"
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-[#7B3F00]/20 px-4 py-3 focus:border-[#7B3F00] focus:outline-none"
              />

              {status.text && (
                <p
                  className={`text-xs ${status.type === "error"
                    ? "text-[#9B3E1B]"
                    : "text-[#5C2E00]"
                    }`}
                >
                  {status.text}
                </p>
              )}

              <button
                type="submit"
                className="w-full rounded-xl bg-[#7B3F00] py-3 font-semibold text-[#FDF6EC] transition hover:bg-[#5C2E00]"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-[#7B3F00]/10 bg-[#E8D5C0]/50 p-6">
              <h3 className="mb-3 flex items-center gap-2 font-semibold">
                {contactInfo.locationTitle}
              </h3>
              <p className="text-sm text-[#7B3F00]/70">
                {contactInfo.locationLines[0]}
                <br />
                {contactInfo.locationLines[1]}
                <br />
                {contactInfo.locationLines[2]}
              </p>

              <iframe
                title="Our Kigali location"
                src={contactInfo.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="mt-4 h-40 w-full rounded-xl border border-[#7B3F00]/15"
              />

              <a
                href={contactInfo.mapLink}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sm font-semibold text-[#7B3F00] transition hover:text-[#3D1A00]"
              >
                Open in Maps
              </a>
            </div>

            <div className="rounded-2xl border border-[#7B3F00]/10 bg-[#E8D5C0]/50 p-6">
              <h3 className="mb-3 flex items-center gap-2 font-semibold">
                {contactInfo.reachTitle}
              </h3>

              <p className="text-sm text-[#7B3F00]/70">
                Phone: <a href={phoneHref} className="text-[#7B3F00] hover:underline">{contactInfo.phone}</a>
                <br />
                Email: <a href={emailHref} className="text-[#7B3F00] hover:underline">{contactInfo.email}</a>
              </p>
            </div>

            <div className="rounded-2xl border border-[#7B3F00]/10 bg-[#E8D5C0]/50 p-6">
              <h3 className="mb-3 font-semibold">{contactInfo.socialsTitle}</h3>

              <div className="flex gap-4 text-sm text-[#7B3F00]">
                {contactInfo.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-black"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-16 border-t border-[#7B3F00]/10 py-10 text-center">
        <p className="text-sm text-[#7B3F00]/60">
          © {new Date().getFullYear()} {contactFooter.brand}
        </p>
        <p className="mt-2 text-xs text-[#7B3F00]/40">{contactFooter.line}</p>
        <p className="mt-2 text-xs font-medium tracking-[0.18em] text-black uppercase">
          Powered by {contactFooter.powerdBy}
        </p>
      </footer>
    </section>
  );
}
