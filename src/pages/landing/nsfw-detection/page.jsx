import {
  Header,
  Footer,
} from "../components";

import {
  Cover,
  Detect,
  Benefit,
  Pricing,
  FaQ,
} from "./sections";

export function NsfwDetection() {
  return (
    <div className="relative font-Inter">
      <Header />
      <Cover />
      <Detect />
      <Benefit />
      <Pricing />
      <FaQ />
      <Footer />
    </div>
  );
}