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
  // Call start times in Philippine Time, as minutes after midnight of the booking day.
  // Window: 8:00 PM to 2:30 AM (next day), every 15 minutes. The last start is 2:30 AM.
  // To change: edit windowStart / windowEnd (in hours, 24 = midnight, 26.5 = 2:30 AM) or intervalMinutes.
  slots: ((windowStart: number, windowEnd: number, intervalMinutes: number) => {
    const list: number[] = [];
    for (let m = windowStart * 60; m <= windowEnd * 60; m += intervalMinutes) list.push(m);
    return list;
  })(20, 26.5, 15),
  workdays: [1, 2, 3, 4, 5], // evening sessions that START Mon-Fri (0 = Sunday ... 6 = Saturday)
  leadHours: 24, // earliest bookable time from now
  monthsAhead: 2,
};
