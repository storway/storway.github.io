import { BarChart2 } from 'lucide-react'
import { BurglarIcon } from '../icons/BurglarIcon'
import { RibbonIcon } from '../icons/RibbonIcon'
import { KartIcon } from '../icons/KartIcon'

const promises = [
    {
        icon: <RibbonIcon />,
        text: 'Improve Client Experience',
    },
    {
        icon: <BurglarIcon />,
        text: 'Reduce Fraud',
    },
    {
        icon: <KartIcon />,
        text: 'Increase Basket Size',
    },
    {
        icon: (
            <BarChart2 className="text-purple-500" height={100} width={100} />
        ),
        text: 'Retail Media Revenue',
    },
]

export default function Promises() {
    return (
        <div className="my-32 flex flex-col items-center justify-center">
            <h2 className="text-center text-2xl font-semibold sm:text-4xl md:text-5xl">
                DigiCart delivers 4 key benefits
            </h2>
            <div className="my-8 flex flex-col items-center justify-center gap-4 p-4 sm:flex-wrap md:flex-row">
                {promises.map((promise, index) => (
                    <div
                        key={index}
                        className="flex h-64 w-64 flex-col items-center justify-center gap-4 rounded-lg border border-primary bg-white p-4 shadow-md"
                    >
                        <div className="flex items-center">{promise.icon}</div>
                        <span className="text-center text-2xl font-semibold">
                            {promise.text}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}
