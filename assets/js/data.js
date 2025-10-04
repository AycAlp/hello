// Primitive data for the site
const STRATEGIES = [
  {
    id: "think-pair-share",
    title: "Think-Pair-Share",
    summary: "Prompt, pair discussion, then share to class.",
    time: "5–10 min",
    classSize: "Any",
    tags: ["discussion", "low-prep", "inclusive"],
    details: {
      overview: "Students think individually about a prompt, discuss with a neighbor, then share highlights with the class.",
      steps: [
        "Pose a focused, course-aligned prompt",
        "Give 1–2 minutes for individual thinking",
        "Have pairs discuss and compare answers",
        "Invite a few pairs to share with the class"
      ],
      tips: [
        "Use specific, conceptual questions over recall",
        "Set clear timeboxes and roles",
        "Cold-call pairs equitably for shares"
      ]
    }
  },
  {
    id: "jigsaw",
    title: "Jigsaw",
    summary: "Students become experts in parts and teach peers.",
    time: "30–60 min",
    classSize: "Small–Medium",
    tags: ["collaborative", "equity", "synthesis"],
    details: {
      overview: "Students learn subtopics in expert groups, then teach their home group peers to assemble the full picture.",
      steps: [
        "Form expert groups by subtopic",
        "Provide materials and targets for each subtopic",
        "Experts reconvene into home groups and teach",
        "Synthesize as a class and assess understanding"
      ],
      tips: [
        "Give guiding questions and deliverables",
        "Ensure interdependence and equitable roles",
        "Use a short check-for-understanding at the end"
      ]
    }
  },
  {
    id: "polling",
    title: "Peer Instruction (Polling)",
    summary: "Concept questions, vote, discuss, re-vote.",
    time: "10–20 min",
    classSize: "Medium–Large",
    tags: ["feedback", "conceptual", "clickers"],
    details: {
      overview: "Students answer a conceptual question individually, discuss with peers, and revote to reveal learning gains.",
      steps: [
        "Pose a single-best-answer conceptual question",
        "Students vote individually",
        "Pairs/groups discuss reasoning",
        "Students revote and class debrief"
      ],
      tips: [
        "Target common misconceptions",
        "Show distributions and explain why",
        "Keep momentum: 3–5 minutes per question"
      ]
    }
  },
  {
    id: "case-based",
    title: "Case-Based Learning",
    summary: "Real-world scenarios analyzed in teams.",
    time: "30–90 min",
    classSize: "Any",
    tags: ["authentic", "teamwork", "writing"],
    details: {
      overview: "Students apply disciplinary tools to analyze realistic scenarios and recommend actions.",
      steps: [
        "Provide a case with data or narratives",
        "Teams analyze using structured prompts",
        "Share recommendations and critique",
        "Wrap with instructor synthesis"
      ],
      tips: [
        "Use real artifacts (memos, data tables)",
        "Offer roles to drive inclusive participation",
        "Assess with a concise rubric"
      ]
    }
  },
  {
    id: "gallery-walk",
    title: "Gallery Walk",
    summary: "Stations with prompts; groups circulate and build on ideas.",
    time: "20–40 min",
    classSize: "Any",
    tags: ["movement", "synthesis", "creative"],
    details: {
      overview: "Teams respond to prompts at stations, rotating and building on each other's ideas.",
      steps: [
        "Set up 4–6 stations with prompts",
        "Groups rotate on a timer, adding insights",
        "Final pass to review and vote/star",
        "Whole-class debrief and next steps"
      ],
      tips: [
        "Provide markers and clear instructions",
        "Use think time before each rotation",
        "Take photos to capture artifacts"
      ]
    }
  },
  {
    id: "minute-paper",
    title: "Minute Paper",
    summary: "Quick formative check: most important point and questions.",
    time: "2–5 min",
    classSize: "Any",
    tags: ["assessment", "low-stakes", "reflection"],
    details: {
      overview: "A brief reflection where students identify key takeaways and lingering questions.",
      steps: [
        "Prompt: 'Most important point? One question?'",
        "Give 1–2 minutes to write",
        "Collect or sample responses",
        "Address themes next class or online"
      ],
      tips: [
        "Do it regularly but briefly",
        "Share back aggregated themes",
        "Grade for completion to reduce anxiety"
      ]
    }
  },
];

const TOOLS = [
  { id: "lesson-plan", title: "Active Lesson Planner", type: "Template", href: "assets/templates/active-lesson-planner.md", summary: "Plan outcomes, activities, and assessment in one page." },
  { id: "jigsaw-kit", title: "Jigsaw Kit", type: "Template", href: "assets/templates/jigsaw-kit.md", summary: "Roles, timing, and prompts for running a Jigsaw." },
  { id: "tps-prompts", title: "Think-Pair-Share Prompts", type: "Prompts", href: "assets/templates/think-pair-share-prompts.md", summary: "Ready-to-use prompts across disciplines." },
];

const CASE_STUDIES = [
  { id: "bio-200", title: "BIO 200: From Lecture to Active", context: "Large intro biology", impact: "+12% exam scores, -30% DFW", link: "#" },
  { id: "hist-330", title: "HIST 330: Debates and Cases", context: "Upper-division seminar", impact: "Higher participation, deeper analysis", link: "#" },
];
