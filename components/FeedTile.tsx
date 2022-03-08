import React, { useState } from "react";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {
  PaperAirplaneIcon,
  HeartIcon,
  ChatIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline";

const FeedTile = () => {
  //set comment
  const [comment, setComment] = useState("");
  //set likes
  const [likes, setLikes] = useState(0);

  //create a random number
  const randomNumber = Math.floor(Math.random() * 100);

  return (
    <div className="my-3 mx-3 border border-gray-300 bg-white rounded-lg">
      <div className="flex flex-row items-center justify-between">
        <div className=" flex flex-row items-center ">
          <div className=" h-[45px] w-[45px]  rounded-full border-pink-600  border-2 bg-transparent flex flex-col items-center justify-center m-3">
            <img
              src={"https://picsum.photos/200/300" + `?index=${randomNumber}`}
              className="h-[38px] w-[38px]  rounded-full  "
              alt=""
            />
          </div>
          <h1 className=" text-sm font-medium ">leomessi</h1>
        </div>
        <DotsHorizontalIcon className="h-5 w-5 mx-2 " />
      </div>
      <Carousel showThumbs={false}>
        <div className=" h-[470px] ">
          <img
            src={"https://picsum.photos/200/300" + `?index=${randomNumber}`}
            className=""
          />
        </div>
        <div className=" h-[470px]">
          <img
            src={"https://picsum.photos/200/300" + `?index=${randomNumber}`}
          />
        </div>
      </Carousel>
      <div className="flex flex-row justify-between my-2 mx-3">
        <div className="flex flex-row space-x-3 ">
          <HeartIcon className="h-6 w-6 " />
          <ChatIcon className="h-6 w-6  " />
          <PaperAirplaneIcon className="h-6 w-6  " />
        </div>

        <svg
          aria-label="Save"
          color="#262626"
          fill="#262626"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
        >
          <polygon
            fill="none"
            points="20 21 12 13.44 4 21 4 3 20 3 20 21"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          ></polygon>
        </svg>
      </div>
      <div className="flex flex-row border-b-[1px] border-gray-300 mb-3">
        <h1 className="ml-3 mb-2 italic font-bold">24 likes</h1>
        <h1 className="ml-3 mb-2 italic">No Comment</h1>
      </div>

      <div className="flex flex-row space-x-1 items-center my-3 px-3">
        <EmojiHappyIcon className=" h-5 w-5" />
        <input
          placeholder="Add a comment"
          className="flex-1 p-1 mx-2 outline-none"
          onChange={(e) => {
            const value = e.target.value;
            //   check if value is not empty
            setComment(value);
          }}
        />
        <button
          className={`text-blue-500 ${
            comment.length > 0 ? "opacity-100" : "opacity-50"
          }  `}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default FeedTile;
