export const emitCorrectKey = (key) => {
  switch (key) {
    case "Roles":
      return "jobRole";

    case "MinBaseSalary":
      return "minJdSalary";

    case "Experience":
      return "minExp";

    case "Location":
      return "location";
  }
};
