import { FC } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Hero: FC = () => {
    return (
        <div className="w-full h-fit bg-gray-900">
            <Carousel showArrows={true} showThumbs={false} >
                <figure>
                    <img src="https://steamuserimages-a.akamaihd.net/ugc/959717316642299304/F66F9045D288903B344EF86B9D8D6F4A20843429/?imw=512&amp;imh=188&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true" />
                    <p className="legend">Legend 1</p>
                </figure> 
                <div>
                    <img src="https://gamemag.ru/images/cache/News/News52634/6c1bf30771-2_2780x1200.jpg" />
                    <p className="legend">Legend 1</p>
                </div> 
            </Carousel>
        </div>
    )
}

export default Hero