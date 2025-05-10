// Saat ini belum ada interaksi, tapi kamu bisa tambahkan ini:
console.log("Halaman Portofolio Kadek siap!");

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    console.log("Mode tampilan diganti!");
}

function kirimPesan() {
    const nama = document.getElementById("namaKontak").value;
    const pesan = document.getElementById("pesanKontak").value;

    const hasil = `<p>Hai <strong>${nama}</strong>, terima kasih atas pesanmu:<br>"${pesan}"</p>`;
    document.getElementById("hasilPesan").innerHTML = hasil;

    // opsional: reset isian
    document.getElementById("namaKontak").value = "";
    document.getElementById("pesanKontak").value = "";
}

