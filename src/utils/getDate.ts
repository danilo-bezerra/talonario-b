export function getDate() {
  const date = new Date();

  const currentDate = `${date.getDate()}/${String(
    date.getMonth() + 1
  ).padStart(2, "0")}/${date.getFullYear()}`;
  const currentHour = `${String(date.getHours()).padStart(
    2,
    "0"
  )}:${String(date.getMinutes()).padStart(2, "0")}:${String(
    date.getSeconds()
  ).padStart(2, "0")}`;

  return {
    currentDate,
    currentHour,
  };
}