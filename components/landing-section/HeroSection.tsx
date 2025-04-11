"use client";
import heroImage from "@/public/heroimage.jpg";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="min-h-screen grid grid-cols-10">
      <div className="w-full col-span-3 flex flex-col pt-40 pl-10 relative">
        <span className="badge badge-accent badge-lg text-neutral ">
          Find the most secure Bidding system{" "}
        </span>
        <h1 className="text-5xl font-bold text-primary  mt-2">
          Welcome to our <span className="text-secondary">Bidding System</span>{" "}
        </h1>
        <p className=" text-primary mt-10 ">
          Explore trusted tenders from verified providers across various
          industries. Streamline your procurement process, submit bids with
          confidence, and connect with reliable opportunities. Your gateway to
          smarter business decisions starts here.
        </p>
        <div className="w-[2000px] bg-white-400 h-10 absolute bottom-50 z-20 p-10">
            <button className=" px-10 py-4 rounded-t-2xl bg-sky-600 text-white shadow-2xl hover:bg-sky-800 duration-500 cursor-pointer">Publish Bids</button>
            <button className="px-10 py-4 text-sky-600 rounded-t-2xl shadow-2xl hover:bg-slate-200 hover:text-white duration-500 cursor-pointer">Add offers</button>
        <div className="w-fit bg-white-400 h-20 z-40 flex   shadow-2xl glass-background rounded-b-xl ">
            <div className="w-[250px] flex flex-col p-4 border-r-2 border-slate-200 ">
                <h1 className="text-slate-200">City</h1>
                <p className=" text-primary text-lg ">New York</p>
            </div>
            <div className="w-[250px] flex flex-col p-4 border-r-2 border-slate-200  ">
                <h1 className="text-slate-200">Bid Type </h1>
                <p className=" text-primary text-lg ">Technology</p>
            </div>
            <div className="w-[250px] flex flex-col p-4  ">
                <h1 className="text-slate-200">Expected price </h1>
                <p className=" text-primary text-lg ">200000$ - 300000$</p>
            </div>
        </div>

        </div>
      </div>
      <div className=" w-full overflow-hidden col-span-7 relative p-10 min-h-full">
        <Image
          src={heroImage}
          alt="Hero Image"
          className=" rounded-[100px] absolute h-[800px] right-[-200] w-[400%] "
        />
      </div>
    </section>
  );
};

export default HeroSection;
