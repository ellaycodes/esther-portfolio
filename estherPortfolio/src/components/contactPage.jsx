import IconLabel from "./IconLabel";
import '../css/contact.css';

function ContactPage({ content }) {
  return (
    <div className="contactPage">
      <h1 className="contactTitle">{content.fields.title}</h1>
      <p className="contactSubtitle">{content.fields.subtitle}</p>
      <div className="contactInfo">
      {content.fields.contactInfo.map((info) => (
        <IconLabel key={info.sys.id} content={info.sys.id} />
      ))}
      </div>
    </div>
  );
}

export default ContactPage;
