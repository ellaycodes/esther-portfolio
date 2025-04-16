import { useEffect, useState } from "react";
import { getAssetById } from "../api/api";
import "../css/about.css";
import ReactMarkdown from "react-markdown";

function About({ content }) {
  const [imageUrl, setImageUrl] = useState({});

  useEffect(() => {
    getAssetById(content.fields.profilePhoto.sys.id).then((res) => {
      setImageUrl(res.data.fields.file.url);
    });
  }, []);

  return (
    <div className="aboutSection">
      <div className="aboutSectionText">
        <h1>{content.fields.title}</h1>
        <div>
          <ReactMarkdown>{content.fields.aboutMeText}</ReactMarkdown>
        </div>
      </div>
      <div className="profile">
        <img src={imageUrl} alt="Image of Esther Yekini" />
      </div>
    </div>
  );
}

export default About;
