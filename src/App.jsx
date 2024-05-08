import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import All from "./Pages/All";
import Fsd from "./Pages/Fsd";
import Ds from "./Pages/Ds";
import Cys from "./Pages/Cys";
import Career from "./Pages/Career";
const App = () => {
  let data = [
    {
      name: "fullstack",
      image: "./fullstack1.jpg",
      description: "Best Full-Stack Development Project Ideas in 2024",
      author: "By Isha Sharma",
      date: "13 Dec, 2023",
      duriation: "4 Min Read"
    },
    {
      name: "fullstack",
      image: "./fullstack2.jpg",
      description: "How Long Would It Take to be a Full Stack Developer?",
      author: "By Meghana D",
      date: "20 Oct, 2023",
      duriation: "3 Min Read"
    },
    {
      name: "fullstack",
      image: "./fullstack3.jpg",
      description: "How Does Apache Work? A Detailed Introduction To Apache",
      author: "By Tushar Vinocha",
      date: "3 Oct, 2023",
      duriation: "4 Min Read"
    },
    {
      name: "fullstack",
      image: "./fullstack4.jpg",
      description: "Hot Topics That You Need To Know In Full Stack Developer",
      author: "By Archana",
      date: "14 Dec, 2023",
      duriation: "6 Min Read"
    },
    {
      name: "fullstack",
      image: "./fullstack5.jpg",
      description: "6 Essential Prerequisites For ReactJs",
      author: "By Ramkumar",
      date: "06 Oct, 2023",
      duriation: "3 Min Read"
    },
    {
      name: "fullstack",
      image: "./fullstack6.jpg",
      description: "10 Best Database Management Systems For Software Developers",
      author: "By Isha Sharma",
      date: "03 Nov, 2023",
      duriation: "3 Min Read"
    },
    {
      name: "fullstack",
      image: "./fullstack7.jpg",
      description: "Best Web Development For Beginners 2024",
      author: "By Isha Sharma",
      date: "14 Dec, 2023",
      duriation: "5 Min Read"
    },
    {
      name: "fullstack",
      image: "./fullstack8.jpg",
      description: "7 Best Full-Stack Development Online Courses [2024] ",
      author: "By Srinithi Sankar",
      date: "13 Dec, 2023",
      duriation: "5 Min Read"
    },
    {
      name: "fullstack",
      image: "./fullstack9.jpg",
      description: "8 Top Full Stack Web Developer Coding Projects For You!",
      author: "By Archana",
      date: "06 Dec, 2023",
      duriation: "8 Min Read"
    },
    {
      name: "Data Science",
      image: "./data1.jpg",
      description: "12 Real-World Data Science Examples: Power Of Data Science",
      author: "By Lukesh S",
      date: "21 Oct, 2023",
      duriation: "7 Min Read"
    },
    {
      name: "Data Science",
      image: "./data2.jpg",
      description: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024 ",
      author: "By Isha Sharma",
      date: "13 Dec, 2023",
      duriation: "6 Min Read"
    },
    {
      name: "Data Science",
      image: "./data3.jpg",
      description: "Can A Commerce Student Do Data Science?",
      author: "By Saaksi Priyadarshini",
      date: "08 Sep, 2023",
      duriation: "3 Min Read"
    },
    {
      name: "Data Science",
      image: "./data4.jpg",
      description: "Roles and Responsibilities of a Data Scientist",
      author: "By Jaishree Tomar",
      date: "20 Oct, 2023",
      duriation: "5 Min Read"
    },
    {
      name: "Data Science",
      image: "./data5.jpg",
      description: "How to become a Data Scientist after Mechanical Engineering?",
      author: "By Lahari Chandana",
      date: "03 Oct, 2023",
      duriation: "3 Min Read"
    },
    {
      name: "Data Science",
      image: "./data6.jpg",
      description: "Data Science vs Data Analytics | Best Career Choice in 2024 ",
      author: "By Lahari Chandana",
      date: "16 Mar, 2024",
      duriation: "3 Min Read"
    },
    {
      name: "Data Science",
      image: "./data7.jpg",
      description: "Top Product-Based Companies for Data Scientists in 2024",
      author: "By Jaishree Tomar",
      date: "13 Dec, 2023",
      duriation: "4 Min Read"
    },
    {
      name: "Data Science",
      image: "./data8.jpg",
      description: "How Long Would It Take to Learn Data Science?",
      author: "By Meghana",
      date: "20 Oct, 2023",
      duriation: "4 Min Read"
    },
    {
      name: "Data Science",
      image: "./data9.jpg",
      description: "Top Product-Based Companies for Data Science Freshers",
      author: "By Jaishree Tomar",
      date: "10 Nov, 2023",
      duriation: "4 Min Read"
    },
    {
      name: "Cyber Security",
      image: "./cyber1.jpg",
      description: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      author: "By Tushar Vinocha",
      date: "04 Oct, 2023",
      duriation: "5 Min Read"
    },
    {
      name: "Cyber Security",
      image: "./cyber2.jpg",
      description: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide ",
      author: "By Jaishree Tomar",
      date: "04 Dec, 2023",
      duriation: "3 Min Read"
    },
    {
      name: "Cyber Security",
      image: "./cyber3.jpg",
      description: "8 Different Types of Cybersecurity and Threats Involved",
      author: "By Tushar Vinocha",
      date: "08 Sep, 2023",
      duriation: "4 Min Read"
    },
    {
      name: "Cyber Security",
      image: "./cyber4.jpg",
      description: "What Is Hacking? Types of Hacking & More",
      author: "By Meghana",
      date: "26 Oct, 2023",
      duriation: "6 Min Read"
    },
    {
      name: "Cyber Security",
      image: "./cyber5.jpg",
      description: "Is coding required for cybersecurity? If yes, how crucial is coding for cyb...",
      author: "By Tushar Vinocha",
      date: "05 Oct, 2023",
      duriation: "4 Min Read"
    },
    {
      name: "Cyber Security",
      image: "./cyber6.jpg",
      description: "Top 7 Cyber Security Attacks in Real Life",
      author: "By Lahari Chandana",
      date: "05 Oct, 2023",
      duriation: "3 Min Read"
    },
    {
      name: "Cyber Security",
      image: "./cyber7.jpg",
      description: "The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!",
      author: "By Tushar Vinocha",
      date: "07 Oct, 2023",
      duriation: "3 Min Read"
    },
    {
      course: "Java Full Stack Development",
      image: "./java-fsd.jpg",
      language: "English Tamil",
      support1: "EMI Options Available",
      support2: "100% Placement Support",
      support3: "1:1 Mentor Doubt Clarification Session"
    },
    {
      course: "MERN Full Stack Development",
      image: "./mern-fsd.jpg",
      language: "English Tamil Hindi",
      support1: "EMI Options Available",
      support2: "100% Placement Support",
      support3: "1:1 Mentor Doubt Clarification Session"
    },
    {
      course: "Data Science Course",
      image: "./data-science.jpg",
      language: "English Tamil",
      support1: "EMI Options Available",
      support2: "100% Placement Support",
      support3: "1:1 Mentor Doubt Clarification Session"
    },
    {
      course: "Automation Testing Course With Java",
      image: "./java-at.jpg",
      language: "English Tamil",
      support1: "EMI Options Available",
      support2: "100% Placement Support",
      support3: "1:1 Mentor Doubt Clarification Session"
    },
    {
      course: "Automation Testing Course With Python",
      image: "./python-at.jpg",
      language: "English",
      support1: "EMI Options Available",
      support2: "100% Placement Support",
      support3: "1:1 Mentor Doubt Clarification Session"
    },
    {
      course: "UI/UX Design Course",
      image: "./ui-ux.jpg",
      language: "English Tamil",
      support1: "EMI Options Available",
      support2: "100% Placement Support",
      support3: "1:1 Mentor Doubt Clarification Session"
    },
    {
      course: "Data Engineering Course With Bigdata And Hadoop",
      image: "./data-engineeringg.jpg",
      language: "English",
      support1: "EMI Options Available",
      support2: "100% Placement Support",
      support3: "1:1 Mentor Doubt Clarification Session"
    },
    {
      course: "Auto CAD Course For Mechanical Engineers",
      image: "./cad-mech.jpg",
      language: "English Tamil",
      support1: "EMI Options Available",
      support2: "100% Placement Support",
      support3: "1:1 Mentor Doubt Clarification Session"
    },
    {
      course: "Auto CAD Course For Civil Engineers",
      image: "./cad-civil.jpg",
      language: "English Tamil",
      support1: "EMI Options Available",
      support2: "100% Placement Support",
      support3: "1:1 Mentor Doubt Clarification Session"
    }
  ]
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<All data={data}/>} />
          <Route path="/fsd" element={<Fsd data={data}/>} />
          <Route path="/ds" element={<Ds data={data}/>} />
          <Route path="/cs" element={<Cys data={data}/>} />
          <Route path="/career" element={<Career data={data}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
