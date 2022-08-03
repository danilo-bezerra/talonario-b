export default function useFormatedDate() {
  const date = new Date();

  const formatedDate = `${date.getDate()}/${String(
    date.getMonth() + 1
  ).padStart("2", "0")}/${date.getFullYear()}`;
  const formatedHours = `${String(date.getHours()).padStart("2", "0")}:${String(
    date.getMinutes()
  ).padStart("2", "0")}:${String(date.getSeconds()).padStart("2", "0")}`;

  return {
    formatedHours,
    formatedDate,
  };
}
