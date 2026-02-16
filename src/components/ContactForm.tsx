"use client";

import { useState, FormEvent } from "react";
import { SpinnerIcon } from "./LoadingSpinner";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialValues: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

type Errors = Partial<Record<keyof ContactFormData | "submitError", string>>;

function validate(data: ContactFormData): Errors {
  const errors: Errors = {};
  if (!data.name.trim()) errors.name = "Name is required.";
  if (!data.email.trim()) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Please enter a valid email.";
  if (!data.subject.trim()) errors.subject = "Subject is required.";
  if (!data.message.trim()) errors.message = "Message is required.";
  return errors;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const nextErrors = validate(formData);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    try {
      // Ready for backend: POST formData to /api/contact
      await new Promise((r) => setTimeout(r, 600));
      setSubmitted(true);
      setFormData(initialValues);
      setErrors({});
    } catch {
      setErrors({ submitError: "Something went wrong. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-lg border-2 border-green-200 bg-green-50 p-8 text-center animate-fade-in">
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-primary-dark mb-2">Message Sent</h3>
        <p className="text-gray-600 max-w-md mx-auto">
          Thank you for getting in touch. We will respond to your message as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {errors.submitError && (
        <div className="p-4 rounded-lg bg-red-50 text-red-700 text-sm">{errors.submitError}</div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-primary-dark mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-md border bg-white text-base focus:ring-2 focus:ring-accent focus:border-accent outline-none transition min-h-[44px] touch-manipulation ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Your name"
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-primary-dark mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-md border bg-white text-base focus:ring-2 focus:ring-accent focus:border-accent outline-none transition min-h-[44px] touch-manipulation ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="you@example.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-primary-dark mb-1">
          Subject <span className="text-red-500">*</span>
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-md border bg-white text-base focus:ring-2 focus:ring-accent focus:border-accent outline-none transition min-h-[44px] touch-manipulation ${
            errors.subject ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Subject of your message"
        />
        {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-primary-dark mb-1">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-md border bg-white text-base focus:ring-2 focus:ring-accent focus:border-accent outline-none transition min-h-[44px] touch-manipulation ${
            errors.message ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Your message..."
        />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 text-sm font-medium text-white bg-accent rounded-full hover:bg-accent-hover transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed min-h-[44px] touch-manipulation"
      >
        {submitting ? (
          <>
            <SpinnerIcon className="w-4 h-4 text-white" />
            <span>Sending...</span>
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
