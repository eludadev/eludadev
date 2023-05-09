import TopNav from '~/components/App/TopNav';
import MainMenu from '~/components/Menu/MainMenu';
import { NavigationProvider } from '~/context/Navigation';

export default function PortfolioLayout({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}): JSX.Element {
  return (
    <NavigationProvider>
      <TopNav />
      <div>{children}</div>
      <MainMenu />
    </NavigationProvider>
  );
}
