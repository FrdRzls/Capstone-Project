import hidden_gem from "../../data/hidden";
import { wisataCard } from "../templates/template-creator";

const HIDDEN_GEM = {
    async render() {
        return `
    <div class="hero">
    <img class='img-jumbotron' src='/images/bg.gif'>
    <div class='overlay'></div>
    <div class="container">
        <div class="box-hero-hidden">
            <div class="box">
                <h1>Hidden Gems!</h1>
                <p>Jelajahi sisi gelap yang indah dari destinasi wisata dengan koleksi Hidden Gems kami, di mana petualangan menanti untuk dijalani.</p>
                <button>Selengkapnya</button>
            </div>
            </div>
        </div>
    </div>
</div>
<section id="content-hidden" class="content-hidden">
    <div class="container">
        <div class="card-container-hidden"></div>
    </div>
</section>
`;
    },

    async afterRender() {
        const wisataContainer = document.querySelector('.card-container-hidden');
        const wisata = wisataCard(hidden_gem); // Gunakan hidden_gem dari data
        wisataContainer.innerHTML = wisata;
    },
};

export default HIDDEN_GEM;
