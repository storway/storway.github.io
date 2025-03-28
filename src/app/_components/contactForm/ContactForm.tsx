'use client'

import { forwardRef } from 'react'
import type { ForwardedRef } from 'react'
import { useForm } from '@formspree/react'
import { useLanguage } from '@/app/contexts/LanguageContext'
import { translations } from '@/app/lib/translations'
import { SupportedLanguages } from '@/app/types/languageTypes'

export const ContactForm = forwardRef<HTMLDivElement>(
    (props, ref: ForwardedRef<HTMLDivElement>) => {
        const [state, handleSubmit] = useForm('xwplkwoe')
        const { language } = useLanguage()

        const { contact } = translations[language as SupportedLanguages]

        if (state.succeeded) {
            return (
                <div
                    ref={ref}
                    className="mx-auto my-12 flex w-full max-w-3xl items-center justify-center rounded-lg border p-8 shadow"
                >
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <h3 className="text-2xl font-bold">
                            {contact?.confirmation?.title}
                        </h3>
                        <p className="text-gray-600">
                            {contact?.confirmation?.message}
                        </p>
                    </div>
                </div>
            )
        }

        return (
            <section
                ref={ref}
                className="md:py-18 flex w-full items-center justify-center bg-gray-200 py-32"
            >
                <div className="container px-4 md:px-6">
                    <div className="mb-8 text-center">
                        <h2 className="text-2xl font-semibold sm:text-4xl md:text-5xl">
                            {contact?.heading}
                        </h2>
                        <p className="mx-auto max-w-lg text-gray-600">
                            {contact?.description}
                        </p>
                    </div>
                    <div className="mx-auto max-w-3xl rounded-lg bg-white p-6 shadow">
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6"
                            action="https://formspree.io/f/xwplkwoe"
                            method="POST"
                        >
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block font-medium"
                                    >
                                        {contact?.form?.fullName}
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        className="w-full rounded border p-2"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block font-medium"
                                    >
                                        {contact?.form?.email}
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        className="w-full rounded border p-2"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block font-medium"
                                    >
                                        {contact?.form?.company}
                                    </label>
                                    <input
                                        id="company"
                                        name="company"
                                        type="text"
                                        className="w-full rounded border p-2"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block font-medium"
                                    >
                                        {contact?.form?.country}
                                    </label>
                                    <input
                                        id="country"
                                        name="country"
                                        type="text"
                                        className="w-full rounded border p-2"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block font-medium"
                                    >
                                        {contact?.form?.phoneNumber}
                                    </label>
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="phone"
                                        className="w-full rounded border p-2"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block font-medium"
                                >
                                    {contact?.form?.message}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="min-h-[120px] w-full rounded border p-2"
                                    required
                                />
                            </div>
                            <div className="flex items-start">
                                <input
                                    id="privacy"
                                    type="checkbox"
                                    className="mt-1 h-4 w-4"
                                    required
                                />
                                <label
                                    htmlFor="privacy"
                                    className="ml-2 text-sm text-gray-600"
                                >
                                    {contact?.form?.privacyAgreement}
                                </label>
                            </div>
                            <button
                                type="submit"
                                disabled={state.submitting}
                                className="w-full rounded bg-primary px-4 py-2 text-white hover:bg-secondary sm:w-auto"
                            >
                                {state.submitting
                                    ? contact?.form?.submitting
                                    : contact?.form?.submit}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
)

export default ContactForm
