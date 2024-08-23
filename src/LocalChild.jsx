import { memo } from "react";
function LocalChild({ onHandleChildCount, localChildCount }) {
  console.log("Rendering LocalChild");

  const handleLocalChildCount = () => {
    onHandleChildCount();
  };
  return (
    <div>
      <button onClick={handleLocalChildCount}>childCount</button>
      {localChildCount}
    </div>
  );
}

export default memo(LocalChild);
