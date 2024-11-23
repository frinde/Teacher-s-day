document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');
    const scrollThreshold = 0.8;
    const maxShift = 1; 

    cards.forEach((card) => {
        const style = window.getComputedStyle(card);
        const transform = style.transform;
        card.dataset.initialTransform = transform;
    });

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const pageHeight = document.body.scrollHeight;

        if (scrollPosition >= pageHeight * scrollThreshold) {
            cards.forEach((card) => {
                const initialTransform = card.dataset.initialTransform || '';

                const randomX = (Math.random() - 0.5) * 2 * maxShift; // -4% sampai 4%
                const randomY = (Math.random() - 0.5) * 2 * maxShift; // -4% sampai 4%

                card.style.transform = `${initialTransform} translate(${randomX}%, ${randomY}%)`;
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const mainH1 = document.querySelector('.main h1');

    function adjustH1FontSize() {
        const scrollTop = window.scrollY;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollFraction = scrollTop / docHeight;

        const minFontSize = 32; // pt
        const maxFontSize = 40; // pt

        const newFontSize = minFontSize + (maxFontSize - minFontSize) * scrollFraction;
        const finalFontSize = Math.min(newFontSize, maxFontSize);

        // Set ukuran font baru
        mainH1.style.fontSize = `${finalFontSize}pt`;
    }

    // Tambahkan event listener untuk scroll
    window.addEventListener('scroll', adjustH1FontSize);
});

document.addEventListener('click', function() {
    const audio = document.getElementById('music');
    audio.play().catch(error => console.log('Autoplay dicegah:', error));
}, { once: true }); // Hanya memutar sekali
