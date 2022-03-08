import Image from "next/image";
import { HomeIcon } from "@heroicons/react/solid";

import {
  PaperAirplaneIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
} from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/solid";

import avatarIcon from "../public/avatar-default.jpg";
import { useRecoilState } from "recoil";
import modalState from "../atoms/modal";

const NavBar = () => {
  const [_, setIsOpen] = useRecoilState(modalState);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="border-b-[1px] border-gray-300  px-3 py-2 sticky top-0 z-30 bg-white flex flex-col items-center w-full ">
      <div className="flex flex-row justify-between items-center    max-w-6xl pt-3">
        <div className=" pt-1 mr-4 ">
          <Image
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
            width={90}
            height={30}
            alt="Instagram logo"
            objectFit="fill"
          />
        </div>

        <div className=" flex-row bg-gray-100 flex-1 px-2 py-2 mx-2  mr-9 rounded-lg  hidden sm:flex sm:mr-12 md:ml-32 ">
          <SearchIcon className="h-6 w-6 text-gray-400" />

          <input
            placeholder="Search"
            className=" outline-none bg-gray-100 px-1 "
            onChange={(e) => {
              const value = e.target.value;
              //   check if value is not empty
            }}
          />
        </div>
        {/* Home Icon from Heroicon*/}
        <div className="flex flex-row space-x-5">
          <HomeIcon className="h-7 w-7 " />
          <PaperAirplaneIcon className="h-7 w-7 " />
          <PlusCircleIcon className="h-7 w-7 " onClick={openModal} />
          <UserGroupIcon className="h-7 w-7 " />
          <HeartIcon className="h-7 w-7 " />
          {/* Avatar Icon */}
          <div>
            <Image
              src={avatarIcon}
              width={30}
              height={30}
              alt="Instagram logo"
              objectFit="fill"
              className=" rounded-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
