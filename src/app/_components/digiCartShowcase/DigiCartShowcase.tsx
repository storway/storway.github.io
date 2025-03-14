import { CardSpacer } from '../spacer/CardSpacer'
import { ShowcaseCard } from './ShowcaseCard'
import { Fragment } from 'react'
import { cards } from '@/app/data/showcaseCardsData'

export const DigiCartShowcase = () => {
    return (
        <div className="mx-auto mt-10 bg-gray-200 px-6 py-32 md:px-24">
            <div
                id="learn-more-section"
                className="mb-6 flex items-center justify-center sm:mb-16"
            >
                <h2 className="text-2xl font-semibold tracking-tighter sm:text-4xl md:text-5xl">
                    A smart trolley ...
                </h2>
            </div>

            {cards.map((card, index) => (
                <Fragment key={index}>
                    <ShowcaseCard {...card} />
                    {index < cards.length - 1 && <CardSpacer />}
                </Fragment>
            ))}
        </div>
    )
}
