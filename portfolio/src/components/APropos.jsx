import React from "react";
import "./APropos.css";
import { useLanguage } from "../context/LanguageContext.jsx";

const content = {
  fr: [
    {
      title: "À la recherche d'une formation niveau Master dès septembre 2026 !",
      contents: [
        "Curieuse et passionnée par le digital, le design UI/UX et les nouvelles technologies, je souhaite intégrer un master afin de perfectionner mes compétences et me préparer aux métiers du numérique de demain."
      ]
    },
    {
      title: "Mon parcours",
      contents: [
        "Après 2 ans en design graphique, j’ai appris à développer une sensibilité visuelle et à explorer la direction artistique. Aujourd’hui, je me spécialise en UI/UX design afin de concevoir des expériences utiles, intuitives et centrées sur l’utilisateur.Je poursuis actuellement une formation Bac+3 à ITECOM Paris. J’aime tester, comprendre et analyser les outils digitaux, tout en réfléchissant à l’impact du design dans notre quotidien numérique. Je porte un intérêt particulier aux notions d’accessibilité. Formée à l’intégration web (HTML, CSS, JavaScript) depuis le lycée, je comprends les contraintes techniques et apprécie la collaboration avec les développeurs. Le digital représente pour moi un espace d’apprentissage continu, d’expérimentation et de partage. Motivée par des projets concrets et porteurs de sens, je souhaite continuer à développer mes compétences au sein d’un master exigeant, en me préparant à intégrer des équipes pluridisciplinaires dans les métiers du numérique."
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
      title: "Seeking a master degree from September 2025!",
      contents: [
        "Curious and passionate about digital technologies, UI/UX design, and emerging technologies, I aim to pursue a master’s degree to refine my skills and prepare for the digital careers of tomorrow."
      ]
    },
    {
      title: "My journey",
      contents: [
        "After two years in graphic design, I learned how to turn ideas into visual concepts, develop a strong visual sensitivity, and explore art direction. Today, I am specializing in UI/UX design to create useful, intuitive, and user-centered experiences.I am currently completing a Bachelor’s degree (Bac+3 equivalent) at ITECOM Paris. Curious and highly engaged, I enjoy testing, understanding, and analyzing digital tools while reflecting on the impact of design in our everyday digital lives. I have a strong interest in accessibility, which I consider essential to designing responsible and inclusive interfaces.Trained in web integration (HTML, CSS, JavaScript) since high school, I understand technical constraints and value close collaboration with developers. For me, digital design is a space for continuous learning, experimentation, and knowledge sharing.Driven by meaningful, real-world projects, I aim to further develop my skills through a demanding master’s program and prepare to work within multidisciplinary teams in the digital field."
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
