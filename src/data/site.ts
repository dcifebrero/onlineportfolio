// Core details and booking settings. Edit these to change your email, LinkedIn or call hours.

export const site = {
  name: "Deo Febrero",
  brand: "PhewFlow Business Automation Solutions",
  role: "AI Automation Virtual Assistant",
  tagline: "Less manual work, more room to grow.",
  description:
    "Deo Febrero (PhewFlow Business Automation Solutions): AI automation, administrative support and workflow optimization for business owners. Less manual work, more room to grow.",
  email: "dcifebrero@gmail.com",
  linkedin: "https://www.linkedin.com/in/deofebrero/",
  location: "Philippines",
  timezoneLabel: "PHT (UTC+8)",
} as const;

export const booking = {
  utcOffset: 8, // Philippine Time = UTC+8
  hours: [9, 10, 11, 13, 14, 15, 16], // start times, Philippine Time (24h)
  workdays: [1, 2, 3, 4, 5], // 0 = Sunday ... 6 = Saturday
  leadHours: 24, // earliest bookable time from now
  monthsAhead: 2,
};
