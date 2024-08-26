import Marquee from "react-fast-marquee";
import { Typography } from "@material-tailwind/react";

export function Section3() {
  return (
    <div className="w-full bg-[url('/img/bg-basic.png')] bg-auto bg-center bg-repeat flex flex-col items-center gap-16 py-24 text-white">
      <Typography variant="h2" className="tracking-wide">Meet Our Clients</Typography>
      <Marquee
        autoFill
        pauseOnHover
      >
        <img
          src="/img/Sersow.png"
          alt="brand-1"
          width={240}
          className="mx-12"
        />
      </Marquee>
    </div>
  );
}