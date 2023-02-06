import LemonIcon from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/lemon-2.tsx";

type Props = {
  active: string;
};

export default function Header({ active }: Props) {
  const menus = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Login", href: "/login" },
    { name: "Register", href: "/register" },
  ];

  return (
    <div class="bg-gray-800 w-screen py-6 px-8 flex flex-col md:flex-row gap-4">
      <div class="flex items-center flex-1">
        <LemonIcon class="inline-block text-white" />
        <div class="text-white text-2xl ml-1 font-bold">
          Piano Tracker
        </div>
      </div>
      <ul class="flex items-center gap-6">
        {menus.map((menu) => (
          <li>
            <a
              href={menu.href}
              class={"text-gray-100 hover:text-gray-300 py-1 border-gray-500" +
                (menu.href === active ? " font-bold border-b-2" : "")}
            >
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
