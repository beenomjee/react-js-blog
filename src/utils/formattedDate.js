export default function formattedDate(timeInMs) {
  const date = new Date(timeInMs).toDateString();
  return date;
}
