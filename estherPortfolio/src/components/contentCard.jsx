import { getEntryById } from "../api/api";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { getAssetById } from "../api/api";
import "../css/content.css";

function ContentCard({ content }) {
  const [contentData, setContentData] = useState({});
  const [imageUrl, setImageUrl] = useState({});

  useEffect(() => {
    getEntryById(content).then((res) => {
      setContentData(res.data.fields);
    });
  }, [content]);

  useEffect(() => {
    if (!contentData.logo) return;
    getAssetById(contentData?.logo?.sys.id).then((res) => {
      setImageUrl(res.data.fields.file.url);
    });
  }, [contentData.logo]);

  return (
    <div className={"contentCard" + (contentData.info ? " infoCard" : "")}>
      <img
        className={contentData.info ? "logo" : "cover"}
        src={imageUrl}
        alt=""
      />
      <h2 className="contentCardTitle">{contentData.title}</h2>

      {contentData.subtitle && contentData.subtitle.includes("/n") ? (
        <p>
          {contentData.subtitle.split("/n").map((line, index) => (
            <span
              key={index}
              className={index === 0 ? "firstLine" : "nextLine"}
            >
              {line}
              {index !== contentData.subtitle.split("/n").length - 1 && <br />}
            </span>
          ))}
        </p>
      ) : (
        <p>
          <span className="firstLine">{contentData.subtitle}</span>
        </p>
      )}

      {contentData.info ? (
        <div className="contentCardInfo">
          <ReactMarkdown className={contentData.info.split('-').length > 12 ? 'multi-column' : ''}>{contentData.info}</ReactMarkdown>
        </div>
      ) : null}
    </div>
  );
}

export default ContentCard;
