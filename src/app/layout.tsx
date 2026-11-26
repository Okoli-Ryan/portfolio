import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { KitScripts } from '@/components/client/KitScripts';
import { PlayOnView } from '@/components/client/PlayOnView';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { mailto, profile } from '@/content/profile';
import '@/styles/site.css';

export const metadata: Metadata = {
  metadataBase: new URL(profile.site),
  title: profile.title,
  description: profile.description,
  icons: { icon: '/favicon.svg' },
  openGraph: {
    type: 'website',
    title: profile.title,
    description: profile.description,
    images: ['/share.jpg'],
  },
  twitter: { card: 'summary_large_image' },
  other: { 'site-kind': 'software', 'page-type': 'software' },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#18191b',
};

const kitStyles = [
  'system.css',
  'ui/cards.css',
  'motion/motion.css',
  'backgrounds/backgrounds.css',
  'layout/layout.css',
  'icons/icon.css',
  'moments/pinned-chapters/moment.css',
  'moments/liquid-type/moment.css',
];

/** Before first paint (kit contract): the hero words wait for motion.js; timers show everything if a script is late. */
const guards =
  "document.documentElement.classList.add('m-enter','mo-js');" +
  "setTimeout(function(){document.documentElement.classList.add('m-enter-done')},700);" +
  "setTimeout(function(){document.documentElement.classList.add('mo-safe')},2500)";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-type="software" data-radius="soft" data-buttons="solid" data-motion="" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400..700&family=JetBrains+Mono:wght@400..500&display=swap"
        />
        {kitStyles.map((href) => (
          <link key={href} rel="stylesheet" href={`/assets/${href}`} />
        ))}
        <script dangerouslySetInnerHTML={{ __html: guards }} />
        <link rel="modulepreload" href="/assets/moments/moments.js" />
        <link rel="modulepreload" href="/assets/moments/lib.js" />
        <link rel="modulepreload" href="/assets/moments/pinned-chapters/moment.js" />
        <link rel="modulepreload" href="/assets/moments/liquid-type/moment.js" />
      </head>
      <body>
        <noscript>
          <style>{'html main > .project--more { display: block } .show-more { display: none }'}</style>
        </noscript>
        <SiteHeader />
        <main id="top">{children}</main>
        <SiteFooter />
        <nav className="actionbar" aria-label="Quick actions">
          <a className="btn btn--primary" href={mailto}>{profile.mainAction}</a>
        </nav>
        <KitScripts />
        <PlayOnView />
      </body>
    </html>
  );
}
