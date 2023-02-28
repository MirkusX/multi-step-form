export const Second = () => {
  return (
    <>
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing</p>
      <label>Arcade</label>
      <input type="radio" name="plan" value="Arcade" required="required" />
      <label>Advanced</label>
      <input type="radio" name="plan" value="Advanced" />
      <label>Pro</label>
      <input type="radio" name="plan" value="Pro" />
    </>
  );
};
