import Image from "next/image";
import { HomeIcon } from "@heroicons/react/solid";

import {
  PaperAirplaneIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
} from "@heroicons/react/outline";


const NavBar = () => {
  return (
    <div className=" flex flex-row justify-between border-b-[1px] border-gray-500  px-3 py-2 items-center">
      <div className=" pt-5">
        <Image
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          width={100}
          height={30}
          alt="Instagram logo"
          objectFit="fill"
        />
      </div>
      {/* Home Icon from Heroicon*/}
      <div className="flex flex-row space-x-5">
        <HomeIcon className="h-7 w-7 " />
        <PaperAirplaneIcon className="h-7 w-7 " />
        <PlusCircleIcon className="h-7 w-7 " />
        <UserGroupIcon className="h-7 w-7 " />
        <HeartIcon className="h-7 w-7 " />
        {/* Avatar Icon */}
      </div>
    </div>
  );
};

export default NavBar;
