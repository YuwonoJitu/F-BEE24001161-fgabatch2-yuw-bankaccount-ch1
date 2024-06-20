
// Deklarasikan saldo awal
let saldo = 0;

// Berfungsi untuk menambahkan uang ke rekening
function tambahSaldo() {
  let amount = parseInt(window.prompt("Masukkan jumlah saldo yang ingin ditambahkan", ""));
  if (!isNaN(amount)) {
    saldo += amount;
    alert(`Saldo baru Anda adalah: ${saldo}`);
  } else {
    alert("Masukan tidak valid. Silakan coba lagi.");
  }
}

// Berfungsi untuk mengurangi uang dari rekening
function kurangiSaldo() {
  let amount = parseInt(window.prompt("Masukkan jumlah saldo yang ingin dikurangi:", ""));
  if (!isNaN(amount)) {
    saldo -= amount;
    alert(`Saldo baru Anda adalah: ${saldo}`);
  } else {
    alert("Masukan tidak valid. Silakan coba lagi.");
  }
}


//Jalankan kode saat halaman dimuat
document.addEventListener("DOMContentLoaded", function() {
  // Tambahkan pendengar acara ke tombol untuk memanggil fungsi tambahSaldo
  document.getElementById("tambah-saldo").addEventListener("click", tambahSaldo);
  // Tambahkan pendengar acara ke tombol untuk memanggil fungsi kurangiSaldo
  document.getElementById("kurangi-saldo").addEventListener("click", kurangiSaldo);
});