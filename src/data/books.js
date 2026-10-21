
const books = [
  {
    id: 1,
    title: "Tokyo Ghoul",
    category: "มังงะ",
    description:
      'ในเมือง "โตเกียว" แห่งนี้ มี "ความสิ้นหวัง" อย่างหนึ่งแฝงเร้นอยู่... เหล่าอมนุษย์ที่อยู่ปะปนกับฝูงชนออกล่ามนุษย์และกัดกินเนื้อจากศพนั้น ผู้คนต่างเรียกขานพวกมันว่า "กูล" เมื่อเด็กหนุ่มได้พานพบกับอมนุษย์ตนหนึ่งโดยบังเอิญโชคชะตาอันโหดร้ายจึงเริ่มต้นขึ้น.....! ',
    author: "Sui Ishida",
    image:
      "https://cdn-local.mebmarket.com/meb/server1/54972/Thumbnail/book_detail_large.gif?6",
  },
  {
    id: 2,
    title: "Tokyo Ghoul",
    category: "Light Novel",
    description:
      'ณ อันเทคุ ร้านกาแฟที่เป็นแหล่งรวมของเหล่า “กูล” ในวันนี้ยังคงมีเหตุการณ์ปัญหามากมายมารวมกันเช่นเคย ผู้จัดการร้าน โยชิมูระ รู้สึกได้ถึงเงามืดของ”บุคคลหน้าสงสัย”ในบริเวณใกล้ๆ ร้าน เขาคนนั้นจะนำการเปลี่ยนแปลงใดมาสู่ช่องว่างระหว่าง”ผู้ล่ากับผู้ถูกล่า”หรือนำมาสู่ช่องว่างระหว่างสองเผ่าพันธุ์ที่ไม่มีวันพบจุดบรรณจบกัน',
    author: "Sui Ishida",
    image:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1509637937i/36522661.jpg",
  },
  {
    id: 3,
    title: "อินเดกซ์คัมภีร์คาถาต้องห้าม",
    category: "Light Novel",
    description:
      'จู่ๆ แม่ชีชุดขาวบริสุทธิ์ก็หล่นจากฟ้ามาอยู่ที่ห้องของตนเอง“เวอร์แล้ว…”คามิโจ โทมะพึมพำอย่างไม่เชื่อสายตา และเด็กสาวในชุดแม่ชีก็ยังบอกอีกว่าเธอหนีออกมาจากโลกแห่งเวทมนตร์อันลี้ลับ… ทว่าที่นี่คือนครการศึกษา เมืองซึ่ง “พลังพิเศษ” ได้รับการยอมรับว่าเป็น “วิทยาศาสตร์สาขาหนึ่ง” และต่อต้านเรื่องลี้ลับเหนือวิทยาศาสตร์คามิโจนั้นยังไม่ปักใจเชื่อในพฤติกรรมและคำพูดของเด็กสาวปริศนาซึ่งเรียกตัวเองว่า “อินเดกซ์” ทว่าระหว่างนั้น “ผู้ใช้เวทมนตร์” ตัวจริงเสียงจริงก็ปรากฏตัวขึ้นต่อหน้าทั้งคู่…!เรื่องราวแอ็คชั่นในรั้วโรงเรียนจากนักเขียนดาวรุ่งหน้าใหม่เริ่มขึ้นแล้ว ณ บัดนี้!"',
    author: "Kazuma Kamachi",
    image:
      "https://cdn-local.mebmarket.com/meb/server1/156673/Thumbnail/book_detail_large.gif?3",
  },
  {
    id: 4,
    title: "Attack on Titan - ผ่าพิภพไททัน",
    category: "มังงะ",
    description: "ผ่าพิภพไททันAttack on TitanShingeki no Kyojinโลกที่ไททันยึดครองไว้ทั้งหมด มนุษย์ซึ่งกลายเป็นอาหารของไททันได้สร้างกำแพงขนาดมหึมาไว้ป้องกันการรุกรานโดยต้องแลกกับอิสระภาพจากโลกภายนอกกำแพง ทว่าความสงบสุขจอมปลอมก็มลายหายไปจากการปรากฎตัวของไททันขนาดมหึมาที่สูงกว่ากำแพงเมือง การต่อสู้ที่ไร้ซึ่งความหวังเริ่มต้นขึ้นแล้ว",
    author: "HAJIME ISAYAMA",
    image:
      "https://cdn-local.mebmarket.com/meb/server1/16275/Thumbnail/book_detail_large.gif?8",
  },
  {
    id: 5,
    title: "One Piece",
    category: "มังงะ",
    description:
      "พบการผจญภัยครั้งยิ่งใหญ่ของ ลูฟี่ หนุ่มน้อยอารมณ์ดีผู้สร้างฝัน อยากเป็นเจ้าแห่งโจรสลัด",
    author: "Eiichiro Oda",
    image:
      "https://cdn-local.mebmarket.com/meb/server1/55018/Thumbnail/book_detail_large.gif?8",
  },
  {
    id: 6,
    title: "Naruto นินจาคาถา โอ้โฮเฮะ",
    category: "มังงะ",
    description:
      "ณ โรงเรียนฝึกนินจาชั้นประถม หมู่บ้านโคโนะฮะงาคุเระ วันนี้นารูโตะก็ป่วนชาวบ้านชาวช่องเช่นเคย! แม้จะซนเป็นลิงขนาดนั้น แต่นารูโตะก็มีความฝันอันยิ่งใหญ่ที่จะเป็นวีรบุรุษในประวัติศาสตร์ ได้ชื่อว่าโฮคาเงะ และสร้างชื่อให้เกรียงไกรเหนือรุ่นก่อนๆ แต่ว่านารูโตะเองก็มีความลับของชาติกำเนิดแฝงอยู่...!?",
    author: "Masashi Kishimoto",
    image:
      "https://cdn-local.mebmarket.com/meb/server1/103272/Thumbnail/book_detail_large.gif?3",
  },
  {
    id: 7,
    title: "JOJO ล่าข้ามศตวรรษ ภาค 7 Steel Ball Run",
    category: "มังงะ",
    description:
      'ปี 1890 การแข่งขันอันยิ่งใหญ่แห่งศตวรรษของประเทศอเมริกา"SBR (สตีล บอล รัน)" ได้เริ่มขึ้นแล้ว การแข่งขันขี่ม้าข้ามทวีประยะทาง 6,000 กิโลเมตรครั้งแรกของมนุษยชาติ! ที่มีเงินรางวัลสูงถึง 50 ล้านดอลลาร์ (6 พันล้านเยน) การต่อสู้ของเหล่านักผจญภัยทั้งหลายได้เริ่มขึ้นแล้ว!"',
    author: "Hirohiko Araki",
    image:
      "https://cdn-local.mebmarket.com/meb/server1/432650/Thumbnail/book_detail_large.gif?2",
  },
  {
    id: 8,
    title: "The Call of Cthulhu: And Other Stories",
    category: "วรรณกรรม",
    description:
      "The Call of Cthulhu and Other Weird Stories เป็นหนังสือรวมเรื่องสั้นเล่มแรกของสำนักพิมพ์ Penguin Classics ที่รวบรวมผลงานของเอช.พี. เลิฟคราฟต์ นักเขียนชาวอเมริกันผู้ทรงอิทธิพลแห่งศตวรรษที่ 20 วางจำหน่ายครั้งแรกในเดือนตุลาคม ปี 1999 และยังคงวางจำหน่ายอยู่จนถึงปัจจุบัน ชื่อหนังสือมาจากเรื่องสั้นของเลิฟคราฟต์เรื่อง The Call of Cthulhu ",
    author: "H.P. Lovecraft",
    image:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1635225102i/58085210.jpg",
  },
  {
    id: 9,
    title: "TO LOVE RU Darkness วุ่นรักยัยต่างดาว ดาร์คเนส",
    category: "มังงะ",
    description:
      "กลไก ปกให้ถอด ถอดปก แล้วจะได้เห็นภาพ Sexy ของโมโมะด้วย! ชีวิตประจําวันของวุ่นรักยัยต่างดาวกลับมาแล้ว โมโมะ ที่ย้ายเข้ามาเรียนในรร.ไซนัน เพื่อให้ความรักที่มีแก่ริโตะสมหวังจึงคิด แผนฮาเร็ม ขึ้นมา...!?",
    author: "KENTARO YABUKI",
    image:
      "https://cdn-local.mebmarket.com/meb/server1/422620/Thumbnail/book_detail_large.gif?2",
  },
  {
    id: 10,
    title: "คุณอาเรียโต๊ะข้างๆพูดรัสเซียหวานใส่ซะหัวใจจะวาย",
    category: "Light Novel",
    description:
      "“หา? พูดว่าไง?” “เปล่านี่? ก็แค่บอกว่า 【หมอนี่โง่จริงๆเลย】 แค่นั้นเอง”“เลิกด่าเป็นภาษารัสเซียได้มั้ย!?” คุณอารยา สาวสวยผมเงินไม่เป็นสองรองใครที่นั่งข้างผมผุดยิ้มกระหยิ่ม…แต่ความจริงมันไม่ใช่อย่างนั้น ภาษารัสเซียเมื่อกี้ เธอพูดว่า 【สนใจฉันหน่อย】 ต่างหาก!",
    author: "Sunsunsun",
    image:
      "https://cdn-local.mebmarket.com/meb/server1/174544/Thumbnail/book_detail_large.gif?7",
  },
  {
    id: 11,
    title: "Meow",
    category: "นิยาย",
    description:
      'นวนิยายสำหรับแมวของคุณ เขียนด้วยภาษาของมัน คำว่า "เหมียว" ถูกกล่าวถึงมากกว่า 80,000 ครั้ง',
    author: "Sam Austen",
    image:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1688169149i/182107062.jpg",
  },
  {
    id: 12,
    title: "Harry Potter 01: Harry Potter and the Sorcerer's Stone",
    category: "นิยาย",
    description: "พ่อตาย แม่ตาย โดนพวกมักเกิ้ลมองโบ๋ว",
    author: "J.K. Rowling",
    image:
      "https://media.asiabooks.com/media/catalog/product/9/7/9781338878929.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover",
  },
  {
    id: 13,
    title: "สามก๊ก",
    category: "วรรณกรรม",
    description: "สามก๊ก เรียบเรียงจากฉบับพระยาคลัง (หน)",
    author: "กรมวิชาการ กระทรวงศึกษาธิการ",
    image:
      "https://cdn-local.mebmarket.com/meb/server1/43321/Thumbnail/book_detail_large.gif?4",
  },
  {
    id: 14,
    title: "Heaven Flame",
    category: "เรื่องสั้น",
    description: "เป็น One Shot ที่ดีมาก ๆ น่าเสียดายที่มีเป็น One Shot",
    author: "",
    image: "https://cdn.myanimelist.net/images/manga/1/270497l.jpg",
  },
  {
    id: 15,
    title: "Fragments of Horror",
    category: "เรื่องสั้น",
    description:
      "รวมเรื่องสั้นแนวสยองขวัญจากปรมาจารย์มังงะ Junji Ito",
    author: "Junji Ito",
    image:
      "https://upload.wikimedia.org/wikipedia/en/f/f9/Fragments_of_Horror.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
  },
  {
    id: 16,
    title:
      "ปรัชญา: ประวัติศาสตร์สายธารแห่งปัญญา (A Little History of Philosophy)",
    category: "Coming of Age",
    description:
      "คำถามเกี่ยวกับพระเจ้า ความชั่วร้าย และประเด็นทางศีลธรรม",
    author: "Nigel Warburton",
    image:
      "https://storage.naiin.com/system/application/bookstore/resource/product/202404/610174/6000091151_front_XXL.jpg?v=1725939926",
  },
  
  {
    id: 17,
    title: "Demon Slayer: ดาบพิฆาตอสูร",
    category: "มังงะ",
    description: "ทันจิโร่เริ่มต้นการเดินทางเพื่อช่วยน้องสาวและต่อสู้กับเหล่าอสูร",
    author: "Koyoharu Gotouge",
    image: "https://cdn-local.mebmarket.com/meb/server1/178116/Thumbnail/book_detail_large.gif?2"
  },
  {
    id: 18,
    title: "Death Note: สมุดมรณะ",
    category: "มังงะ",
    description: "สมุดปริศนาที่นำไปสู่การต่อสู้ทางความคิดระหว่างผู้ใช้สมุดกับนักสืบ",
    author: "Tsugumi Ohba",
    image: "https://cdn-local.mebmarket.com/meb/server1/107512/Thumbnail/book_detail_large.gif?3"
  },
  {
    id: 19,
    title: "Spy x Family",
    category: "มังงะ",
    description: "ครอบครัวสายลับที่แต่ละคนต่างมีความลับและภารกิจของตัวเอง",
    author: "Tatsuya Endo",
    image: "https://cdn-local.mebmarket.com/meb/server1/114476/Thumbnail/book_detail_large.gif?2"
  },
  {
    id: 20,
    title: "BLUE LOCK ขังดวลแข้ง EPISODE นางิ",
    category: "มังงะ",
    description: "การแข่งขันฟุตบอลเพื่อค้นหากองหน้าที่เก่งที่สุดของญี่ปุ่น",
    author: "Muneyuki Kaneshiro",
    image: "https://cdn-local.mebmarket.com/meb/server1/267432/Thumbnail/book_detail_large.gif?2"
  },
  {
    id: 21,
    title: "Jujutsu Kaisen: มหาเวทย์ผนึกมาร",
    category: "มังงะ",
    description: "อิตาโดริ ยูจิ เข้าสู่โลกของไสยเวทและการต่อสู้กับคำสาป",
    author: "Gege Akutami",
    image: "https://cdn-local.mebmarket.com/meb/server1/114708/Thumbnail/book_detail_large.gif?5"
  },
  {
    id: 22,
    title: "Chainsaw Man",
    category: "มังงะ",
    description: "เด็นจิ ชายหนุ่มผู้มีชีวิตพลิกผันหลังรวมร่างกับปีศาจเลื่อยยนต์",
    author: "Tatsuki Fujimoto",
    image: "https://cdn-local.mebmarket.com/meb/server1/114703/Thumbnail/book_detail_large.gif?2"
  },
  {
    id: 23,
    title: "My Hero Academia",
    category: "มังงะ",
    description: "เด็กหนุ่มผู้ใฝ่ฝันจะเป็นฮีโร่ แม้เกิดมาโดยไม่มีพลังพิเศษ",
    author: "Kohei Horikoshi",
    image: "https://cdn-local.mebmarket.com/meb/server1/321082/Thumbnail/book_detail_large.gif?2"
  },
  {
    id: 24,
    title: "Haikyu!! คู่ตบฟ้าประทาน",
    category: "มังงะ",
    description: "เรื่องราวของทีมวอลเลย์บอลโรงเรียนที่มุ่งมั่นพัฒนาตัวเองเพื่อชัยชนะ",
    author: "Haruichi Furudate",
    image: "https://cdn-local.mebmarket.com/meb/server1/107268/Thumbnail/book_detail_large.gif?2"
  },
  {
    id: 25,
    title: "Fullmetal Alchemist",
    category: "มังงะ",
    description: "สองพี่น้องนักเล่นแร่แปรธาตุออกเดินทางเพื่อค้นหาวิธีคืนสิ่งที่สูญเสียไป",
    author: "Hiromu Arakawa",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5cEQcBdQ1sjkfZqIlgu1frcycoXkqgYntT4qPhTwBuh0ilmZW2V-8dfA&s=10"
  },
  {
    id: 26,
    title: "Dr. STONE",
    category: "มังงะ",
    description: "การผจญภัยเพื่อฟื้นฟูอารยธรรมมนุษย์ด้วยวิทยาศาสตร์ในโลกที่กลายเป็นหิน",
    author: "Riichiro Inagaki",
    image: "https://cdn-local.mebmarket.com/meb/server1/103590/Thumbnail/book_detail_large.gif?6"
  },
  {
    id: 28,
    title: "The Hobbit",
    category: "นิยาย",
    description: "การผจญภัยของบิลโบ แบ๊กกิ้นส์ ที่ต้องออกเดินทางร่วมกับเหล่าคนแคระเพื่อเผชิญมังกร",
    author: "J.R.R. Tolkien",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ZiL2SNF7p9U23rmmvqvATgG2Wx3xmMom1XYd76dxeg&s=10"
  },
  {
    id: 29,
    title: "Percy Jackson and the Lightning Thief",
    category: "นิยาย",
    description: "เด็กหนุ่มค้นพบว่าตัวเองเป็นลูกของเทพเจ้ากรีก และต้องออกเดินทางเพื่อทำภารกิจสำคัญ",
    author: "Rick Riordan",
    image: "https://thumb.wikimedia.org/wikipedia/en/thumb/e/eb/Percy_Jackson_%26_the_Olympians_The_Lightning_Thief_poster.jpg/250px-Percy_Jackson_%26_the_Olympians_The_Lightning_Thief_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
  },
  {
    id: 30,
    title: "Wonder",
    category: "นิยาย",
    description: "เรื่องราวของเด็กชายที่เรียนรู้การยอมรับตัวเอง มิตรภาพ และความเข้าใจจากผู้คนรอบตัว",
    author: "R.J. Palacio",
    image: "https://upload.wikimedia.org/wikipedia/en/6/67/Wonder_%28film%29.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"
  },
  {
    id: 31,
    title: "The Alchemist",
    category: "นิยาย",
    description: "การเดินทางของเด็กเลี้ยงแกะที่ออกตามหาขุมทรัพย์และค้นพบความหมายของความฝัน",
    author: "Paulo Coelho",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1483412266i/865.jpg"
  },
];

export default books;
