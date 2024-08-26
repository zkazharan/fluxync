import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography,
} from "@material-tailwind/react";

const faqs = [
  {
    number: 1,
    question: 'What does NSFW mean?',
    answer: 'NSFW stands for "Not Safe For Work". It means the content is not appropriate to view in a work environment or in public.',
  },
  {
    number: 2,
    question: 'What are some examples of NSFW content?',
    answer: 'NSFW content typically includes explicit sexual content, graphic violence, strong language, and illegal content like child pornography.',
  },
  {
    number: 3,
    question: 'Why is NSFW content flagged?',
    answer: 'NSFW content is flagged to protect people from content they might find inappropriate or offensive. It also helps maintain a professional work environment.',
  },
];

export function FaQ() {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="w-full bg-[url('/img/bg-basic.png')] bg-auto bg-center bg-repeat py-24 flex justify-center text-white">
      <div className="w-[900px] flex flex-col gap-8">
        <Typography variant="h1" className="tracking-wide">Frequently Asked Questions</Typography>
        <div className="flex flex-col gap-2">
          {
            faqs.map((faq, index) => (
              <Accordion key={"faq-" + index} open={open === faq.number} className="mb-2 rounded-lg border border-blue-gray-100 px-4 bg-white">
                <AccordionHeader
                  onClick={() => handleOpen(faq.number)}
                  className={`border-b-0 tracking-wide text-black transition-colors ${
                    open === faq.number ? "text-[#908FFF] hover:!text-[#908FFF]" : ""
                  }`}
                >
                  {faq.question}
                </AccordionHeader>
                <AccordionBody className="pt-0 text-base font-medium">
                  {faq.answer}
                </AccordionBody>
              </Accordion>
            ))
          }
        </div>
      </div>
    </div>
  );
}