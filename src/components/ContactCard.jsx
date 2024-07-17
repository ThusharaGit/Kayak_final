import ContactForm from "./ContactForm";

function ContactCard({ contact_pic }) {
  return (
    <>
      <div className="relative  flex flex-col md:flex-row w-full">
        {/* Image container */}
        <div className=" w-full h-[650px] md:w-1/2 mx-auto md:mx-0">
          <img
            src={contact_pic}
            alt="Kayak on a lake at sunset"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form container */}
        <div className="absolute md:static top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0 w-4/5 md:w-1/2 bg-main-text-light opacity-70 rounded-lg shadow-lg">
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default ContactCard;
