import { useReducer } from "react";
import { initialState, reducer } from "../Components/useReducer";

export const Third = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state.extra);
  return (
    <>
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience</p>
      <div>
        <input
          type="checkbox"
          value="Online service"
          onChange={(e) => dispatch({ type: "extra", payload: e.target.value })}
        />
        <p>Online service</p>
        <p>Access to multiplayer games</p>
      </div>
      <div>
        <input
          type="checkbox"
          value="Larger storage"
          onChange={(e) => dispatch({ type: "extra", payload: e.target.value })}
        />
        <p>Larger storage</p>
        <p>Extra 1TB of cloud save</p>
      </div>
      <div>
        <input
          type="checkbox"
          value="Customizable Profile"
          onChange={(e) => dispatch({ type: "extra", payload: e.target.value })}
        />
        <p>Customizable Profile</p>
        <p>Custom theme to your profile</p>
      </div>
    </>
  );
};
