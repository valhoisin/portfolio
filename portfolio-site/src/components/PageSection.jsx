import React from "react";
import SectionCard from "./SectionCard";
import ScrollButton from "./ScrollButton";
const PageSection = (props) => {
  const { id, title, data } = props;

  return (
    <div
      id={id}
      className="relative z-20 flex flex-col items-center text-center bg-black/70"
    >
      <h2 className="mx-auto p-20 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br to-violet-400 from-fuchsia-600">
        {title}
      </h2>
      <div className="max-w-[1440px] lg:mx-auto space-y-25 ">
        {data.map((item, i) => (
          <SectionCard
            key={i}
            title={item.title}
            content={item.content}
            alt={item.alternative}
            img={item.img}
            link={item.link}
            icons={item.icons}
          />
        ))}
      </div>
      <div className="p-8">
        <ScrollButton direction="up" section="homepage" />
      </div>
    </div>
  );
};

export default PageSection;
