const getDatetime = () => {
  const dt = new Date();
  const year = dt.getFullYear().toString();
  const month = (dt.getMonth() + 1).toString().padStart(2, '0');
  const date = `${year}-${month}-${dt.getDate().toString().padStart(2, '0')}`;

  let meridiem = '오전';
  let hour = Number(dt.getHours().toString().padStart(2, '0'));
  if (hour > 12) {
    meridiem = '오후';
    hour = hour - 12;
  }

  const minute = dt.getMinutes().toString().padStart(2, '0');

  const time = `${meridiem} ${hour}:${minute}`;
  return { date, time };
};

export default getDatetime;
