// All website copy lives here. `people` and the photos in `journey.moments` are DEMO: replace before launch.

export const site = {
  name: "Kernedge Pvt. Ltd.",
  tagline: "Empowering learning through innovation",
  phones: ["+91 8098220800", "+91 8524042145", "+91 6374095885"],
  whatsapp: "918098220800",
  email: "kernedge.pvt.ltd@gmail.com",
  instagram: { handle: "@kernedge_", url: "https://instagram.com/kernedge_" },
};

/* ---------- Nav ---------- */
export const nav = [
  { label: "What we do", href: "#what-we-do" },
  { label: "What we build", href: "#what-we-build" },
  { label: "Abilities", href: "#capabilities" },
  { label: "Our people", href: "#people" },
  { label: "Journey", href: "#stories" },
  { label: "Contact", href: "#contact" },
];

/* ---------- Hero ---------- */
export const hero = {
  lines: ["Any role.", "Any industry.", "Real ability."],
  text: "Kernedge builds job ability, not just technical skill: communication, leadership, finance, operations and technology, taught through real projects and expert mentors. Now with IT services and consulting for businesses.",
  primary: { label: "Find your abilities", href: "#capabilities" },
  secondary: { label: "Start a conversation", href: "#contact" },
};

/* ---------- What we do (flip card) ---------- */
export interface Face { tab: string; kicker: string; title: string; text: string; steps: string[]; chips: string[]; tone: "dark" | "gold" }
export const whatWeDo: { heading: string; hint: string; faces: Face[] } = {
  heading: "What we do",
  hint: " ",
  faces: [
    {
      tab: "Teaching", kicker: "Kernedge Academy", tone: "dark",
      title: "We find what you can do in the corporate world, then train for it.",
      text: "Every learner starts with an honest look at their abilities. From there we build a personalised path across tech and non-tech skills, with content shaped around the roles you are aiming for. We are not here to sell courses. We want to be part of your career and your life.",
      steps: ["Find your abilities", "Match to corporate roles", "Personalised training", "Grow with you"],
      chips: ["Ability assessment", "Tech and non-tech", "Mentor-led", "Placement support"],
    },
    {
      tab: "IT services", kicker: "Kernedge IT", tone: "gold",
      title: "We turn your ideas into real-world applications.",
      text: "Bring us an idea, a process that slows you down, or a problem nobody has solved yet. We design, build and run the software that makes it work for real users, then stay on to support it after launch.",
      steps: ["Idea", "Design", "Build", "Launch and support"],
      chips: ["Web and mobile apps", "AI and data", "Cloud and DevOps", "Healthcare and IoT"],
    },
  ],
};

export const jobFamilies = {
  heading: "Job roles we train for",
  lead: "Pick the role you want. We train the abilities behind it.",
  list: [
    { title: "Frontend developer", text: "Build fast, accessible interfaces that people enjoy using.", roles: ["React and Next.js", "HTML, CSS and JavaScript", "Responsive UI"] },
    { title: "Backend developer", text: "Design the servers, APIs and databases that power every product.", roles: ["Node.js and Express", "APIs", "Database design"] },
    { title: "Full stack developer", text: "Own a product from the screen to the database.", roles: ["MERN and MEAN stacks", "Authentication and security", "Deployment"] },
    { title: "DevOps engineer", text: "Ship and run software reliably with automation and the cloud.", roles: ["CI/CD pipelines", "Containers", "Monitoring"] },
    { title: "Product management", text: "Decide what to build, why, and in what order.", roles: ["Product discovery", "Roadmaps", "Working with engineers"] },
    { title: "Operations", text: "Keep processes, vendors and deliveries running smoothly.", roles: ["Process improvement", "Vendor management", "Quality checks"] },
    { title: "AI and ML developer", text: "Train, test and ship machine learning models.", roles: ["Python and TensorFlow", "ML algorithms", "Real-time projects"] },
    { title: "Infrastructure specialist", text: "Build and secure the servers, networks and cloud everything runs on.", roles: ["Cloud setup", "Networks and security", "Backups and uptime"] },
    { title: "Biomedical equipment trainee", text: "Learn to operate and maintain medical equipment safely inside real healthcare systems.", roles: ["Medical devices", "Healthcare systems", "Practical labs"] },
    { title: "IoT and embedded engineer", text: "Connect sensors and microcontrollers to the cloud and build working devices.", roles: ["Arduino and microcontrollers", "Sensor integration", "Cloud connectivity"] },
    { title: "VLSI and semiconductor trainee", text: "Learn how chips are designed, simulated and verified, from the basics up.", roles: ["Circuit design", "Verilog and VHDL", "Simulation tools"] },
    { title: "Company-wise training (MAANG)", text: "Prepare for the hiring process of top product companies: coding rounds, system design and behavioural interviews.", roles: ["Coding practice", "System design", "Mock interviews"] },
  ],
};

