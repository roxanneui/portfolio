// import React from "react";
// import "./ProjectPage.css";
// import Header from "./Header";
// import Footer from "./Footer";

// export default function ProjectPage({ title, description, skills, images }) {
//   return (
//     <>
//       <Header />
//       <div className="project-page">
//         <div className="project-content">
//             <div className="project-text">
//                 <h1>{title}</h1>
//                 <p>{description}</p>
//                 <div className="skills">
//                     {skills.map((skill, index) => (
//                         <span key={index} className="skill-pill">{skill}</span>
//             ))}
//         </div>
//         </div>

//         <div className="project-images">
//             {images.map((image, index) => (
//                 <img key={index} src={image} alt={`Projet ${title} ${index + 1}`} />
//         ))}
//             </div>
//         </div>
//     </div>
//       <Footer />
//     </>
//   );
// }

import React from "react";
import "./ProjectPage.css";
import Header from "./Header";
import Footer from "./Footer";

export default function ProjectPage({ title, description, skills, images }) {
  return (
    <>
      <Header />
      <div className="project-page">
        <div className="left-column">
          <h1 className="project-title">{title}</h1>
          <p className="project-description">{description}</p>
          <div className="skill-pills">
            {skills.map((skill, index) => (
              <span key={index} className="pill">{skill}</span>
            ))}
          </div>
        </div>

        <div className="right-column">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Projet ${title} ${index + 1}`}
              className="project-image"
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
