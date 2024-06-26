import warisanNusantara from "../../data/wisata";
import { wisataCard } from "../templates/template-creator-home";

const HOME = {
    async render() {
        return `
        <div class="hero">
            <img class='img-jumbotron' src='/images/bg.gif'>
            <div class='overlay'></div>
            <div class="container">
                <div class="box-hero">
                    <div class="box">
                        <h1>Jelajahi Keindahan dan Kearifan Lokal Nusantara!</h1>
                        <p>Warisan Nusantara adalah platform yang didedikasikan untuk melestarikan dan mempromosikan warisan sosial, budaya, pariwisata, dan lingkungan di Indonesia.</p>
                        <button>Selengkapnya</button>
                    </div>
                    <div class="box carousel-container">
                        <div class="carousel">
                            <img src="/images/Curug_Cibareubeuy.jpg" alt="Image 1" class="carousel-image active">
                            <img src="/images/Gunung_Papandayan.jpg" alt="Image 2" class="carousel-image">
                            <img src="/images/Kampung_Adat_Ciptagelar.jpg" alt="Image 3" class="carousel-image">
                        </div>
                    </div>
                    <div class="carousel-dots">
                        <span class="dot active" data-index="0"></span>
                        <span class="dot" data-index="1"></span>
                        <span class="dot" data-index="2"></span>
                    </div>
                </div>
            </div>
        </div>
        <section id="content" class="content">
            <div class="text_header">
                <h2 class="text_title">Rekomendasi Wisata Jawa Barat</h2>
                <p class="text_caption">Nikmati keindahan alam dan budaya Jawa Barat dengan rekomendasi destinasi wisata terbaik yang wajib Anda kunjungi. Dari pegunungan yang menakjubkan hingga pantai yang mempesona, temukan pengalaman tak terlupakan di Jawa Barat.</p>
            </div>
            <div class="container_card">
                <div class="card__container"></div>
            </div>
        </section>
        `;
    },

    async afterRender() {
        const wisataContainer = document.querySelector('.card__container');
        console.log(warisanNusantara);
        const wisata = wisataCard(warisanNusantara);
        wisataContainer.innerHTML = wisata;

        // Carousel functionality
        const images = document.querySelectorAll('.carousel .carousel-image');
        const dots = document.querySelectorAll('.carousel-dots .dot');
        let currentIndex = 0;

        function showImage(index) {
            images[currentIndex].classList.remove('active');
            dots[currentIndex].classList.remove('active');
            currentIndex = index;
            images[currentIndex].classList.add('active');
            dots[currentIndex].classList.add('active');
        }

        function showNextImage() {
            const nextIndex = (currentIndex + 1) % images.length;
            showImage(nextIndex);
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showImage(index);
            });
        });

        setInterval(showNextImage, 3000); // Change image every 3 seconds
    },
};

export default HOME;