/* ---------- What we build (stacking cards) ---------- */
export interface Build { title: string; forWho: string; text: string; gets: string[] }
export const builds: {
  heading: string; lead: string; list: Build[]; cta: { text: string; label: string };
} = {
  heading: "What we build",
  lead: "Kernedge is also an IT services team. We design, build and run software for businesses, hospitals and institutions.",
  list: [
    { title: "Websites and web apps", forWho: "For businesses that need an online presence",
      text: "Fast, secure websites and web applications, from a company site to a customer portal.",
      gets: ["Design and development", "Admin panel you can manage", "Hosting and launch support"] },
    { title: "Mobile apps", forWho: "For teams that need to reach users on their phones",
      text: "Mobile apps for customers, staff or field teams, built to be simple to use.",
      gets: ["Android and iOS apps", "Backend and API", "Testing and store release"] },
    { title: "Custom business software", forWho: "For companies running on spreadsheets and manual work",
      text: "Internal tools that replace manual work: dashboards, workflows and management systems.",
      gets: ["Process mapping", "Dashboards and reports", "Training for your team"] },
    { title: "AI and data solutions", forWho: "For teams that want answers from their data",
      text: "Machine learning and analytics built around a real business question, not a demo.",
      gets: ["Data cleaning and analysis", "Predictive and AI models", "Plain-language reporting"] },
    { title: "Healthcare technology", forWho: "For hospitals, clinics and medical device teams",
      text: "AI in healthcare and software that supports clinical and biomedical work.",
      gets: ["AI for healthcare data", "Hospital systems support", "Biomedical engineering input"] },
    { title: "IoT and embedded products", forWho: "For teams building connected devices",
      text: "From sensors and microcontrollers to cloud dashboards, built as one working system.",
      gets: ["Sensor and device integration", "Embedded programming", "Cloud connectivity"] },
    { title: "Cloud and DevOps", forWho: "For teams that need reliable, scalable systems",
      text: "Set up, secure and automate the infrastructure your software runs on.",
      gets: ["Cloud setup", "Automated deployment", "Monitoring and backups"] },
    { title: "Maintenance and support", forWho: "For anyone with software that must keep working",
      text: "We keep your systems updated, secure and fixed when something breaks.",
      gets: ["Bug fixes and updates", "Security checks", "Ongoing support"] },
  ],
  cta: { text: "Have a project in mind? Tell us what you need and we will reply with next steps.", label: "Talk about your project" },
};

/* ---------- Statement band ---------- */
export const statement = {
  heading: "Nobody hires a syllabus.",
  text: "They hire what you can do. So we start from the job, work backwards, and train the one ability that makes you the obvious choice.",
};

/* ---------- Abilities: timeline + wheel ---------- */
export const coreCaps = {
  heading: "Six abilities every employer asks for",
  lead: "These run through every Kernedge program, whatever the job family.",
  items: [
    { title: "Communicate clearly", text: "Write, speak and present so people act on what you say." },
    { title: "Think critically", text: "Frame a problem, weigh evidence and recommend a decision." },
    { title: "Lead and collaborate", text: "Work across teams, give feedback and keep projects moving." },
    { title: "Use data and digital tools", text: "Handle spreadsheets, dashboards and AI tools with confidence." },
    { title: "Manage work and time", text: "Plan, prioritise and deliver to a deadline." },
    { title: "Act professionally", text: "Handle clients, confidentiality and ethics with care." },
  ],
};

