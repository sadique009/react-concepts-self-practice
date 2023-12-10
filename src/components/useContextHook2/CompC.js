import React, { useContext } from "react";
import { BioData } from "./CompA";
import { FirstName, LastName } from "./CompA";

const CompC = () => {
    const contextValue = useContext(FirstName);
    const contextValue2 = useContext(LastName);
  return (
    <div>
      <h1>hello {contextValue} {contextValue2}</h1>
      </div>)

  //     {/* implementing context api without using "useContext" hook. */}
  //     <FirstName.Consumer>
  //       {(fname) => {
  //         // the above always has to be a function.
  //         return (
  //           <LastName.Consumer>
  //             {(lname) => {
  //               return (
  //                 <h1>
  //                   my name is {fname} {lname}
  //                 </h1>
  //               );
  //             }}
  //           </LastName.Consumer>
  //         );
  //       }}
  //     </FirstName.Consumer>
  //   </div>
  // );
};

export default CompC;
