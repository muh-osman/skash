import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { green } from '@mui/material/colors';
import InfoIcon from '@mui/icons-material/Info';
import Swal from "sweetalert2";

const Price = () => {

    const info = ()=> {
        Swal.fire('شراء الكورس هو استثمار بحد ذاته بسبب الفائدة العقلية و المالية التي سوف تحصل عليها إذا طبقت ما تتعلمه')
    }

  return (
    <div dir="rtl" className="price_box">
        <div className='g_one'>
            <ul>
                <li className='u_padd'><VerifiedUserIcon sx={{ color: green[500] }}/>قراءة الرسم البياني</li>
                <li><VerifiedUserIcon sx={{ color: green[500] }}/>استخدام مؤشرات التداول</li>
                <li><VerifiedUserIcon sx={{ color: green[500] }}/>الدخول و الخروج من الصفقات</li>
                <li><VerifiedUserIcon sx={{ color: green[500] }}/>استراتيجيات التداول</li>
                <li><VerifiedUserIcon sx={{ color: green[500] }}/>إدارة المخاطر و سيكولوجية المتداول</li>
            </ul>
        </div>

        <div className='buy_btn_box'>
            <h3>Premium</h3>
            <h2>$499</h2>
            <a href='https://buy.stripe.com/aEUg0ddtPbDodig144' className="buy_btn" target="_blank" rel="noopener noreferrer">شراء الكورس</a>
            {/* <p>الكورس عبارة عن مجموعة من المحاضرات المسجلة بالفيديو بالاضافة الى متابعة مدى الحياة</p> */}
            <p>الكورس عبارة عن مجموعة من المحاضرات المسجلة بالفيديو بالاضافة الى متابعة مدى الحياة <InfoIcon onClick={()=> {info()}} /></p>
        </div>

        <div className='g_two'>
            <ul>
                <li className='m_padd'><VerifiedUserIcon sx={{ color: green[500] }}/>اختيار المنصة و فتح الحساب</li>
                <li><VerifiedUserIcon sx={{ color: green[500] }}/>التحضير ليوم التداول</li>
                <li><VerifiedUserIcon sx={{ color: green[500] }}/>تجهيز شاشة العرض</li>
                <li><VerifiedUserIcon sx={{ color: green[500] }}/>أساسيات التحليل الفني</li>
                <li className='d_padd'><VerifiedUserIcon sx={{ color: green[500] }}/>أوامر التداول المختلفة</li>
            </ul>
        </div>
    </div>
  )
}
export default Price