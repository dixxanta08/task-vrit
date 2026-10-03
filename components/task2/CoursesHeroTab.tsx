export default function CoursesHeroTab({
  isActive = false,
  count,
  onClick,
  heading,
  description,
}: {
  isActive?: boolean;
  count: string;
  onClick?: () => void;
  heading: string;
  description: string;
}) {
  return (
    <div
      onClick={isActive ? undefined : onClick}
      className={`min-w-0 rounded-4xl flex flex-col items-center overflow-hidden
        transition-all duration-500 ease-in-out relative z-0
        ${
          isActive
            ? "flex-[2] p-10 justify-between bg-[hsla(354,59%,48%,1)] text-[hsla(356,54%,95%,1)]"
            : "flex-1 p-0 justify-center bg-[hsla(356,54%,95%,1)] text-[hsla(356,54%,48%,1)] cursor-pointer"
        }`}
    >
      <div
        className={`
          transition-all duration-500 ease-in-out rounded-full
        ${isActive ? "w-full h-full scale-150 bg-[hsla(354,59%,48%,1)]  " : "w-0 h-0"}
        absolute bottom-0 left-0 -z-10`}
      ></div>
      <button
        className={`group flex items-center justify-center self-end gap-2 overflow-hidden
          transition-all duration-500
          ${isActive ? "max-h-10 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
      >
        <span className="text-[18px] font-semibold">View all Courses</span>
        <img
          src="/assets/arrow-sm-right.png"
          alt="Arrow"
          className="w-5 h-5 hover:"
        />
      </button>

      <div
        className={`flex justify-center items-center gap-10.5 overflow-hidden
          transition-all duration-500
          ${isActive ? "max-h-24 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
      >
        <img
          src="/assets/CourseHeroSectionLogo1.svg"
          alt="Hero"
          className="w-18.75 h-18.75 shrink-0"
        />
        <img
          src="/assets/CourseHeroSectionLogo2.svg"
          alt="Hero"
          className="w-18.75 h-18.75 shrink-0"
        />
        <img
          src="/assets/CourseHeroSectionLogo3.svg"
          alt="Hero"
          className="w-18.75 h-18.75 shrink-0"
        />
        <img
          src="/assets/CourseHeroSectionLogo4.svg"
          alt="Hero"
          className="w-18.75 h-18.75 shrink-0"
        />
      </div>

      <div
        className={`flex items-center justify-center transition-all duration-500
          ${isActive ? "flex-row-reverse" : "flex-col flex-1 gap-6"}`}
      >
        <div
          className={`flex flex-col items-start transition-all duration-500
            ${
              isActive
                ? "w-auto gap-1 rotate-0"
                : "w-[218px] mt-10 flex-1 justify-center gap-3 -rotate-90"
            }`}
        >
          <p
            className={`text-[32px] font-bold leading-tight ${
              isActive ? "" : "tracking-tight"
            }`}
          >
            {heading}
          </p>
          <p
            className={`text-[18px] font-normal leading-snug ${
              isActive ? "" : "tracking-tight"
            }`}
          >
            {description}
          </p>
        </div>

        <div className="relative pr-6">
          <h1 className="text-[150px] font-bold leading-[0.92]">{count}</h1>
          <span className="absolute -top-4 right-0 text-[64px] font-bold leading-none">
            +
          </span>
        </div>
      </div>
    </div>
  );
}
