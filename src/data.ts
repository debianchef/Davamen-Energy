import uiUxOne from "./assets/ui-ux-project-one.svg";
import uiUxTwo from "./assets/ui-ux-project-two.svg";
import uiUxThree from "./assets/ui-ux-project-three.svg";
import webOne from "./assets/web-project-one.jpeg";
import webTwo from "./assets/web-project-two.jpeg";
import webThree from "./assets/web-project-three.jpeg";

interface OurServices {
  id: number;
  category: string;
  img: string;
  title: string;
}

export const services: OurServices[] = [
  {
    id: 0,
    category: "residential",
    img: uiUxOne,
    title: "Renewable Energy Solutions",
  },
  {
    id: 1,
    category: "residential",
    img: uiUxTwo,
    title: "House Rewiring and Upgrades",
  },
  {
    id: 2,
    category: "residential",
    img: uiUxThree,
    title: "Home Security Systems",
  },
  {
    id: 3,
    category: "residential",
    img: webOne,
    title: "Home Automation Systems",
  },
  {
    id: 4,
    category: "residential",
    img: webTwo,
    title: "CCTV Cameras and Alarm Systems",
  },
  {
    id: 5,
    category: "residential",
    img: webTwo,
    title: "Electric fencing",
  },
  {
    id: 6,
    category: "Industrial",
    img: webTwo,
    title: "CCTV Cameras and Alarm Systems",
  },
  {
    id: 7,
    category: "Industrial",
    img: webThree,
    title: "Electrical Safety Inspections and Testing",
  },

  {
    id: 8,
    category: "Industrial",
    img: webThree,
    title: "PLC Programming and System Design",
  },
  {
    id: 9,
    category: "Industrial",
    img: webThree,
    title: "SCADA Systems (Supervisory Control and Data Acquisition)",

  },
  {
    id: 10,
    category: "Industrial",
    img: webThree,
    title: "Data and Communication Systems",
    
  },
  {
    id: 11,
    category: "Industrial",
    img: webThree,
    title: "Motor Control and Instrumentation",
    
  },
  {
    id: 12,
    category: "Industrial",
    img: webThree,
    title: "Maintenance and Troubleshooting",
    
  },
  {
    id: 13,
    category: "Industrial",
    img: webThree,
    title: " Electric fencing",
    
  },
  
];
