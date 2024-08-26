import { Typography } from "@material-tailwind/react";

const pricings = [
  {
    name: "Basic",
    price: "$7.99",
    period: "month",
    features: [
      "2,500 requests",
      "100 requests per minute",
      "Limited support (email only)",
      "Basic documentation",
      "Access to monitoring dashboard",
    ],
  },
  {
    name: "Pro",
    price: "$16.99",
    period: "month",
    features: [
      "150,000 requests",
      "500 requests per minute",
      "Basic support",
      "Standard documentation",
      "Access to monitoring dashboard",
    ],
  },
  {
    name: "Ultimate",
    price: "$25.99",
    period: "month",
    features: [
      "2,500,000 requests",
      "unlimited requests per minute",
      "Priority support",
      "Complete documentation",
      "Access to monitoring dashboard",
      "Get report document",
    ],
  },
]

export function Pricing() {
  return (
    <div className="w-full bg-[url('/img/bg-basic.png')] bg-auto bg-center bg-repeat flex flex-col items-center gap-16 py-24 text-white">
      <div className="flex flex-col gap-2 items-center">
        <Typography variant="h1" className="tracking-wide">Clear and Easy Pricing</Typography>
        <Typography variant="lead" className="tracking-wide">Figure out which plan is best for you</Typography>
      </div>
      <div className="w-[900px] grid grid-cols-3 gap-8">
        {
          pricings.map((pricing, index) => (
            <div key={"pricing-" + index} className="bg-white h-[350px] p-4 flex flex-col justify-between rounded-2xl text-black">
              <div className="flex flex-col gap-2">
                <Typography variant="lead" className="tracking-wide font-medium">{pricing.name}</Typography>
                <div className="flex items-end gap-2">
                  <Typography variant="h2" className="tracking-wide">{pricing.price}</Typography>
                  <Typography variant="paragraph" className="tracking-wide font-normal">/ {pricing.period}</Typography>
                </div>
                <hr className="border-black/25" />
                <ul className="list-disc pl-4">
                  {
                    pricing.features.map((feature, index) => (
                      <li key={pricing.name + "-feature-" + index}>
                        <Typography className="tracking-wide text-sm font-medium">{feature}</Typography>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <button className="bg-[linear-gradient(0deg,#211C64_0%,#818CF8_130.95%)] py-2 rounded-xl text-white font-medium">
                Buy
              </button>
            </div>
          ))
        }
      </div>
    </div>
  );
}