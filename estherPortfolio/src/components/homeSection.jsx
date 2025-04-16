import { useEffect, useState } from "react";
import { getAssetById } from "../api/api";
import "../css/home.css";

function HomeSection({ content, onCtaClick }) {
  const [imageUrl, setImageUrl] = useState({});

  useEffect(() => {
    getAssetById(content.fields.logo.sys.id).then((res) => {
      setImageUrl(res.data.fields.file.url);
    });
  }, []);

  return (
    <div className="homeSection">
      {imageUrl && <img className="homeLogo" src={imageUrl} alt="" />}
      <div className="homeSectionText">
        <h1>
          {
            <>
              <span className="colouredText">
                {content.fields.title.split(" ")[0]}
              </span>{" "}
              <span>{content.fields.title.split(" ").slice(1).join(" ")}</span>
            </>
          }
        </h1>
        <p className="subtitle">{content.fields.subtitle}</p>
      </div>
      <a className="callToAction" onClick={() => onCtaClick("contact")}>
        <p>{content.fields.cta}</p>
      </a>
    </div>
  );
}

export default HomeSection;
