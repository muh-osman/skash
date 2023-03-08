import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
    const AiOutlineCopyrightCircles = { color: "#212529", fontSize: ".7em" }
    const FaHearts = { color: "red", fontSize: ".7em" }
  return (
    <section className="footer">
        <p><span><AiOutlineCopyrightCircle style={AiOutlineCopyrightCircles}/></span> 2023 All rights reserved Skash.</p>
        <p>Made with <span> &nbsp; <FaHeart style={FaHearts}/> &nbsp; </span> by&nbsp;<a href="https://github.com/muh-osman">Muh-Osman</a></p>
    </section>
  )
}
export default Footer