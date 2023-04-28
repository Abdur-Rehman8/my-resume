import Image from "next/image";
import React from "react";
import logo from "../../public/ar.png";

export default function Footer() {
  return (
    <div>
      <div className=" max-w-7xl py-[100px] px-4 mt-0 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-10">
          <div className="  ">
            {" "}
            <Image src={logo} width={128} height={80} alt={"Logo"} />
          </div>
          <div className=" ">
            <h3 className="pb-3 uppercase font-semibold text-2xl">
              Quick links
            </h3>
            <ul>
              <li className="py-[10px] hover:text-cyan-400 duration-300">
                <a href="/">Home</a>
              </li>
              <li className="py-[10px] hover:text-cyan-400 duration-300">
                <a href="/#about">About</a>
              </li>
              <li className="py-[10px] hover:text-cyan-400 duration-300">
                <a href="/#services">Services</a>
              </li>
              <li className="py-[10px] hover:text-cyan-400 duration-300">
                <a href="/#projects">Projects</a>
              </li>
            </ul>
          </div>

          <div className="">
            <h3 className="pb-3 uppercase font-semibold text-2xl">follow</h3>
            <ul>
              <a href="https://www.facebook.com/" target={"blank"}>
                {" "}
                <li className="py-[10px] hover:text-cyan-400 duration-300">
                  Facebook
                </li>
              </a>
              <a href="https://www.Linkdin.com/" target={"blank"}>
                {" "}
                <li className="py-[10px] hover:text-cyan-400 duration-300">
                  Linkdin
                </li>
              </a>
              <a href="https://www.Github.com/" target={"blank"}>
                {" "}
                <li className="py-[10px] hover:text-cyan-400 duration-300">
                  Github
                </li>
              </a>
              <a href="https://www.Twitter.com/" target={"blank"}>
                {" "}
                <li className="py-[10px] hover:text-cyan-400 duration-300">
                  Twitter
                </li>
              </a>
            </ul>
          </div>

          <div className=" ">
            <h3 className="pb-3 uppercase font-semibold text-2xl">Contact</h3>
            <ul>
              <a href="tel:000-0000-00">
                {" "}
                <li className="pb-[10px] hover:text-cyan-400 duration-300">
                  <strong>Phone:</strong> <br className=" flex  sm:hidden" />{" "}
                  +92-0000-0000000{" "}
                </li>
              </a>

              <a href="mailto:info@yoursite.com">
                {" "}
                <li className="hover:text-cyan-400 duration-300">
                  <strong>Email :</strong> <br className=" flex   sm:hidden" />{" "}
                  info@yoursite.com
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
