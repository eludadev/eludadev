import '~/globals.css';
import { i18n } from '~/i18n';

import localFont from 'next/font/local';

// Font files can be colocated inside of `app`
const font = localFont({
  src: [
    { path: 'fonts/SFUIText-Regular.woff', weight: '400', style: 'normal' },
    {
      path: 'fonts/SFUIText-RegularItalic.woff',
      weight: '400',
      style: 'italic',
    },
    { path: 'fonts/SFUIText-Light.woff', weight: '300', style: 'normal' },
    {
      path: 'fonts/SFUIText-LightItalic.woff',
      weight: '300',
      style: 'italic',
    },
    { path: 'fonts/SFUIText-Medium.woff', weight: '500', style: 'normal' },
    {
      path: 'fonts/SFUIText-MediumItalic.woff',
      weight: '500',
      style: 'italic',
    },
    { path: 'fonts/SFUIText-Semibold.woff', weight: '600', style: 'normal' },
    {
      path: 'fonts/SFUIText-SemiboldItalic.woff',
      weight: '600',
      style: 'italic',
    },
    { path: 'fonts/SFUIText-Bold.woff', weight: '700', style: 'normal' },
    {
      path: 'fonts/SFUIText-BoldItalic.woff',
      weight: '700',
      style: 'italic',
    },
    { path: 'fonts/SFUIText-Heavy.woff', weight: '800', style: 'normal' },
    {
      path: 'fonts/SFUIText-HeavyItalic.woff',
      weight: '800',
      style: 'italic',
    },
  ],
  variable: '--font-sfui',
});

export const metadata = {
  title: i18n.t('title'),
};

export default function RootLayout({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
