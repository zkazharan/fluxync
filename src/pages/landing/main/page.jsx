import {
  Header,
  Footer,
} from "../components";

import {
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
} from "./sections";

export function Main() {
  return (
    <div className="relative font-Inter">
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </div>
  );
}