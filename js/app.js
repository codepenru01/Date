let day = new Date(prompt("Tug'ilgan oyingiz: " + '\n' + "Tug'ilgan kuningiz: " + '\n' + "Tug'ilgan yilingiz: " + '\n' + "Shu tartibda kiriting => 08-04-2005"));
console.log(day);

let now = Date.now();

console.log("Yoshingiz: " + Math.round((now - day) / 1000 / 60 / 60 / 24 / 365.25) + ";");
console.log("Soatda: " + Math.round((now - day) / 1000 / 60 / 60) + ";");
console.log("Sekundda : " + Math.round(now - day) + ";");
console.log("Tashrifingiz uchun rahmat!");