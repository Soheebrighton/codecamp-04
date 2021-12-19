// export function displayedAt(createdAt) {
//   const milliSeconds = new Date(createdAt);
//   const seconds = milliSeconds / 1000;
//   if (seconds < 60) return `방금 전`;
//   const minutes = seconds / 60;
//   if (minutes < 60) return `${Math.floor(minutes)}분 전`;
//   const hours = minutes / 60;
//   if (hours < 24) return `${Math.floor(hours)}시간 전`;
//   const days = hours / 24;
//   if (days < 7) return `${Math.floor(days)}일 전`;
//   const weeks = days / 7;
//   if (weeks < 5) return `${Math.floor(weeks)}주 전`;
//   const months = days / 30;
//   if (months < 12) return `${Math.floor(months)}개월 전`;
//   const years = days / 365;
//   return `${Math.floor(years)}년 전`;
// }

export function displayedAt(value) {
  const today = new Date();
  const timeValue = new Date(value);

  const betweenTime = Math.floor(
    (today.getTime() - timeValue.getTime()) / 1000 / 60
  );
  if (betweenTime < 1) return "방금 전";
  if (betweenTime < 60) {
    return `${betweenTime}분 전`;
  }

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour < 24) {
    return `${betweenTimeHour}시간 전`;
  }

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  if (betweenTimeDay < 365) {
    return `${betweenTimeDay}일 전`;
  }

  return `${Math.floor(betweenTimeDay / 365)}년 전`;
}
