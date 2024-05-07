export const filterData = (data, filter) => {
  let filteredData = [];

  if (data.length === 0) return data;

  //Filter based on roles
  if (filter.jobRole.length === 0) filteredData = [...data];
  else {
    data.forEach((d) => {
      for (const role of filter.jobRole) {
        if (d.jobRole.toLowerCase().startsWith(role.toLowerCase()))
          filteredData.push({
            ...d,
          });
      }
    });
  }

  //Filter based on minExp and min Base salary
  filteredData = filteredData.filter((d) => {
    return (
      d.minExp >= +filter.minExp &&
      d.minJdSalary >= Number.parseInt(filter.minJdSalary) * 10
    );
  });

  //filter based on location
  if (filter.location.length !== 0) {
    filteredData = filteredData
      .map((data) => {
        const locationType =
          data.location.toLowerCase() === "remote"
            ? "Remote"
            : data.location.toLowerCase() === "hybrid"
            ? "Hybrid"
            : "In-Office";

        let obj = null;
        for (const loc of filter.location) {
          if (loc === locationType) obj = { ...data };
        }

        return obj;
      })
      .filter((data) => data !== null);
  }

  //Filter based on search string
  if (!filter.companyName) return filteredData;
  else {
    filteredData = filteredData.filter((comp) =>
      comp.companyName
        .toLowerCase()
        .startsWith(filter.companyName.toLowerCase())
    );
  }

  return filteredData;
};
