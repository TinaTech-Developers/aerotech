"use client";

import { useState } from "react";
import {
  Send,
  User,
  Mail,
  Phone,
  Building2,
  ClipboardList,
  MessageSquare,
} from "lucide-react";

const services = [
  "Aircraft Maintenance",
  "Engine & Propeller Overhauls",
  "Instrument Testing & Calibration",
  "Electrical & Radio Services",
  "Airframe Engineering",
  "NDT & Corrosion Protection",
  "Aircraft Spares",
  "Other Enquiry",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact-form" className="bg-[#F5F8FC] py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
        <div>
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#087FC1]">
            Send Us a Message
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#082B52] sm:text-4xl">
            Tell Us How We Can Assist
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Provide a few details about your enquiry. Include the type of
            aircraft or equipment involved where relevant, so that your request
            can be directed appropriately.
          </p>

          <div className="mt-10 rounded-2xl bg-[#082B52] p-7 text-white">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-400">
              <ClipboardList size={24} />
            </div>

            <h3 className="mt-5 text-xl font-bold">
              Making a Technical Enquiry?
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-300">
              For aircraft-related enquiries, include the aircraft type, nature
              of the work required and any relevant details that will help the
              team understand your request.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9">
          {submitted ?
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="font-bold text-amber-900">Form preview only</h3>
              <p className="mt-2 text-sm leading-7 text-amber-800">
                Your details have not been sent. The form still needs to be
                connected to Aerotech's confirmed email address or
                enquiry-handling service before it can receive messages.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-4 text-sm font-semibold text-[#087FC1] underline"
              >
                Return to form
              </button>
            </div>
          : <>
              <h3 className="text-2xl font-bold text-[#082B52]">
                Send an Enquiry
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-500">
                Fields marked with an asterisk are required.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Full Name *
                    </label>
                    <div className="relative">
                      <User
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      />
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        placeholder="Your full name"
                        className="w-full rounded-lg border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Company / Organisation
                    </label>
                    <div className="relative">
                      <Building2
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      />
                      <input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Company name"
                        className="w-full rounded-lg border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      />
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full rounded-lg border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      />
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+263 ..."
                        className="w-full rounded-lg border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/10"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Service Required *
                  </label>
                  <div className="relative">
                    <ClipboardList
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <select
                      id="service"
                      name="service"
                      required
                      defaultValue=""
                      className="w-full appearance-none rounded-lg border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm text-slate-700 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/10"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What is your enquiry about?"
                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Your Message *
                  </label>
                  <div className="relative">
                    <MessageSquare
                      size={18}
                      className="absolute left-4 top-4 text-slate-400"
                    />
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Describe your requirements..."
                      className="w-full resize-y rounded-lg border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/10"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-[#082B52] px-6 py-4 font-semibold text-white transition hover:bg-[#087FC1]"
                >
                  Preview Form Submission
                  <Send size={18} />
                </button>

                <p className="text-xs leading-6 text-slate-500">
                  This is currently a front-end preview. No personal information
                  is transmitted or stored.
                </p>
              </form>
            </>
          }
        </div>
      </div>
    </section>
  );
}
