"use client";

import { useState, FormEvent } from "react";
import { serviceTypesForAppointment } from "@/lib/data";
import { SpinnerIcon } from "./LoadingSpinner";

export type AppointmentFormData = {
  fullName: string;
  email: string;
  phone: string;
  serviceType: string;
  preferredDate: string;
  message: string;
};

const initialValues: AppointmentFormData = {
  fullName: "",
  email: "",
  phone: "",
  serviceType: "",
  preferredDate: "",
  message: "",
};

type Errors = Partial<Record<keyof AppointmentFormData, string>>;

function validate(data: AppointmentFormData): Errors {
  const errors: Errors = {};
  if (!data.fullName.trim()) errors.fullName = "Full name is required.";
  if (!data.email.trim()) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Please enter a valid email.";
  if (!data.phone.trim()) errors.phone = "Phone number is required.";
  if (!data.serviceType) errors.serviceType = "Please select a service type.";
  if (!data.preferredDate) errors.preferredDate = "Preferred date is required.";
  return errors;
}

export default function AppointmentForm() {
  const [formData, setFormData] = useState<AppointmentFormData>(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof AppointmentFormData]) {
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
      // Ready for backend/API: POST formData to your endpoint
      // await fetch("/api/appointment", { method: "POST", body: JSON.stringify(formData) });
      await new Promise((r) => setTimeout(r, 800));
      setSubmitted(true);
      setFormData(initialValues);
      setErrors({});
    } catch {
      setErrors({ message: "Something went wrong. Please try again." });
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
        <h3 className="text-xl font-semibold text-primary-dark mb-2">Request Received</h3>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          Thank you for your appointment request. We will review your details and get back to you shortly to confirm.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="text-accent font-semibold hover:text-accent-hover transition-colors"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {errors.message && (
        <div className="p-4 rounded-lg bg-red-50 text-red-700 text-sm">{errors.message}</div>
      )}

      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-primary-dark mb-1">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          value={formData.fullName}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-md border bg-white text-base focus:ring-2 focus:ring-accent focus:border-accent outline-none transition min-h-[44px] touch-manipulation ${
            errors.fullName ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="John Doe"
        />
        {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
            placeholder="john@example.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-primary-dark mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-md border bg-white text-base focus:ring-2 focus:ring-accent focus:border-accent outline-none transition min-h-[44px] touch-manipulation ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="+255 754 000 000"
          />
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="serviceType" className="block text-sm font-medium text-primary-dark mb-1">
          Service Type <span className="text-red-500">*</span>
        </label>
        <select
          id="serviceType"
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-md border bg-white text-base focus:ring-2 focus:ring-accent focus:border-accent outline-none transition min-h-[44px] touch-manipulation ${
            errors.serviceType ? "border-red-500" : "border-gray-300"
          }`}
        >
          <option value="">Select a service</option>
          {serviceTypesForAppointment.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.serviceType && <p className="mt-1 text-sm text-red-600">{errors.serviceType}</p>}
      </div>

      <div>
        <label htmlFor="preferredDate" className="block text-sm font-medium text-primary-dark mb-1">
          Preferred Date <span className="text-red-500">*</span>
        </label>
        <input
          id="preferredDate"
          name="preferredDate"
          type="date"
          value={formData.preferredDate}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-md border bg-white text-base focus:ring-2 focus:ring-accent focus:border-accent outline-none transition min-h-[44px] touch-manipulation ${
            errors.preferredDate ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.preferredDate && <p className="mt-1 text-sm text-red-600">{errors.preferredDate}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-primary-dark mb-1">
          Message / Project description
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white focus:ring-2 focus:ring-accent focus:border-accent outline-none transition"
          placeholder="Briefly describe your project or any specific requirements..."
        />
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
          "Submit Request"
        )}
      </button>
    </form>
  );
}
