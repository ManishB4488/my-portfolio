import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";

import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";

function Contact() {
  return (
    <section className="py-24">

      <Container>

        <SectionTitle
          subtitle="CONTACT"
          title="Get In Touch"
        />

        <div className="grid lg:grid-cols-2 gap-20 mt-20">

          <ContactInfo />

          <ContactForm />

        </div>

      </Container>

    </section>
  );
}

export default Contact;