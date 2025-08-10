import React from "react";

const ScrollButton = (props) => {
  const { direction, section } = props;

  const handleClick = (e) => {
    e.preventDefault();
    if (direction === "up") {
      // Use window.scrollTo for a smooth scroll to the very top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      // For scrolling down to a specific section, keep the original logic
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const iconClass =
    direction === "down" ? "fa-circle-chevron-down" : "fa-circle-chevron-up";

  const buttonText =
    direction === "up"
      ? "Scroll to Top"
      : section === "employers"
      ? "Scroll to Previous Employers"
      : section === "education"
      ? "Scroll to Education"
      : "";

  return (
    <div className="p-2">
      <p className="my-5 text-lg font-bold max-w-2xl text-transparent bg-clip-text bg-gradient-to-br to-violet-400 from-fuchsia-600">
        {buttonText}
      </p>
      <button className="mb-4" onClick={handleClick}>
        <i
          className={`fa-solid ${iconClass} bg-gradient-to-br to-violet-400 from-fuchsia-600 text-5xl hover:scale-120 lg:duration-300 text-transparent bg-clip-text`}
        ></i>
      </button>
    </div>
  );
};

export default ScrollButton;
