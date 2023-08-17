import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./App";

function Test() {
  const [movieRating, setMovierating] = useState(0);
  return (
    <div>
      <StarRating color="blue" maxrating={10} onsetRating={setMovierating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating size={23} color="purple" defaultRating={3} />
    <Test />
  </React.StrictMode>
);
