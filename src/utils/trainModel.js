const rawData = [
  // When close to top left corner
  {
    input: {
      clickX: 10,
      clickY: 10,
      viewportWidth: 1000,
      viewportHeight: 800,
      menuWidth: 200,
      menuHeight: 160,
    },
    output: { x: 10, y: 10 },
  },
  // When close to top right corner
  {
    input: {
      clickX: 900,
      clickY: 10,
      viewportWidth: 1000,
      viewportHeight: 800,
      menuWidth: 200,
      menuHeight: 160,
    },
    output: { x: 700, y: 10 },
  },
  // When close to bottom left corner
  {
    input: {
      clickX: 10,
      clickY: 720,
      viewportWidth: 1000,
      viewportHeight: 800,
      menuWidth: 200,
      menuHeight: 160,
    },
    // move the context menu so that it is within viewport
    output: { x: 10, y: 560 },
  },
  // When close to bottom right corner
  {
    input: {
      clickX: 900,
      clickY: 720,
      viewportWidth: 1000,
      viewportHeight: 800,
      menuWidth: 200,
      menuHeight: 160,
    },
    // move the context menu so that it is within viewport
    output: { x: 700, y: 560 },
  },
  // Add more data points for better prediction
];
