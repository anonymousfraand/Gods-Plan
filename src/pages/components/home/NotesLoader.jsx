import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";

export default function NotesLoader(Component) {
  return function LoadingComponent({ isLoaded, ...props }) {
    if (isLoaded) {
      return <Component {...props} />;
    } else {
      return (
        <div
          className="container d-flex justify-content-center mt-5"
          style={{ width: "100%" }}
        >
          <LinearProgress className="w-100" />
        </div>
      );
    }
  };
}
