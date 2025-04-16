import ContentCard from "./contentCard.jsx";

function ContentSection({ content }) {
  return (
    <>
      <h1>{content.fields.title}</h1>
      <p>{content.fields.cta}</p>
      {content.fields.contentCard &&
        content.fields.contentCard.map((item) => (
          <ContentCard key={item.sys.id} content={item.sys.id} />
        ))}
      {/* <pre>{JSON.stringify(content, null, 8)}</pre> */}
    </>
  );
}

export default ContentSection;
