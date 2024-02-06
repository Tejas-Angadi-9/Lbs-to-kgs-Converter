import { useState } from "react";
import Results from "./Results";

const UserInput = () => {
  const [data, setData] = useState({
    lbs: 5,
    kgs: 2.3,
  });

  function changeHandler(key, value) {
    setData((prevData) => {
      return {
        ...prevData,
        [key]: value,
      };
    });
  }

  // console.log("Lbs: ", data.lbs, " Kgs: ", data.kgs);

  // const kgsToLbs =
  const LbsToKgs = Math.round(data.lbs * 0.453592);
  const KgsToLbs = Math.round(data.kgs / 0.453592);

  return (
    <div id="user-input">
      <h3>
        <label htmlFor="lbs">Lbs: </label>
        <input
          type="number"
          value={data.lbs}
          onChange={(e) => changeHandler("lbs", e.target.value)}
        />
      </h3>
      <h3>
        <label htmlFor="lbs">Kgs: </label>
        <input
          type="number"
          value={data.kgs}
          onChange={(e) => changeHandler("kgs", e.target.value)}
        />
      </h3>

      <Results LbsToKgs={LbsToKgs} KgsToLbs={KgsToLbs} data={data} />
    </div>
  );
};

export default UserInput;
