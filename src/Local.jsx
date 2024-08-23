import { useCallback, useMemo, useState } from "react";
import LocalChild from "./LocalChild";

const arr = [
  1, 3, 4, 5, 6, 6, 7, 8, 6, 4, 53234, 245, 52, 23345, 24, 2345, 234, 523, 452,
  345, 2, 542, 345, 24, 24, 52, 5, 234, 52, 345, 234, 5, 234, 52, 34, 52, 3,
  452, 34, 253, 54, 23, 452, 34, 52, 35, 23, 5345, 23, 45, 23, 454, 23,
];

function Local() {
  console.log("Rendering parent one..");
  const [localinc, setLocalinc] = useState(0);
  const [childinc, setChildinc] = useState(0);

  const memorizedCallback = useCallback(() => handleChildCount(), []);

  const handleLocal = () => {
    setLocalinc((current) => current + 1);
  };

  const handleChildCount = () => {
    setChildinc((current) => current + 1);
  };

  const largestNumber = () => {
    console.log("I am working..");
    return Math.max(...arr);
  };

  const memorizedVal = useMemo(() => largestNumber(), [arr]);

  return (
    <div>
      <LocalChild
        localChildCount={childinc}
        onHandleChildCount={memorizedCallback}
      ></LocalChild>
      <button onClick={handleLocal}>local</button>
      {localinc}
      Largest Number : {memorizedVal}
    </div>
  );
}

export default Local;