export interface Family {
  id: string; label: string; blurb: string; roles: string[];
  abilities: { title: string; text: string }[]; formats: string[];
}
export const finder = {
  heading: "Scroll through the job families. See what you will be able to do.",
  lead: "Each program is written as outcomes, so you know the ability before you enrol.",
  youWill: "You will be able to",
  families: [
    { id: "tech", label: "Technology and engineering", blurb: "For people who build software, data and devices.",
      roles: ["Full stack developer", "Data and AI engineer", "Embedded and IoT engineer", "VLSI trainee"],
      abilities: [
        { title: "Ship a full stack web app", text: "React, Node.js and database design in one project." },
        { title: "Train and evaluate a model", text: "Python, TensorFlow and real-time ML projects." },
        { title: "Connect sensors to the cloud", text: "Arduino, microcontrollers and cloud connectivity." },
        { title: "Design and simulate circuits", text: "Verilog, VHDL and simulation tools." },
      ], formats: ["Internships", "Hands-on labs", "Pattern and paper publication"] },
    { id: "ops", label: "Operations and supply chain", blurb: "For people who keep the work flowing.",
      roles: ["Operations executive", "Logistics coordinator", "Procurement associate", "Quality analyst"],
      abilities: [
        { title: "Map a process and remove waste", text: "See where time and money leak." },
        { title: "Track inventory and vendors", text: "Keep deliveries on schedule." },
        { title: "Set and measure quality checks", text: "Define standards and monitor them." },
        { title: "Coordinate under pressure", text: "Align teams when plans change." },
      ], formats: ["Simulation labs", "Internships", "Certification"] },
    { id: "health", label: "Healthcare and biomedical", blurb: "For people who support patient care with technology.",
      roles: ["Biomedical engineer", "Clinical equipment technician", "Hospital operations associate", "Healthcare data analyst"],
      abilities: [
        { title: "Operate medical equipment safely", text: "Hands-on practice with devices and systems." },
        { title: "Work within hospital protocols", text: "Understand how care teams and systems connect." },
        { title: "Apply AI to healthcare data", text: "Practical projects on real-world style datasets." },
        { title: "Support implant research", text: "Device research with clinical integration." },
      ], formats: ["Hospital training", "Practical labs", "Internships"] },
    { id: "biz", label: "Business and management", blurb: "For people who plan, decide and lead.",
      roles: ["Business analyst", "Team lead", "Operations manager", "Entrepreneur"],
      abilities: [
        { title: "Frame and solve a business problem", text: "Define the question, gather data and back your answer with evidence." },
        { title: "Plan and run a project", text: "Scope, budget and track work to a deadline." },
        { title: "Lead a team through change", text: "Set direction, handle conflict and keep people engaged." },
        { title: "Present to senior stakeholders", text: "Turn analysis into a clear recommendation." },
      ], formats: ["Workshops", "Mentor-led projects", "Certification"] },
    { id: "hr", label: "HR and people operations", blurb: "For people who hire, develop and support teams.",
      roles: ["HR executive", "Recruiter", "L and D associate", "Payroll coordinator"],
      abilities: [
        { title: "Source and interview fairly", text: "Screen candidates against clear criteria." },
        { title: "Run onboarding and engagement", text: "Help new joiners settle and stay." },
        { title: "Handle policy and records", text: "Keep compliance and documentation in order." },
        { title: "Coach managers on feedback", text: "Prepare for difficult conversations." },
      ], formats: ["Workshops", "Mock interviews", "Mentor-led projects"] },
    { id: "fin", label: "Finance and accounting", blurb: "For people who work with money and risk.",
      roles: ["Accounts executive", "Financial analyst", "Audit trainee", "Banking associate"],
      abilities: [
        { title: "Read and prepare financial statements", text: "Understand how the numbers fit together." },
        { title: "Build budgets and forecasts", text: "Model scenarios in spreadsheets." },
        { title: "Spot risk and control gaps", text: "Check processes and flag what could go wrong." },
        { title: "Explain numbers simply", text: "Brief non-finance colleagues with confidence." },
      ], formats: ["Case studies", "Spreadsheet labs", "Certification"] },
    { id: "sales", label: "Sales and marketing", blurb: "For people who win and keep customers.",
      roles: ["Sales executive", "Account manager", "Digital marketer", "Brand associate"],
      abilities: [
        { title: "Understand a customer", text: "Research needs and position an offer that fits." },
        { title: "Run a pipeline", text: "Prospect, follow up and close deals ethically." },
        { title: "Plan and measure a campaign", text: "Pick channels, set goals and read the results." },
        { title: "Write persuasive copy", text: "Clear messages for email, web and social." },
      ], formats: ["Role-play labs", "Live campaign projects", "Certification"] },
  ] as Family[],
};

/* ---------- Our people (DEMO profiles) ---------- */
export interface Person { name: string; role: string; focus: string; initials: string; image?: string } // image: "/people/name.jpg"
export const people = {
  heading: "The people who teach and build",
  lead: "Mentors, coaches and engineers who have worked in the jobs they teach.",
  list: [
    { name: "Saravanan ", role: "Founder/Director", focus: "Medical equipment, hospital training, implant research", initials: "N", image: "/people/saravanan.jpg" },
    { name: "Hariparsad", role: "Co-Founder/Director", focus: "Full stack development, DevOps, AI projects", initials: "R", image: "/people/hari.jpg" },
    { name: "Dharan", role: "Co-Founder/CEO", focus: "Communication, leadership and presentation", initials: "G", image: "/people/Dharan.jpg" },
    { name: "Sathya", role: "Finance and Business Trainer", focus: "Financial analysis, budgeting, business cases", initials: "K", image: "/people/rohan.jpg" },
    { name: "Siva Riddiq", role: "Career and Placement Coach", focus: "Resumes, mock interviews, hiring readiness", initials: "T", image: "/people/lakshmi.jpg" },
    { name: "Charulatha", role: "Consulting Lead", focus: "Technology roadmaps, team capability audits", initials: "M", image: "/people/arjun.jpg" },
  ] as Person[],
};

