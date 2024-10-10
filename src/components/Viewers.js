

const Viewers = () => {
    const handleMouseEnter = (event) => {
        const video = event.currentTarget.querySelector('video');
        if (video) {
            video.play(); 
        }
    };

    const handleMouseLeave = (event) => {
        const video = event.currentTarget.querySelector('video');
        if (video) {
            video.pause(); 
            video.currentTime = 0; 
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-5 h-full w-full gap-4 mt-5">
   
            <div className="relative border-3 pt-[60%] cursor-pointer overflow-hidden group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <a>
                    <img 
                        src="/images/viewers-disney.png" 
                        alt="Disney" 
                        className="absolute block inset-0 top-0 object-cover w-full z-10 border-2 rounded-lg border-gray-600 group-hover:border-white transition-all duration-300" 
                    />
                    <video 
                        loop 
                        muted 
                        playsInline 
                        className="absolute z-0 top-0 w-full opacity-0 transition-opacity rounded-lg duration-300 ease-in-out group-hover:opacity-100"
                    >
                        <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
                    </video>
                </a>
            </div>


            <div className="relative border-3 pt-[60%] cursor-pointer overflow-hidden group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <a>
                    <img 
                        src="/images/viewers-pixar.png" 
                        alt="Pixar" 
                        className="absolute block inset-0 top-0 object-cover w-full z-10 border-2 rounded-lg border-gray-600 group-hover:border-white transition-all duration-300" 
                    />
                    <video 
                        loop 
                        muted 
                        playsInline 
                        className="absolute z-0 top-0 w-full opacity-0  rounded-lg transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                    >
                        <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
                    </video>
                </a>
            </div>

    
            <div className="relative border-3 pt-[60%] cursor-pointer overflow-hidden group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <a>
                    <img 
                        src="/images/viewers-marvel.png" 
                        alt="Marvel" 
                        className="absolute block inset-0 top-0 object-cover w-full z-10 border-2 rounded-lg border-gray-600 group-hover:border-white transition-all duration-300" 
                    />
                    <video 
                        loop 
                        muted 
                        playsInline 
                        className="absolute z-0 top-0 w-full opacity-0  rounded-lg transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                    >
                        <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
                    </video>
                </a>
            </div>


            <div className="relative border-3 pt-[60%] cursor-pointer overflow-hidden group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <a>
                    <img 
                        src="/images/viewers-starwars.png" 
                        alt="Star Wars" 
                        className="absolute block inset-0 top-0 object-cover w-full z-10 border-2 rounded-lg border-gray-600 group-hover:border-white transition-all duration-300" 
                    />
                    <video 
                        loop 
                        muted 
                        playsInline 
                        className="absolute z-0 top-0 w-full opacity-0 rounded-lg transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                    >
                        <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
                    </video>
                </a>
            </div>


            <div className="relative border-3 pt-[60%] cursor-pointer overflow-hidden group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <a>
                    <img 
                        src="/images/viewers-national.png" 
                        alt="National Geographic" 
                        className="absolute block inset-0 top-0 object-cover w-full z-10 border-2 rounded-lg border-gray-600 group-hover:border-white transition-all duration-300" 
                    />
                    <video 
                        loop 
                        muted 
                        playsInline 
                        className="absolute z-0 top-0 w-full opacity-0 rounded-lg transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                    >
                        <source src="/videos/1564676296-national-geographic.mp4" type="video/mp4" />
                    </video>
                </a>
            </div>
        </div>
    );
};

export default Viewers;
