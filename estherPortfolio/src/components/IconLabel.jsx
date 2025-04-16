import { useState, useEffect } from "react";
import { getEntryById } from "../api/api";
import { getAssetById } from "../api/api";

function IconLabel({ content }) {
    const [imageUrl, setImageUrl] = useState({});
    const [contentData, setContentData] = useState({});

    useEffect(() => {
        if (!contentData.icon) return;
        getAssetById(contentData.icon.sys.id).then((res) => {
            setImageUrl(res.data.fields.file.url);
        });
    }
    , [contentData.icon]);

    useEffect(() => {
        getEntryById(content).then((res) => {
            setContentData(res.data.fields);
        });
    }, [content]);

    return (
        <>
        <div>
            {imageUrl && <img src={imageUrl} alt="" width={100}/>}
            {contentData.title && <p>{contentData.title}</p>}
            {contentData.label && <p>{contentData.label}</p>}
        </div>
        </>
    )
}

export default IconLabel;