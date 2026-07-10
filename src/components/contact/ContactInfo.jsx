import {
  Mail,
  Phone,
  MapPin,
  FolderGit2,
  UserRound,
} from "lucide-react";

function ContactInfo() {
  return (
    <div className="space-y-8">

      <h2 className="text-4xl font-bold">
        Let's Connect
      </h2>

      <p className="text-zinc-400 leading-8">
        I'm currently looking for internships,
        freelance opportunities and exciting
        frontend development projects.
      </p>

      <div className="space-y-6">

        <div className="flex items-center gap-4">
          <Mail className="text-cyan-400" />
          <span>bishtmanish4488@gmail.com</span>
        </div>

        <div className="flex items-center gap-4">
          <MapPin className="text-cyan-400" />
          <span>Dehradun, India</span>
        </div>

        <div className="flex items-center gap-4">
          <FolderGit2 className="text-cyan-400" />
          <a
            href="https://github.com/ManishB4488"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>

        <div className="flex items-center gap-4">
          <UserRound className="text-cyan-400" />
          <a
            href="https://www.linkedin.com/in/manish-bisht-b546592b0"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

      </div>

    </div>
  );
}

export default ContactInfo;