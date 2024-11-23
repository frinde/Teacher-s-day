document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');
    const scrollThreshold = 0.8; // 80% dari total halaman
    const maxShift = 1; // Maksimum pergeseran 4%

    // Simpan posisi awal setiap kartu
    cards.forEach((card) => {
        const style = window.getComputedStyle(card);
        const transform = style.transform; // Ambil transformasi awal
        card.dataset.initialTransform = transform; // Simpan ke atribut data
    });

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const pageHeight = document.body.scrollHeight;

        // Cek apakah pengguna telah menggulir 80%
        if (scrollPosition >= pageHeight * scrollThreshold) {
            cards.forEach((card) => {
                // Ambil posisi awal dari atribut data
                const initialTransform = card.dataset.initialTransform || '';

                // Pilih arah acak
                const randomX = (Math.random() - 0.5) * 2 * maxShift; // -4% sampai 4%
                const randomY = (Math.random() - 0.5) * 2 * maxShift; // -4% sampai 4%

                // Gabungkan transformasi awal dengan translate acak
                card.style.transform = `${initialTransform} translate(${randomX}%, ${randomY}%)`;
            });
        }
    });
});

