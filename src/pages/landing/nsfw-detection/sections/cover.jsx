import { Typography } from "@material-tailwind/react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export function Cover() {
  return (
    <div className="w-full h-[calc(100vh-84.175px)] bg-[url('/img/bg-basic.png')] bg-auto bg-center bg-repeat flex flex-col justify-center items-start gap-10 p-24 text-white">
      <div className="flex items-center gap-2">
        <img src="/img/star-point.png" alt="star-point" />
        <Typography variant="h5" className="tracking-wide">Fluxync NSFW Detection</Typography>
      </div>
      <div className="flex flex-col gap-2">
        <Typography variant="h1" className="tracking-wide max-w-[800px]">Smart solutions for secure and efficient content moderation</Typography>
        <Typography variant="paragraph" className="tracking-wide max-w-[460px]">Fluxync's solutions prioritize both user experience and security, making your work easier, more enjoyable, and secure.</Typography>
      </div>
      <button className="flex items-center gap-3 bg-[linear-gradient(0deg,#211C64_0%,#818CF8_100%)] px-6 py-3 rounded-full text-lg text-white font-bold tracking-wide">
        Get Now{" "}
        <ArrowRightIcon
          strokeWidth={2.5}
          className="h-4 w-4 transition-transform"
        />
      </button>
    </div>
  );
}