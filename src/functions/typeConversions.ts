export enum OUTPUT_TYPES { 
  INT,
  FLOAT
} 

export const outputNumber = (input: string | number | null, outputType?: OUTPUT_TYPES) => {
  if (input == null || input == "") {
    return null;
  }
  else {
    if (typeof input === "number") {
      return input;
    }
    else {
      if (outputType && outputType === OUTPUT_TYPES.FLOAT) {
        return parseFloat(input);
      }
      else {
        return parseInt(input);
      }
    }
  }
};
