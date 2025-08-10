import profilepic from "../assets/images/profilepic.png";
import EXPERIENCE_DATA from "../assets/experience-data";
import EDUCATION_DATA from "../assets//education-data";
import ScrollButton from "../components/ScrollButton";
import PageSection from "../components/PageSection";

const Home = () => {
  const mainTextGradient =
    "font-bold text-transparent bg-clip-text bg-gradient-to-br from-violet-400 to-fuchsia-600";

  return (
    <>
      <header
        id="header"
        className="relative z-20 flex flex-col items-center justify-around min-h-screen text-center lg:p-30 sm:px-50 bg-black/50"
      >
        <div>
          <h1 className="text-6xl p-4 font-bold tracking-tight text-transparent  bg-clip-text bg-gradient-to-br from-violet-400 to-fuchsia-600 drop-shadow-lg">
            DAVID VALH
          </h1>
          <p className="mt-4 text-2xl font-bold max-w-2xl text-transparent bg-clip-text bg-gradient-to-br from-violet-400 to-fuchsia-600">
            A Biopage of my past Experiences as a Junior Developer
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center mt-8">
          <img
            src={profilepic}
            alt="David's Profile"
            className="rounded-full w-42 h-42 object-bottom-right border-4 border-fuchsia-600 shadow-lg mr-10 shadow-fuchsia-800"
          />

          <p className="mt-4 lg:text-xl max-w-xl text-slate-300 px-4">
            I'm a passionate junior developer with a knack for creating clean
            and responsive web applications. I love learning new technologies
            and solving complex problems.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row w-[50%] justify-around">
          <ScrollButton direction="down" section="employers" />
          <ScrollButton direction="down" section="education" />
        </div>
      </header>
      {/* Section Cards */}
      <div className="section-cards">
        <PageSection
          id="employers"
          title="Previous Employers"
          data={EXPERIENCE_DATA}
        />
        <PageSection id="education" title="Education" data={EDUCATION_DATA} />
      </div>
      {/*// TODO: Create footer component with props */}
      <footer
        id="footer"
        className="relative bg-black/50 z-20 flex lg:flex-row flex-col gap-4 lg:justify-around items-center border-t border-slate-900 px-50 py-20 lg:py-10 "
      >
        <div
          className={`text-xl lg:border-none border border-slate-700 rounded-xl h-60 ${mainTextGradient}`}
        >
          <section id="socials" className="flex flex-col m-10">
            <h2 className="mb-10">You can follow me on</h2>
            <div className="social-icons flex gap-4 justify-around">
              <div className="fa-brands fa-instagram"></div>
              <div className="fa-brands fa-linkedin"></div>
            </div>
          </section>
        </div>
        <div
          className={`text-xl lg:border-none border border-slate-700 rounded-xl h-60 ${mainTextGradient} `}
        >
          <section id="contact" className="flex flex-col m-10">
            <h2 className="mb-4">My contact data</h2>
            <div className="adress">
              <div className="">
                <p>Orpheumgasse 16/16</p>
              </div>
              <div className="">
                <p>8020 Graz</p>
              </div>

              <p>Austria</p>
            </div>
          </section>
        </div>
        <div
          className={`text-xl lg:border-none border border-slate-700 rounded-xl h-60 ${mainTextGradient} `}
        >
          <section id="contact" className="flex flex-col m-10">
            <h2 className="mb-4">How to reach me?</h2>
            <div className="adress">
              <div className="">
                <p>davidvalh@gmail.com</p>
              </div>
              <div className="">
                <p>+43-650-880-3090</p>
              </div>
            </div>
          </section>
        </div>
      </footer>
      {/* <div id="emp-cards" className="relative z-20  flex flex-col bg-black/70">
        <h2 className="mx-auto p-20 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br to-violet-400 from-fuchsia-600">
          Previous Employers
        </h2>
        <div className="max-w-[1440px] mx-auto space-y-25">
          {EXPERIENCE_DATA.map((experienceData, i) => (
            <SectionCard
              key={i}
              title={experienceData.title}
              content={experienceData.content}
              alt={experienceData.alternative}
              img={experienceData.img}
              link={experienceData.link}
              icons={experienceData.icons}
            />
          ))}
        </div>
      </div>{" "}
      <div className="flex flex-col items-center text-center p-8">
        <p className="my-5 text-lg font-bold max-w-2xl text-transparent bg-clip-text bg-gradient-to-br to-violet-400 from-fuchsia-600">
          Scroll to Top
        </p>
        <ScrollButton direction="up" section="navigation" />
      </div>
      <div id="edu-cards" className="relative z-20  flex flex-col bg-black/70 ">
        <h2 className="mx-auto p-20 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br to-violet-400 from-fuchsia-600">
          Education
        </h2>
        <div className="max-w-[1440px] mx-auto space-y-25">
          {EDUCATION_DATA.map((educationData, i) => (
            <SectionCard
              key={i}
              title={educationData.title}
              content={educationData.content}
              alt={educationData.alternative}
              img={educationData.img}
              link={educationData.link}
              icons={educationData.icons}
            />
          ))}
        </div>
        <div className="flex flex-col items-center text-center p-8">
          <p className="my-5 text-lg font-bold max-w-2xl text-transparent bg-clip-text bg-gradient-to-br to-violet-400 from-fuchsia-600">
            Scroll to Top
          </p>
          <ScrollButton direction="up" section="navigation" />
        </div> */}
      {/* </div> */}
    </>
  );
};

export default Home;
