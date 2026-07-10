import Card from "../../common/Card";
import Button from "../../common/Button";

function ContactForm() {
  return (
    <Card>

      <form className="space-y-5">

        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-700"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-700"
        />

        <input
          type="text"
          placeholder="Subject"
          className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-700"
        />

        <textarea
          rows="6"
          placeholder="Message"
          className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-700"
        />

        <Button>

          Send Message

        </Button>

      </form>

    </Card>
  );
}

export default ContactForm;