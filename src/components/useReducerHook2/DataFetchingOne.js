// lec-18- useReducer Hook.
// lec-23- fetching data with useReducer-1.
// revised 1,

// useReducer is used for state management.
// alternative to useState. useState is built using useReducer.
// reduce method takes in 2 params: a reducer fn and initial value that reducer fn can make use of.
// the reducer fn itself accepts 2 params(acc, currValue) and reduces them down to a single value and returns that value.

// useReducer hook takes in 2 params, a reducer fn and initialState.
// here the reducer fn takes in 2 params, (currState, action) and returns a new state.
// the action parameter is what dictates the state transition from the current state to a new state.
// the reduce method returns single value whereas the useReducer returns a pair of values, [newState, dispatch method].

import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetchingOne() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  // const [post, setPost] = useState([]);
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/1`)
      .then((response) => {
        setLoading(false);
        setPost(response.data);
        setError("");
      })
      .catch((error) => {
        setLoading(false);
        setPost({});
        setError("Something went wrong!");
      });
  }, []);

  return (
    <div>
      {loading ? (
        "Loading..."
      ) : (
        <>
          <h1>{post.title}</h1>
          <h2>{post.body}</h2>
        </>
      )}
      {error ? error : null}
    </div>
  );
}

export default DataFetchingOne;
