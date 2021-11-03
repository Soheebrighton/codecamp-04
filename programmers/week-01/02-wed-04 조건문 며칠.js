function days(month) {
  if (
    month === 1 ||
    month === 3 ||
    month === 5 ||
    month === 7 ||
    month === 8 ||
    month === 10 ||
    month === 12
  ) {
    console.log("31");
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    console.log("30");
  } else if (month === 2) {
    console.log("28");
  }
}

days(1); // 31
days(2); // 28
days(4); // 30

// 2월 : 28일

// 4월 : 30일
// 6월 : 30일
// 9월 : 30일
// 11월 : 30일

// 1월 : 31일
// 3월 : 31일
// 5월 : 31일
// 7월 : 31일
// 8월 : 31일
// 10월 : 31일
// 12월 : 31일
