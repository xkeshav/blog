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
} as const;

export const styleOption = {
  dateStyle: 'long',
  timeStyle: 'long',
  calendar: 'indian', // 'iso8601',
  numberingSystem: 'deva',
  timeZone: 'Asia/Kolkata',
  hour12: false,
};


export const state_list = [
  { "state": "Andhra Pradesh", "capital": "Amaravati" },
  { "state": "Arunachal Pradesh", "capital": "Itanagar" },
  { "state": "Assam", "capital": "Dispur" },
  { "state": "Bihar", "capital": "Patna" },
  { "state": "Chhattisgarh", "capital": "Raipur" },
  { "state": "Goa", "capital": "Panaji" },
  { "state": "Gujarat", "capital": "Gandhinagar" },
  { "state": "Haryana", "capital": "Chandigarh" },
  { "state": "Himachal Pradesh", "capital": "Shimla" },
  { "state": "Jharkhand", "capital": "Ranchi" },
  { "state": "Karnataka", "capital": "Bengaluru" },
  { "state": "Kerala", "capital": "Thiruvananthapuram" },
  { "state": "Madhya Pradesh", "capital": "Bhopal" },
  { "state": "Maharashtra", "capital": "Mumbai" },
  { "state": "Manipur", "capital": "Imphal" },
  { "state": "Meghalaya", "capital": "Shillong" },
  { "state": "Mizoram", "capital": "Aizawl" },
  { "state": "Nagaland", "capital": "Kohima" },
  { "state": "Odisha", "capital": "Bhubaneswar" },
  { "state": "Punjab", "capital": "Chandigarh" },
  { "state": "Rajasthan", "capital": "Jaipur" },
  { "state": "Sikkim", "capital": "Gangtok" },
  { "state": "Tamil Nadu", "capital": "Chennai" },
  { "state": "Telangana", "capital": "Hyderabad" },
  { "state": "Tripura", "capital": "Agartala" },
  { "state": "Uttar Pradesh", "capital": "Lucknow" },
  { "state": "Uttarakhand", "capital": "Dehradun" },
  { "state": "West Bengal", "capital": "Kolkata" },
  { "state": "Andaman and Nicobar Islands", "capital": "Port Blair" },
  { "state": "Chandigarh", "capital": "Chandigarh" },
  { "state": "Dadra and Nagar Haveli and Daman and Diu", "capital": "Daman" },
  { "state": "Lakshadweep", "capital": "Kavaratti" },
  { "state": "Delhi", "capital": "New Delhi" },
  { "state": "Puducherry", "capital": "Puducherry" }
];


export const workList = [
  {
    name: "CSS Color Collector",
    description:
      "A VS Code extension which collect all colors from a css file and assign all colors in intuttive variable name.",
    link: "https://marketplace.visualstudio.com/items?itemName=xkeshav.css-color-collector",
    repo: "",
    tag: "vscode, typescript, extension, css, color",
    date: "Feb 2023",
  },
  {
    name: "@xkeshav/watch",
    description: "A npm package for react typescript application to debug and view data in console or in page",
    link: "https://www.npmjs.com/package/@xkeshav/watch",
    repo: "",
    tag: "npm, javascript, typescript, package, react",
    date: "Feb 2024",
  },
  {
    name: "@xkeshav/day",
    description: "A basic npm package which return number of milliseconds in a day",
    link: "https://www.npmjs.com/package/@xkeshav/day",
    tag: "npm, javascript, typescript, package, day",
    date: "Mar 2024",
  },
  {
    name: "jsr: @xkeshav/day",
    description: "A basic JSR package : A new npm alternative",
    link: "https://jsr.io/@xkeshav/day",
    tag: "deno, javascript, typescript, package, jsr",
    date: "Feb 2024",
  },
];
