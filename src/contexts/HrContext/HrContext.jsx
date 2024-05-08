import { createContext, useState } from "react";

export const HrContext = createContext();

const HrContextProvider = ({ children }) => {
  const [hrId, setHrId] = useState("101");

  // console.log("in hr")

  const setHr = (hr) => {
    console.log("before setHr", hr, hrId);
    setHrId(hr);
    console.log("after setHr", hr, hrId);
  };

  return <HrContext.Provider value={{ hrId, setHr }}>{children}</HrContext.Provider>;
};

export default HrContextProvider;