/* ---------- Journey (Stories section) ---------- */
export interface Stat { value: string; label: string }
export interface Moment { title: string; caption: string; tag: string; image?: string } // image: "/journey/name.jpg"

// Numbers are from Kernedge. Moments are DEMO: add real photos to public/journey/ and set `image`.
export interface Stat { value: string; label: string }
export interface Photo { src?: string; alt: string } // src: "/journey/name.jpg"

// Numbers are from Kernedge. Photos are DEMO: add real images to public/journey/ and set `src`.
export const journey: { heading: string; lead: string; stats: Stat[]; photos: Photo[] } = {
  heading: "Our journey so far",
  lead: "The numbers we are proud of, and the moments behind them.",
  stats: [
    { value: "75+", label: "Internships completed" },
    { value: "10+", label: "Workshops conducted" },
    { value: "2+", label: "Ongoing projects" },
    { value: "800+", label: "Students attended and trained" },
    { value: "10+", label: "College workshops and training sessions" },
  ],
   photos: [
    { src: "/journey/p1.jpg", alt: "Journey photo 1" },
    { src: "/journey/p2.jpg", alt: "Journey photo 2" },
    { src: "/journey/p3.jpg", alt: "Journey photo 3" },
    { src: "/journey/p4.jpg", alt: "Journey photo 4" },
    { src: "/journey/p5.jpg", alt: "Journey photo 5" },
    { src: "/journey/p6.jpg", alt: "Journey photo 6" },
    { src: "/journey/p7.jpg", alt: "Journey photo 7" },
    { src: "/journey/p8.jpg", alt: "Journey photo 8" },
  ],
};

/* ---------- Mission ---------- */
export const mission = {
  heading: "Be an expert in one thing",
  quote: {
    text: "I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times.",
    by: "Bruce Lee",
    //note: " ",
  },
  contrast: [
    { label: "10,000 kicks, once", note: "Familiar with many things, expert in none." },
    { label: "One kick, 10,000 times", note: "Expert in the one thing that sets you apart." },
  ],
  belief: {
    title: "We strongly believe in that.",
    text: "So we do not hand everyone the same course. We find your abilities and what makes you happy, then train you to become an expert in it.",
    steps: ["Find your abilities", "Find what makes you happy", "Train you to be an expert"],
  },
   counselling: {
    title: "Not sure which role fits you?",
    text: "Book a free career guidance session. We will help you understand your abilities and the roles that suit you.",
    button: "Book free career guidance",
    href: "#contact",
  },
};

/* ---------- Why Kernedge ---------- */
export const why = {
  heading: "Why people choose Kernedge",
  others: { title: "Typical online courses", items: ["Recorded videos only", "Tech topics only", "Theory without practice", "Little access to mentors", "No career support"] },
  us: { title: "Kernedge", items: ["Ability outcomes for every job family", "Hands-on practical learning", "Experienced mentors", "Real-time projects", "Career-oriented programs"] },
};

/* ---------- Contact ---------- */
export const contact = {
  heading: "Tell us what you want to learn or build",
  lead: "Reach us for internships, training, IT services and consulting.",
  button: "Message",
  subjects: [
    "Free career guidance",
    "Internship enquiry",
    "Training programme",
    "College partnership proposal",
    "Project proposal",
    "General enquiry",
  ],
};

export const localArea = {
  heading: "Training and IT services for Coimbatore and Tiruppur",
  lead: "Whether you are a student, a college or a business, we work with you across Coimbatore and Tiruppur.",
  cards: [
    { title: "Students and colleges", text: "Internships, workshops and job-ability training for engineering, arts and science students, with college partnership programmes.", points: ["Internships", "College workshops", "Free career guidance"] },
    { title: "Coimbatore businesses", text: "Software, AI and IoT solutions and team upskilling for the city's engineering, manufacturing and IT companies.", points: ["Custom software", "AI and IoT", "Team training"] },
    { title: "Tiruppur businesses", text: "Dashboards, inventory and process software, plus staff training, for garment, knitwear and export companies.", points: ["Business software", "Process automation", "Staff training"] },
  ],
};