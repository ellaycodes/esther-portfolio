import ContentCard from "./contentCard.jsx";
import '../css/content.css'

function ContentSection({ content }) {
  return (
    <div className="contentSection">
      <div className="contentSectionHeader">
        <h1>{content.fields.title}</h1>
        <p>{content.fields.cta}</p>
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
