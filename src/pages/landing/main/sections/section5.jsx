import { Typography } from "@material-tailwind/react";

export function Section5() {
  return (
    <div className="w-full bg-[url('/img/bg-basic.png')] bg-auto bg-center bg-repeat flex flex-col items-center gap-8 py-24 text-white">
      <div className="flex flex-col items-center gap-4">
        <Typography variant="h2" className="tracking-wide">Not sure if Fluxync is right for you?</Typography>
        <Typography variant="paragraph" className="tracking-wide">Contact Sales to schedule a free consultation</Typography>
      </div>
      <button className="bg-[linear-gradient(0deg,#211C64_0%,#818CF8_100%)] px-8 py-4 rounded-full text-xl text-white font-bold tracking-wide">
        Contact Sales
      </button>
    </div>
  );
}