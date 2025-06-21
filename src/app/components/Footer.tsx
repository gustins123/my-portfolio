// src/components/Footer.tsx

import {
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaArtstation,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  // TODO: Replace with your actual social media links
  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/gustavs-veitners-61a63733a/",
    github: "https://github.com/gustins123",
    youtube: "https://www.youtube.com/@gustavsveitners7930",
    artstation: "https://www.artstation.com/gustins",
    instagram: "https://www.instagram.com/gustinsv/",
  };

  return (
    <footer className="w-full bg-black py-8">
      <div className="container mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-foreground/60 transition-colors hover:text-primary"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-foreground/60 transition-colors hover:text-primary"
        >
          <FaGithub size={24} />
        </a>
        <a
          href={socialLinks.youtube}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className="text-foreground/60 transition-colors hover:text-primary"
        >
          <FaYoutube size={24} />
        </a>
        <a
          href={socialLinks.artstation}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="ArtStation"
          className="text-foreground/60 transition-colors hover:text-primary"
        >
          <FaArtstation size={24} />
        </a>
        <a
          href={socialLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-foreground/60 transition-colors hover:text-primary"
        >
          <FaInstagram size={24} />
        </a>
      </div>
      <div className="mt-6 text-center text-sm text-foreground/50">
        <p>© {new Date().getFullYear()} Gustavs Veitners. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;