import { useState, useRef, useEffect } from "react";

const SectionCard = (props) => {
  const { title, content, img, alt, link, icons } = props;

  const transparentText =
    "text-transparent bg-clip-text bg-gradient-to-r to-violet-400 from-fuchsia-600";
  // const [showImage, setShowImage] = useState(false);
  // const handleToggleImage = () => {
  //   setShowImage(!showImage);
  // };

  // const imageRef = useRef(null);

  // // Effect to scroll to the image after it's rendered
  // useEffect(() => {
  //   if (imageRef.current) {
  //     imageRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, [showImage]);

  return (
    <>
      <section
        className="flex flex-col lg:flex-row items-center gap-8 rounded-xl p-8 bg-stone-900/50 border border-slate-700 shadow-lg 
    backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl"
      >
        <div className="flex-1 flex flex-col items-center  text-center ">
          <div className="w-full">
            <div className="flex lg:flex-row flex-col mb-4 justify-center items-center ">
              <h2
                className={`lg:text-4xl text-3xl font-bold  lg:mr-4 pb-2 ${transparentText}`}
              >
                {title}
              </h2>
              <a
                href={link}
                className="inline-block p-2 hover:scale-120 duration-300 text-violet-400 hover:text-violet-700"
              >
                <i className="fa-solid fa-link text-xl"></i>
              </a>
            </div>
            <div className="lg:h-[210px] text-left flex items-center">
              {Array.isArray(content) ? (
                <ul className="text-slate-300 px-0 lg:px-4 leading-relaxed list-disc">
                  {content.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-slate-300 px-4 lg:px-0 leading-relaxed">
                  {content} No content yet
                </p>
              )}
            </div>
          </div>
          <div className="lg:flex grid grid-cols-5 justify-items-center mt-4 gap-3">
            {icons &&
              icons.map((icon, index) => (
                <i
                  key={index}
                  className={`${transparentText} ${icon} text-4xl`}
                ></i>
              ))}
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <img
            src={img}
            alt={alt}
            className="w-full h-auto object-cover rounded-md shadow-md shadow-violet-400"
            onError={(e) => {
              e.target.onerror = null; // prevents infinite loop
              e.target.src =
                "https://placehold.co/600x400/9c55d0/0c0a09?text=Image+Not+Found";
            }}
          />
        </div>
      </section>
    </>
  );
};

export default SectionCard;
