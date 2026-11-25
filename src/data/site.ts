// ============================================================
//  All of your website's content lives here. Edit this file to
//  change text, tools, services, work samples or booking hours.
// ============================================================

export const site = {
  name: "Deo Febrero",
  brand: "PhewFlow",
  role: "AI Automation Virtual Assistant",
  tagline: "Less manual work, more room to grow.",
  description:
    "Deo Febrero (PhewFlow): AI automation, administrative support and workflow optimization for business owners. Less manual work, more room to grow.",
  email: "dcifebrero@gmail.com",
  linkedin: "https://www.linkedin.com/in/deofebrero/",
  location: "Philippines",
  timezoneLabel: "PHT (UTC+8)",
} as const;

export const rotatingWords = [
  "email triage",
  "data entry",
  "follow-ups",
  "online research",
  "scheduling",
  "reporting",
];

export type ToolCategory = "auto" | "ai" | "work" | "collab";

export const toolFilters: { key: ToolCategory | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "auto", label: "Automation" },
  { key: "ai", label: "AI" },
  { key: "work", label: "Data & docs" },
  { key: "collab", label: "Scheduling & collab" },
];

export const tools: { name: string; cat: ToolCategory; desc: string }[] = [
  { name: "n8n", cat: "auto", desc: "Workflow automation" },
  { name: "Zapier", cat: "auto", desc: "App-to-app automation" },
  { name: "Make", cat: "auto", desc: "Visual automation scenarios" },
  { name: "Claude", cat: "ai", desc: "AI assistant & drafting" },
  { name: "OpenAI", cat: "ai", desc: "GPT models & API" },
  { name: "Ollama", cat: "ai", desc: "Local, private LLMs" },
  { name: "Google Workspace", cat: "work", desc: "Gmail, Calendar, Drive, Docs, Sheets" },
  { name: "Airtable", cat: "work", desc: "Databases & trackers" },
  { name: "Microsoft 365", cat: "work", desc: "Word, Excel, Outlook" },
  { name: "Calendly", cat: "collab", desc: "Scheduling" },
  { name: "Microsoft Teams", cat: "collab", desc: "Meetings & chat" },
  { name: "Trello", cat: "collab", desc: "Task boards" },
  { name: "Canva", cat: "collab", desc: "Design & visuals" },
];

export const flowSteps: { label: string; text: string }[] = [
  {
    label: "Trigger",
    text: "A new email, form entry or spreadsheet row kicks things off, so nothing waits for someone to remember.",
  },
  {
    label: "Automate",
    text: "n8n, Zapier or Make move the data around, and AI like Claude, OpenAI or a local Ollama model sorts or drafts.",
  },
  {
    label: "Human review",
    text: "I check the details and approve before anything important goes out. This is where judgment beats speed.",
  },
  {
    label: "Done",
    text: "Clean records, sent replies, and hours back in your week, so you can focus on growing the business.",
  },
];

export const services: { title: string; text: string; tags: string[] }[] = [
  {
    title: "AI Automation",
    text: "I explore AI-powered solutions and automated workflows that help reduce repetitive tasks and simplify business processes, with a person checking the output.",
    tags: ["n8n", "Zapier", "Make", "OpenAI", "Claude", "Ollama"],
  },
  {
    title: "Administrative Support",
    text: "I bring structure to everyday operations through organized records, document preparation, research, and administrative assistance.",
    tags: ["Gmail", "Calendar", "Docs", "Microsoft 365"],
  },
  {
    title: "Data Management",
    text: "Accurate data entry, cleanup and organization so your numbers and records stay trustworthy and easy to use.",
    tags: ["Google Sheets", "Airtable"],
  },
  {
    title: "Online Research",
    text: "Careful, well-sourced research on leads, vendors, competitors and topics, summarized into something you can act on.",
    tags: ["Lead research", "Market research"],
  },
  {
    title: "Customer Support",
    text: "Prompt, professional email and chat support that keeps customers happy and your team focused on growth.",
    tags: ["Email", "Chat", "Follow-ups"],
  },
];

export type CaseStudy = {
  kind: "mail" | "clip";
  tag: string;
  title: string;
  solution: string;
  benefit: string;
  impact: string;
  chips: string[];
};

export const cases: CaseStudy[] = [
  {
    kind: "mail",
    tag: "Case study 01",
    title: "Automate email management with Ollama and Gmail for smart responses",
    solution:
      "Integrated Gmail with local Ollama LLMs to triage incoming messages and draft tailored replies automatically.",
    benefit:
      "Eliminates third-party cloud data exposure and recurring AI API costs while keeping human-in-the-loop approval.",
    impact:
      "Reduces inbox management time by hours each week with near-instant draft generation.",
    chips: ["Gmail", "Ollama", "Human-in-the-loop"],
  },
  {
    kind: "clip",
    tag: "Case study 02",
    title: "Automate YouTube clipping",
    solution:
      "Built an automated content repurposing pipeline that monitors new YouTube uploads, transcribes audio, identifies high-engagement hooks, and cuts them into vertical 9:16 shorts with burned-in captions.",
    benefit:
      "Eliminates hours of manual scrubbing, cropping, and subtitling, turning every long-form video into ready-to-publish TikToks, Reels, and YouTube Shorts automatically.",
    impact:
      "Scales daily short-form content output consistently without hiring dedicated video editors or slowing down production schedules.",
    chips: ["YouTube", "Transcription", "Shorts · Reels · TikTok"],
  },
];

export const booking = {
  utcOffset: 8, // Philippine Time = UTC+8
  hours: [9, 10, 11, 13, 14, 15, 16], // start times, Philippine Time (24h)
  workdays: [1, 2, 3, 4, 5], // 0 = Sunday ... 6 = Saturday
  leadHours: 24, // earliest bookable time from now
  monthsAhead: 2,
};
