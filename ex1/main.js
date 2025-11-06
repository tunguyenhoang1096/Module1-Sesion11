let year = +prompt("Nhập vào số năm: ");
if (year % 4 === 0 && year % 100 !== 0) {
  alert("Năm " + year + " là năm nhuận!");
} else if (year % 100 === 0 && year % 400 === 0) {
  alert("Năm " + year + " là năm nhuận!");
} else alert("Năm " + year + " là năm không nhuận!");
