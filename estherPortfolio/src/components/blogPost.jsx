import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getEntryById } from "../api/api";
import { getAssetById } from "../api/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import "../css/blog.css";
import BackToTop from './backToTop.jsx';

function BlogPost() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);

  useEffect(() => {
    getEntryById(postId).then((res) => {
      setPost(res.data.fields);
    });
  }, [postId]);

  useEffect(() => {
    getAssetById(post?.imageOrVideo.sys.id).then((res) => {
      setVideoUrl(res.data.fields.file.url);
    });
  }, [post]);

  if (!post) return null;

  return (
    <>
      <div className="blogPost">
        <h1>{post.title}</h1>
        <video
          autoPlay
          muted
          loop
          id="blogVideo"
          src={videoUrl}
          style={{
            width: "100%",
            height: "35vh",
            objectFit: "cover",
            pointerEvents: "none",
            filter: "brightness(50%)",
          }}
        ></video>
        <p>{post.slug}</p>
        <p>{post.publishedDate}</p>
        <a href={post.link}>View the project here</a>
        <div>{documentToReactComponents(post.description)}</div>
      </div>
      <BackToTop page={'blog'}/>
    </>
  );
}

export default BlogPost;
