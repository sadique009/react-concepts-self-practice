// lec-19- index as key anti-pattern
// using index as keys can be problematic while updating, deleting or sorting elements.
// we can use index as keys when all 3 criteria is satisfied:
// items in our list do not have a unique id.
// the list is static and will not change.
// the list will never be reordered or filtered.
// there are npm packages that generate unique id for a list.
// we can use that if necessary.

import React from "react";
// import Person from "./Person";
const NameList = () => {
  const names = ["bruce", "clark", "diana", "stark"];
  const persons = [
    {
      id: 1,
      name: "bruce",
      age: 30,
      skill: "react",
    },
    {
      id: 2,
      name: "clark",
      age: 20,
      skill: "angular",
    },
    {
      id: 3,
      name: "diana",
      age: 32,
      skill: "django",
    },
    {
      id: 4,
      name: "stark",
      age: 34,
      skill: "vue",
    },
  ];

  const nameList = names.map((name) => <h2>{name}</h2>);
  return <div>{nameList}</div>;
};

export default NameList;
