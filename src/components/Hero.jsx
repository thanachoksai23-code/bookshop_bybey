function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-grid">

        <div className="hero-content">

          <div className="eyebrow">
            เรื่องเล่าที่อยากแบ่งปัน
          </div>

          <h1>
            Let Him Cook
            <br />
            พาเรากลับมาเจอกันอีก 2 ปี
            <span>ที่เกาะชาบอนดี้</span>
          </h1>

          <p>
            หนังสือทุกเล่มมีเรื่องราวของตัวเอง
            และบางครั้งเรื่องราวเหล่านั้น
            อาจพาเราไปพบกับความรู้สึกใหม่ ๆ
          </p>

          <div className="hero-buttons">
            <a href="#books" className="button button-dark">
              ค้นหาหนังสือ
              <span>↗</span>
            </a>

            <a href="#about" className="text-link">
              รู้จักนักเขียน
              <span>→</span>
            </a>
          </div>

          <div className="hero-quote">
            <span>“</span>
            Stories are how we remember
            <br />
            what it means to be human.
          </div>

        </div>

        <div className="hero-image-wrap">

          <img
            src="https://media1.tenor.com/m/U9s5v6TLKpUAAAAd/blackbeard-one-piece.gif"
            alt="Writing"
            className="hero-image"
          />

          <div className="hero-circle">
            <small>วันพีซ</small>
            <strong>
              มัน
              <br />
              ขี้โม้
            </strong>
            <span>✳</span>
          </div>

          <div className="hero-caption">
            <span>●</span>
            บันทึกจากโต๊ะเขียนหนังสือ
            <small>NO. 01</small>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;