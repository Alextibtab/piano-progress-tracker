import { ComponentChildren } from "preact";
import LemonIcon from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/lemon-2.tsx";
import BrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/brand-github.tsx";

type Props = {
  children: ComponentChildren;
};

export default function Footer({ children }: Props) {
  const menus = [
    {
      title: "Documentation",
      children: [
        { name: "Getting Started", href: "#" },
        { name: "Guide", href: "#" },
        { name: "API", href: "#" },
        { name: "Showcase", href: "#" },
        { name: "Pricing", href: "#" },
      ],
    },
    {
      title: "Community",
      children: [
        { name: "Forum", href: "#" },
        { name: "Discord", href: "#" },
      ],
    },
  ];

  return (
    <div class="bg-gray-800 flex flex-col md:flex-row w-full w-screen gap-8 md:gap-16 px-8 py-8 text-sm ">
      <div class="flex-1">
        <div class="flex items-center gap-1">
          <LemonIcon class="inline-block text-white" />
          <div class="text-white font-bold text-2xl">
            Piano Tracker
          </div>
        </div>
        <div class="text-gray-200">
          Practice Tracker
        </div>
      </div>

      {menus.map((item) => (
        <div class="mb-4" key={item.title}>
          <div class="font-bold text-white">{item.title}</div>
          <ul class="mt-2">
            {item.children.map((child) => (
              <li class="mt-2" key={child.name}>
                <a
                  class="text-gray-200 hover:text-gray-400"
                  href={child.href}
                >
                  {child.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div class="text-gray-200 space-y-2">
        <div class="text-xs">
          Copyright © 2020 DenoLand<br />
          All right reserved.
        </div>

        <a
          href="https://github.com/denoland/fresh"
          class="inline-block hover:text-gray-400"
        >
          <BrandGithub />
        </a>
      </div>
    </div>
  );
}
