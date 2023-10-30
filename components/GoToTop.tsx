"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
export const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const goTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const scrollListener = () => {
    let heightToHidden = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
  }, []);
  return (
    <div>
      {isVisible && (
        <div
          className="fixed bottom-16 right-16 rounded-full bg-orange-500 p-4"
          onClick={goTop}
        >
          <FaArrowUp />
        </div>
      )}
    </div>
  );
};
