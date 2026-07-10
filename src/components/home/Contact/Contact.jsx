import Container from "../../common/Container";
import SectionTitle from "../../common/SectionTitle";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section className="py-28">

      <Container>

        <SectionTitle
          subtitle="CONTACT"
          title="Let's Work Together"
        />

        <div className="grid lg:grid-cols-2 gap-10 mt-16">

          <ContactInfo />

          <ContactForm />

        </div>

      </Container>

    </section>
  );
}

export default Contact;