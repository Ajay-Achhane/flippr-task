import {
  FaBriefcase,
  FaChartLine,
  FaMicrochip,
  FaRocket,
} from "react-icons/fa";
import { baseUrl } from "../lib/helper";
import TestimonialSection from "../components/sections/homepage/TestimonialSection";

export const categoryData = [
  {
    icon: `${baseUrl()}/assets/client-first-icons/business.svg`,
    title: "Business",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    isActive: false,
  },
  {
    icon: `${baseUrl()}/assets/client-first-icons/startup.svg`,
    title: "Startup",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    isActive: true,
  },
  {
    icon: `${baseUrl()}/assets/client-first-icons/economy.svg`,
    title: "Economy",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    isActive: false,
  },
  {
    icon: `${baseUrl()}/assets/client-first-icons/technology.svg`,
    title: "Technology",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    isActive: false,
  },
];

export const authors = [
  {
    name: "Floyd Miles",
    image: `${baseUrl()}/assets/client-first-images/man-in-yellow-button-up-shirt-wearing-black-framed-eyeglasses-7562313.svg`,
    socials: ["facebook", "twitter", "instagram", "linkedin"],
    link: "/author"
  },
  {
    name: "Dianne Russell",
    image: `${baseUrl()}/assets/client-first-images/woman-in-white-and-black-striped-shirt-wearing-black-sunglasses-3671083.svg`,
    socials: ["facebook", "twitter", "instagram", "linkedin"],
    link: "/author"
  },
  {
    name: "Jenny Wilson",
    image: `${baseUrl()}/assets/client-first-images/woman-in-white-and-black-striped-shirt-wearing-black-sunglasses-3671083.svg`,
    socials: ["facebook", "twitter", "instagram", "linkedin"],
    link: "/author"
  },
  {
    name: "Leslie Alexander",
    image: `${baseUrl()}/assets/client-first-images/woman-in-white-and-black-striped-shirt-wearing-black-sunglasses-3671083.svg`,
    socials: ["facebook", "twitter", "instagram", "linkedin"],
    link: "/author"
  },
];

export const featuredLogos = [
  {
    name: "TechCrunch",
    image: `${baseUrl()}/assets/client-first-images/Logo 1.svg`,
  },
  {
    name: "Forbes",
    image: `${baseUrl()}/assets/client-first-images/Logo 1.svg`,
  },
  {
    name: "Wired",
    image: `${baseUrl()}/assets/client-first-images/Logo 1.svg`,
  },
  { name: "CNN", image: `${baseUrl()}/assets/client-first-images/Logo 1.svg` },
  { name: "BBC", image: `${baseUrl()}/assets/client-first-images/Logo 1.svg` },
];

export const TestimonialData = [
  {
    memberName: "Jonanthan Vallem",
    address: "New York, USA",
    image: `${baseUrl()}/assets/client-first-images/Image.svg`,
    message:
      "The service provided was exceptional. The team went above and beyond to ensure all my requirements were met. I’m thoroughly impressed with their professionalism and dedication.",
  },
  {
    memberName: "Sophia Reynolds",
    address: "Los Angeles, USA",
    image: `${baseUrl()}/assets/client-first-images/Image.svg`,
    message:
      "I had an amazing experience working with this team. Their attention to detail and commitment to quality is unmatched. I highly recommend their services to everyone!",
  },
  {
    memberName: "Michael Scott",
    address: "Scranton, USA",
    image: `${baseUrl()}/assets/client-first-images/Image.svg`,
    message:
      "Working with them was a breeze. They understood my needs perfectly and delivered results that exceeded my expectations. A fantastic team to collaborate with!",
  },
  {
    memberName: "Emily Davis",
    address: "Chicago, USA",
    image: `${baseUrl()}/assets/client-first-images/Image.svg`,
    message:
      "The support and guidance provided were phenomenal. Every step of the process was smooth and efficient. I couldn’t have asked for a better experience!",
  },
  {
    memberName: "Liam Johnson",
    address: "Houston, USA",
    image: `${baseUrl()}/assets/client-first-images/Image.svg`,
    message:
      "Their innovative approach and dedication to delivering excellence truly stand out. I am incredibly satisfied with the outcome and their unwavering support throughout the project.",
  },
  {
    memberName: "Olivia Brown",
    address: "Miami, USA",
    image: `${baseUrl()}/assets/client-first-images/Image.svg`,
    message:
      "This has been one of the best collaborations I’ve ever had. The team was proactive, responsive, and genuinely cared about delivering value. Highly recommended!",
  },
];

export const postData = [
  {
    postImage: `${baseUrl()}/assets/client-first-images/two-women-in-front-of-dry-erase-board-1181533-1.svg`,
    genre: "startup",
    title: "Design tips for designers that covers everything you need",
    desc: " Duis aite irure dolor in reprehendeit in voliptate velit esse cillim dolore eu fugiat nulla pariatur. Excepteur sint occaacat cupidatat non prodent.",
  },
  {
    postImage: `${baseUrl()}/assets/client-first-images/photo-of-people-doing-handshakes-3183197.svg`,
    genre: "business",
    title: "how to build rapport with your web design client",
    desc: " Duis aite irure dolor in reprehendeit in voliptate velit esse cillim dolore eu fugiat nulla pariatur. Excepteur sint occaacat cupidatat non prodent.",
  },
  {
    postImage: `${baseUrl()}/assets/client-first-images/photo-of-woman-looking-at-man-3183173.svg`,
    genre: "startup",
    title: "Logo design trends to avoid in 2022",
    desc: " Duis aite irure dolor in reprehendeit in voliptate velit esse cillim dolore eu fugiat nulla pariatur. Excepteur sint occaacat cupidatat non prodent.",
  },
  {
    postImage: `${baseUrl()}/assets/client-first-images/photo-of-people-walking-on-hallway-3182811.svg`,
    genre: "technology",
    title: "8 figma design system you can download for free today",
    desc: " Duis aite irure dolor in reprehendeit in voliptate velit esse cillim dolore eu fugiat nulla pariatur. Excepteur sint occaacat cupidatat non prodent.",
  },
  {
    postImage: `${baseUrl()}/assets/client-first-images/photo-of-people-doing-handshakes-3183197.svg`,
    genre: "business",
    title: "font size in Ui design: The complete guide to follow",
    desc: " Duis aite irure dolor in reprehendeit in voliptate velit esse cillim dolore eu fugiat nulla pariatur. Excepteur sint occaacat cupidatat non prodent.",
  },
];
