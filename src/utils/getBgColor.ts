export const bgColor = (category: string) => {
  switch (category) {
    case "anime":
      return "#D81B60";
    case "food":
      return "#F57F17";
    case "travel":
      return "#A1887F";
    case "music":
      return "#FBC02D";
    case "coding":
      return "#1E88E5";
    default:
      return "#A0A0A0";
  }
};

export const colorMap: { [key: string]: string } = {
    "pink-300": "#FBBFCA",
    "yellow-300": "#FCE",
    "brown-200": "#D9CBA0",
    "yellow-200": "#FCE68A",
    "blue-300": "#93C5FD",
  };
