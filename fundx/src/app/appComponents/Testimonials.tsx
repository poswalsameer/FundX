import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Manu Arora",
    username: "@mannupaaji",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Harkirat Singh",
    username: "@kirat_tw",
    body: "Loved the overall experience. Very simple and easy to use application. Appreciated the work.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Tony",
    username: "@tonykhan",
    body: "I am highly interested to invest in Physics Wallah and wanted to know more about it. FundX provided all the relevant info. Thank you so much!",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Steve",
    username: "@steve.appwrite",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Haris Ali Khan",
    username: "@codewithharry",
    body: "This application got a bright future, I am looking forward to see how it scales and all the upcoming features it will have.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews;

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-56 w-64 flex flex-col justify-center items-center cursor-pointer overflow-hidden rounded-xl border-2 p-4",
        "border-gray-950/[.1] hover:bg-gray-950/[.05]",
      )}
    >
      <div className="h-[30%] w-full flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-bold text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white/55">{username}</p>
        </div>
      </div>
      <blockquote className="h-[70%] text-white font-medium mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Testimonials() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl" id="testimonialsDiv">
        <div className="text-white text-3xl font-bold my-20">Testimonials</div>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black dark:from-background  "></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black dark:from-background"></div>
    </div>
  );
}
