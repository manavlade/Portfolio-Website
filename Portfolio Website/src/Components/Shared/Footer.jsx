import { Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/manav-lade/",
      icon: <Linkedin className="w-6 h-6 hover:scale-125 transform transition-transform duration-200 cursor-pointer" />,
    },
    {
      href: "https://github.com/manavlade",
      icon: <Github className="w-6 h-6 hover:scale-125 transform transition-transform duration-200 cursor-pointer" />,
    },
    {
      href: "mailto:manavlade14690@gmail.com?subject=Hello%20Manav&body=I%20would%20like%20to%20connect%20regarding...",
      icon: <Mail className="w-6 h-6 hover:scale-125 transform transition-transform duration-200 cursor-pointer" />,
    },
  ];

  return (
    <footer className="w-full py-10 text-center bg-white text-black border-t">
      {/* Catchy Line */}
      <p className="text-lg font-medium mb-2">
        Turning ideas into AI-powered products — full-stack engineered from concept to deploymen
      </p>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mt-4">
        {socialLinks.map((link, idx) => (
          <a key={idx} href={link.href} target="_blank" rel="noopener noreferrer">
            {link.icon}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p className="text-sm mt-6 opacity-70">
        © {new Date().getFullYear()} Manav Lade • AI Full-Stack Developer
      </p>
    </footer>
  );
}
