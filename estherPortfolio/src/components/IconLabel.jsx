import { useState, useEffect } from "react";
import { getEntryById } from "../api/api";
import { getAssetById } from "../api/api";
import "../css/contact.css";

function IconLabel({ content }) {
  const [imageUrl, setImageUrl] = useState({});
  const [contentData, setContentData] = useState({});

  useEffect(() => {
    if (!contentData.icon) return;
    getAssetById(contentData.icon.sys.id).then((res) => {
      setImageUrl(res.data.fields.file.url);
    });
  }, [contentData.icon]);

  useEffect(() => {
    getEntryById(content).then((res) => {
      setContentData(res.data.fields);
    });
  }, [content]);

  return (
    <div className="iconLabel">
      {imageUrl && <img className="icon" src={imageUrl} alt="" width={100} />}
      <div className="labelGroup" >
        {contentData.title && <p className="title" >{contentData.title}</p>}
        {contentData.label && <p className="label" >{contentData.label}</p>}
      </div>
    </div>
  );
}

export default IconLabel;
