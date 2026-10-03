import CoursesHeroSection from "@/components/task2/CoursesHeroSection";
import ServicesHeroSection from "@/components/task2/ServicesHeroSection";

export default function Home() {
  return (
    <div className="bg-white w-full h-full">
      {" "}
      <CoursesHeroSection />
      <hr />
      <ServicesHeroSection />
    </div>
  );
}
