const About = {
  async render() {
    return `
    <div class="about-hero">
    <div class="container">
        <div class="box-hero">
            <div class="box">
                <h1>Tentang Kami</h1>
                <p> WarisanNusantara adalah sebuah platform yang berdedikasi untuk mengangkat dan mempromosikan kekayaan budaya dan
                    warisan Indonesia, yang meliputi seni, budaya, tradisi, serta kekayaan alam yang mempesona.
                    Di Warisan Nusantara, kami berkomitmen untuk melestarikan dan memperkenalkan keindahan serta
                    keunikan Nusantara kepada dunia. Dibangun atas semangat cinta dan kebanggaan akan
                    keberagaman budaya Indonesia, Warisan Nusantara hadir sebagai wadah bagi para pelaku seni,
                    pengrajin, pelestari budaya, dan para pecinta budaya Indonesia untuk berbagi pengetahuan,
                    pengalaman, serta karya-karya yang memukau.

                    Visi kami adalah untuk menjadikan kekayaan budaya Indonesia dikenal luas baik di dalam
                    maupun di luar negeri, serta memberikan apresiasi yang lebih mendalam terhadap nilai-nilai
                    budaya yang menjadi ciri khas bangsa Indonesia. Kami percaya bahwa dengan memperkuat
                    pemahaman dan kesadaran akan warisan budaya, kita dapat mewujudkan pembangunan yang
                    berkelanjutan serta menginspirasi generasi mendatang.</p>
                <p></p>
            </div>
        </div>
    </div>
</div>
<section class="about">
<div class="container">
    <div class="box-about">
        <h2>Misi Kami</h2>
        <p>Kami bertujuan untuk menjadi jembatan antara generasi saat ini dan warisan budaya masa lalu. Dengan
            mempromosikan destinasi pariwisata yang tersembunyi, kami berharap dapat meningkatkan kesadaran
            tentang pentingnya menjaga kelestarian budaya dan lingkungan.</p>
    </div>
    <div class="box-about">
        <h2>Tim Kami</h2>
        <div class="team-members">
            <!-- Anggota Tim 1 -->
            <div class="team-member">
                <img src="./images/ricky.jpeg" alt="Ricky Nugraha">
                <h3>Ricky Nugraha</h3>
                <p>Frontend Developer</p>
                <p>Merancang dan mengembangkan antarmuka pengguna (UI) yang intuitif dan responsif.
                    Berkolaborasi dengan tim backend dalam integrasi sistem.</p>
            </div>

            <div class="team-member">
                <img src="../assets/img/user.jpg" alt="Farid Rizal Setiawan">
                <h3>Farid Rizal Setiawan</h3>
                <p>Backend Developer 1</p>
                <p>Bertanggung jawab untuk mengembangkan backend menggunakan Node.js, termasuk merancang dan
                    mengelola API endpoints. Memastikan kinerja dan keamanan backend.</p>
            </div>
            <div class="team-member">
                <img src="../assets/img/user.jpg" alt="Dion Revaldy Putra">
                <h3>Dion Revaldy Putra</h3>
                <p>Backend Developer 2</p>
                <p>Fokus pada pengembangan fitur inti menggunakan Node.js dan menangani logika bisnis backend.
                    Berkolaborasi dengan Backend Developer 1 dalam integrasi sistem</p>
            </div>
        </div>
    </div>
</div>
</section>
        `
  },

  async afterRender() {

  },
};

export default About;
