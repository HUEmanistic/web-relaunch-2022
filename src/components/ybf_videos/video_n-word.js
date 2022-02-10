import React from "react";

const v = "2GcyYvruOYY";

export default () => {
  return (
    <div
      className="video"
      style={{
        position: "relative",
        paddingBottom: "56.25%" /* 16:9 */,
        paddingTop: 25,
        height: 100,
      }}
    >
      <iframe title="Your Black Friend"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        src={`https://www.youtube.com/embed/${v}`}
        frameBorder="0"
      />
    </div>
  );
};
