import YouTubeIcon from '@mui/icons-material/YouTube';
import { red } from '@mui/material/colors';
import video from "../assets/rain.mp4"


const Youtube = () => {
  return (
    <section className="youtube">
        <h1 dir="rtl"><a href='https://www.youtube.com/@Skash_1/featured'>قناتي على <YouTubeIcon sx={{ color: red[500], fontSize: 90 }}/></a></h1>
        <div className='short_box'>


            <iframe width={281} height={500} src="https://www.youtube.com/embed/u-Hydf6QvVo" title="تنظيم الوقت على طريقة إيلون ماسك" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            <iframe width={281} height={500} src="https://www.youtube.com/embed/Y1R5Xi-q61U" title="التداول بمبلغ منخفض" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            <iframe width={281} height={500} src="https://www.youtube.com/embed/3d0Or4Yndrk" title="استثمر في 500 شركة" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            <iframe width={281} height={500} src="https://www.youtube.com/embed/0dZQNfP5JKg" title="اجعل المال يعمل لأجلك" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            <iframe width={281} height={500} src="https://www.youtube.com/embed/6jKs67POCgQ" title="ارتفاع الأسعار و الغلاء المعيشي" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            <iframe width={281} height={500} src="https://www.youtube.com/embed/nhhMrCR8nE8" title="أنواع الاستثمارات في الأسواق المالية" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />

            <div className='more'>
                <video autoPlay muted loop id="myVideo">
                    <source src={video} type="video/mp4" />
                </video>
                <a href="https://www.youtube.com/@Skash_1/featured">المزيد</a>
            </div>
            
        </div>
    </section>
  )
}
export default Youtube