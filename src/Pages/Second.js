import { Switch } from "@mui/material";
import { useContext, useState } from "react";
import { PlanContext, TimeContext } from "../Components/Context";

export const Second = () => {
  const { setPlan, plan } = useContext(PlanContext);
  const { setMonthly, monthly } = useContext(TimeContext);
  const [price, setPrice] = useState([
    { price: 9, name: "arcade" },
    { price: 12, name: "advanced" },
    { price: 15, name: "pro" },

    { price: 1, name: "online service" },
    { price: 2, name: "larger storage" },
    { price: 2, name: "customizable profile" },
  ]);
  const switchTime = () => {
    setPrice([
      { price: 90, name: "arcade" },
      { price: 120, name: "advanced" },
      { price: 150, name: "pro" },

      { price: 10, name: "online service" },
      { price: 20, name: "larger storage" },
      { price: 20, name: "customizable profile" },
    ]);
  };
  // arcade: 90,
  // advanced: 120,
  // pro: 150,

  // online: 10,
  // storage: 20,
  // profile: 20,
  const storePlan = (e) => {
    setPlan([{ plan: e.target.id, price: e.target.value }]);
  };
  return (
    <>
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing</p>
      {price.slice(0, 3).map((item, index) => {
        return (
          <>
            <label>{item.name}</label>
            <p>{item.price}</p>
            <input
              type="radio"
              name="plan"
              value={item.price}
              required="required"
              id={item.name}
              onChange={(e) => storePlan(e)}
            />
          </>
        );
      })}

      <p>Monthly</p>
      <Switch onChange={() => switchTime()} />
      <p>Yearly</p>
    </>
  );
};
