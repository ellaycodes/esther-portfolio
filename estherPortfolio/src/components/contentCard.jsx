import { getEntryById } from "../api/api";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { getAssetById } from "../api/api";

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
    <>
      <img src={imageUrl} alt="" width={100} />
      <h2>{contentData.title}</h2>
      <p>{contentData.subtitle}</p>
      {contentData.info ? (
        <p>
          <ReactMarkdown>{contentData.info}</ReactMarkdown>
        </p>
      ) : null}
      {/* <pre>{JSON.stringify(contentData, null, 4)}</pre> */}
    </>
  );
}

export default ContentCard;
