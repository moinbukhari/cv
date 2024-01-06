import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";

export const RESUME_DATA = {
  name: "Moin Bukhari",
  initials: "MB",
  location: "London",
  locationLink: "https://www.google.com/maps/place/London",
  about:
    "Full Stack Engineer with experience leading product builds as a founder",
  summary:
    "I have built projects from idea to production and worked alongside early-stage startups. Currently, I work mostly with the T3 Stack (NextJS, Typscript, TailwindCSS, tRPC and Prisma). I also enjoy teaching what I learn and have 8+ years of experience leading classes/workshops on subjects ranging from Maths, Sciences, Electronics, Arduino and Software Engineering.",
  avatarUrl: "https://avatars.githubusercontent.com/u/56733483?v=4",
  personalWebsiteUrl: "https://moinbukhari.com/",
  contact: {
    email: "moinbukhari4321@gmail.com",
    tel: null,
    social: [
      {
        name: "GitHub",
        url: "https://github.com/moinbukhari",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/moin-bukhari/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/moinbukh",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Imperial College London",
      degree: "Master's Degree in Computer Engineering",
      start: "2018",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Convo",
      link: "https://tryconvo.vercel.app",
      badges: [],
      title: "Technical Co-Founder",

      start: "Aug 2023",
      end: "Now",
      description:
        "Building an AI Speech-to-Speech language tutor from scartch. Developed a cross-browser compatible feature for user audio recording. Technologies: NextJS, TypeScript, OpenAI",
    },
    {
      company: "Deen Developers",
      link: "https://www.deendevelopers.com/",
      badges: [],
      title: "Buildathon Lead",

      start: "Oct 2023",
      end: "Now",
      description:
        "Organising and Executing 8-Week Buildathon Cohorts, includes in-person weekend builds, online workshops and weekly check-in sessions",
    },
    {
      company: "Pivot2Tech",
      link: "https://pivot2tech.co.uk",
      badges: [],
      title: "Instructor for Full Stack Development",

      start: "Apr 2023",
      end: "Now",
      description:
        "Teaching weekly sessions on Frontend and Backend web development. Produced weekly loom videos summarizing key topics and interactive presentations/quizzes to facilitate effective revision",
    },
    {
      company: "Imperial College London",
      link: "https://www.imperial.ac.uk/be-inspired/schools-outreach/secondary-schools/stem-programmes/the-maker-challenge/",
      badges: [],
      title: "Maker Challenge Leader",

      start: "Apr 2022",
      end: "Now",
      description:
        "Leading electronics and arduino programming sessions for Maker Challenge Cohorts. Support students through ideation, prototyping, and presentation of their projects",
    },
    {
      company: "Private Tutoring",
      link: "/",
      badges: [],
      title: "Tutor for GCSE & A-Level",

      start: "Jun 2020",
      end: "Now",
      description:
        "Teaching Maths, Chemistry, Physics & Further Maths to students in 1-1 and group sessions",
    },
    {
      company: "Imperial College London",
      link: "https://www.imperial.ac.uk/",
      badges: [],
      title: "Teaching Assistant for Software Engineering",

      start: "Oct 2019",
      end: "Mar 2020",
      description:
        "Led ARM Assembly and C++ programming exercises for undergraduate classes. Provided personalised support and supervised module exams for Computer Architecture and Software Engineering",
    },
    {
      company: "Tarich Tuition Ltd",
      link: "https://www.imperial.ac.uk/",
      badges: [],
      title: "GCSE Tutor -> Manager for GCSE Science",

      start: "Aug 2017",
      end: "Mar 2020",
      description:
        "Conducted personalized and group tutoring sessions for Maths and Sciences. Managed a team of GCSE Science Tutors and led training programs to enhance tutoring techniques",
    },
  ],
  buildingBatches: [
    {
      company: "Buildspace",
      link: "https://buildspace.so/",
      badges: [],
      title: "Nights & Weekends S4",

      start: "Aug 2023",
      end: "Oct 2023",
      description:
        "Building Convo, A speech focused AI language tutor. Got invited to demo at Buildspace HQ, San Francisco where I showcased the application, incorporated user feedback, and iteratively improved the product in real-time",
    },
    {
      company: "Deen Developers",
      link: "https://www.deendevelopers.com/",
      badges: [],
      title: "Buildathon Batch 1",

      start: "Jun 2023",
      end: "Oct 2023",
      description:
        "Continued building Muddakir, graduated from Batch 1 and got offered to join the team as Buildathon Lead",
    },
    {
      company: "Buildspace",
      link: "https://buildspace.so/",
      badges: [],
      title: "Nights & Weekends S3",

      start: "Apr 2023",
      end: "Jun 2023",
      description:
        "Building Muddakir, a web app that is helping non-Arabic speakers understand The Quran better. Got invited to a three-day event at Buildspace HQ, San Francisco where I worked alongside other founders to improve the product and demoed to investors",
    },
    {
      company: "Buildspace",
      link: "https://buildspace.so/",
      badges: [],
      title: "Nights & Weekends S2",

      start: "Dec 2022",
      end: "Feb 2023",
      description:
        "Built Find Your Fit, a GPT-3 powered web app that generates personalised workout plans in seconds. Got invited to Founders inc, San Francisco where I progressed to the final round of pitches.",
    },
  ],
  skills: [
    "React/Next.js",
    "TypeScript/JavaScript",
    "Python",
    "C++",
    "Node.js",
    "PyTorch",
    "F#",
    "LLMs",
    "Prompt Engineering",
    "Teaching",
    "Electronics",
    "Arduino",
  ],
  projects: [
    {
      title: "Find Your Fit",
      techStack: [
        "Side Project",
        "JavaScript",
        "Next.js",
        "TailwindCSS",
        "GPT3.5",
      ],
      description: "Generate personalised workout plans in seconds",

      link: {
        label: "findyourfit.vercel.app",
        href: "https://findyourfit.vercel.app/",
      },
    },
    {
      title: "Convo",
      techStack: ["Technical Co-Founder", "TypeScript", "Next.js"],
      description:
        "Improve your spoken fluency with Speech Focused Language learning",

      link: {
        label: "tryconvo.vercel.app",
        href: "https://tryconvo.vercel.app",
      },
    },
    {
      title: "Moin's AI Portrait",
      techStack: [
        "Side Project",
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "HuggingFace",
        "Stable Diffusion",
        "Google Colab",
      ],
      description:
        "Trained a generative image model on pictures of my face. Now you can create AI portraits of me",

      link: {
        label: "portrait.up.railway.app",
        href: "https://portrait.up.railway.app/",
      },
    },

    {
      title: "Muddakir",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "TailwindCSS",
        "tRPC",
        "ClerkAuth",
        "Prisma",
        "PlanetScale",
      ],
      description:
        "A web app that helps non-Arabic speakers to understand the Quran better",

      link: {
        label: "muddakir.app",
        href: "https://www.muddakir.app/",
      },
    },
    {
      title: "Landing Page Template",
      techStack: [
        "Side Project",
        "Next.js",
        "TypeScript",
        "Shadcn-ui",
        "Geist",
      ],
      description: "SaaS style landing page template for NextJS users",

      link: {
        label: "github.com",
        href: "https://github.com/moinbukhari/NextJS-landing-page-template",
      },
    },

    {
      title: "Unclassified.fyi",
      techStack: ["Freelance Project", "Next.js", "TailwindCSS", "Shadcn-ui"],
      description:
        "Find out what UK politicians are saying on issues affecting Palestine",

      link: {
        label: "unclassified.fyi",
        href: "https://unclassified.fyi/?auth=true",
      },
    },

    {
      title: "MIPS CPU Simulator",
      techStack: [
        "Computer Architecture Project",
        "C++",
        "MIPS",
        "Assembly Language",
        "Bash",
        "Makefile",
      ],
      description:
        "Built a CPU simulator which accurately executed MIPS-1 big-endian binaries and a testbench to test the simulator",
    },
    {
      title: "Mood of the Nation",
      techStack: [
        "IBM Group Project",
        "HTML",
        "CSS",
        "Javascript",
        "Twitter API",
        "NodeRED",
      ],
      description:
        "Sentiment Analysis Tool for Tweets about IBM events across University Campuses in the UK",
    },
    {
      title: "C to MIPS Compiler",
      techStack: [
        "Language Processing Project",
        "C++",
        "Flex",
        "Bison",
        "Python",
      ],
      description:
        "Developed a Lexer, Parser and Code Generator. Implemented compilation for variable declaration, loops, function calling, recursion and conditionals",
    },
    {
      title: "House Price Predictor",
      techStack: [
        "Machine Learning Project",
        "Python",
        "PyTorch",
        "Neural Network",
      ],
      description:
        "Developed a Multi-Layer Neural Network library from scratch. Implemented activation functions as well as functions for data preprocessing, training and evaluation",
    },
  ],
} as const;
