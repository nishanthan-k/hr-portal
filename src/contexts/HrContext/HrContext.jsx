import { createContext, useState } from "react";

export const HrContext = createContext();

const HrContextProvider = ({ children }) => {
  const [hrId, setHrId] = useState(2);

  // console.log("in hr")

  const setHr = (hr) => {
  // console.log("in sethr", hr)

    setHrId(hr);
  }

  return (
    <HrContext.Provider value={{ hrId, setHr }}>
      {children}
    </HrContext.Provider>
  )
}

export default HrContextProvider;

