const Results = ({ LbsToKgs, KgsToLbs, data }) => {
  return (
    <div id="space-chod">
      {data.lbs > 0 ? (
        <h2>
          {data.lbs} Lbs = {LbsToKgs} Kgs
        </h2>
      ) : (
        <h2>Lbs should be more than 0</h2>
      )}

      {data.kgs > 0 ? (
        <h2>
          {data.kgs} Kgs = {KgsToLbs} Lbs
        </h2>
      ) : (
        <h2>Kgs should be more than 0</h2>
      )}
    </div>
  );
};

export default Results;
