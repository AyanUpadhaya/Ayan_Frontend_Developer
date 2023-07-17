import React, { useContext } from 'react';
import { GlobalContext } from '../../ContextProvider/ContextProvider';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import CrewCard from './CrewCard';
const CrewsSection = () => {
    const { crews, } = useContext(GlobalContext)
    return (
        <div className="container py-3 mt-5 position-relative" id="crews">

            <div className="text-center">
                <h2 className='display-3 fw-bold'>SpaceX Crews</h2>
                <p>Our Crews</p>
            </div>

            <div className="container">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper py-5"
                >
                    {
                    crews?.map(crew=><SwiperSlide><CrewCard crew={crew} key={crew.id}></CrewCard></SwiperSlide>)
                    }
                  
                </Swiper>

            </div>


        </div>
    );
};

export default CrewsSection;