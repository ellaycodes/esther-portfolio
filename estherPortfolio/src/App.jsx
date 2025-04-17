import "./App.css";
import { getAllEntries } from "./api/api.js";
import React, { useEffect, useState, useRef } from "react";
import HomeSection from "./components/homeSection.jsx";
import About from "./components/About.jsx";
import ContentSection from "./components/contentSection.jsx";
import ContactPage from "./components/contactPage.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  const [contentData, setContentData] = useState({});

  useEffect(() => {
    getAllEntries().then((res) => {
      const pages = res.data.items.filter((item) =>
        item.sys.contentType.sys.id.endsWith("Page")
      );

      const dataMap = pages.reduce((acc, item) => {
        const type = item.sys.contentType.sys.id;
        acc[type] = acc[type] ? [...acc[type], item] : [item];
        return acc;
      }, {});
      setContentData(dataMap);
    });
  }, []);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const backgroundRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    if (section === "home")
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    if (section === "about")
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    if (section === "projects")
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    if (section === "background")
      backgroundRef.current.scrollIntoView({ behavior: "smooth" });
    if (section === "contact")
      contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="mainDiv">
        <NavBar onNavClick={scrollToSection} />
      </div>
      {contentData.landingPage && (
        <div className="mainDiv" ref={homeRef}>
          <HomeSection
            content={contentData.landingPage[0]}
            onCtaClick={scrollToSection}
          />
        </div>
      )}
      {contentData.aboutPage && (
        <div className="mainDiv" ref={aboutRef}>
          <About content={contentData.aboutPage[0]} />
        </div>
      )}
      <div ref={projectsRef}>
        {contentData.contentPage &&
          contentData.contentPage.map((item) => (
            <div className="mainDiv" ref={backgroundRef} key={item.sys.id}>
              <ContentSection content={item} />
            </div>
          ))}
      </div>
      {contentData.contactPage && (
        <div className="mainDiv" id="contactSection" ref={contactRef}>
          <ContactPage content={contentData.contactPage[0]} />
        </div>
      )}
    </div>
  );
}

export default App;
