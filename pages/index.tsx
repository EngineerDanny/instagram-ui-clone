import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import FeedTile from "../components/FeedTile";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

const Home: NextPage = () => {
  return (
    <div>
      <NavBar />
      <Header/>
      <FeedTile/>
    </div>
  );
};

export default Home;
