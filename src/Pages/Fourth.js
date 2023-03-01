import { useContext } from "react";
import { ExtraContext, PlanContext } from "../Components/Context";

export const Fourth = () => {
  const { plan } = useContext(PlanContext);
  const { extra } = useContext(ExtraContext);
  return (
    <>
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming</p>
      {plan.map((item, index) => {
        return (
          <div key={index}>
            <p>{item.plan}</p>
            <p>{item.price}</p>
          </div>
        );
      })}
      <div>
        {extra.map((item, index) => {
          return <p>{item}</p>;
        })}
      </div>
    </>
  );
};
