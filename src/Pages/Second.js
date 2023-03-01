import { Switch } from "@mui/material";
import { useReducer } from "react";
import { initialState, reducer } from "../Components/useReducer";

export const Second = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing</p>
      <label>Arcade</label>
      <input
        type="radio"
        name="plan"
        value="Arcade"
        required="required"
        onChange={(e) => dispatch({ type: "plan", payload: e.target.value })}
      />
      <label>Advanced</label>
      <input
        type="radio"
        name="plan"
        value="Advanced"
        onChange={(e) => dispatch({ type: "plan", payload: e.target.value })}
      />
      <label>Pro</label>
      <input
        type="radio"
        name="plan"
        value="Pro"
        onChange={(e) => dispatch({ type: "plan", payload: e.target.value })}
      />
      <p>Monthly</p>
      <Switch />
      <p>Yearly</p>
    </>
  );
};
