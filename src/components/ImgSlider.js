
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './SliderStyles.css';


export const SimpleSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <div style={{ width: "100%", margin: "0" }}>
            <Slider {...settings}>
                <div className="relative group overflow-hidden rounded-lg shadow-lg transition-transform duration-250  ">
                    <a>
                        <img
                            src="/images/slider-badging.jpg"
                            alt="Slider Badging"
                            className="w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-90"
                        />
                    </a>
                    <div className="absolute inset-0 border-4 border-transparent group-hover:border-white group-hover:opacity-80 rounded-lg transition-all duration-300" />
                </div>

                <div className="relative group overflow-hidden rounded-lg shadow-lg transition-transform duration-250 ">
                    <a>
                        <img
                            src="/images/slider-scale.jpg"
                            alt="Slider Scale"
                            className="w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-90"
                        />
                    </a>
                    <div className="absolute inset-0 border-4 border-transparent group-hover:border-white group-hover:opacity-80 rounded-lg transition-all duration-300" />
                </div>

                <div className="relative group overflow-hidden rounded-lg shadow-lg transition-transform duration-250 ">
                    <a>
                        <img
                            src="/images/slider-badag.jpg"
                            alt="Slider Badag"
                            className="w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-90"
                        />
                    </a>
                    <div className="absolute inset-0 border-4 border-transparent group-hover:border-white group-hover:opacity-80 rounded-lg transition-all duration-300" />
                </div>

                <div className="relative group overflow-hidden rounded-lg shadow-lg transition-transform duration-250 ">
                    <a>
                        <img
                            src="/images/slider-scales.jpg"
                            alt="Slider Scales"
                             referrerpolicy="no-referrer"
                            className="w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-90"
                        />
                    </a>
                    <div className="absolute inset-0 border-4 border-transparent group-hover:border-white group-hover:opacity-80 rounded-lg transition-all duration-300" />
                </div>
            </Slider>
        </div>
    );
};
