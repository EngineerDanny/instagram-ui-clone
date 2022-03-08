const Header = () => {
  // The list should contain a list of names of instagram feeds and their image urls
  const list = [
    { name: "Hans", image: "https://picsum.photos/200/300" },
    { name: "Peter", image: "https://picsum.photos/200/300" },
    { name: "Lars", image: "https://picsum.photos/200/300" },
    { name: "Linda", image: "https://picsum.photos/200/300" },
    { name: "Lars", image: "https://picsum.photos/200/300" },
    { name: "Linda", image: "https://picsum.photos/200/300" },
    { name: "Lars", image: "https://picsum.photos/200/300" },
    { name: "Linda", image: "https://picsum.photos/200/300" },
  ];

  return (
    <div className=" m-3 border border-gray-300 bg-white rounded-lg">
      <div className=" mt-4 pb-2 flex flex-row overflow-x-visible overflow-scroll scroll-smooth scrollbar-hide space-x-3 ">
        {list.map((item, index) => (
          <div className="first:ml-4 flex flex-col items-center">
            <div className="h-[70px] w-[70px]  rounded-full border-pink-600  border-2 bg-transparent flex flex-col items-center justify-center">
              <img
                src={item.image + `?index=${index}`}
                className="h-[63px] w-[63px] rounded-full  "
                alt=""
              />
            </div>
            <h1 className=" text-sm font-medium mt-2 text-center">
              {item.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
