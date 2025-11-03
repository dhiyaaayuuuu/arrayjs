let nilaiSiswa = [80, 75, 90, 60, 85, 70];
console.log("nilai siswa:", nilaiSiswa);

let total = nilaiSiswa.reduce((jumlah, nilai) => jumlah + nilai, 0);
let rataRata = total / nilaiSiswa.length;
console.log("rata-rata nilai:", rataRata);

let nilaiTinggi = nilaiSiswa.filter(nilai => nilai >= 75);
console.log("nilai ≥ 75:", nilaiTinggi);

nilaiSiswa.push(98);
console.log("menambahkan nilai baru:", nilaiSiswa);

nilaiSiswa.splice(1, 1); 
console.log("menghapus nilai tertentu:", nilaiSiswa);

console.log("=== hasil akhir ===");
console.log("nilai siswa:", nilaiSiswa);
console.log("rata-rata:", rataRata);
console.log("nilai ≥ 75:", nilaiTinggi);
console.log("menambahkan nilai baru:", nilaiSiswa);
console.log("menghapus nilai tertentu:", nilaiSiswa);