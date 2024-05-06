const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

/* pageNum - required for infinite loading */
const getData = async (pageNum = 1) => {
  const body = JSON.stringify({
    limit: 10,
    offset: (pageNum - 1) * 10,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body,
  };

  try {
    const res = await fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    );

    const data = res.json();
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export default getData;
