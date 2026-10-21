function AboutSection() {
  return (
    <section className="about-section" id="about">

      <div className="container about-grid">

        <div className="about-image-wrap">

          <img
            src="https://cdn-local.mebmarket.com/meb/server1/157947/Thumbnail/book_detail_large.gif?2"
            alt="Writer"
            className="about-image"
          />

          <div className="vertical-text">
            Re:Zero
          </div>

          <div className="image-number">
            01 / Re:Zero
          </div>

        </div>

        <div className="about-content">

          <div className="eyebrow">
            ฉบับนิยาย
          </div>

          <h2>
            Re : Zero
          </h2>
          <h1>
            <span>รีเซทชีวิต ฝ่าวิกฤตต่างโลก</span>
          </h1>

          <p>
            นัทสึกิ สุบารุ ถูกเรียกตัวไปยังต่างโลกตามรูปแบบยอดนิยมของการโดนเรียกไปต่างโลกเปี๊ยบ? ทว่าเขากลับโดนกลุ่มโจรเล่นงานจนเกือบแย่ แต่ก็ได้รับความช่วยเหลือจากหญิงสาวปริศนาเขาจึงอาสาช่วยเธอตามหาของที่ถูกขโมยไป...
ในขณะที่กำลังจะได้ของคืน ทั้งเขาและเธอกลับถูกโจมตีจนถึงแก่ชีวิต
          </p>

          <p>
            —และรู้สึกตัวขึ้นอีกครั้งตรงสถานที่ที่เขาถูกเรียกมาครั้งแรก
นี่มันหมายความว่ายังไงกันแน่?

ถึงเธอจะลืมฉัน แต่ฉันไม่มีทางลืมเธอหรอก
          </p>

          <div className="signature">
            NOVEL
          </div>

          <a href="#contact" className="button button-outline">
            อ่านบันทึกของฉัน
            <span>↗</span>
          </a>

        </div>

      </div>

    </section>
  );
}

export default AboutSection;