import { Typography } from "@material-tailwind/react";

const reasons = [
  {
    image: "/img/reason-illustration-1.jpg",
    title: "Building Trustworthy Online Experiences",
    desc: "Fluxync helps developers create safer, more inclusive websites. Our robust NSFW content detection API makes it easy to identify and filter inappropriate content, creating a welcoming environment for all users.",
  },
  {
    image: "/img/reason-illustration-2.jpg",
    title: "Simple Integration, Powerful Results",
    desc: "Be ahead of content moderation. Fluxync's NSFW detection API provides powerful platform security. We created a simple integration approach to ensure a smooth transition so you can continue improving your online experience.",
  },
  {
    image: "/img/reason-illustration-3.jpg",
    title: "Developer-Friendly Tools",
    desc: "Fluxync's developer-friendly tools simplify content moderation. Our robust NSFW detection API saves time and money. You can establish a safer, more inclusive online community with easy integration and a powerful API.",
  },
  {
    image: "/img/reason-illustration-4.jpg",
    title: "Scalable and Reliable Solutions",
    desc: "Fluxync's solutions are designed to scale with your business needs. Whether you're a small startup or a large enterprise, Fluxync can adapt to your growing requirements, ensuring you have the tools you need to succeed.",
  },
];

export function Section2() {
  return (
    <div className="w-full bg-[url('/img/bg-basic.png')] bg-auto bg-center bg-repeat flex flex-col items-center gap-12 px-20 py-24 text-white">
      <Typography variant="h2" className="tracking-wide">What makes Fluxync the ideal partner for you?</Typography>
      <div className="max-w-[900px] flex flex-col gap-16">
        {
          reasons.map((reason, index) => (
            <div key={"reason-" + index} className={"flex items-center gap-12 " + (index % 2 === 0 ? "flex-row" : "flex-row-reverse" )}>
              <div className="flex-none">
                <img 
                  src={reason.image}
                  alt={reason.title}
                  width={360}
                  className="rounded-3xl border-4 border-solid border-white"
                />
              </div>
              <div className="flex-auto">
                <Typography variant="h3" className="font-bold tracking-wide">{reason.title}</Typography>
                <Typography variant="paragraph" className="mt-4 tracking-wide">{reason.desc}</Typography>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}