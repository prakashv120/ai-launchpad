/**
 * AI LaunchPad - Curated Project Recommendation Database
 * 
 * Contains the four core engineering student project templates specified in the brief,
 * with rule-based matching logic that customizes recommendations based on:
 * - Interest
 * - Experience level (Beginner vs. Some coding experience)
 * - Preferred language (Python, JavaScript, No preference)
 */

export const PROJECTS_DATABASE = [
  {
    id: "study-sprint",
    name: "AI Study Sprint Planner",
    primaryInterest: "Productivity and studying",
    shortDescription: "An intelligent revision scheduler that breaks complex engineering syllabus modules into focused 25-minute Pomodoro study sprints with AI-generated review checkpoints.",
    whyItSuits: "Engineered specifically for engineering students balancing heavy semester loads. It replaces frantic cramming with structured, achievable revision blocks tailored to exam timelines.",
    milestones: [
      {
        step: 1,
        title: "Syllabus Chunking",
        description: "Parse subject chapter lists and automatically estimate study durations based on topic difficulty and exam weightage."
      },
      {
        step: 2,
        title: "Prompt Engineering & Checkpoints",
        description: "Integrate an LLM prompt that creates 3 targeted self-assessment flash questions after every 25-minute sprint."
      },
      {
        step: 3,
        title: "Interactive Schedule & Export",
        description: "Render a clean visual timetable and allow one-click export to Google Calendar or ICS file."
      }
    ],
    techStack: {
      python: "Python, Streamlit, OpenAI / Hugging Face API, iCalendar",
      javascript: "Next.js, React, Tailwind CSS, Vercel AI SDK",
      any: "Python or JavaScript (Streamlit or Next.js with open LLM APIs)"
    },
    difficultyNotes: {
      beginner: "Designed with minimal boilerplate using pre-built UI components so you can focus on API prompts.",
      experienced: "Includes options for custom spaced repetition algorithms (SM-2) and local SQLite persistence."
    },
    sampleUseCase: "Convert a 6-chapter Operating Systems syllabus into a 5-day structured sprint plan."
  },
  {
    id: "resume-coach",
    name: "AI Resume Bullet Coach",
    primaryInterest: "Career and resumes",
    shortDescription: "A career-focused assistant that scans draft resume bullet points and rewrites them into high-impact, quantified achievement statements following the Google XYZ formula.",
    whyItSuits: "Directly solves the #1 challenge final-year students face during campus placement drives: articulating technical projects with measurable business and engineering impact.",
    milestones: [
      {
        step: 1,
        title: "Bullet Point Impact Parser",
        description: "Accept raw engineering project bullet points and detect missing action verbs, tech tags, and quantifiable metrics."
      },
      {
        step: 2,
        title: "Google XYZ Formula Transformation",
        description: "Prompt an AI model to recast the experience into 'Accomplished [X] as measured by [Y] by doing [Z]'."
      },
      {
        step: 3,
        title: "Side-by-Side Diff & Impact Score",
        description: "Display an interactive before-and-after comparison card with estimated recruiter clarity score (1-10)."
      }
    ],
    techStack: {
      python: "Python, FastAPI, Streamlit, LangChain, OpenAI / Gemini API",
      javascript: "React, Next.js, Tailwind CSS, Vercel AI SDK",
      any: "Python or Node.js with lightweight frontend (Streamlit / React)"
    },
    difficultyNotes: {
      beginner: "Straightforward prompt-and-response pipeline with instant visual comparison cards.",
      experienced: "Adds ATS keyword matching against target job descriptions and PDF export."
    },
    sampleUseCase: "Transform 'Built a website with React' into 'Developed responsive student portal serving 1,200+ active users with 99.8% uptime'."
  },
  {
    id: "campus-faq",
    name: "Campus Event FAQ Assistant",
    primaryInterest: "Campus life",
    shortDescription: "A 24/7 conversational assistant trained on college fest schedules, hackathon guidelines, and campus policies to answer student questions instantly.",
    whyItSuits: "Cuts through the noise of flooded WhatsApp groups and chaotic college fest announcements by giving fellow students instant, authoritative answers.",
    milestones: [
      {
        step: 1,
        title: "Document Ingestion & Context Setup",
        description: "Load campus festival guidelines, event timings, and venue maps into a clean contextual prompt."
      },
      {
        step: 2,
        title: "Semantic Q&A Pipeline",
        description: "Implement retrieval logic so the bot provides pinpoint answers with exact timestamps and room numbers."
      },
      {
        step: 3,
        title: "Mobile-Friendly Chat Bubble",
        description: "Deploy a lightweight, responsive web chat widget accessible on any student smartphone."
      }
    ],
    techStack: {
      python: "Python, LangChain, ChromaDB / FAISS, Streamlit / Gradio",
      javascript: "Next.js, React, Tailwind CSS, OpenAI / Claude API",
      any: "Python or JavaScript with lightweight vector store or prompt-stuffing"
    },
    difficultyNotes: {
      beginner: "Uses direct context-injection prompts for instant setup without complex vector databases.",
      experienced: "Implements full Retrieval-Augmented Generation (RAG) with local vector embeddings."
    },
    sampleUseCase: "Instant answer: 'What time does the robotics hackathon submission close in Hall B?'"
  },
  {
    id: "survey-insight",
    name: "Student Survey Insight Tool",
    primaryInterest: "Data and analytics",
    shortDescription: "An analytical dashboard that ingests open-ended student feedback from Google Forms and automatically extracts sentiment trends, recurring pain points, and executive action points.",
    whyItSuits: "Tailored for analytical engineering minds who want to turn messy, unstructured student survey responses into clear visual charts and actionable decisions.",
    milestones: [
      {
        step: 1,
        title: "CSV Ingestion & Normalization",
        description: "Parse exported survey responses from Google Forms or CSV and clean common student abbreviations."
      },
      {
        step: 2,
        title: "Sentiment & Topic Clustering",
        description: "Run batch LLM prompts to classify responses into Positive, Neutral, or Urgent Issue categories with key topic tags."
      },
      {
        step: 3,
        title: "Executive Insight Dashboard",
        description: "Generate a one-page summary highlighting top 3 student complaints, praise highlights, and prioritized recommendations."
      }
    ],
    techStack: {
      python: "Python, Pandas, Hugging Face Transformers, Plotly, Streamlit",
      javascript: "Node.js, Chart.js, Next.js, OpenAI API",
      any: "Python (Pandas + Streamlit) or JavaScript (Chart.js + Next.js)"
    },
    difficultyNotes: {
      beginner: "Pre-configured sentiment prompt prompts with automated summary card outputs.",
      experienced: "Interactive charts with downloadable PDF summary for college department heads."
    },
    sampleUseCase: "Analyze 250 mess food / lab feedback responses and generate a 3-bullet priority action memo."
  }
];

