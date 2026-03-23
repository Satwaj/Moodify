import React, { useState } from "react";
import FaceExpression from "./features/Expressions/components/FaceExpression";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <FaceExpression />
    </div>
  );
};

export default App;
