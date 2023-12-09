export const normalizeData = (dataPoint) => {
  const input = dataPoint.input;
  const output = dataPoint.output;

  return {
    input: {
      clickX: input.clickX / input.viewportWidth,
      clickY: input.clickY / input.viewportHeight,
      viewportWidth: 1,
      viewportHeight: 1,
      menuWidth: input.menuWidth / input.viewportWidth,
      menuHeight: input.menuHeight / input.viewportHeight,
    },
    output: {
      x: output.x / input.viewportWidth,
      y: output.y / input.viewportHeight,
    },
  };
};
