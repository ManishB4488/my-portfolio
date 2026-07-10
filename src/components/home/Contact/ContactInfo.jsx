import contact from "../../../data/contact";
import Card from "../../common/Card";

function ContactInfo() {
  return (
    <Card>

      <h3 className="text-3xl font-bold mb-8">
        Let's Connect
      </h3>

      <div className="space-y-6">

        <div>

          <p className="text-zinc-500">
            Email
          </p>

          <a
            href={`mailto:${contact.email}`}
            className="text-cyan-400"
          >
            {contact.email}
          </a>

        </div>

        <div>

          <p className="text-zinc-500">
            Location
          </p>

          <p>
            {contact.location}
          </p>

        </div>

        <div>

          <p className="text-zinc-500">
            LinkedIn
          </p>

          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400"
          >
            View Profile
          </a>

        </div>

        <div>

          <p className="text-zinc-500">
            GitHub
          </p>

          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400"
          >
            View Repositories
          </a>

        </div>

      </div>

    </Card>
  );
}

export default ContactInfo;