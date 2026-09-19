function pesanWhatsApp(namaMenu) {
    // Ganti nomor WhatsApp di bawah ini dengan nomor WhatsApp Anda (format internasional tanpa angka 0 di depan, misal: 6281234567890)
    const nomorWhatsApp = "6281234567890"; 
    
    const pesan = `Halo kak, saya mau pesan ${namaMenu}. Apakah stoknya masih ada?`;
    const urlWhatsApp = `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesan)}`;
    
    // Membuka WhatsApp di tab baru
    window.open(urlWhatsApp, '_blank');
}