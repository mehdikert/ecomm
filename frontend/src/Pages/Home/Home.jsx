import React from 'react'
import './home.css'
import MySwiper from '../../Components/swiper/MySwiper'
import { Link } from 'react-router-dom'
import CreateCategory from '../admin/CreateCategory'
import photo from '../../assets/photoHomePage.jpeg'

function Home() {

    return (
        <div className='home container'>
            <div>
                <img src={photo} alt="" />
            </div>
            <div className='sexe-section'>
                <Link to={"/clothes/category/men"} className='men-section'>
                    <img width={"450px"} src="https://eu-images.contentstack.com/v3/assets/blt5cc5bc06bca6aec9/blt8b38af62f3e352db/65818fcf2fc999040a91eeb0/DYNAMIC_MODULES_VERTICAL_-_DT_(1).jpg?branch=prod_alias&format=webply&quality=70&width=1728&crop=2400,3200,x0,y0" alt="" />
                    <h1>View Men Collection</h1>
                </Link>
                <Link to={"/clothes/category/women"} className='women-section'>
                    <img width={"450px"} height={"600px"} src="https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Library-Sites-LacosteContent/fr/dw5a0b072b/fw23/gender/chap2/4A-women-desktop.jpg?imwidth=840&impolicy=custom" alt="" />
                    <h1>View Women Collection</h1>
                </Link>
            </div>
            <div className='Vibes-section'>
                <img src="https://img.freepik.com/free-vector/realistic-gamer-text-effect_23-2149847011.jpg?w=740&t=st=1704508190~exp=1704508790~hmac=210d3ae622beda4af812bc3527a935b446a8755c5296d971415107c6f502c89d" alt="" width={"600px"} />
                <img src="https://i.pinimg.com/564x/65/95/66/6595660e347fbc3954dbb0ab0adb4fc0.jpg" width={'1200px'} alt="" />
            </div>

        </div>
    )
}

export default Home