import { Switch } from "@mui/material";
import { useContext } from "react";
import { PlanContext, TimeContext } from "../Components/Context";
import { yearly } from "./FormPageFiles/FormPrices";

export const Second = () => {
  const { setPlan, plan } = useContext(PlanContext);
  const { time, setTime } = useContext(TimeContext);
  const { plan, addOns } = yearly;
  const switchTime = () => {
    setTime("yearly");
    if (time === "yearly") {
      setTime("monthly");
    }
  };
  const storePlan = (e) => {
    setPlan([{ plan: e.target.id, price: e.target.value }]);
  };
  return (
    <>
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing</p>
      <label>Arcade</label>
      <p>$9/Mo</p>
      <input
        type="radio"
        name="plan"
        value="9"
        required="required"
        id="Arcade"
        onChange={(e) => storePlan(e)}
      />
      <label>Advanced</label>
      <p>$12/Mo</p>
      <input
        type="radio"
        name="plan"
        value="12"
        id="Advanced"
        onChange={(e) => storePlan(e)}
      />
      <label>Pro</label>
      <p>$15/Mo</p>
      <input
        type="radio"
        name="plan"
        value="15"
        id="Pro"
        onChange={(e) => storePlan(e)}
      />
      <p>Monthly</p>
      <Switch onChange={() => switchTime()} />
      <p>Yearly</p>
    </>
  );
};
