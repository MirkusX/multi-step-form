export const Second = () => {
  return (
    <form>
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing</p>
      <label>Arcade</label>
      <input type="radio" name="plan" value="Arcade" required="required" />
      <label>Advanced</label>
      <input type="radio" name="plan" value="Advanced" required="required" />
      <label>Pro</label>
      <input type="radio" name="plan" value="Pro" required="required" />
    </form>
  );
};
