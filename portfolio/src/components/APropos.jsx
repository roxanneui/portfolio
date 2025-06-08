import React from "react";
import "./APropos.css";
import { useLanguage } from "../context/LanguageContext.jsx";

const content = {
  fr: [
    {
      title: "À la recherche d'une alternance dès septembre 2025 !",
      contents: [
        "Animée par la passion des technologies et des arts visuels, j'ai débuté en design graphique, où j'ai appris à concrétiser des idées et à explorer la direction artistique. Aujourd'hui, je me spécialise en UI/UX pour associer design et expérience utilisateur. Dès septembre, j'intégrerai une formation bac +3 à ITECOM Paris. Curieuse et impliquée, j'aime expérimenter, comprendre les outils digitaux et réfléchir à l'impact du design dans notre quotidien numérique. Je prépare actuellement la certification Google UX Design et me réjouis d'approfondir l’UX, notamment les questions d’accessibilité ! Je développe chaque jour mes compétences clés de future UI/UX designer. Prête à mettre ma créativité au service de projets concrets, j’aspire à évoluer au sein d’une équipe passionnée !"
      ]
    },
    {
      title: "Une passionnée de technologies",
      contents: [
        "Depuis toujours, je m'intéresse aux possibilités infinies offertes par le digital : jeux vidéo, programmation, réseaux sociaux, webdesign, IA... J’ai envie de créer, d’innover et de contribuer à l’univers numérique ! Comprendre comment les utilisateurs interagissent avec la technologie et imaginer de nouvelles solutions me motive. Formée à l’intégration web (HTML, CSS, JS) dès le lycée, j’apprécie de saisir les contraintes techniques et de collaborer avec les développeurs. Pour moi, le digital, c’est aussi partager, échanger et progresser continuellement !"
      ]
    },
    {
      title: "Échangeons ensemble",
      contents: [
        "Un poste, un projet, une question ou simplement envie de discuter design et digital ? N’hésitez pas à me contacter ! Je serais ravie d’échanger sur vos besoins, de partager des idées et de voir comment je peux contribuer."
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
        "Since childhood, I’ve been fascinated by the endless possibilities of digital: video games, programming, social media, web design, AI... I want to create, innovate, and contribute to the digital world! Understanding how people interact with technology and imagining new solutions inspires me. Trained in web integration (HTML, CSS, JS) since high school, I enjoy understanding technical constraints and collaborating with developers. For me, digital is also about sharing, exchanging ideas, and constantly improving!"
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
  fr: "- Roxanne Landry, étudiante en design graphique et UX UI à Paris.",
  en: "- Roxanne Landry, graphic design and UX/UI student in Paris."
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
