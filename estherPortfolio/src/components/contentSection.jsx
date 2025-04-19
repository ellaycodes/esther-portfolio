import ContentCard from "./contentCard.jsx";
import "../css/content.css";
import { useEffect, useState } from 'react'
import { getAssetById } from "../api/api.js";

function ContentSection({ content }) {
  if (!content.fields) return null;
  
  const [pdf, setPdf] = useState({});
  
  useEffect(() => {
    if (!content.fields.pdf) return;
    getAssetById(content.fields.pdf.sys.id).then((res) => {
      setPdf(res.data.fields.file.url);
    }
    );
  }, [])

  const downloadPdf = async () => {
    let url = pdf;
    if (url.startsWith('//')) {
      url = window.location.protocol + url; // e.g. https://assets.ctfassets.net/…
    }
  
    const res = await fetch(url, { mode: 'cors' });
    if (!res.ok) throw new Error('Failed to fetch PDF');
  
    const blob = await res.blob();
    const blobUrl = URL.createObjectURL(blob);
  
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = 'CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  
    URL.revokeObjectURL(blobUrl);
  };
  

  return (
    <div className="contentSection">
      <div className="contentSectionHeader">
        <h1>{content.fields.title}</h1>
        {content.fields.cta ? (
          <p
            className="cta"
            onClick={
              content.fields.cta.toLowerCase().includes("cv")
                ? downloadPdf
                : undefined
            }
          >
            {content.fields.cta}
          </p>
        ) : (
          <p className="subtitle">{content.fields.subtitle}</p>
        )}
      </div>
      <div className="cards">
        {content.fields.contentCard &&
          content.fields.contentCard.map((item) => (
            <ContentCard key={item.sys.id} content={item.sys.id} />
          ))}
      </div>
    </div>
  );
}

export default ContentSection;
