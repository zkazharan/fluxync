import { Link } from "react-router-dom";
import { Typography } from "@material-tailwind/react";

export function Footer() {
  return (
    <div className="w-full bg-[linear-gradient(180deg,#000_0.28%,#211C64_58.34%,#818CF8_116.39%)] flex justify-between pt-24 pb-12 px-24 text-white">
      <div className="flex flex-col">
        <img src="/img/Fluxync-footer.png" alt="fluxync-footer" width={268} />
        <Typography variant="paragraph" className="tracking-wide">Fluxync © 2024 - All rights reserved.</Typography>
      </div>
      <div className="flex gap-20">
        <div className="flex flex-col gap-2">
          <Typography variant="lead" className="tracking-wide font-medium">Products & Pricing</Typography>
          <div className="flex flex-col">
            <Link to="/nsfw-detection">
              <Typography variant="paragraph" className="tracking-wide opacity-75">Fluxync NSFW Detection</Typography>
            </Link>
            <Typography variant="paragraph" className="tracking-wide opacity-75">Fluxync Sign</Typography>
            <Typography variant="paragraph" className="tracking-wide opacity-75">Fluxync Tracker</Typography>
            <Typography variant="paragraph" className="tracking-wide opacity-75">Fluxync Pay</Typography>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Typography variant="lead" className="tracking-wide font-medium">Developers</Typography>
          <div className="flex flex-col">
            <Typography variant="paragraph" className="tracking-wide opacity-75">Documentation</Typography>
            <Typography variant="paragraph" className="tracking-wide opacity-75">API reference</Typography>
            <Typography variant="paragraph" className="tracking-wide opacity-75">API Status</Typography>
            <Typography variant="paragraph" className="tracking-wide opacity-75">API changelog</Typography>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Typography variant="lead" className="tracking-wide font-medium">Resources</Typography>
          <div className="flex flex-col">
            <Typography variant="paragraph" className="tracking-wide opacity-75">Blog</Typography>
            <Typography variant="paragraph" className="tracking-wide opacity-75">Privacy & terms</Typography>
            <Typography variant="paragraph" className="tracking-wide opacity-75">Cookie settings</Typography>
          </div>
        </div>
      </div>
    </div>
  );
}