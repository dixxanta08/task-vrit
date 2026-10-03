"use client";
import { useState } from "react";
import localFont from "next/font/local";
import "../../app/globals.css";
import CoursesHeroTab from "./CoursesHeroTab";

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

export default function CoursesHeroSection() {
  const [activeTab, setActiveTab] = useState("1");
  return (
    <div
      className={`${nohemi.variable} font-sans w-360 min-h-screen h-screen  p-23 flex flex-col gap-5`}
    >
      <div className="flex flex-col items-left justify-center gap-5">
        <p className="text-2xl">
          Explore our classes and master trending skills!
        </p>
        <h1 className="text-[32px] font-bold">
          Dive Into{" "}
          <span className="text-[hsla(161,69%,37%,1)]">
            What’s Hot Right Now!
          </span>
          🔥
        </h1>
      </div>

      <div className="flex flex-1  gap-8">
        <CoursesHeroTab
          isActive={activeTab === "1"}
          onClick={() => setActiveTab("1")}
          count="23"
          heading="All Courses"
          description="courses you're powering through right now."
        />
        <CoursesHeroTab
          isActive={activeTab === "2"}
          onClick={() => setActiveTab("2")}
          count={"05"}
          heading="Upcoming Courses"
          description="exciting new courses waiting to boost your skills."
        />
        <CoursesHeroTab
          isActive={activeTab === "3"}
          onClick={() => setActiveTab("3")}
          count="10"
          heading="Ongoing Courses"
          description="currently happening—don’t miss out on the action!"
        />
      </div>
    </div>
  );
}
