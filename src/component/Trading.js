import laptop from "../assets/laptop.png"
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { green } from '@mui/material/colors';


const Trading = () => {
  return (
    <section dir="rtl" id="trading">
        <h1>تداول الأسهم والعملات الرقمية على منصة XTB</h1>

        <div className="trading_flex">

            <div>
                <ul>
                    <h2>لماذا XTB؟</h2>
                    <li><DoneOutlineIcon sx={{ color: green[500] }}/> سرعة تنفيذ فائقة</li>
                    <li><DoneOutlineIcon sx={{ color: green[500] }}/> حساب تداول حقيقي</li>
                    <li><DoneOutlineIcon sx={{ color: green[500] }}/> منصة سهلة الاستخدام</li>
                    <li><DoneOutlineIcon sx={{ color: green[500] }}/> توصيات تداول من كبرى البنوك العالمية</li>
                    <li><DoneOutlineIcon sx={{ color: green[500] }}/> مكافآت للمتداول النشط مثل استرداد النقود وتنبيهات التداول</li>
                </ul>
                <a className="xtb" href="https://geolink.xtb.com/SH4HU">تداول الآن</a>
            </div>

            <div className="laptop_img">
                <img src={laptop} alt="laptop" />
            </div>

        </div>

    </section>
  )
}
export default Trading