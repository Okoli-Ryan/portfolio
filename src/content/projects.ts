import type { Project, Step } from './types';

/*
  Facts come from the resume; the Figo AI Labs and MailPilot descriptions also from figolabs.ai and
  mailpilot.figolabs.ai (read Nov 2026). Their marketing figures are deliberately not repeated.
*/
export const watchparty = {
  href: 'https://watchparty-sync.stream',
  steps: [
    {
      title: 'Sync one video',
      text: 'A Chrome and Firefox extension keeps an HTML5 video in step for every viewer.',
      art: 'video',
      alt: 'Illustration of the WatchParty player with its side chat',
    },
    {
      title: 'Share a room',
      text: 'Rooms show who is present and keep a watch history. The server decides who hosts next.',
      art: 'rooms',
      alt: 'Illustration of the WatchParty room list',
    },
    {
      title: 'Chat in private',
      text: 'Room chat is end-to-end encrypted. The server only ever stores ciphertext.',
      art: 'chat',
      alt: 'Illustration of the encrypted WatchParty room chat',
    },
  ] satisfies readonly Step[],
};

/** Open the page, before WatchParty. */
export const lead: readonly Project[] = [
  {
    id: 'figo-ai-labs',
    heading: 'Figo AI Labs, enterprise AI.',
    text: 'Figo AI Labs designs, builds and governs AI agents for businesses. As founding frontend developer I built its embeddable chat widget for text, image and voice, and the screens that teach assistants from documents.',
    facts: [],
    href: 'https://figolabs.ai',
    linkLabel: 'Visit Figo AI Labs',
    art: 'agents',
    alt: 'Illustration of AI agents connected to one core',
    layout: 'wide',
  },
  {
    id: 'mailpilot',
    heading: 'MailPilot, AI email operations.',
    text: 'MailPilot by Figo AI Labs watches support inboxes, triages each message by urgency and sentiment, and drafts replies from a team’s own documents. I built its dashboard.',
    facts: [
      { label: 'Inboxes', value: 'Gmail, Outlook, Zoho, IMAP' },
      { label: 'Service levels', value: 'Countdowns and alerts' },
      { label: 'Teams', value: 'Routing, playbooks, roles' },
    ],
    href: 'https://mailpilot.figolabs.ai',
    linkLabel: 'Open MailPilot',
    art: 'inbox',
    alt: 'Illustration of the MailPilot inbox',
    layout: 'split',
  },
];

/** Behind the "See more projects" button, after WatchParty. */
export const more: readonly Project[] = [
  {
    id: 'kobokit',
    heading: 'kobokit, bank statement tools.',
    text: 'Open-source tools for Nigerian bank statements: a synthetic statement generator and a parser that asks a language model only when its rules cannot decide.',
    facts: [
      { label: 'Synthetic narrations tested', value: '5,503' },
      { label: 'Handled by rules alone', value: '96.5%' },
      { label: 'Accuracy with model fallback', value: '98.7%' },
    ],
    href: 'https://github.com/Okoli-Ryan/kobokit',
    linkLabel: 'Read the kobokit code',
    art: 'code',
    alt: 'Illustration of the kobokit parser output',
    layout: 'split',
  },
  {
    id: 'dinnin',
    heading: 'Dinnin.',
    text: 'Guests scan a table QR code and order. Staff track orders live through Pusher, and owners read revenue analytics. React and ASP.NET, deployed with Docker.',
    facts: [],
    href: 'https://github.com/Okoli-Ryan/Dinnin-dashboard',
    linkLabel: 'Read the Dinnin code',
    art: 'dashboard',
    alt: 'Illustration of the Dinnin admin dashboard',
    layout: 'wide',
  },
  {
    id: 'billsclan',
    heading: 'Billsclan Storefront, online stores.',
    text: 'Registered users run their own online stores, with checkout through two payment gateways. Tested with Jest and React Testing Library.',
    facts: [
      { label: 'Built with', value: 'ASP.NET, PostgreSQL, React' },
      { label: 'Payments', value: 'Paystack, Flutterwave' },
    ],
    href: 'https://billsclan.com/shop',
    linkLabel: 'Visit Billsclan',
    art: 'store',
    alt: 'Illustration of a Billsclan online store',
    layout: 'split',
  },
  {
    id: 'react-native-ivorypay',
    heading: 'React-Native-Ivorypay, an npm package.',
    text: 'A published package that lets developers add crypto payments to React Native apps through the Ivorypay API, documented with usage, examples and test scenarios.',
    facts: [],
    href: 'https://github.com/ivorypay/React-native-ivorypay',
    linkLabel: 'Read the package code',
    art: 'phone',
    alt: 'Illustration of a payment sheet on a phone',
    layout: 'wide',
  },
];
