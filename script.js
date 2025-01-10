
// Ambil elemen-elemen yang diperlukan
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");

// Tambahkan event pada semua gambar dengan kelas "zoomable"
document.querySelectorAll(".zoomable").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex"; // Tampilkan modal
        modalImg.src = img.src;      // Setel gambar di modal
    });
});

// Tutup modal saat tombol "close" diklik
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Tutup modal saat area luar gambar diklik
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
