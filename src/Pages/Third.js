import { useContext } from "react";
import { ExtraContext } from "../Components/Context";

export const Third = () => {
  const { setExtra, extra } = useContext(ExtraContext);
  const storeExtra = (e) => {
    setExtra([...extra, { name: e.target.id, price: e.target.value }]);
  };
  return (
    <>
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience</p>
      <div>
        <input
          type="checkbox"
          id="Online service"
          value=""
          onChange={(e) => storeExtra(e)}
        />
        <p>Online service</p>
        <p>Access to multiplayer games</p>
      </div>
      <div>
        <input type="checkbox" id="Larger storage" value="" />
        <p>Larger storage</p>
        <p>Extra 1TB of cloud save</p>
      </div>
      <div>
        <input type="checkbox" id="Customizable Profile" value="" />
        <p>Customizable Profile</p>
        <p>Custom theme to your profile</p>
      </div>
    </>
  );
};
