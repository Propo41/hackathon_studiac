import lottie from "lottie-web";
import reactLogo from "../../static/anim_loading.json";
import React from "react";

export default function Loading() {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#opener-loading"),
      animationData: reactLogo,
    });
  }, []);
  return (
    <div
      style={{
        textAlign: "-webkit-center",
        background:
          "radial-gradient(150.69% 1435% at 20.62% 18.55%, #26F5BC 10.67%, #90D6F1 83.33%)",
        height: "100vh",
      }}
    >
      <div style={{ height: "50%", width: "50%" }} id="opener-loading"></div>
    </div>
  );
}
