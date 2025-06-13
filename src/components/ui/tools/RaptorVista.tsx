import React from 'react';
import NavigationBar from '../common/NavigationBar';
import Footer from '../common/Footer';

import HeroesCommon from '../common/HeroesCommon';
import SectionTitle from '../common/SectionTittle';

const RaptorVista: React.FC = () => {





  return (
    <div className="dark bg-gradient-to-b from-[#1a0b2e] to-[#020317] min-h-screen overflow-x-hidden">

      <NavigationBar />
      <main className="pt-16 sm:pt-20">


        {/* RaptorVista Framework Hero Section */}
        <HeroesCommon
          align="left"
          title="A Web Automation Framework Made For The Future"
          description="RaptorVista is a leading web test automation framework technology made to overcome the hassle of test automation for all kinds of web solutions..."
          buttonText="Consult our Web Automation Experts"
          tag="RaptorVista" subtitle={''} />



        {/* Quality and Speed Section */}
        <section className=" border-1 border-red-500 relative">
          <div className="container mx-auto ">
            <div >
              <SectionTitle
                title="RaptorVista Assures Impeccable Web App Quality"
                para1="Made to rule the automation market, RaptorVista simplifies automation countering the potential pain areas of the client, right from the sync and timeout issues to flawed testing."
                para2="Be it lost collaborations or test failures that happen due to unsuitable version of third-party tools brought together, RaptorVista helps you keep things streamlined with the power of Modular Driven Framework, Keyword Driven Framework, Data-Driven Framework, & Behavior Driven Framework"
                align='left'
              />



              {/* Sleek Features Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                {[
                  "No Boiler Plate Code",
                  "Diverse Environment Support",
                  "Customized Reports",
                  "Load Test & Defect Tracking",
                  "Everything is externalized - Property Driven",
                  "Third-party Integration like Browser Stack",
                ].map((title, idx) => (
                  <div
                    key={idx}
                    className="relative bg-purple-900/20 border border-purple-700/25 rounded-md p-4 hover:border-purple-500 hover:bg-purple-900/30 transition-colors duration-300 cursor-pointer"
                  >
                    <h3 className="text-[#EDEADE] font-light  leading-[24px]  pb-2">
                      {title}
                    </h3>
                    <div className="w-10 h-[2px] bg-purple-500 rounded-full"></div>
                  </div>
                ))}
              </div>







            </div>
          </div>
        </section>

        {/* Third-Party Integrations Section */}
        <section className=" relative border-1 border-red-500">
          <div className="container mx-auto ">
            <div className=" mx-auto text-center">
              <SectionTitle
                title="Third-Party Integrations"
                para1="RaptorVista as a mobile test automation tool gives you all the command you need on working most complex test suites. Irrespective of the application(Conventional or Hybrid), MoboRaptors brings you best of test management, CI/CD Integrations, and Cloud testing advantage."
              />


              {/* Integration Logos */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center ">
                {[
                  { name: "JIRA", color: "text-blue-500" },
                  { name: "TestRail", color: "text-green-500" },
                  { name: "Jenkins", color: "text-red-500" },
                  { name: "BrowserStack", color: "text-yellow-500" },
                  { name: "SAUCE LABS", color: "text-purple-500" },
                ].map(({ name, color }, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center h-20 bg-gradient-to-tr from-white/5 to-white/10 rounded-lg border border-transparent
                 shadow-sm "
                  >
                    <span
                      className={`text-xl font-semibold tracking-wide ${color} select-none`}
                      style={{ userSelect: "none" }}
                    >
                      {name}
                    </span>
                  </div>
                ))}
              </div>



            </div>
          </div>
        </section>

        {/* Power of Four in One Framework Section */}
        <section className=" relative overflow-hidden border-1 border-red-500">
          {/* Background Blob - Larger, softer, and more strategically placed */}
          <div className="absolute -right-24 top-1/2 transform -translate-y-1/2 w-[40rem] h-[40rem]  rounded-full  pointer-events-none "></div>

          <div className="container mx-auto">
            <div className=" mx-auto space-y-16">
              {/* Top Content */}
              <div className="mb-12">
                <SectionTitle
                  title="Techniques Used"
                  para1="RaptorVista is a highly proficient and flexible web automation testing tool, based on the project size, and offers different frameworks using a combination of techniques such as: Modular Driven Framework, Keyword Driven Framework, Data Driven Framework, and Behavior Driven Framework."
                  align="left"
                />
              </div>

              {/* Bottom Content - Horizontal Timeline */}
              <div className="bg-gray-800/50 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl border border-blue-700/50 p-8 relative max-w-full">
                <div className="relative flex justify-between items-start max-w-full px-4  overflow-x-auto lg:overflow-visible">

                  {/* DYNAMIC DASHED GRADIENT LINE (Alternative to the solid line) */}
                  {/* This element will act as the connector between items */}
                  <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-0.5  via-indigo-600/50 to-indigo-700/50">
                    {/* We can use pseudo-elements or a small, repeating background here for actual dashes if needed
                 For simplicity with Tailwind, a very thin, slightly transparent gradient might be enough
                 to suggest a line without being a solid block. */}
                  </div>


                  {[{
                    number: "01",
                    title: "Modular Driven Framework",
                    description:
                      "Organized test structure with reusable modules for efficient test maintenance and scalability.",
                  },
                  {
                    number: "02",
                    title: "Keyword Driven Framework",
                    description:
                      "Simplified test creation using keywords that abstract complex operations for non-technical users.",
                  },
                  {
                    number: "03",
                    title: "Behavior Driven Framework",
                    description:
                      "BDD approach enabling collaboration between technical and business teams through readable scenarios.",
                  },
                  {
                    number: "04",
                    title: "Data Driven Framework",
                    description:
                      "Execute tests with multiple data sets from external sources for comprehensive coverage.",
                  }].map((item, index) => ( // Removed 'array' from map args as it wasn't used, making it cleaner
                    <div
                      key={item.number}
                      // Added ml-12 for spacing between items, but first item doesn't need it
                      className={`relative z-20 flex-shrink-0 w-64 flex flex-col items-center text-center px-4 group ${index > 0 ? 'ml-12' : ''
                        }`}
                    >
                      {/* Number Circle */}
                      <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-700 to-indigo-900
                text-white font-extrabold text-2xl flex items-center justify-center
                shadow-xl ring-4 ring-blue-900/60 transition-all duration-300 group-hover:scale-105 group-hover:ring-blue-700/70 mb-5">
                        {item.number}
                      </div>

                      {/* Content */}
                      <h3 className="text-blue-300 text-2xl font-semibold mb-3 transition-colors duration-300 group-hover:text-blue-200 group-hover:drop-shadow-lg group-hover:shadow-blue-500/30">{item.title}</h3>
                      <p className="text-gray-300 text-base leading-relaxed transition-colors duration-300 group-hover:text-gray-200">{item.description}</p>

                      {/* Dot on the horizontal line - Positioned relative to its parent item */}
                      <span className="absolute top-[3.7rem] left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full shadow-xl transition-all duration-300 group-hover:scale-125 group-hover:bg-blue-400"></span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className=" relative overflow-hidden border-1 border-red-500">
          {/* Background Blob - Larger, softer, and more strategically placed */}
          <div className="absolute -right-24 top-1/2 transform -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-l from-blue-700/10 to-transparent rounded-full blur-[100px] pointer-events-none opacity-80"></div>

          <div className="container mx-auto px-4">
            <div className=" space-y-16">
              {/* Top Content */}
              <div className="mb-12">
                <SectionTitle
                  title="Techniques Used"
                  para1="RaptorVista is a highly proficient and flexible web automation testing tool, based on the project size, and offers different frameworks using a combination of techniques such as: Modular Driven Framework, Keyword Driven Framework, Data Driven Framework, and Behavior Driven Framework."
                  align="left"
                />
              </div>

              {/* Bottom Content - Cards Grid */}
              {/* Changed to a grid layout for independent cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {/* Responsive grid with gap */}
                {[{
                  number: "01",
                  title: "Modular Driven Framework",
                  description:
                    "Organized test structure with reusable modules for efficient test maintenance and scalability.",
                },
                {
                  number: "02",
                  title: "Keyword Driven Framework",
                  description:
                    "Simplified test creation using keywords that abstract complex operations for non-technical users.",
                },
                {
                  number: "03",
                  title: "Behavior Driven Framework",
                  description:
                    "BDD approach enabling collaboration between technical and business teams through readable scenarios.",
                },
                {
                  number: "04",
                  title: "Data Driven Framework",
                  description:
                    "Execute tests with multiple data sets from external sources for comprehensive coverage.",
                }].map((item) => (
                  <div
                    key={item.number}
                    className="relative z-20 flex flex-col items-center text-center p-6
                       bg-gray-800/50 backdrop-filter backdrop-blur-md rounded-2xl
                       shadow-xl border border-blue-700/30
                       hover:shadow-2xl hover:border-blue-500/50
                       transform hover:-translate-y-2 transition-all duration-300 group" /* Card styling and hover effects */
                  >
                    {/* Number Circle - Retained for visual identity, slightly adjusted */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-700 to-indigo-900
              text-white font-extrabold text-2xl flex items-center justify-center
              shadow-xl ring-4 ring-blue-900/60 transition-all duration-300
              group-hover:scale-110 group-hover:ring-blue-700/70 mb-6"> {/* Increased bottom margin for spacing */}
                      {item.number}
                    </div>

                    {/* Content */}
                    <h3 className="text-blue-300 text-2xl font-semibold mb-3
                         transition-colors duration-300 group-hover:text-blue-200
                         group-hover:drop-shadow-lg group-hover:shadow-blue-500/30">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-base leading-relaxed
                        transition-colors duration-300 group-hover:text-gray-200">
                      {item.description}
                    </p>

                    {/* No dot, no line, just distinct cards */}
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        <section className=" relative overflow-hidden border-1 border-red-500">
          {/* Background Blob - Larger, softer, and more strategically placed */}
          <div className="absolute -right-24 top-1/2 transform -translate-y-1/2 w-[40rem] h-[40rem]  rounded-full blur-[100px] pointer-events-none "></div>

          <div className="container mx-auto px-4">
            <div className=" space-y-16">
              {/* Top Content */}
              <div className="mb-12">
                <SectionTitle
                  title="Techniques Used"
                  para1="RaptorVista is a highly proficient and flexible web automation testing tool, based on the project size, and offers different frameworks using a combination of techniques such as: Modular Driven Framework, Keyword Driven Framework, Data Driven Framework, and Behavior Driven Framework."
                  align="left"
                />
              </div>

              {/* Bottom Content - Connected Cards Grid */}
              {/* Reverted to grid line technique for "connecting" the cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border-t border-l border-white/10 overflow-hidden rounded-xl">
                {[
                  {
                    number: "01",
                    title: "Modular Driven Framework",
                    description:
                      "Organized test structure with reusable modules for efficient test maintenance and scalability.",
                  },
                  {
                    number: "02",
                    title: "Keyword Driven Framework",
                    description:
                      "Simplified test creation using keywords that abstract complex operations for non-technical users.",
                  },
                  {
                    number: "03",
                    title: "Behavior Driven Framework",
                    description:
                      "BDD approach enabling collaboration between technical and business teams through readable scenarios.",
                  },
                  {
                    number: "04",
                    title: "Data Driven Framework",
                    description:
                      "Execute tests with multiple data sets from external sources for comprehensive coverage.",
                  },
                ].map((item) => (
                  <div
                    key={item.number}
                    className="group relative z-20 flex flex-col items-center text-center p-6
                       bg-gray-800/50 backdrop-filter backdrop-blur-md rounded-none {/* Removed individual card rounding */}
                       shadow-none {/* Removed individual card shadow */}
                       border-r border-b border-blue-700/30 {/* Added right and bottom borders for grid lines */}
                       hover:border-blue-500/50 transform hover:-translate-y-1 transition-all duration-300" /* Adjust hover effect */
                  >
                    {/* Number Circle - Retained for visual identity, slightly adjusted */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-700 to-indigo-900
              text-white font-extrabold text-2xl flex items-center justify-center
              shadow-xl ring-4 ring-blue-900/60 transition-all duration-300
              group-hover:scale-110 group-hover:ring-blue-700/70 mb-6">
                      {item.number}
                    </div>

                    {/* Content */}
                    <h3 className="text-blue-300 text-2xl font-semibold mb-3
                         transition-colors duration-300 group-hover:text-blue-200
                         group-hover:drop-shadow-lg group-hover:shadow-blue-500/30">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-base leading-relaxed
                        transition-colors duration-300 group-hover:text-gray-200">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>


        {/* Vision and Mission Section */}
        <section className=" border-1 border-red-500">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-6"> {/* Reduced gap between cards */}

              {/* Vision */}
              <div className="flex bg-gray-900 rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow duration-300 items-start"> {/* Slightly reduced padding, rounded corners, added items-start */}
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mr-4"> {/* Smaller icon container, adjusted gradient, reduced margin */}
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"> {/* Smaller icon */}
                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Vision</h3> {/* Slightly reduced title size */}
                  <p className="text-blue-400 font-medium text-sm mb-1">Infusing Quality Beyond Verticals</p> {/* Changed color, reduced size, reduced margin */}
                  <p className="text-gray-400 text-sm leading-relaxed"> {/* Reduced text size */}
                    Aligning mobile technologies with user needs and business goals through intelligent, automation-first QA.
                  </p>
                </div>
              </div>

              {/* Mission */}
              <div className="flex bg-gray-900 rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow duration-300 items-start"> {/* Consistent styling with Vision card */}
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mr-4"> {/* Consistent styling with Vision card */}
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"> {/* Consistent styling with Vision card */}
                    <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Mission</h3> {/* Consistent styling with Vision card */}
                  <p className="text-blue-400 font-medium text-sm mb-1">Creating Sustainable Value For Customers</p> {/* Consistent styling with Vision card */}
                  <p className="text-gray-400 text-sm leading-relaxed"> {/* Consistent styling with Vision card */}
                    Helping users and businesses embrace top-tier mobile quality through automated, scalable QA strategies.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 text-center"> {/* Reduced top margin */}
              <button className="px-8 py-2.5 text-sm font-medium text-white rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 shadow-md hover:shadow-lg hover:scale-105 transition duration-300"> {/* Adjusted gradient, slightly smaller padding */}
                Book Free Consultation With Our QA Experts
              </button>
            </div>
          </div>
        </section>







        {/* Next-Gen Mobile Test Automation Framework Section */}
        <section className="py-14 border-1 border-red-500">
          <div className="container mx-auto px-4"> {/* Adjusted padding to match previous sleek sections */}
            <div className="max-w-5xl mx-auto text-center mb-12">
              {/* Assuming SectionTitle component here */}
              <SectionTitle
                title="Next-Gen Mobile Test Automation Framework"
                para1="While the hassle of taking the product quickly into the market often makes mobile development companies skip or pursue incomplete testing, the selection of right test tools and skills is another extreme challenge. MoboRaptors as a test automation framework allows users with diverse mobile testing goals enjoy all the ease of testing."
              />
            </div>

            {/* Feature Grid */}
            {/* Applied subtle border classes to the grid container itself */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border-t border-l border-white/10 overflow-hidden rounded-xl">
              {[
                {
                  title: "Convenience & Customization",
                  description:
                    "User-friendly interface with customizable options for diverse needs.",
                },
                {
                  title: "10X Execution",
                  description:
                    "Blazing fast test runs to support rapid delivery pipelines.",
                },
                {
                  title: "Quick Installation",
                  description:
                    "Setup in minutes. No complex dependencies or configs.",
                },
                {
                  title: "Simple Learning Curve",
                  description:
                    "Teams get productive fast with an intuitive UI and flow.",
                },
                {
                  title: "Robust Test Assistance",
                  description:
                    "AI-driven support for debugging, optimization, and stability.",
                },
                {
                  title: "Load Test Integration",
                  description:
                    "Seamlessly run load tests alongside functional tests.",
                },
                {
                  title: "Database Compatibility",
                  description:
                    "Test with real data across various DBMS platforms easily.",
                },
                {
                  title: "Fast Driver Init",
                  description:
                    "Cut down wait time with optimized driver management.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative p-5 bg-white/5 border-r border-b border-white/10
                     hover:border-blue-400 hover:bg-white/10 transition duration-300 transform hover:-translate-y-1"
                >
                  {/* Subtle gradient border effect on hover (optional but nice for sleekness) */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>

                  <div className="flex items-start gap-3 relative z-10">
                    {/* Changed vertical bar color to match the blue-indigo theme */}
                    <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-indigo-500 rounded-full mt-1"></div>
                    <div className="text-left flex-1">
                      {/* Ensure text is above text-sm */}
                      <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-300 transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-gray-300 text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 border-1 border-red-500">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center mb-12">
              {/* Assuming SectionTitle component here */}
              {/* Ensure your SectionTitle component also uses text sizes larger than text-sm for its internal paragraphs */}
              <SectionTitle
                title="Next-Gen Mobile Test Automation Framework"
                para1="While the hassle of taking the product quickly into the market often makes mobile development companies skip or pursue incomplete testing, the selection of right test tools and skills is another extreme challenge. MoboRaptors as a test automation framework allows users with diverse mobile testing goals enjoy all the ease of testing."
              />
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Convenience & Customization",
                  description:
                    "User-friendly interface with customizable options for diverse needs.",
                },
                {
                  title: "10X Execution",
                  description:
                    "Blazing fast test runs to support rapid delivery pipelines.",
                },
                {
                  title: "Quick Installation",
                  description:
                    "Setup in minutes. No complex dependencies or configs.",
                },
                {
                  title: "Simple Learning Curve",
                  description:
                    "Teams get productive fast with an intuitive UI and flow.",
                },
                {
                  title: "Robust Test Assistance",
                  description:
                    "AI-driven support for debugging, optimization, and stability.",
                },
                {
                  title: "Load Test Integration",
                  description:
                    "Seamlessly run load tests alongside functional tests.",
                },
                {
                  title: "Database Compatibility",
                  description:
                    "Test with real data across various DBMS platforms easily.",
                },
                {
                  title: "Fast Driver Init",
                  description:
                    "Cut down wait time with optimized driver management.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative p-5 rounded-xl backdrop-filter backdrop-blur-sm bg-white/5 border border-white/10 overflow-hidden
                     hover:border-blue-400 hover:bg-white/10 transition duration-300 transform hover:-translate-y-1"
                >
                  {/* Subtle gradient border effect on hover (optional but nice for sleekness) */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>

                  <div className="flex items-start gap-3 relative z-10">
                    <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-indigo-500 rounded-full mt-1"></div>
                    <div className="text-left flex-1">
                      <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-300 transition-colors duration-300">
                        {item.title}
                      </h4>
                      {/* THIS IS THE KEY CHANGE: text-sm changed to text-base */}
                      <p className="text-gray-300 text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>






        {/* How MoboRaptors Squares Up Mobile Test Automation Challenges Section */}
        <section className="py-10  text-white font-sans border-1 border-red-500">
          <div className="container mx-auto ">
            {/* Title */}
            <div className="text-center mb-8 mx-auto">

              <SectionTitle
                title="How MoboRaptors Squares Up Mobile Test Automation Challenges"
                para1="Built with industry expertise, MoboRaptors helps you tackle technical, functional, and financial QA hurdles — whether it's scaling automation, integrating third-party tools, or managing cloud-native tests."

              />
            </div>

            {/* Cards Grid */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  title: "Intelligent Integration",
                  desc: "Supports a variety of tools, including Selenium, Appium, and more.",
                  icon: (
                    <svg
                      className="w-4 h-4 stroke-current"
                      fill="none"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                },
                {
                  title: "Rapid Customization",
                  desc: "Hybrid frameworks allow deeper, faster, and flexible automation.",
                  icon: (
                    <svg
                      className="w-4 h-4 stroke-current"
                      fill="none"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0" />
                      <circle cx="15" cy="12" r="3" />
                    </svg>
                  ),
                },
                {
                  title: "Rich Compatibility",
                  desc: "Run tests across devices, browsers, and platforms simultaneously.",
                  icon: (
                    <svg
                      className="w-4 h-4 stroke-current"
                      fill="none"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3" />
                    </svg>
                  ),
                },
                {
                  title: "CI/CD Workflow",
                  desc: "Integrates seamlessly into your CI/CD pipeline with minimal setup.",
                  icon: (
                    <svg
                      className="w-4 h-4 stroke-current"
                      fill="none"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12" />
                    </svg>
                  ),
                },
                {
                  title: "Sophisticated Testing",
                  desc: "Supports parallel testing, mocking, and test data generation.",
                  icon: (
                    <svg
                      className="w-4 h-4 stroke-current"
                      fill="none"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 11H5m14 0a2 2 0 012 2v6" />
                    </svg>
                  ),
                },
                {
                  title: "API & Cloud Ready",
                  desc: "Built for microservices with full REST API support and cloud deployability.",
                  icon: (
                    <svg
                      className="w-4 h-4 stroke-current"
                      fill="none"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M8 16H6a2 2 0 01-2-2V6" />
                    </svg>
                  ),
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 p-4 bg-white/5 rounded-lg border border-white/5 transition-all duration-300 hover:scale-[1.01] hover:bg-white/10"
                  tabIndex={0}
                  aria-label={item.title}
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-md bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold mb-0.5 tracking-tight">{item.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center mt-8">
              <button className="inline-block px-8 py-2 text-base font-semibold rounded-full bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-600 text-white shadow-md shadow-purple-500/15 hover:from-blue-600 hover:via-purple-500 hover:to-indigo-500 transition-all duration-300 transform hover:-translate-y-0.5">
                View Full Feature Set
              </button>
            </div>
          </div>
        </section>









        <Footer />
      </main>
    </div>
  );
};

export default RaptorVista; 