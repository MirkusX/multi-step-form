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
      <p>$9/Mo</p>
      <input
        type="radio"
        name="plan"
        value="Arcade"
        required="required"
        onChange={(e) => dispatch({ type: "plan", payload: e.target.value })}
      />
      <label>Advanced</label>
      <p>$12/Mo</p>
      <input
        type="radio"
        name="plan"
        value="Advanced"
        onChange={(e) => dispatch({ type: "plan", payload: e.target.value })}
      />
      <label>Pro</label>
      <p>$15/Mo</p>
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
