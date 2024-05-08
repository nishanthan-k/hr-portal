export const formatDate = (date) => {
  date = date.split("-");
  let day = date[0] > 9 ? date[0] : `${date[0]}`;
  let month = date[1] > 9 ? date[1] : `${date[1]}`;
  let year = date[2];
  // const newDate = new Date(year, month, day).toString().split(" ");
  // return `${newDate[1]} ${newDate[2]} ${newDate[3]}`;

  return `${day}-${month}-${year}`;
};

export const postDateFormat = (date) => {
  // console.log("return post date", date)
  date = date.split("-");
  let year = date[2] > 9 ? date[2] : `${date[2]}`;
  let month = date[1] > 9 ? date[1] : `${date[1]}`;
  let day = date[0];
  console.log("return post date", `${year}/${month}/${day}`);
  return `${year}-${month}-${day}`;
  // console.log(date, `${day}-${month}-${year}`)
};

export const formatExp = (exp) => {
  return parseInt(exp) > 1 ? `${exp} yrs` : `${exp} yr`;
};
