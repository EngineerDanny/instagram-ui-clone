import React from "react";
import Image from "next/image";

const Sidebar = () => {
  // Declare list of person names with their image urls from unsplash
  //   https://source.unsplash.com/user/c_v_r/100x100
  //   https://picsum.photos/200/300

  const profileList = [
    { name: "hans", image: "https://picsum.photos/200/300" },
    {
      name: "lionelpeter",
      image: "https://picsum.photos/200/300",
    },
    { name: "lars", image: "https://picsum.photos/200/300" },
    { name: "linda", image: "https://picsum.photos/200/300" },
    { name: "lars", image: "https://picsum.photos/200/300" },
    { name: "linda", image: "https://picsum.photos/200/300" },
  ];

  //random image link

  return (
    <div className="fixed ">
      <div className=" my-7 mx-7 ">
        <div className=" flex flex-row items-center ">
          <Image
            src={profileList[0].image + "?index=user"}
            height={59}
            width={59}
            className="rounded-full"
          />
          <div className=" ml-5 ">
            <h1 className=" p-0 font-bold text-sm"> engineerdannny</h1>
            <span className="text-gray-700 text-sm">Daniel Agyapong</span>
          </div>
          
          <button className=" text-blue-500 text-sm font-bold ml-14 ">Switch</button>
        </div>

        <div className=" flex flex-row my-5  ">
          <h1 className=" p-0  text-sm"> Suggestions For You</h1>
          <button className=" font-bold text-xs ml-[120px]">See All</button>
        </div>

        <div className=" flex flex-col space-y-4 ">
          {profileList.map((item, index) => (
            <div key={index} className=" flex flex-row ">
              <div className="flex flex-row items-center">
                <Image
                  src={item.image + `?index=${index}`}
                  height={37}
                  width={37}
                  className="rounded-full"
                />
                <div className=" ml-4">
                  <h1 className=" p-0 font-bold text-sm "> {item.name}</h1>
                  <span className="text-gray-500 text-sm">
                    Instagram recommended
                  </span>
                </div>
              </div>
              
              <button className=" text-blue-500 text-xs font-bold ml-10">Follow</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
