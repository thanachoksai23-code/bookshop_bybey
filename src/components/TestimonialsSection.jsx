const testimonials = [
  {
    name: "นาย นาวิน",
    role: "ผู้อ่าน ราชาแห่งควัน",
    text: "อ่าน TO LOVE RU วุ่นรักยัยต่างดาว จบแล้วรู้สึกเหมือนได้มีฮาเร็ม ภาษากายอบอุ่นและมีภาพจำชัดเจนมาก",
    color: "green",
  },
  {
    name: "N น็อต",
    role: "นักอ่านและนัก GooN กับ Femboy จีน",
    text: "เรื่องราวไม่ได้พยายามบอกว่าเราควรรู้สึกอย่างไร แต่ JOJO ล่าข้ามศตวรรษ ภาค 7 Steel Ball Run โจนี่ตูดใหญ่มากครับ",
    color: "orange",
  },
  {
    name: "M มิสด้าม",
    role: "ผู้เสพความตาย เสพแมวด้วย",
    text: "Tokyo Ghoul เป็นหนังสือที่อยากวางไว้ข้างเตียง แล้วน้ำเดียวเอาอยู่",
    color: "purple",
  },
];

function TestimonialsSection() {
  return (
    <section className="testimonials-section">

      <div className="container">

        <div className="testimonial-heading">

          <div className="eyebrow">
            เสียงจากผู้อ่าน
          </div>

          <h2>
            ถ้อยคำจากคนที่เดินทาง
            <br />
            <span>ไปด้วยกัน</span>
          </h2>

          <p>
            เรื่องราวจะสมบูรณ์ขึ้นเมื่อได้ออกเดินทางไปถึงใครสักคน
          </p>

        </div>

        <div className="testimonial-grid">

          {testimonials.map((item, index) => (

            <article
              className={`testimonial-card ${item.color}`}
              key={index}
            >

              <div className="stars">
                ★★★★★
              </div>

              <div className="quote-mark">
                “
              </div>

              <p>{item.text}</p>

              <div className="reviewer">

                <div className="reviewer-avatar">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h1>{item.name}</h1>
                  <h>{item.role}</h>
                </div>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default TestimonialsSection;