import React from 'react';

const PricingSection = () => {
    const hostingPlans = [
        {
            plan: "Free",
            description: "For Students and Beginners",
            price: "Rs. 0",
            perMonth: "Rs. 0",
            perRenewal: "Rs. 0/- per month",
            features: [
                "1 User",
                "Upload Landing Page Links",
                "Upload Address and College",
                "Upload Contact Info",
                "Upload Social Links",
                "Upload Multiple Websites",
                "SSD Storage"
            ],
            isPopular: false,
            isFree: true
        },
        {
            plan: "Best",
            description: "For Startups / Small Business",
            price: "Rs. 1200",
            perMonth: "Rs. 120",
            perRenewal: "Rs. 100/- per month",
            features: [
                "100 User",
                "Upload Landing Page Links",
                "Upload Address and College",
                "Upload Contact Info",
                "Upload Social Links",
                "Upload Multiple Websites",
                "1GB SSD Storage"
            ],
            isPopular: true
        },
        {
            plan: "Premium",
            description: "For Enterprise Owners",
            price: "Rs. 4000",
            perMonth: "Rs. 400",
            perRenewal: "Rs. 350/- per month",
            features: [
                "500 User",
                "Upload Landing Page Links",
                "Upload Address and College",
                "Upload Contact Info",
                "Upload Social Links",
                "Upload Multiple Websites",
                "10GB SSD Storage"
            ],
            isPopular: false
        }
    ];

    return (
        <div className='flex flex-wrap justify-center gap-4 w-full px-6 py-8 mt-30 mb-10'>
            {hostingPlans.map((plan, index) => (
                <div
                    key={index}
                    className={`w-full max-w-sm p-6 rounded-2xl border-2 ${plan.isPopular ? "border-[#0b06ff] relative bottom-8" : "border-slate-800"} hover:shadow-md shadow-2xs shadow-slate-600 ${plan.isPopular ? "h-[520px]" : ""} flex flex-col justify-between`}
                >
                    <div>
                        <h1 className={`text-3xl font-bold ${plan.isPopular ? "text-5xl text-indigo-400" : ""}`}>{plan.plan}</h1>
                        <p className='text-lg mb-6'>{plan.description}</p>
                        {plan.isPopular && (
                            <div className='absolute top-0 -translate-y-1/2 py-1 bg-blue-900 px-2 rounded-b-xl'>Most Popular</div>
                        )}
                    </div>

                    <div className='space-y-1'>
                        <div className='flex items-center gap-3 px-6 py-2 rounded-3xl border-2 w-[300px] border-blue-800'>
                            <span className={`text-2xl font-semibold ${plan.isFree ? "line-through" : ""} text-yellow-600`}>Yearly : {plan.price}/year</span>
                        </div>
                        <div className='flex px-4 py-1 w-[250px] items-center gap-3'>
                            <span className={`text-xl ${plan.isFree ? "line-through" : ""} text-indigo-400`}>Monthly : {plan.perMonth}/mo</span>
                        </div>

                        <ul className='list-none mt-2 text-green-200'>
                            {plan.features.map((feature, id) => (
                                <li className={`flex items-center ${plan.isPopular ? "text-green-500" : ""} gap-2`} key={id}>
                                    <span>&#x2714;</span>
                                    <p>{feature}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <button className={`mt-auto text-2xl w-full bg-indigo-800 font-semi p-3 text-white rounded-lg ${plan.isPopular ? "bg-green-300" : ""} hover:bg-indigo-400 transition-colors`}>Choose Plan</button>
                </div>
            ))}
        </div>
    );
};

export default PricingSection;