export const INTEREST_OPTIONS = [
  {
    id: "Productivity and studying",
    label: "Productivity and studying",
    icon: "BookOpen",
    subtext: "Exam prep, sprint planning, and note synthesis"
  },
  {
    id: "Career and resumes",
    label: "Career and resumes",
    icon: "Briefcase",
    subtext: "Placement prep, resume bullets, and interview Q&As"
  },
  {
    id: "Campus life",
    label: "Campus life",
    icon: "Building2",
    subtext: "College fests, hackathons, and departmental FAQs"
  },
  {
    id: "Data and analytics",
    label: "Data and analytics",
    icon: "BarChart3",
    subtext: "Survey analytics, trend spotting, and sentiment mining"
  }
];

export const EXPERIENCE_OPTIONS = [
  {
    id: "Beginner",
    label: "Beginner",
    badge: "Zero AI Experience",
    subtext: "Comfortable with basics or starting completely fresh"
  },
  {
    id: "Some coding experience",
    label: "Some coding experience",
    badge: "Familiar with Code",
    subtext: "Have written basic scripts, college mini-projects, or lab assignments"
  }
];

export const LANGUAGE_OPTIONS = [
  {
    id: "Python",
    label: "Python",
    badge: "Most Popular in AI"
  },
  {
    id: "JavaScript",
    label: "JavaScript",
    badge: "Ideal for Web Devs"
  },
  {
    id: "No preference",
    label: "No preference",
    badge: "Best Beginner Path"
  }
];

/**
 * Matchmaker recommendation algorithm:
 * Selects project matching user interest and adjusts tech suggestions and guidance
 * according to user experience and preferred language.
 */
export function getRecommendedProject({ interest, experience, language }) {
  // 1. Find matching project by interest
  const matched = PROJECTS_DATABASE.find((p) => p.primaryInterest === interest) || PROJECTS_DATABASE[0];

  // 2. Determine suggested technology stack based on language
  let suggestedTech = matched.techStack.any;
  if (language === "Python") {
    suggestedTech = matched.techStack.python;
  } else if (language === "JavaScript") {
    suggestedTech = matched.techStack.javascript;
  }

  // 3. Determine difficulty note
  const difficultyNote = experience === "Some coding experience"
    ? matched.difficultyNotes.experienced
    : matched.difficultyNotes.beginner;

  return {
    ...matched,
    selectedInterest: interest,
    selectedExperience: experience,
    selectedLanguage: language,
    suggestedTech,
    difficultyNote
  };
}
