import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";

export const RESUME_DATA = {
  name: "Moin Bukhari",
  initials: "MB",
  location: "London",
  locationLink: "https://www.google.com/maps/place/London",
  about: "AI Engineer @ Starlight",
  summary: `Product engineer with a focus on AI. Currently at Starlight, working on systems for the public sector. Previously helped startups bring automation to their products, shipped my own apps, and taught software engineering.`,
  avatarUrl:
    "https://pbs.twimg.com/profile_images/1865217848852848640/MxoyckP9_400x400.jpg",
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
      company: "Starlight",
      link: "https://starlight.inc/",
      badges: [],
      title: "AI Engineer",

      start: "Jul 2024",
      end: "Now",
      description:
        "Building AI applications and orchestration systems for public-sector use cases, including forward deployment. Focused on product engineering, rapid prototyping, and delivery.",
    },
    {
      company: "Dolphin Studios",
      link: "https://home.dolphinstudios.co/",
      badges: [],
      title: "AI Engineer (Contract)",

      start: "Feb 2024",
      end: "Jul 2024",
      description:
        "Contracted with multiple clients to build AI-powered automation and custom LLM solutions. Worked on data integration, NLP systems, and machine learning implementations for startups and enterprises.",
    },
    {
      company: "Convo",
      link: "https://tryconvo.vercel.app",
      badges: [],
      title: "Technical Co-Founder",

      start: "Aug 2023",
      end: "Jul 2024",
      description:
        "Building an AI Speech-to-Speech language tutor from scratch. Developed a cross-browser compatible feature for user audio recording. Technologies: NextJS, TypeScript, OpenAI",
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
      end: "Mar 2024",
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
      link: "https://www.tarichtuition.com/",
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
        "Tailwind CSS",
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
        label: "convo.ing",
        href: "https://convo.ing",
      },
    },
    {
      title: "Moin's AI Portrait",
      techStack: [
        "Side Project",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
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
        "Tailwind CSS",
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
        "shadcn/ui",
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
      techStack: ["Freelance Project", "Next.js", "Tailwind CSS", "shadcn/ui"],
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
