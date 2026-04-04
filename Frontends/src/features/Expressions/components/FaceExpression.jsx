import { useEffect, useRef, useState } from "react";
import { detect, init } from "../utils/utils";

const normalizeMood = (expression) => {
  if (!expression) return null;

  if (expression.includes("Happy")) return "happy";
  if (expression.includes("Sad")) return "sad";
  if (expression.includes("Surprised")) return "surprised";
  if (expression.includes("Neutral")) return "calm";

  return expression.toLowerCase();
};

export default function FaceExpression({ onDetected }) {
  const videoRef = useRef(null);
  const landmarkerRef = useRef(null);
  const streamRef = useRef(null);

  const [expression, setExpression] = useState("Detecting...");

  useEffect(() => {
    let landmarker = null;
    let video = null;

    init({ landmarkerRef, videoRef, streamRef }).then(() => {
      landmarker = landmarkerRef.current;
      video = videoRef.current;
    });

    return () => {
      if (landmarker) {
        landmarker.close();
      }

      if (video?.srcObject) {
        video.srcObject.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div className="face-expression">
      <video ref={videoRef} className="face-expression__video" playsInline />
      <h2 className="face-expression__title">{expression}</h2>
      <button
        className="face-expression__button"
        onClick={() => {
          const detectedExpression = detect({
            landmarkerRef,
            videoRef,
            setExpression,
          });

          if (onDetected && detectedExpression) {
            const mood = normalizeMood(detectedExpression);
            if (mood) {
              onDetected({ mood });
            }
          }
        }}
      >
        Detect expression
      </button>
    </div>
  );
}
