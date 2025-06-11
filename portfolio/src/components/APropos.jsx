import React from "react";
import "./APropos.css";
import { useLanguage } from "../context/LanguageContext.jsx";

const content = {
  fr: [
    {
      title: "À la recherche d'une alternance dès septembre 2025 !",
      contents: [
        "Passionée par les technologies et les arts visuels, j'ai commencé mon parcours en design graphique, où j'ai appris à donner forme aux idées et à explorer la direction artistique. Aujourd'hui, je me spécialise en UI/UX pour allier design et expérience utilisateur. Je serai en formation bac +3 à ITECOM Paris dès septembre. Curieuse et investie, j'aime tester, comprendre les outils digitaux et réfléchir à l'application du design dans notre quotidien digital. Je prépare présentement la certification Google UX design. Je suis ravie de me former plus en profondeur à l’UX, notamment au notions d’accessibilité ! Je renforce mes compétences clées de future UI UX designer tout les jours. Je suis prête à mettre mes compétences et ma créativité au service de problématiques concrètes. J’ai envie de progresser dans une équipe de passionnés !"
      ]
    },
    {
      title: "Une passionnée de technologies",
      contents: [
        "Depuis mon plus jeune âge, je suis curieuse des possibilités infinies des pixels. Jeux vidéos, programmation, réseaux sociaux, webdesign, IA. Je veux créer, innover et travailler avec et pour le digital ! J’ai envie de comprendre comment les humains interagissent avec la technologie et imaginer de nouvelles solutions. Formée à l’intégration web (HTML, CSS, JS) depuis le lycée, j’aime comprendre les contraintes techniques et collaborer avec les développeurs. Pour moi, le digital c’est aussi partager, échanger et progresser en permanence !"
      ]
    },
    {
      title: "Discutons ensemble",
      contents: [
        "Un poste, un projet, une question ou simplement envie d’échanger sur le design et le digital ? N’hésitez pas à me contacter ! Je serai ravie de discuter de vos besoins, de partager des idées et de voir comment je peux contribuer."
      ]
    }
  ],
  en: [
    {
      title: "Seeking an apprenticeship from September 2025!",
      contents: [
        "Driven by a passion for technology and visual arts, I started out in graphic design, learning to bring ideas to life and explore art direction. Now, I’m specializing in UI/UX to blend design with user experience. This September, I’ll begin a bac +3 program at ITECOM Paris. Curious and committed, I enjoy experimenting, exploring digital tools, and considering how design shapes our digital lives. I’m currently preparing for the Google UX Design certification and look forward to deepening my knowledge of UX, especially accessibility! Every day, I strengthen my core skills as a future UI/UX designer. Ready to apply my creativity to real-world challenges, I’m eager to grow within a passionate team!"
      ]
    },
    {
      title: "A technology enthusiast",
      contents: [
        "Since I was very young, I have been curious about the endless possibilities of pixels. Video games, programming, social networks, web design, AI. I want to create, innovate, and work with and for digital technology! I want to understand how humans interact with technology and imagine new solutions. Trained in web integration (HTML, CSS, JS) since high school, I enjoy understanding technical constraints and collaborating with developers. For me, digital is also about sharing, exchanging, and continuously improving!"
      ]
    },
    {
      title: "Let’s connect",
      contents: [
        "A job, a project, a question, or simply want to chat about design and digital? Feel free to reach out! I’d be delighted to discuss your needs, share ideas, and see how I can contribute."
      ]
    }
  ]
};

const mainTitles = {
  fr: "Étudiante en UI UX design à Paris",
  en: "Student in UI/UX Design in Paris"
};

const signatures = {
  fr: "- Roxanne",
  en: "- Roxanne"
};

function Apropos() {
  const { language } = useLanguage();
  const paragraphs = content[language];

  return (
    <section className="apropos-container">
      <h1 className="main-title">{mainTitles[language]}</h1>

      <div className="paragraphs">
        {paragraphs.map((para, idx) => (
          <div className="paragraph" key={idx}>
            <h3>{para.title}</h3>
            {para.contents.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
        ))}
      </div>
      <p className="signature">
        {signatures[language]}
      </p>
    </section>
  );
}

export default Apropos;
