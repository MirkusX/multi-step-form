import { useReducer } from "react";
import { initialState, reducer } from "../Components/useReducer";

export const Fourth = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming</p>
      <p>{state.plan}</p>
      {state.plan === "Pro" && <p>$15</p>}
      {state.extra.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </>
  );
};
