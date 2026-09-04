"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const industries = [
    {
      number: "01",
      title: "Restaurants",
      description:
        "Turn local attention into reservations, orders, and repeat customers.",
    },
    {
      number: "02",
      title: "Fitness",
      description:
        "Build a stronger brand and turn attention into memberships.",
    },
    {
      number: "03",
      title: "Real Estate",
      description:
        "Generate qualified leads and turn enquiries into opportunities.",
    },
    {
      number: "04",
      title: "Dental",
      description:
        "Increase visibility, enquiries, and appointment bookings.",
    },
  ];

  const services = [
    {
      number: "01",
      title: "Websites",
      description:
        "Fast, modern websites designed to turn visitors into customers.",
    },
    {
      number: "02",
      title: "SEO",
      description:
        "Get discovered when potential customers are searching for you.",
    },
    {
      number: "03",
      title: "Social Media",
      description:
        "Build a consistent presence that people remember and trust.",
    },
    {
      number: "04",
      title: "Paid Advertising",
      description:
        "Reach the right audience with campaigns built around business goals.",
    },
    {
      number: "05",
      title: "Automation",
      description:
        "Reduce repetitive work and create smoother customer journeys.",
    },
  ];

  const projects = [
    {
      number: "01",
      title: "Restaurant",
      category: "Brand + Web + Social",
    },
    {
      number: "02",
      title: "Fitness Studio",
      category: "Web + Content + Ads",
    },
    {
      number: "03",
      title: "Real Estate",
      category: "Web + Lead Generation",
    },
    {
      number: "04",
      title: "Dental Practice",
      category: "SEO + Web + Automation",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Discover",
      description:
        "Understand your business, audience, competition, and goals.",
    },
    {
      number: "02",
      title: "Strategy",
      description:
        "Build a focused growth strategy around measurable objectives.",
    },
    {
      number: "03",
      title: "Build",
      description:
        "Create, launch, test, and optimize the experience.",
    },
    {
      number: "04",
      title: "Grow",
      description:
        "Track performance and continuously improve what matters.",
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setFormStatus("");

    try {
      const response = await fetch("http://127.0.0.1:8000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Something went wrong.");
      }

      setFormStatus("Thanks! Your enquiry has been received.");

      setFormData({
        name: "",
        email: "",
        business: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setFormStatus(
        "Something went wrong. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] text-white">
      {/* NAVBAR */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#080808]/80 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a
            href="#"
            className="text-xl font-bold tracking-[-0.05em]"
          >
            OUTRANK<span className="text-white/30">.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#services"
              className="text-sm text-white/50 transition hover:text-white"
            >
              Services
            </a>

            <a
              href="#work"
              className="text-sm text-white/50 transition hover:text-white"
            >
              Work
            </a>

            <a
              href="#process"
              className="text-sm text-white/50 transition hover:text-white"
            >
              Process
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 px-5 py-2.5 text-sm transition duration-300 hover:border-white/60 hover:bg-white/5"
            >
              Let&apos;s Talk →
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-full border border-white/20 px-4 py-2 text-sm md:hidden"
          >
            Menu
          </button>
        </div>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="border-t border-white/10 px-6 py-5 md:hidden"
          >
            <div className="flex flex-col gap-5">
              <a
                href="#services"
                onClick={() => setMenuOpen(false)}
                className="text-white/70"
              >
                Services
              </a>

              <a
                href="#work"
                onClick={() => setMenuOpen(false)}
                className="text-white/70"
              >
                Work
              </a>

              <a
                href="#process"
                onClick={() => setMenuOpen(false)}
                className="text-white/70"
              >
                Process
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="text-white/70"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.02, 0.06, 0.02],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white blur-3xl"
        />

        <div className="relative mx-auto w-full max-w-7xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-5xl"
          >
            <motion.div
              variants={fadeUp}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-2 w-2 rounded-full bg-white" />

              <span className="text-xs uppercase tracking-[0.3em] text-white/40">
                Digital Growth Studio
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl md:text-8xl lg:text-[105px]"
            >
              Don&apos;t just compete.
              <br />
              <span className="text-white/35">OUTRANK.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-9 max-w-2xl text-lg leading-relaxed text-white/50 md:text-xl"
            >
              We build digital growth systems that help ambitious businesses
              get discovered, generate leads, and turn attention into
              customers.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <motion.a
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                href="#work"
                className="group rounded-full border border-white/30 px-7 py-3.5 text-center text-sm transition duration-300 hover:border-white hover:bg-white hover:text-black"
              >
                See our work
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </motion.a>

              <motion.a
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="rounded-full border border-white/10 px-7 py-3.5 text-center text-sm text-white/60 transition duration-300 hover:border-white/30 hover:text-white"
              >
                Start a project
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-24 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.2em] text-white/30"
          >
            <span>Web</span>
            <span>SEO</span>
            <span>Social</span>
            <span>Paid Ads</span>
            <span>Automation</span>
          </motion.div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="border-t border-white/10 px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="text-sm uppercase tracking-[0.25em] text-white/30"
            >
              Who we work with
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-5 max-w-4xl text-4xl font-medium tracking-tight md:text-6xl"
            >
              Digital growth for businesses where every customer matters.
            </motion.h2>

            <motion.div
              variants={stagger}
              className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {industries.map((industry) => (
                <motion.div
                  key={industry.number}
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  className="group rounded-2xl border border-white/10 p-7 transition duration-500 hover:border-white/30 hover:bg-white/[0.03]"
                >
                  <span className="text-xs text-white/30">
                    {industry.number}
                  </span>

                  <h3 className="mt-16 text-xl font-medium">
                    {industry.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-white/40">
                    {industry.description}
                  </p>

                  <div className="mt-8 text-white/20 transition group-hover:text-white">
                    →
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="border-t border-white/10 px-6 py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.p
                variants={fadeUp}
                className="text-sm uppercase tracking-[0.25em] text-white/30"
              >
                What we do
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="mt-5 text-4xl font-medium tracking-tight md:text-6xl"
              >
                More than marketing.
                <br />
                <span className="text-white/35">Growth.</span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-md text-white/40"
              >
                Every service is built around one goal: helping your business
                get found, get chosen, and grow.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="divide-y divide-white/10"
            >
              {services.map((service) => (
                <motion.div
                  key={service.number}
                  variants={fadeUp}
                  whileHover={{ x: 8 }}
                  className="group flex gap-6 py-8"
                >
                  <span className="pt-1 text-xs text-white/30">
                    {service.number}
                  </span>

                  <div>
                    <h3 className="text-2xl font-medium">
                      {service.title}
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/40">
                      {service.description}
                    </p>
                  </div>

                  <span className="ml-auto text-white/20 transition group-hover:translate-x-1 group-hover:text-white">
                    →
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section
        id="work"
        className="border-t border-white/10 px-6 py-28"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="text-sm uppercase tracking-[0.25em] text-white/30"
            >
              Selected work
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-5 max-w-3xl text-4xl font-medium tracking-tight md:text-6xl"
            >
              Built for attention.
              <br />
              Designed for results.
            </motion.h2>

            <motion.div
              variants={stagger}
              className="mt-16 grid gap-6 md:grid-cols-2"
            >
              {projects.map((project) => (
                <motion.div
                  key={project.number}
                  variants={fadeUp}
                  whileHover={{ scale: 1.02 }}
                  className="group relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-transparent transition duration-700 group-hover:scale-110" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl font-semibold tracking-[-0.06em] text-white/[0.035] md:text-9xl">
                      {project.number}
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                      {project.number} / {project.category}
                    </p>

                    <h3 className="mt-3 text-2xl font-medium">
                      {project.title}
                    </h3>

                    <span className="mt-5 inline-block text-sm text-white/50 transition group-hover:text-white">
                      View case study →
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section
        id="process"
        className="border-t border-white/10 px-6 py-28"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="text-sm uppercase tracking-[0.25em] text-white/30"
            >
              How we work
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-5 max-w-3xl text-4xl font-medium tracking-tight md:text-6xl"
            >
              Simple process.
              <br />
              Serious execution.
            </motion.h2>

            <motion.div
              variants={stagger}
              className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-4"
            >
              {process.map((step) => (
                <motion.div
                  key={step.number}
                  variants={fadeUp}
                  whileHover={{
                    backgroundColor: "rgba(255,255,255,0.04)",
                  }}
                  className="bg-[#080808] p-7"
                >
                  <span className="text-xs text-white/30">
                    {step.number}
                  </span>

                  <h3 className="mt-14 text-xl font-medium">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-white/40">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="border-t border-white/10 px-6 py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.p
                variants={fadeUp}
                className="text-sm uppercase tracking-[0.25em] text-white/30"
              >
                Start a project
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="mt-5 text-5xl font-medium tracking-tight md:text-7xl"
              >
                Ready to
                <br />
                <span className="text-white/35">OUTRANK?</span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-lg text-white/40"
              >
                Tell us about your business, what you&apos;re trying to
                achieve, and where you want to go next.
              </motion.p>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-5"
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full rounded-xl border border-white/10 bg-transparent px-5 py-4 text-sm outline-none placeholder:text-white/25 transition focus:border-white/40"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Work email"
                required
                className="w-full rounded-xl border border-white/10 bg-transparent px-5 py-4 text-sm outline-none placeholder:text-white/25 transition focus:border-white/40"
              />

              <input
                type="text"
                name="business"
                value={formData.business}
                onChange={handleChange}
                placeholder="Business name"
                required
                className="w-full rounded-xl border border-white/10 bg-transparent px-5 py-4 text-sm outline-none placeholder:text-white/25 transition focus:border-white/40"
              />

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-white/10 bg-[#080808] px-5 py-4 text-sm text-white/60 outline-none transition focus:border-white/40"
              >
                <option value="" disabled className="bg-[#080808] text-white">
                  What can we help with?
                </option>
                <option className="bg-[#080808] text-white">
                  Website
                </option>
                <option className="bg-[#080808] text-white">
                  SEO
                </option>
                <option className="bg-[#080808] text-white">
                  Social Media
                </option>
                <option className="bg-[#080808] text-white">
                  Paid Advertising
                </option>
                <option className="bg-[#080808] text-white">
                  Automation
                </option>
                <option className="bg-[#080808] text-white">
                  Not sure yet
                </option>
              </select>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your business..."
                rows={5}
                required
                className="w-full resize-none rounded-xl border border-white/10 bg-transparent px-5 py-4 text-sm outline-none placeholder:text-white/25 transition focus:border-white/40"
              />

              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="group w-full rounded-xl border border-white/30 px-6 py-4 text-sm transition duration-300 hover:border-white hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send enquiry"}

                {!isSubmitting && (
                  <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                    →
                  </span>
                )}
              </motion.button>

              {formStatus && (
                <p className="text-sm text-white/60">
                  {formStatus}
                </p>
              )}
            </motion.form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-sm text-white/30 md:flex-row">
          <span>© 2026 OUTRANK.</span>

          <span>Digital growth for ambitious businesses.</span>
        </div>
      </footer>
    </main>
  );
}