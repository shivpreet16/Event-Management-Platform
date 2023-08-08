import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import Switcher from "../components/Switcher";
import Navbar from "../components/Navbar";
import { AiOutlineArrowRight } from "react-icons/ai";
import NewsCards from "@/components/NewsCards";
import { heroNews } from "../../constants";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    localStorage.setItem("theme", "light");
  }, []);

  return (
    <div className={inter.className}>
      <main
        className={`bg-light dark:bg-dark px-5 md:px-0 min-h-screen h-fit text-dark dark:text-light overflow-x-hidden transition duration-100 ease-in-out`}
      >
        <div className="fixed top-0 z-10 flex md:w-full justify-center">
          <Navbar />
        </div>
        <section className="flex flex-col w-full md:mx-16 px-2 mb-10 h-fit md:mt-44 mt-10 ">
          <div className="flex gap-24 md:flex-row flex-col">
            <div className="flex flex-col md:w-[60vw] w-full gap-10">
              <div className=" border-dark dark:border-light border-2 gap-8 p-10 md:p-0 h-full flex flex-col items-center justify-center">
                <h1 className="uppercase text-5xl md:text-7xl md:tracking-[24px] tracking-widest">
                  Ibento
                </h1>
                <div className="flex flex-col gap-4">
                  <h3 className="text-lg">Work Smart, Event Hard</h3>
                  <button className="text-dark bg-light px-9 py-2">
                    Get Started
                  </button>
                </div>
              </div>
              <button className="uppercase h-20 md:h-32 text-dark bg-light_tert dark:bg-light p-4">
                <div className="w-full h-full border-4 md:text-2xl text-md md:tracking-[18px] tracking-wide border-dark flex justify-center items-center hover:gap-2 transition ease-in duration-100">
                  Get in touch
                  <AiOutlineArrowRight />
                </div>
              </button>
            </div>

            <div className="flex flex-col gap-5 w-1/2">
              {heroNews.map((news) => (
                <div key={news.title}>
                  <NewsCards
                    name={news.name}
                    content={news.content}
                    title={news.title}
                    image={news.image}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>

        </section>
      </main>
    </div>
  );
}
