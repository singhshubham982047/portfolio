"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";
import { Icons } from "./icons";
import { useTheme } from "next-themes";

interface Item {
  name: string;

  icon: any;
  color: string;
}

let techStacks = [
  {
    name: "Html",

    icon: <Icons.html className=" size-8" />,
    color: "#ffffff",
  },
  {
    name: "Css",

    icon: <Icons.css className=" size-8" />,
    color: "#ffffff",
  },
  {
    name: "Javascript",

    icon: <Icons.javascript className=" size-8" />,
    color: "#FFC300 ",
  },
  {
    name: "React.js",

    icon: <Icons.react />,
    color: "#1E86FF",
  },
  {
    name: "Next.js",

    icon: <Icons.nextjs />,
    color: "",
  },
  {
    name: "Typescript",

    icon: <Icons.typescript />,
    color: "#1E86FF",
  },
  {
    name: "Git & Github",

    icon: <Icons.git className=" size-8" />,
    color: "#ffffff",
  },
  {
    name: "Node.js",

    icon: <Icons.nodejs className=" size-8" />,
    color: "whitesmoke",
  },
  {
    name: "Tailwind",

    icon: <Icons.tailwindcss />,
    color: "blue",
  },
  {
    name: "MongoDb",

    icon: <Icons.mongodb className=" size-8" />,
    color: "#fffff",
  },
];

techStacks = Array.from({ length: 10 }, () => techStacks).flat();

const Stack = ({ name, icon, color }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl "
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

export function TechStack({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col p-10 overflow-hidden rounded-lg  bg-background md:shadow-xl",
        className
      )}
    >
      <AnimatedList>
        {techStacks.map((item, idx) => (
          <Stack {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
