import SEO from "../components/common/SEO";

import Hero from "../components/contact/Hero";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";

function Contact() {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Sun & Shadow Group for solar solutions, aquarium services, digital marketing, or any business inquiries."
        keywords="Contact Sun & Shadow Group, Solar Company Contact, Aquarium Services Contact, Digital Marketing Contact"
        url="https://sunandshadow.in/contact"
      />

      <Hero />
      <ContactInfo />
      <ContactForm />
    </>
  );
}

export default Contact;