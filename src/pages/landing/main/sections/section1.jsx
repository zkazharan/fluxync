import { Typography } from "@material-tailwind/react";

export function Section1() {
  return (
    <div className="w-full h-[calc(100vh-84.175px)] bg-[url('/img/bg-main.png')] bg-cover bg-bottom bg-no-repeat flex flex-col justify-center items-center gap-8 pb-40">
      <div className="flex flex-col items-center gap-4">
        <Typography color="white" className="text-6xl font-bold text-center tracking-wide">
          Unlocking Enterprise Power
        </Typography>
        <Typography color="white" className="text-xl text-center tracking-wide">
          Join the hundreds of companies of all sizes that use Fluxync<br />
          to build trust and credibility with your users. 
        </Typography>
      </div>
      <button className="bg-[linear-gradient(0deg,#211C64_0%,#818CF8_100%)] px-8 py-4 rounded-full text-xl text-white font-bold tracking-wide">
        Learn more
      </button>
    </div>
  );
}