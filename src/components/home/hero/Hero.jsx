import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import Container from "../../common/Container";

function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <Container>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <HeroContent />

          <HeroImage />

        </div>

      </Container>
    </section>
  );
}

export default Hero;