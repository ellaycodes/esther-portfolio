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

  let href;
  if (!contentData.label) return null;
  const title = contentData.title?.toLowerCase();
  if (title === 'phone') {
    href = `tel:${contentData.label}`;
  } else if (title === 'email') {
    href = `mailto:${contentData.label}`;
  } else {
    // assume anything else is a URL for social links
    href = contentData.label;
  }

  const Wrapper = href ? 'a' : 'div';
  const wrapperProps = href
    ? { href, target: title === 'phone' || title === 'email' ? undefined : '_blank', rel: '_blank' ? 'noopener noreferrer' : undefined }
    : {};

    return (
      <Wrapper className="iconLabel" {...wrapperProps}>
        {imageUrl && (
          <img
            className="icon"
            src={imageUrl}
            alt={contentData.title || ''}
          />
        )}
        <div className="labelGroup">
          {contentData.title && <p className="title">{contentData.title}</p>}
          {/* {contentData.label && <p className="label">{contentData.label}</p>} */}
        </div>
      </Wrapper>
    );
}

export default IconLabel;
