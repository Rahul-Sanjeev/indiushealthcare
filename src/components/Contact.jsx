import React, { memo } from "react";
import { Phone, Mail } from "lucide-react";

const Contact = memo(() => {
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSent, setIsSent] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct mailto link
    const subject = encodeURIComponent(
      "New Inquiry from Indius Healthcare Website"
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nMedical Concern:\n${formData.message}`
    );

    // Trigger mail client
    window.location.href = `mailto:contactus@indiushealthcare.com?subject=${subject}&body=${body}`;

    // Show success message
    setIsSent(true);

    // Optional: Reset form after a delay or keep the success message
    setTimeout(() => {
      setIsSent(false);
      setFormData({ name: "", phone: "", email: "", message: "" });
    }, 5000);
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-slate-50 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto bg-white rounded-[2rem] p-6 md:p-10 shadow-xl border border-slate-100 text-center relative overflow-hidden transition-all duration-300">
          <div className="relative z-10 w-full">
            <span className="text-medical text-[9px] font-bold uppercase tracking-[0.4em] block mb-3">
              Concierge Desk
            </span>
            <h2 className="text-2xl md:text-3xl font-light text-navy tracking-tighter mb-6 leading-tight">
              Start Your Journey <br />{" "}
              <span className="font-bold">To Recovery.</span>
            </h2>

            {isSent ? (
              <div className="py-12 flex flex-col items-center justify-center space-y-4 animate-in fade-in duration-500">
                <div className="w-16 h-16 bg-medical/10 rounded-full flex items-center justify-center text-medical mb-2">
                  <Mail size={32} />
                </div>
                <h3 className="text-xl font-bold text-navy">Message Sent!</h3>
                <p className="text-xs text-slate-500 max-w-xs mx-auto leading-relaxed">
                  Thank you for reaching out. Your email client has been opened
                  with your message details. We will get back to you shortly.
                </p>
                <button
                  onClick={() => setIsSent(false)}
                  className="text-[9px] font-bold uppercase tracking-widest text-medical hover:text-navy transition-colors mt-4"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                className="w-full space-y-3 mb-6 text-left"
                onSubmit={handleSubmit}
              >
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="group">
                    <label className="text-[8px] font-bold uppercase tracking-widest text-slate-400 pl-4 mb-1 block group-focus-within:text-medical transition-colors">
                      Patient Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-medical focus:bg-white transition-all placeholder:text-slate-300"
                      placeholder="Enter patient's full legal name"
                    />
                  </div>
                  <div className="group">
                    <label className="text-[8px] font-bold uppercase tracking-widest text-slate-400 pl-4 mb-1 block group-focus-within:text-medical transition-colors">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-medical focus:bg-white transition-all placeholder:text-slate-300"
                      placeholder="Contact number"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="text-[8px] font-bold uppercase tracking-widest text-slate-400 pl-4 mb-1 block group-focus-within:text-medical transition-colors">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-medical focus:bg-white transition-all placeholder:text-slate-300"
                    placeholder="Email address"
                  />
                </div>

                <div className="group">
                  <label className="text-[8px] font-bold uppercase tracking-widest text-slate-400 pl-4 mb-1 block group-focus-within:text-medical transition-colors">
                    Medical Concern
                  </label>
                  <textarea
                    rows="2"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-medical focus:bg-white transition-all placeholder:text-slate-300 resize-none"
                    placeholder="Briefly describe your query..."
                  ></textarea>
                </div>

                <button className="w-full bg-navy text-white rounded-xl py-3.5 text-[9px] font-bold uppercase tracking-[0.3em] hover:bg-medical hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 mt-2">
                  Submit Request
                </button>
              </form>
            )}

            <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-6 pt-5 border-t border-slate-100">
              <a
                href="tel:+23058227575"
                className="flex items-center justify-center gap-2 text-slate-400 hover:text-navy transition-colors group"
              >
                <div className="p-1.5 rounded-full bg-slate-50 group-hover:bg-slate-100 transition-colors">
                  <Phone size={12} />
                </div>
                <span className="text-[9px] font-bold tracking-widest uppercase">
                  +230 5822 7575
                </span>
              </a>
              <a
                href="mailto:contactus@indiushealthcare.com"
                className="flex items-center justify-center gap-2 text-slate-400 hover:text-navy transition-colors group"
              >
                <div className="p-1.5 rounded-full bg-slate-50 group-hover:bg-slate-100 transition-colors">
                  <Mail size={12} />
                </div>
                <span className="text-[9px] font-bold tracking-widest uppercase">
                  contactus@indiushealthcare.com
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contact;
