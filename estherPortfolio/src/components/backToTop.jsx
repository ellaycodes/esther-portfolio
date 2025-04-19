import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllAssets } from "../api/api";
import '../App.css'

function BackToTop({ page }) {
  const [imageUrl, setimageUrl] = useState(null);

  useEffect(() => {
    getAllAssets().then((res) => {
      const image = res.data.items.find(item => item.fields.title.toLowerCase() === 'arrow');
      if (image) {
        setimageUrl(image.fields.file.url);
      }
    });
  }, []);

  return <Link to="/" className="backToTop" onClick={() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }}>
    <img src={imageUrl} style={page != 'app' ? {transform: 'rotate(-0.25turn)'} : null}/>
    {page != 'app' ? <p>Home</p> : null}
  </Link>
}

export default BackToTop;
