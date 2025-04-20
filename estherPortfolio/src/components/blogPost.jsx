import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getEntryById } from "../api/api";
import { getAssetById } from "../api/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import "../css/blog.css";
import BackToTop from "./backToTop.jsx";
import ContactPage from "./contactPage.jsx";

function BlogPost({ ContactContent }) {
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
    <div className="blogPostPage">
      <div className="blogPostContainer">
        <div className="blogPost">
          <video autoPlay muted loop id="blogVideo" src={videoUrl}></video>
          <div className="blogPostHeader">
            <h1>{post.title}</h1>
            <div className="blogPostHeaderInfo">
              <p className="tag">{post.publishedDate.split("T")[0]}</p>
              <a className="tag" href={post.link}>View the project here</a>
            </div>
          </div>
          <div>{documentToReactComponents(post.description)}</div>
        </div>
        <BackToTop page={"blog"} />
        <ContactPage content={ContactContent} />
      </div>
    </div>
  );
}

export default BlogPost;
