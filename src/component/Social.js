import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaCrown } from "react-icons/fa";




const Social = () => {
    const FaTiktoks = { color: "#000000", fontSize: "2.5em" }
    const FaInstagrams = { color: "#833AB4", fontSize: "2.5em" }
    const FaYoutubes = { color: "#FF0000", fontSize: "2.5em" }
    const FaTelegrams = { color: "#229ED9", fontSize: "2.5em" }
    const FaRobots = { color: "#3B3131", fontSize: "2.5em" }
    const AiOutlineMails = { color: "rgba(0, 0, 0, 0.5)", fontSize: "2.5em" }
    const FaCrowns = { color: "#FFD700", fontSize: "1.5em" }

  return (
    <section className="contact uniform" id="contact">

        <h1>اتصل بنا</h1>

        <div className="container ico_box">
            <a href="https://www.tiktok.com/@skash_1" className="box">
                <FaTiktok style={FaTiktoks}/>
                <span className="number">+1.3M</span>
                <span className="text">TikTok</span>
            </a>
            <a href="https://www.instagram.com/skash__1/" className="box">
                <FaInstagram style={FaInstagrams}/>
                <span className="number">+235K</span>
                <span className="text">Instagram</span>
            </a>
            <a href="https://www.youtube.com/channel/UCk6rhU8XN0bXZ-fepl5l1Tg" className="box">
                <FaYoutube style={FaYoutubes}/>
                <span className="number">+500K</span>
                <span className="text">YouTube</span>
            </a>
            <a href="https://t.me/Skash_Channel" className="box">
                <FaTelegram style={FaTelegrams}/>
                <span className="number">+50K</span>
                <span className="text">Telegram</span>
            </a>
            <a href="https://t.me/SkashVIP_bot" className="box">
                <FaRobot style={FaRobots}/>
                <span className="number">$17/mo</span>
                <span className="text">Telegram VIP  <FaCrown style={FaCrowns}/></span>
            </a>
            <a href="mailto:skash.contact@gmail.com" className="box">
                <AiOutlineMail style={AiOutlineMails}/>
                <span className="number email">skash.contact@gmail.com</span>
                <span className="text">Email</span>
            </a>
        </div>

    </section>
  )
}
export default Social