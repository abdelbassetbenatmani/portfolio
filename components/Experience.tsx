import React from "react";
import SubTitle from "./SubTitle";
const Experience = () => {
  const experiences = [
    {
      title: " Full stack developer",
      company: "QuikQuery",
      location: "REMOTE",
      period: "Oct 2024 - PRESENT",
      type: "PART TIME",
      description: "**QuikQuery** is a Retrieval-Augmented Generation (RAG) as a Service platform that enables users to effortlessly extract information from their documents through semantic search and natural language queries. It supports a wide range of data sources, including PDFs, Google Docs, Excel/CSV files, Notion, Confluence, and web URLs. With features like intent detection, metadata filtering, and a powerful API, QuikQuery makes it easy to build intelligent document-based workflows. It also offers seamless integrations such as a web widget for embedding on websites and Slack integration for internal team access."
    },
    {
      title: "Frontend Developer",
      company: "Elmintad",
      location: "REMOTE",
      period: "MAR 2024 - DEC 2024",
      type: "FULL TIME",
      description: "**Elmintad** is a Turkish travel platform that offers a seamless and user-friendly experience for planning and booking trips online. It allows users to explore a variety of travel options, including guided tours, custom itineraries, and local experiences across Turkey. Through its website, customers can browse destinations, view trip details, and make reservations with ease. Elmintad simplifies the travel booking process by combining intuitive design with reliable service, making it an ideal choice for both domestic and international travelers looking to discover the rich culture and landscapes of Turkey."
    },
    {
      title: "Full stack developer",
      company: "MyFloraboard",
      location: "REMOTE",
      period: "JAN 2024 - MAR 2024",
      type: "Full TIME",
      description: "MyFloraboard is a specialized platform designed to streamline and simplify the organization of plant libraries for florists, garden centers, and landscape professionals. It offers an intuitive and visually engaging interface that allows users to create dynamic plant catalogs with rich imagery and detailed metadata. With advanced filtering tools, users can quickly sort and browse through plant collections based on categories such as species, color, seasonality, and availability. The platform enhances productivity by reducing manual catalog management and enabling more efficient planning, presentation, and communication with clients or teams. MyFloraboard is ideal for professionals looking to maintain a well-structured, visually appealing, and easily accessible digital plant library."
    }
  ];

  return (
    <div className="text-slate-200 font-[Inter] bg-[#0A192F] min-h-screen">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex items-center mb-2">
          <SubTitle>My Work</SubTitle>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-10 md:mb-12">
          MY WORK <span className="text-blue-500">EXPERIENCE</span>
        </h1>

        {experiences.map((experience, idx) => (
          <div
            key={idx}
            className="gredient2 rounded-lg p-6 mb-8 grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            <div className="bg-[#0788FF] text-white p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-1">{experience.title}</h2>
              <p className="text-sm text-slate-100 mb-1">{experience.company} | {experience.location}</p>
              <p className="text-xs text-slate-200 mb-4">{experience.period}</p>
              <span className="bg-white text-black text-xs font-semibold px-3 py-1 rounded-full inline-block">
                {experience.type}
              </span>
            </div>
            <div className="text-slate-200 md:col-span-3">
              <h3 className="text-2xl font-semibold mb-3 text-white">
                About Company
              </h3>
              <p className="text-sm leading-relaxed">
                {experience.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Experience;
