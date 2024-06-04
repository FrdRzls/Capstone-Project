import warisanNusantara from "../../data/wisata";
import { wisataCard } from "../templates/template-creator";
const Pantai = {
    async render() {
        return `
    <div class="hero">
    <img class='img-jumbotron' src='/images/bg.gif'>
    <div class='overlay'></div>
    <div class="container">
        <div class="box-hero-hidden">
            <div class="box">
                <h1>Pariwisata & Lingkungan</h1>
                <p>Sambut petualangan baru di tengah alam yang mempesona dengan menjunjung tinggi kelestarian lingkungan.</p>
                <button>Selengkapnya</button>
            </div>
            </div>
        </div>
    </div>
</div>
<section id="content" class="content">
            <div class="text_header">
                <h2 class="text_title">Rekomendasi Wisata Jawa Barat</h2>
                <p class="text_caption">Di Warisan Nusanatara, kami mengajak Anda untuk menjelajahi pesona alam Nusantara dengan cara yang bertanggung jawab dan berkelanjutan. 
                Kami percaya bahwa pariwisata dapat menjadi kekuatan positif untuk melestarikan lingkungan dan memberdayakan masyarakat lokal.</p>
            </div>
            <div class="container">
                <div class="card-container"></div>
            </div>
        </section>
`;
    },

    async afterRender() {
        const wisataContainer = document.querySelector('.card-container');
        console.log(warisanNusantara)
        const wisata = wisataCard(warisanNusantara);
        wisataContainer.innerHTML = wisata;
        // TODO: tampilkan wisata di dalam DOM
    },
};

export default Pantai;
