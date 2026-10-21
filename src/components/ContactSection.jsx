function ContactSection() {
  return (
    <section className="contact-section" id="contact">

      <div className="container contact-grid">

        <div className="contact-intro">

          <div className="eyebrow">
            มาคุยกันนะ
          </div>

          <h2>
            ทุกเรื่องเล่า
            <br />
            <span>เริ่มจากบทสนทนา</span>
          </h2>

          <p>
            สำหรับงานแปล งานเขียน ลิขสิทธิ์หนังสือ
            หรืออยากส่งข้อความมาทักทาย
            สามารถเขียนถึงฉันได้ที่นี่
          </p>

          <a href="mailto:hello@bookspace.example" className="email-link">
            hello@bookspace.example
            <span>↗</span>
          </a>

        </div>

        <form className="contact-form">

          <div className="form-row">

            <label>
              ชื่อของคุณ
              <input
                type="text"
                placeholder="ชื่อ-นามสกุล"
              />
            </label>

            <label>
              อีเมล
              <input
                type="email"
                placeholder="name@example.com"
              />
            </label>

          </div>

          <label>
            หัวข้อที่ต้องการติดต่อ
            <select>
              <option>งานและความร่วมมือ</option>
              <option>สอบถามเกี่ยวกับหนังสือ</option>
              <option>งานเขียน</option>
              <option>อื่น ๆ</option>
            </select>
          </label>

          <label>
            ข้อความ
            <textarea
              rows="6"
              placeholder="เขียนข้อความของคุณที่นี่..."
            />
          </label>

          <div className="form-bottom">

            <small>
              ยินดีที่ได้อ่านทุกข้อความจากคุณ
            </small>

            <button type="submit" className="button button-dark">
              ส่งข้อความ
              <span>↗</span>
            </button>

          </div>

        </form>

      </div>

    </section>
  );
}

export default ContactSection;