import localFont from "next/font/local";
import "../../app/globals.css";
import { DraggableCarousel } from "./DraggableCarasouel";

const nohemi = localFont({
  src: [
    {
      path: "../../public/fonts/Nohemi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Nohemi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-nohemi",
});

export default function ServicesHeroSection() {
  return (
    <div
      className={`${nohemi.variable} font-sans w-360 min-h-screen   p-23  flex flex-col gap-48`}
    >
      <div className="flex justify-between items-start w-full">
        <div className="w-1/2 flex flex-col items-left justify-center gap-14.5">
          <p className="text-[36px] font-medium leading-1.4">
            Experience our expert solutions tailored to enhance your business
            with top-tier design, development, and animation.
          </p>
          <button className=" w-fit max-w-fit px-8 align-middle justify-center rounded-3xl h-12 bg-[hsla(222,86%,50%,1)] text-white  text-[16px] font-semibold">
            Services
          </button>
        </div>
        <div className=" flex flex-col items-left justify-center gap-8.75">
          <h4 className="text-[52px] font-bold leading-1.2">UI & UX</h4>
          <h4 className="text-[52px] font-bold leading-1.2">Development</h4>
          <h4 className="text-[52px] font-bold leading-1.2">Blockchain</h4>
        </div>
      </div>
      <DraggableCarousel
        images={[
          { url: "/assets/draggable-image1.jpg", alt: "Draggable Image 1" },
          { url: "/assets/draggable-image2.jpg", alt: "Draggable Image 2" },
          { url: "/assets/draggable-image3.jpg", alt: "Draggable Image 3" },
          { url: "/assets/draggable-image4.jpg", alt: "Draggable Image 4" },
        ]}
      />
      <div className="flex flex-col gap-9.5 justify-center items-center">
        <h2 className="text-[22px] font-bold text-center">Our Partners</h2>
        <div className="flex w-full justify-between items-center ">
          <img
            className="w-[143px] h-[75px]  object-contain grayscale"
            src="/assets/partners1.png"
            alt="Partners Logos"
          />
          <img
            className="w-[143px] h-[75px] object-contain grayscale"
            src="/assets/partners2.png"
            alt="Partners Logos"
          />
          <img
            className="w-[143px] h-[75px] object-contain grayscale"
            src="/assets/partners3.png"
            alt="Partners Logos"
          />
          <img
            className="w-[143px] h-[75px] object-contain grayscale"
            src="/assets/partners4.png"
            alt="Partners Logos"
          />
        </div>
      </div>
    </div>
  );
}
