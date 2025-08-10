import evon from "./images/evon-auto.png";
import learnconsult from "./images/learnconsult.png";

const EXPERIENCE_DATA = [
  {
    title: "Learnconsult GmbH",
    content: [
      "Entwicklung interaktiver Benutzeroberflächen mit Angular unter Anbindung von RESTful Backend-Services",
      "Wordpress Entwicklung: PHP und JavaScript-Entwicklung",
      "Verwaltung von Domänen, SSL Zertifikaten, Webspaces(Erstellung und Konfiguration), Datenbanken (Erstellung undVerbindung mit Webspaces), WordPress Installation und Konfiguration, FTP-Zugangsverwaltung sowie grundlegende Serverkonfiguration",
      "Verantwortlich für den Deployment-Prozess vonWebanwendungen und die Sicherstellung der Funktionalitätund Benutzerfreundlichkeit durch umfassende Tests",
    ],
    alternative: "APG Transparency Visualisierungen",
    img: `${learnconsult}`,
    link: "https://www.learnconsult.com",
    icons: [
      "fa-brands fa-html5",
      "fa-brands fa-css3",
      "fa-brands fa-js",
      "fa-brands  fa-angular",
      "fa-brands fa-npm",
      "fa-brands fa-php",
      "fa-brands fa-wordpress",
      "fa-solid fa-database",
      "fa-solid fa-server",
    ],
  },
  {
    title: "evon GmbH",
    content: [
      "Kunden/System-Integration Support",
      "C#/WPF Entwicklung",
      "Software Testing",
    ],
    alternative: "evon GmbH",
    img: `${evon}`,
    link: "https://evon-automation.com/",
    icons: [
      "fa-solid fa-code",
      "fa-solid fa-headset",
      "fa-solid fa-terminal",
      "fa-solid fa-database",
      "fa-solid fa-server",
    ],
  },
];
// {
//     title: "Ingenium Education GmbH",
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     alternative: "Ingenium Education GmbH - Kolleg für Informatik",
//     img: `${kolleg}`,
//     link: "https://www.ingenium.co.at/",
//     icons: [
//       "fa-brands fa-html5",
//       "fa-brands  fa-css3",
//       "fa-brands fa-square-js",
//       "fa-brands  fa-angular",
//       "fa-brands fa-react",
//       "fa-brands fa-java",
//       "fa-solid fa-database",
//       "fa-solid fa-server",
//     ],
//   },
export default EXPERIENCE_DATA;
