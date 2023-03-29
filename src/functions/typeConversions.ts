export const outputNumber = (input: string | number | null) => {
  if (input == null || input == "") {
    return null;
  }
  else {
    if (typeof input === "number") {
      return input;
    }
    else {
      return parseInt(input);
    }
  }
};
