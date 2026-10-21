const articles = [
  {
    icon: "↗",
    title: "บางวันหนึ่งกับบางคืน",
    description: "วันนั้น วันนี้ พรุ่งนี้",
    date: "18 ต.ค. 2026",
  },
  {
    icon: "✳",
    title: "เริ่มต้นเขียนเรื่องสั้นจากความหวัง",
    description: "เศร้า เสียใจ ยอมแพ้",
    date: "20 ต.ค. 2026",
  },
  {
    icon: "✎",
    title: "เบื้องหลังการสร้างตัวละครที่เหมือนคนเกาหลี",
    description: "พี่เต พี่เต นั่นคือเสียงเรียกของเด็ก ๆ ที่เห็นไอดอลของพวกเขาเดินผ่านมา ต่างคนต่างดีใจที่ได้เห็นพี่เต วรากร คนที่น้อง ๆ เขาชื่นชอบตัวเป็น ๆ สักครั้งแค่นี้ พวกเด็ก ๆ เหล่านั้นก็ดีใจแบบสุด ๆ แล้ว ต้องยอมรับว่าเจ้า เต วรากร เป็นแรงบันดาลใจให้เด็ก ๆ ยุคใหม่ ได้หันมาเล่นกีฬาและเป็นแบบ เจ้า เต วรากร นั่นคือเหตุผลว่าทำไมคนถึงรักเจ้าเต มากมายขนาดนี้เพราะเจ้าเตไม่เคยบ่น ให้ เอฟซีมาขอลายเซ็นต์และขอถ่ายรูป แม้แต่นิดเดียว พยายามทำหน้าที่ตัวเองแบบสุดกำลัง ถึง แม้จะบาดเจ็บเพียงใดเจ้าเตไม่เคยออกปากว่าไม่ไหว ยินดีต้อนรับทุกคนที่เข้ามาหา ยิ้มรับ ยกมือไหว้ผู้ที่อายุเยอะกว่าตนเอง เด็กไวเพียงแค่17ปี ผู้ที่ผ่านแรงกดดันอะไรมามากมาย เอา ชายผู้นี้ไม่ลง จริง ๆ มันไม่ง่ายเลย ที่จะทำให้คนยอมรับในตัวเจ้าเตได้เยอะขนาดนี้ นี่คือสุด ยอดนักสู้อย่างแท้จริง",
    date: "21 ต.ค. 2026",
  },
];

function JournalSection() {
  return (
    <section className="journal-section" id="journal">

      <div className="container">

        <div className="journal-heading">

          <div>
            <div className="eyebrow">
              พบกันระหว่างหน้าหนังสือ
            </div>

            <h2>
              ข่าวสารและ
              <br />
              <span>เรื่องราวระหว่างทาง</span>
            </h2>

            <p>
              กิจกรรม บันทึก และความเคลื่อนไหวล่าสุด
              จากโลกของนักเขียน
            </p>
          </div>

          <span className="journal-label">
            UPDATES · EVENTS · NOTES
          </span>

        </div>

        <div className="journal-list">

          {articles.map((article, index) => (

            <article className="journal-item" key={index}>

              <div className="journal-icon">
                {article.icon}
              </div>

              <div className="journal-content">

                <small>
                  BOOKSPACE &nbsp;&nbsp; {article.date}
                </small>

                <h3>{article.title}</h3>

                <p>{article.description}</p>

              </div>

              <button className="round-arrow">
                ↗
              </button>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default JournalSection;