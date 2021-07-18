import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Alex",
      title: "CEO of LAMA",
      img: "https://thumbs.dreamstime.com/b/close-up-portrait-nice-attractive-cheerful-experienced-skilled-wavy-haired-girl-ceo-boss-chief-hr-recruiter-sitting-chair-181090097.jpg",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti maxime quidem similique debitis necessitatibus temporibus soluta, vel architecto numquam a.",
    },
    {
      id: 2,
      name: "Alex 2",
      title: "CEO of LAMA",
      img: "https://thumbs.dreamstime.com/b/close-up-portrait-nice-attractive-cheerful-experienced-skilled-wavy-haired-girl-ceo-boss-chief-hr-recruiter-sitting-chair-181090097.jpg",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti maxime quidem similique debitis necessitatibus temporibus soluta, vel architecto numquam a.",
      featured: true,
    },
    {
      id: 3,
      name: "Alex 3",
      title: "CEO of LAMA",
      img: "https://thumbs.dreamstime.com/b/close-up-portrait-nice-attractive-cheerful-experienced-skilled-wavy-haired-girl-ceo-boss-chief-hr-recruiter-sitting-chair-181090097.jpg",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti maxime quidem similique debitis necessitatibus temporibus soluta, vel architecto numquam a.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img
                src="assets/right-arrow.png"
                className="left"
                alt="Right arrow"
              />
              <img className="user" src={d.img} alt="CEO" />
              <img className="right" src="assets/youtube.png" alt="Youtube" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
