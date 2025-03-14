import { forwardRef, ForwardedRef } from 'react'

export const About = forwardRef<HTMLDivElement>(
    (props, ref: ForwardedRef<HTMLDivElement>) => {
        return (
            <section
                id="about"
                ref={ref}
                className="flex items-center justify-center bg-gray-50 px-6 py-32 md:px-12 lg:px-24"
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
                    <p className="mx-auto mt-4 max-w-3xl text-lg">
                        We are assisting French and European retail chains in
                        the delivery of new digital retail opportunities.
                    </p>
                </div>
            </section>
        )
    }
)
