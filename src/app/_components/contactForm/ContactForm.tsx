"use client";

import { useState, forwardRef } from "react";
import type { ForwardedRef } from "react";
import { CloseIcon } from "../icons/CloseIcon";

export const ContactForm = forwardRef<HTMLDivElement>(
  (props, ref: ForwardedRef<HTMLDivElement>) => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitted(true);
    };

    if (isSubmitted) {
      return (
        <div
          ref={ref}
          className="w-full flex justify-center items-center mx-auto max-w-3xl my-12 p-8 rounded-lg border shadow"
        >
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            {/* <div className="w-full flex justify-end">
              <CloseIcon />
            </div> */}
            <h3 className="text-2xl font-bold">Thank you for your interest!</h3>
            <p className="text-gray-600">
              We've received your inquiry and will get back to you shortly.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-4 py-2 bg-primary text-white rounded hover:bg-secondary"
            >
              Send another message
            </button>
          </div>
        </div>
      );
    }

    return (
      <section
        ref={ref}
        className="flex justify-center items-center w-full py-10 md:py-18 "
      >
        <div className="container px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold">
              Contact us !
            </h2>
            <p className="max-w-lg mx-auto text-gray-600">
              Fill out the form below and our team will get in touch.
            </p>
          </div>
          <div className="mx-auto max-w-3xl bg-white p-6 rounded-lg shadow">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block font-medium">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full border p-2 rounded"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full border p-2 rounded"
                    required
                  />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block font-medium">
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    className="w-full border p-2 rounded"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-medium">
                    Country
                  </label>
                  <input
                    id="country"
                    type="email"
                    className="w-full border p-2 rounded"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full border p-2 rounded min-h-[120px]"
                  required
                />
              </div>
              <div className="flex items-start">
                <input
                  id="privacy"
                  type="checkbox"
                  className="h-4 w-4 mt-1"
                  required
                />
                <label htmlFor="privacy" className="ml-2 text-sm text-gray-600">
                  I agree to the processing of my data according to the privacy
                  policy.
                </label>
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-4 py-2 bg-primary text-white rounded hover:bg-secondary"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
);

export default ContactForm;
