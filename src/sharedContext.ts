import React, { useContext } from "react";

const IndexContext = React.createContext<{
  value: number | null;
  setValue: (newIndex: number) => void;
}>({ value: null, setValue: () => undefined });

export { IndexContext };
