import ContactForm from "./ContactForm";

function ContactCard({ contact_pic }) {
  return (
    <>
      <div className="flex flex-col md:flex-row w-full min-h-screen bg-gray-100">
        {/* Image container */}
        <div className="w-4/5 md:w-1/2 mx-auto md:mx-0">
          <img
            src={contact_pic}
            alt="Kayak on a lake at sunset"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form container */}
        <div className="w-4/5 md:w-1/2 mx-auto md:mx-0 -mt-20 md:mt-0 bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
          <ContactForm />
        </div>
      </div>

      {/* ################################################################ */}
      <div className="p-4 flex flex-col lg:flex-row">
        <div className="bg-text-light flex flex-col lg:flex-row shadow-lg rounded-lg ring-2 ring-red">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src={contact_pic}
              alt="Kayak on a lake at sunset"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Contact Form Section */}
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default ContactCard;
