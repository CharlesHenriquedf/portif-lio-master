import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialnetworkcontainer.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />, hr: "https://www.linkedin.com/in/charles-henriquedf" },
 
  { name: "github", icon: <FaGithub />, hr: "https://github.com/CharlesHenriquedf" },
  
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.hr} target="_blank" className="social-btn" id={network.name} key={network.name}>
          {network.icon} 
        </a>
      ))}
    </section>
  );
};

export default SocialNetworkContainer;
