export const denormalizePrediction = (
  prediction,
  viewportWidth,
  viewportHeight
) => {
  return {
    x: prediction.x * viewportWidth,
    y: prediction.y * viewportHeight,
  };
};
