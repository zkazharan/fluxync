import { Typography } from "@material-tailwind/react";

const benefits = [
  {
    title: "Protect Your Community",
    description: "By detecting and blocking NSFW content, you create a safe and welcoming online environment for your users, building trust and a positive reputation.",
    image: "/img/pict-benefit1.png",
  },
  {
    title: "Boost Efficiency",
    description: "Automating NSFW detection frees your team from time-consuming tasks, allowing them to focus on more strategic and high-value work.",
    image: "/img/pict-benefit2.png",
  },
  {
    title: "Easy Integration",
    description: "Fluxync NSFW Detection integrates seamlessly with your platform, allowing you to start using it quickly and without complicated technical difficulties.",
    image: "/img/pict-benefit3.png",
  },
  {
    title: "End-to-End Solution",
    description: "Fluxync offers a complete solution for NSFW detection, from integration to data analysis, enabling you to manage content easily and effectively.",
    image: "/img/pict-benefit4.png",
  },
  {
    title: "Improved User Experience",
    description: "With safe and family-friendly content, your users will feel more comfortable and secure interacting on your platform, leading to increased retention and engagement.",
    image: "/img/pict-benefit5.png",
  },
  {
    title: "Responsive Customer Support",
    description: "The Fluxync team is ready to assist you with any questions or issues you may encounter, allowing you to use the solution with confidence.",
    image: "/img/pict-benefit6.png",
  },
]

export function Benefit() {
  return (
    <div className="w-full bg-[url('/img/bg-basic.png')] bg-auto bg-center bg-repeat flex flex-col items-center gap-16 py-24 text-white">
      <Typography variant="h2" className="tracking-wide max-w-[900px] text-center">Say goodbye to manual moderation with fast and accurate NSFW detection from Fluxync</Typography>
      <div className="max-w-[1000px] grid grid-cols-3 gap-16">
        {
          benefits.map((benefit, index) => (
            <div key={"benefit-" + index} className="bg-white h-[314px] p-4 flex flex-col justify-center items-center gap-2 rounded-2xl text-black text-center">
              <img src={benefit.image} alt="benefit-illustration" width={128} />
              <Typography className="text-lg font-semibold">{benefit.title}</Typography>
              <Typography className="text-sm font-normal">{benefit.description}</Typography>
            </div>
          ))
        }
      </div>
    </div>
  );
}