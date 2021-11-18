import { useState } from "react";


import facebook from '../../assets/img/facebook.png';
import twitter from '../../assets/img/twitter.png';
import instagram from '../../assets/img/instagram.png';
import img1 from '../../assets/img/img1.png';
import img2 from '../../assets/img/img2.png';
import img3 from '../../assets/img/img3.png';

import thumb1 from '../../assets/img/thumb1.png';
import thumb2 from '../../assets/img/thumb2.png';
import thumb3 from '../../assets/img/thumb3.png';



const Home = () => {
    const [imgUrl, setImgUrl] = useState(img1)
    const [bgColor, setBgColor] = useState('#017143')


    const handleImg = (src, color) => {
        setImgUrl(src)
        setBgColor(color)
    }


    return (
        <div className="bannar-wrapper margin-minus">
            <div class="circle" style={{ backgroundColor: bgColor }}></div>
            <div class="content">
                <div class="textBox">
                    <h2>It's not just a company <br /> It's <span>Zora Corporation</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolore enim magni tempora totam. Aliquam blanditiis corporis cum deleniti expedita hic ipsum itaque nihil optio pariatur, quos temporibus veniam voluptas?</p>
                    <a href="#">Careers</a>
                </div>
                <div class="imgBlock">
                    <img src={imgUrl} class="starbucks" />
                </div>
            </div>

            <ul class="thumb">
                <li><img onClick={() => handleImg(img1, '#017143')} src={thumb1} /></li>
                <li><img onClick={() => handleImg(img2, '#eb7495')} src={thumb2} /></li>
                <li><img onClick={() => handleImg(img3, '#d752b1')} src={thumb3} /></li>
            </ul>

            <ul class="sci">
                <li><a href="#"><img src={facebook} /></a></li>
                <li><a href="#"><img src={twitter} /></a></li>
                <li><a href="#"><img src={instagram} /></a></li>
            </ul>

        </div>
    )
}



export default Home