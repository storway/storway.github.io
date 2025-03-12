import { CheckCircle, ShieldCheck, ShoppingCart, BarChart2 } from 'lucide-react'
import { BurglarIcon } from '../icons/BurglarIcon'
import { RibbonIcon } from '../icons/RibbonIcon'
import { KartIcon } from '../icons/KartIcon'

const promises = [
    {
        icon: (
            <RibbonIcon />
            // <CheckCircle className="text-green-500" height={100} width={100} />
        ),
        text: 'Improve Client Experience',
    },
    {
        icon: (
            <BurglarIcon />
            // <ShieldCheck className="text-blue-500" height={100} width={100} />
        ),
        text: 'Reduce Fraud',
    },
    {
        icon: (
            <KartIcon />
            // <ShoppingCart
            //     className="text-orange-500"
            //     height={100}
            //     width={100}
            // />
        ),
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
                What DigiCart Delivers: 4 Key Benefits
            </h2>
            <div className="my-8 flex flex-col items-center justify-center gap-4 p-4 sm:flex-wrap md:flex-row">
                {promises.map((promise, index) => (
                    <div
                        key={index}
                        className="flex h-64 w-64 flex-col items-center justify-center gap-4 rounded-xl border border-primary bg-white p-4 shadow-md"
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
