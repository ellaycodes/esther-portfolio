import IconLabel from "./IconLabel";

function ContactPage({ content }) {
  return (
    <>
      <h1>{content.fields.title}</h1>
      <p>{content.fields.subtitle}</p>
      {content.fields.contactInfo.map((info) => (
        <IconLabel key={info.sys.id} content={info.sys.id} />
      ))}
    </>
  );
}

export default ContactPage;
