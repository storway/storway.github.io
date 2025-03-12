import { forwardRef, ForwardedRef } from 'react'

export const About = forwardRef<HTMLDivElement>(
    (props, ref: ForwardedRef<HTMLDivElement>) => {
        return (
            <section
                ref={ref}
                className="flex h-screen items-center justify-center border-2 bg-gray-300 px-6 py-32 md:px-12 lg:px-24"
            >
                <div className="mx-auto max-w-6xl px-6 py-16 text-center">
                    <h2 className="mb-6 text-2xl font-semibold tracking-tighter sm:text-4xl md:text-5xl">
                        About Us
                    </h2>
                    <p className="mx-auto max-w-3xl text-lg">
                        Storway SAS, headquartered in France, was founded by
                        seasoned experts in retail, hardware, and big data, and
                        strengthened by a dynamic team of young tech innovators.
                    </p>
                </div>
            </section>
        )
    }
)
