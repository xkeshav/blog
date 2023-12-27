export const options = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
  timeZone: "America/Los_Angeles",
} as const;

export const fullEnglish = {
  weekday: 'long',
  dayPeriod: 'long',
  year: 'numeric',
  month: 'long',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: 'numeric',
  calendar: 'iso8601',
  timeZone: 'Asia/Kolkata',
  timeZoneName: 'short',
  formatMatcher: 'basic',
  hourCycle: 'h12',
} as const;


export const fullHindi = {
  weekday: 'long',
  dayPeriod: 'long',
  year: 'numeric',
  month: 'long',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: 'numeric',
  calendar: 'indian',
  timeZone: 'Asia/Kolkata',
  numberingSystem: 'deva',
  timeZoneName: 'shortGeneric',
  formatMatcher: 'basic',
  hourCycle: 'h12',
};

export const styleOption = {
  dateStyle: 'long',
  timeStyle: 'long',
  calendar: 'indian', // 'iso8601',
  numberingSystem: 'deva',
  timeZone: 'Asia/Kolkata',
  hour12: false,
};
