'use client';

import useToggle from '~/hooks/useToggle';

import { createContext } from 'react';

export const NavigationContext = createContext({
  isMenuToggled: false,
  toggleMenu: () => {},
});

export function NavigationProvider({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}): JSX.Element {
  const [isMenuToggled, toggleMenu] = useToggle(false);

  return (
    <NavigationContext.Provider
      value={{
        isMenuToggled,
        toggleMenu,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}
