function Header() {
  return (
    <header className="header">
      <div className="container header-inner">

        <a href="#home" className="logo">
          <span>BOOKSPACE</span>
          <small>BOOKS · STORIES · IDEAS</small>
        </a>

        <nav className="nav">
          <a href="#home">หน้าแรก</a>
          <a href="#books">หนังสือ</a>
          <a href="#about">เกี่ยวกับฉัน</a>
          <a href="#journal">ข่าวสาร</a>
          <a href="#contact">ติดต่อ</a>

          <a href="#books" className="nav-button">
            สำรวจหนังสือ
            <span>↗</span>
          </a>
        </nav>

        <button className="mobile-menu">
          ☰
        </button>

      </div>
    </header>
  );
}

export default Header;