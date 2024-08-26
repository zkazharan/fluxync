import { Carousel, Typography } from "@material-tailwind/react";

const testimonials = [
  {
    name: "Mikail Asada",
    position: "Tech Lead at Sersow",
    stars: 5,
    content: [
      '"As a TECH LEAD for Sersow, I used to spend countless hours manually reviewing images for inappropriate content. It was a tedious and time-consuming process. Now, with Fluxync\'s NSFW image detector, I can focus on more complex moderation tasks while the AI handles the heavy lifting. Fluxync\'s detector is incredibly accurate, flagging almost all NSFW images I\'ve encountered. It\'s saved me countless hours and given me peace of mind knowing our community is protected from harmful content. I highly recommend Fluxync to anyone dealing with online content moderation."',
      'Fluxync\'s detector is incredibly accurate, flagging almost all NSFW images I\'ve encountered. It\'s saved me countless hours and given me peace of mind knowing our community is protected from harmful content. I highly recommend Fluxync to anyone dealing with online content moderation."',
    ],
  },
  {
    name: "Asada Mikail",
    position: "Tech Lead at Sersow",
    stars: 4,
    content: [
      '"As a TECH LEAD for Sersow, I used to spend countless hours manually reviewing images for inappropriate content. It was a tedious and time-consuming process. Now, with Fluxync\'s NSFW image detector, I can focus on more complex moderation tasks while the AI handles the heavy lifting. Fluxync\'s detector is incredibly accurate, flagging almost all NSFW images I\'ve encountered. It\'s saved me countless hours and given me peace of mind knowing our community is protected from harmful content. I highly recommend Fluxync to anyone dealing with online content moderation."',
      'Fluxync\'s detector is incredibly accurate, flagging almost all NSFW images I\'ve encountered. It\'s saved me countless hours and given me peace of mind knowing our community is protected from harmful content. I highly recommend Fluxync to anyone dealing with online content moderation."',
    ],
  },
  {
    name: "Asadaaaaa",
    position: "Tech Lead at Sersow",
    stars: 7,
    content: [
      '"As a TECH LEAD for Sersow, I used to spend countless hours manually reviewing images for inappropriate content. It was a tedious and time-consuming process. Now, with Fluxync\'s NSFW image detector, I can focus on more complex moderation tasks while the AI handles the heavy lifting. Fluxync\'s detector is incredibly accurate, flagging almost all NSFW images I\'ve encountered. It\'s saved me countless hours and given me peace of mind knowing our community is protected from harmful content. I highly recommend Fluxync to anyone dealing with online content moderation."',
      'Fluxync\'s detector is incredibly accurate, flagging almost all NSFW images I\'ve encountered. It\'s saved me countless hours and given me peace of mind knowing our community is protected from harmful content. I highly recommend Fluxync to anyone dealing with online content moderation."',
    ],
  },
  {
    name: "Mikas Gaming",
    position: "Tech Lead at Sersow",
    stars: 3,
    content: [
      '"As a TECH LEAD for Sersow, I used to spend countless hours manually reviewing images for inappropriate content. It was a tedious and time-consuming process. Now, with Fluxync\'s NSFW image detector, I can focus on more complex moderation tasks while the AI handles the heavy lifting. Fluxync\'s detector is incredibly accurate, flagging almost all NSFW images I\'ve encountered. It\'s saved me countless hours and given me peace of mind knowing our community is protected from harmful content. I highly recommend Fluxync to anyone dealing with online content moderation."',
      'Fluxync\'s detector is incredibly accurate, flagging almost all NSFW images I\'ve encountered. It\'s saved me countless hours and given me peace of mind knowing our community is protected from harmful content. I highly recommend Fluxync to anyone dealing with online content moderation."',
    ],
  },
];

export function Section4() {
  return (
    <div className="w-full bg-[url('/img/bg-basic.png')] bg-auto bg-center bg-repeat flex flex-col items-center gap-16 py-24 text-white">
      <Typography variant="h2" className="tracking-wide">What did people say about Fluxync?</Typography>
      <Carousel
        autoplay
        loop
        transition={{ type: "tween", duration: 0.5}}
        className="rounded-2xl max-w-[900px]"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {
          testimonials.map((testimonial, index) => (
            <div
              key={"testimonial-" + index}
              className="w-full h-full bg-[linear-gradient(180deg,rgba(33,28,100,0.90)_0%,rgba(129,140,248,0.90)_100%)] py-10 px-20 flex flex-col gap-8"
            >
              <div className="flex flex-col gap-4">
                {
                  testimonial.content.map((content, index) => (
                    <Typography
                      key={"testimonial-content-" + index}
                      className="font-medium tracking-wide"
                    >
                      {content}
                    </Typography>
                  ))
                }
              </div>
              <div className="flex flex-col items-end gap-4">
                <div className="flex gap-2">
                  {
                    testimonial.stars > 0 && new Array(testimonial.stars).fill("").map((_, i) => (
                      <img
                        key={"testimonial-star-" + i}
                        src="/img/star.png"
                        alt="star"
                        width={24}
                      />
                    ))
                  }
                </div>
                <div className="flex flex-col items-end">
                  <Typography variant="h5" className="font-bold tracking-wide">{testimonial.name}</Typography>
                  <Typography variant="paragraph" className="font-medium tracking-wide">{testimonial.position}</Typography>
                </div>
              </div>
            </div>
          ))
        }
      </Carousel>
    </div>
  );
}