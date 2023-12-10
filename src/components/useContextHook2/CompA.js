import React, { createContext } from "react";
import CompB from "./CompB";
const BioData = createContext(); // it has two properties, provider and consumer.
// It is a convention to write context name with capital letters.

const FirstName = createContext();
const LastName = createContext();

const CompA = () => {
  //   const name = "msn";
  return (
    <div>
      <h1>hello compA</h1>
      <FirstName.Provider value={"msn"}>
        <LastName.Provider value={"mna"}>
          <CompB />
        </LastName.Provider>
      </FirstName.Provider>
      {/* <BioData.Provider value={"msn"}> */}
      {/* we can write any no of values here, be it array, object and so on. */}

      {/* </BioData.Provider> */}
    </div>
  );
};

export default CompA;
export { BioData };
export { FirstName, LastName };
// here, "BioData" acts as a component, so we need to export it.
// in order to reuse it in other components.

// context api has 3 main parts.
// "context", "provider", and "consumer".
