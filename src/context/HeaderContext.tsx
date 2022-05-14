import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

interface HeaderContextValues {
  setOpenDropdownMenu: Dispatch<SetStateAction<boolean>>;
  openDropdownMenu: boolean;
}

const HeaderContext = createContext<HeaderContextValues>({} as HeaderContextValues);

interface Props {
  children: React.ReactNode;
}

export function HeaderContextProvider({ children }: Props) {
  const [openDropdownMenu, setOpenDropdownMenu] = useState(false);

  return <HeaderContext.Provider value={{ openDropdownMenu, setOpenDropdownMenu }}>{children}</HeaderContext.Provider>;
}

export { HeaderContext };

export function useHeaderContext() {
  return useContext(HeaderContext);
}
