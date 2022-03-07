import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import FeedTile from "../components/FeedTile";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";

const Home: NextPage = () => {
  return (
    <div>
      <NavBar />
      <main className=" flex flex-row justify-center w-full">
        <div className=" w-full md:max-w-2xl">
          <Header />
          <FeedTile />
          <FeedTile />
          <FeedTile />
          <FeedTile />
        </div>

        <div className="hidden lg:block w-[400px] ">
          {/* Instagram Sidebar  */}
          <Sidebar />
        </div>
      </main>
    </div>
  );
};

export default Home;
