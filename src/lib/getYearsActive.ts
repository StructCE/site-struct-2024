export function getYearsActive() {
  const currentDate = new Date();

  return (currentDate.getDate() >= 20 && currentDate.getMonth() + 1 === 11) ||
    currentDate.getMonth() + 1 > 11
    ? currentDate.getFullYear() - 2014
    : currentDate.getFullYear() - 2014 - 1;
}
