import '~/globals.css';

import { NextIntlClientProvider, useLocale } from 'next-intl';
import { createTranslator } from 'next-intl';
import localFont from 'next/font/local';
import { notFound } from 'next/navigation';

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

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const messages = (await import(`~~/messages/${locale}.json`)).default;

  // You can use the core (non-React) APIs when you
  // have to use next-intl outside of components.
  const t = createTranslator({ locale, messages });

  return {
    title: t('RootLayout.title'),
  };
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale?: string };
}) {
  let messages;
  try {
    messages = (await import(`~~/messages/${params.locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={font.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
