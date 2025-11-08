let weight = Number(prompt("Nhập cân nặng của bạn(kg):"));
let height = Number(prompt("Nhập chiều cao của bạn(m):"));
console.log(weight);
console.log(height);
let BMI = (weight / (height * height)).toFixed(1);
console.log(BMI);
debugger;
if (0 < BMI && BMI < 18.5) {
  alert("Cân nặng thấp (gầy)");
} else if (18.5 <= BMI && BMI < 25) {
  alert("bình thường");
} else if (25 <= BMI && BMI < 30) {
  alert("Thừa cân: Tiền béo phì");
} else if (30 <= BMI && BMI < 35) {
  alert("Thừa cân: Béo phì độ I");
} else if (35 <= BMI && BMI < 40) {
  alert("Thừa cân: Béo phì độ II");
} else if (BMI >= 40) {
  alert("Thừa cân: Béo phì độ III");
} else {
  alert("Bạn nhập sai dữ liệu");
}
