// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();
import 'swiper/css';
import { carouselPhotos } from '../constants';

const PhotoCarousel = () => {
  return (
    <>
      <swiper-container
        className="bg-black"
        slides-per-view="3"
        loop="true"
        pagination="true"
        pagination-clickable="true"
        space-between="0"
        centered-slides="true"
        speed="2000"
        autoplay-delay="2000"
        autoplay-disable-on-interaction="false"
      >
        {carouselPhotos.map((photo) => (
          <swiper-slide key={photo.id} className="">
            <img
              src={photo.src}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover"
              width={75}
              height={75}
            />
          </swiper-slide>
        ))}
      </swiper-container>
    </>
  );
};

export default PhotoCarousel;
