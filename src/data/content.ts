// Text content for the interactive parts of the page (tools banner order, steps, services, email demo).
// The rest of the text lives directly in the components in src/components.
export const ROW_A = ["n8n","Zapier","Make","Claude","OpenAI","Ollama","Klap","Blotato","YouTube"];
export const ROW_B = ["Google Workspace","Gmail","Google Sheets","Airtable","Microsoft 365","Calendly","Microsoft Teams","Trello","Canva"];
export const STEPS = [
  ["Trigger","A new email, form entry or spreadsheet row kicks things off, so nothing waits for someone to remember."],
  ["Automate","n8n, Zapier or Make move the data around, and AI like Claude, OpenAI or a local Ollama model sorts or drafts."],
  ["Human review","I check the details and approve before anything important goes out. This is where judgment beats speed."],
  ["Done","Clean records, sent replies, and hours back in your week, so you can focus on growing the business."]
];
export const STEP_ICONS = [
  '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
  '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>',
  '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.5 3.5-7 8-7s8 2.5 8 7"/>',
  '<path d="M5 13l4 4L19 7"/>'
];
export const SERVICES = [
  ["AI Automation","I explore AI-powered solutions and automated workflows that help reduce repetitive tasks and simplify business processes, with a person checking the output.",["n8n","Zapier","Make","OpenAI","Claude","Ollama"]],
  ["Administrative Support","I bring structure to everyday operations through organized records, document preparation, research, and administrative assistance.",["Gmail","Calendar","Docs","Microsoft 365"]],
  ["Data Management","Accurate data entry, cleanup and organization so your numbers and records stay trustworthy and easy to use.",["Google Sheets","Airtable"]],
  ["Online Research","Careful, well-sourced research on leads, vendors, competitors and topics, summarized into something you can act on.",["Lead research","Market research"]],
  ["Customer Support","Prompt, professional email and chat support that keeps customers happy and your team focused on growth.",["Email","Chat","Follow-ups"]]
];
export const EMAILS = [
  {from:"Dana R.", subj:"Quote request for 20 units", cat:"Reply / Draft", label:"Drafted", flag:true,
   why:"A new customer asking for a quote. The categorizer routes it to \"Drafted\", the workflow writes a tailored reply and saves it as a Gmail draft.",
   draft:"Hi Dana,\n\nThanks for reaching out! For 20 units I can share pricing and lead times. Could you confirm your delivery address and target date?\n\nBest regards"},
  {from:"Mr. Lim", subj:"Disputed invoice #2041", cat:"Sensitive", label:"Sensitive", flag:true,
   why:"Money and tone matter here. It gets the \"Sensitive\" label and a careful draft, but nothing goes out until a human reviews it.",
   draft:"Hi Mr. Lim,\n\nThank you for flagging this. I'm looking into invoice #2041 and will come back to you with a clear answer shortly.\n\n(Needs owner approval before sending)"},
  {from:"Weekly Digest", subj:"10 productivity tips for your week", cat:"Nothing", label:"No Action", flag:false,
   why:"A newsletter. It is labeled \"No Action\" and the workflow stops, so the inbox stays quiet and no tokens are wasted."},
  {from:"Maya T.", subj:"Can we move our call to Friday?", cat:"Reply / Draft", label:"Drafted", flag:true,
   why:"A simple scheduling question. The workflow drafts a friendly reply for me to confirm against my calendar.",
   draft:"Hi Maya,\n\nFriday works on my side. Would 10:00 AM (PHT) suit you?\n\nBest regards"}
];
export const PIPE = [["✉","Gmail Trigger"],["🧠","AI Categorizer (Ollama)"],["🔀","Reply, Draft or Nothing"],["🏷","Label"],["✍","Generate Draft"],["👤","Human Review"]];
export const WORDS = ["email triage","data entry","follow-ups","online research","scheduling","reporting"];

