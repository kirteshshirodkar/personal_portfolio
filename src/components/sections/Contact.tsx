
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Copy,
  FolderGit2,
  Link2,
  Mail,
  Send,
} from "lucide-react";

const EMAIL = "kirtesh.dev@gmail.com"; // Replace with your email
const GITHUB_URL = "https://github.com/kirteshshirodkar";
const LINKEDIN_URL = "https://www.linkedin.com/in/kirtesh-shirodkar/"; // Replace with your profile URL

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const mailSubject = encodeURIComponent(subject);
    const mailBody = encodeURIComponent(
      `Hi Kirtesh,\n\n${message}\n\nFrom: ${name}\nReply to: ${senderEmail}`,
    );

    window.location.href =
      `mailto:${EMAIL}?subject=${mailSubject}&body=${mailBody}`;
  }

  const socialLinks = [
    {
      label: "GitHub",
      detail: "Explore my code",
      href: GITHUB_URL,
      icon: FolderGit2,
    },
    {
      label: "LinkedIn",
      detail: "Let's connect",
      href: LINKEDIN_URL,
      icon: Link2,
    },
  ];

  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-[var(--background)] px-5 py-24 text-[var(--foreground)] transition-colors duration-300 sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-14">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--accent)]" />
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--accent)]">
              Get in touch
            </p>
          </div>

          <h2 className="max-w-3xl text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-6xl">
            Have an idea?
            <span className="block text-[var(--muted)]">
              Let's build something.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">
            Looking for a developer, have an interesting opportunity, or just
            want to talk about technology? My inbox is open.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Contact information */}
          <div className="flex flex-col">
            <p className="mb-5 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              Contact details
            </p>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background)]">
                  <Mail
                    size={19}
                    className="text-[var(--accent)]"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium">Email me</p>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="mt-1 block break-all text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
                  >
                    {EMAIL}
                  </a>
                </div>

                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  className="rounded-lg border border-[var(--border)] p-2 transition-colors hover:border-[var(--accent)]/50 hover:text-[var(--accent)]"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>

              <div className="my-5 h-px bg-[var(--border)]" />

              <div className="space-y-1">
                <p className="text-sm font-medium">Based in</p>
                <p className="text-sm text-[var(--muted)]">
                  Bengaluru, Karnataka, India · Open to opportunities
                </p>
              </div>
            </div>

            <p className="mb-4 mt-8 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              Find me online
            </p>

            <div className="space-y-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-xl border border-[var(--border)] p-4 transition-colors hover:border-[var(--accent)]/50"
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.6}
                      className="text-[var(--muted)] transition-colors group-hover:text-[var(--accent)]"
                    />

                    <div className="flex-1">
                      <p className="text-sm font-medium">
                        {social.label}
                      </p>
                      <p className="mt-1 text-xs text-[var(--muted)]">
                        {social.detail}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={16}
                      className="text-[var(--muted)] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]"
                    />
                  </Link>
                );
              })}
            </div>

            <div className="mt-auto flex items-center gap-3 pt-8 text-sm text-[var(--muted)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/40" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              Open to internships and opportunities
            </div>
          </div>

          {/* Contact form */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-8">
            <div className="mb-7">
              <h3 className="text-xl font-medium tracking-tight">
                Send me a message
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                Fill in the details below and your email app will open with
                your message ready to send.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Your name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    autoComplete="name"
                    required
                    maxLength={100}
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Your Name"
                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition-all placeholder:text-[var(--muted)]/70 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/15"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Email address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    value={senderEmail}
                    onChange={(event) => setSenderEmail(event.target.value)}
                    placeholder="Your Email"
                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition-all placeholder:text-[var(--muted)]/70 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/15"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-medium"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  required
                  maxLength={150}
                  value={subject}
                  onChange={(event) => setSubject(event.target.value)}
                  placeholder="Internship opportunity, collaboration..."
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition-all placeholder:text-[var(--muted)]/70 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/15"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  minLength={10}
                  maxLength={5000}
                  rows={5}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Tell me a little about what you have in mind..."
                  className="w-full resize-y rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm leading-6 text-[var(--foreground)] outline-none transition-all placeholder:text-[var(--muted)]/70 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/15"
                />
              </div>

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-6 py-3.5 text-sm font-medium text-[var(--background)] transition-opacity hover:opacity-80 sm:w-auto"
              >
                Open email to send
                <Send
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>

              <p className="text-xs leading-5 text-[var(--muted)]">
                This form opens your default email application. It does not
                send messages directly from the website.
              </p>
            </form>
          </div>
        </div>

        {/* Closing note */}
        <div className="mt-20 flex flex-col gap-4 border-t border-[var(--border)] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[var(--muted)]">
            Thanks for making it this far.
          </p>

          <Link
            href="#home"
            className="group inline-flex w-fit items-center gap-2 text-sm text-[var(--accent)] transition-opacity hover:opacity-75"
          >
            Back to top
            <ArrowDownRight
              size={16}
              className="rotate-[-135deg] transition-transform group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
