import React, { Component } from "react";
import Counter from "./counter";

const Counters = (props) => {
  const { counters, onResetAll, onIncrement, onDecrement, onReset, onDelete } =
    props;
  return (
    <div className="text-center">
      <button onClick={onResetAll} className="btn btn-secondary mb-5">
        RESET ALL
      </button>

      {counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onReset={onReset}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default Counters;
