"use client";

import { useRef } from "react";

export function DraggableCarousel({ images }) {
  const scrollRef = useRef(null);
  const handleMouseDown = (event) => {
    const element = scrollRef.current;

    if (!element) return;

    const startX = event.pageX - element.offsetLeft;
    const scrollLeft = element.scrollLeft;

    const handleMouseMove = (mouseEvent) => {
      const x = mouseEvent.pageX - element.offsetLeft;
      const dragDistance = x - startX;
      element.scrollLeft = scrollLeft - dragDistance;
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      element.style.cursor = "grab";
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    element.style.cursor = "grabbing";
  };

  return (
    <div
      ref={scrollRef}
      onMouseDown={handleMouseDown}
      className="
      w-full flex flex-1 gap-8 overflow-x-scroll pb-15 
  [&::-webkit-scrollbar]:h-2 
  [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full
        "
    >
      {images.map((image, index) => (
        <div
          key={image.url}
          className="w-253 h-[569.25px] rounded-[21.21px] relative shrink-0"
        >
          <img
            src={image.url}
            alt={image.alt}
            draggable={false}
            className="w-253 h-[569.25px] rounded-[21.21px]"
          />
          {index === 0 && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[hsla(0,0%,85%,1)] w-33 h-33 rounded-full flex items-center justify-center pointer-events-none">
              Drag
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
