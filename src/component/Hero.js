import hero from "../assets/hero.jpg"

function Hero() {
  return (
    <section className="hero">

        <div className="hero_text_box">
            <h1 dir="rtl">الاستثمار الناجح مبني على ارقام وليس عواطف.</h1>
            <p dir="rtl" className="hero_p">اكتشف عالم الأسهم والعملات الرقمية من الألف الى الياء بأقصى قدر من الاحترافية.</p>
            <a href="#course" className="hero_btn">ابدأ الآن</a>
        </div>

        <div className="hero_image_box">
            <img src={hero} alt="" />
        </div>

    </section>
  )
}
export default Hero