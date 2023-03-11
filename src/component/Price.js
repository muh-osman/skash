import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { green } from '@mui/material/colors';
import InfoIcon from '@mui/icons-material/Info';
import Swal from "sweetalert2";

const Price = () => {

    var showHide = ()=>{

        const vid = document.getElementById('hiden_vid')
        const chevron = document.getElementById('chevron')

        vid.classList.toggle("show_vid")
        chevron.classList.toggle("show_chevron")
    }



    const info = ()=> {
        Swal.fire({
            title:'شراء الكورس هو استثمار بحد ذاته بسبب الفائدة العقلية و المالية التي سوف تحصل عليها إذا طبقت ما تتعلمه',
            icon: 'question',
        })
    }

  return (
    <div className='cont'>

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

        <button onClick={()=>{showHide()}} className='course_containt_btn'><svg id='chevron' fill='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path></svg> محتوى الكورس</button>

        <div id='hiden_vid' className='hiden_vid'>
            <iframe
                className='ifrme_vid'
                width="560"
                height="315"
                src="https://www.youtube.com/embed/fC7iFvM5r30"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen=""
                />
        </div>
    </div>
  )
}
export default Price