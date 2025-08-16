import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useRef } from "react";
import images from "../../Images/Image";
import { Link } from "react-router-dom";
function Hero() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);
  return (
    <>
      <section className="wrapper bg-[#21262c] opacity-100">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          pagination={{
            el: paginationRef.current,
            clickable: true,
          }}
          onSwiper={(swiper) => {
            // Ensure swiper updates DOM references for custom controls
            setTimeout(() => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.params.pagination.el = paginationRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
              swiper.pagination.init();
              swiper.pagination.update();
            });
          }}
          autoplay={{ delay: 7000 }}
          spaceBetween={0}
          slidesPerView={1}
          className="swiper-container"
        >
          {/* Slide 1 */}
          <SwiperSlide className="swiper-slide" data-swiper-lazy>
            <div
              className="swiper-slide1 bg-overlay   bg-image !bg-cover !bg-[center_center] !h-[750px] swiper-lazy"
              style={{
                backgroundImage: `url(${images.banner1})`,
              }}
            >
              {/* Preloading Background Image for Faster Rendering */}
              <noscript>
                <img
                  src={`${images.banner1}`}
                  alt="Banner Background"
                  style={{ display: "none" }}
                />
              </noscript>

              <div className="container !h-full">
                <div className="flex flex-wrap mx-[-15px] !h-full">
                  {/* Optimized Text and Animations */}
                  <div className="md:w-10/12 md:!ml-[8.33333333%] lg:w-7/12 lg:!ml-0 xl:w-6/12 xxl:w-5/12 w-full flex-[0_0_auto] px-[15px] max-w-full text-center lg:text-left justify-center self-center items-start">
                    <h2 className="xl:text-[2.8rem] !leading-[1.2] font-bold text-[calc(1.405rem_+_1.86vw)] mb-4 text-white animate__animated animate__fadeIn">
                      We bring solutions to make life easier.
                    </h2>
                    <p className="lead text-[1.15rem] leading-normal mb-7 text-white animate__animated animate__fadeIn animate__delay-1s">
                      We are a creative company that focuses on long term
                      relationships with customers.
                    </p>
                    <div className="animate__animated animate__fadeIn animate__delay-1.5s">
                      <Link
                        to="/contact"
                        className="btn btn-lg btn-outline-white !text-white bg-[#ffffff] !border-white !border-[2px] hover:!text-[#343f52] hover:bg-[#ffffff] hover:border-white focus:shadow-[rgba(255,255,255,1)] active:!text-[#343f52] active:bg-[#ffffff] active:border-white disabled:text-white disabled:bg-transparent disabled:border-white !rounded-[50rem]"
                        aria-label="Get in touch with Brandbell"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div
              className="swiper-slide bg-overlay bg-overlay-400 bg-[#21262c] opacity-100 bg-image !bg-cover !bg-[center_center] !h-[750px]"
              style={{
                backgroundImage: `url(${images.banner2})`,
              }}
            >
              <div className="container !h-full">
                <div className="flex flex-wrap mx-[-15px] !h-full">
                  <div className="md:w-11/12 lg:w-8/12 xl:w-7/12 xxl:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto !text-center justify-center self-center">
                    <h2 className="xl:text-[2.8rem] !leading-[1.2] font-bold text-[calc(1.405rem_+_1.86vw)] mb-4 text-white animate__animated animate__slideInDown animate__delay-1s">
                      We are trusted by over a million customers.
                    </h2>
                    <p className="lead text-[1.15rem] leading-normal mb-7 text-white animate__animated animate__slideInRight animate__delay-2s">
                      Here a few reasons why our customers choose us.
                    </p>
                    <div className="animate__animated animate__slideInUp animate__delay-3s">
                      <Link
                        to="/"
                        className="btn btn-circle btn-white btn-play ripple !mx-auto mb-5 !relative z-[2] xl:text-[2.3rem] !w-[3.5rem] !h-[3.5rem]"
                        data-discover="true"
                        aria-label="Play video"
                      >
                        <i className="icn-caret-right ml-[0.15rem] !relative z-[2]"></i>
                        <span className="sr-only">Play Video</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div
              className="swiper-slide bg-overlay bg-overlay-400 bg-[#21262c] opacity-100 bg-image !bg-cover !bg-[center_center] !h-[750px]"
              style={{
                backgroundImage: `url(${images.banner3})`,
              }}
            >
              <div className="container !h-full">
                <div className="flex flex-wrap mx-[-15px] !h-full">
                  <div className="md:w-10/12 md:!ml-[8.33333333%] lg:w-7/12 lg:!ml-[41.66666667%] xl:w-6/12 xl:!ml-[50%] xxl:w-5/12 w-full flex-[0_0_auto] px-[15px] max-w-full text-center lg:text-left justify-center self-center items-start">
                    <h2 className="xl:text-[2.8rem] !leading-[1.2] font-bold text-[calc(1.405rem_+_1.86vw)] mb-4 text-white animate__animated animate__slideInDown animate__delay-1s">
                      Just sit and relax.
                    </h2>
                    <p className="lead text-[1.15rem] leading-normal mb-7 text-white animate__animated animate__slideInRight animate__delay-2s">
                      We make sure your spending is stress free so that you can
                      have the perfect control.
                    </p>
                    <div className="animate__animated animate__slideInUp animate__delay-3s">
                      <Link
                        to="/contact"
                        className="btn btn-lg btn-outline-white !text-white bg-[#ffffff] !border-white !border-[2px] hover:!text-[#343f52] hover:bg-[#ffffff] hover:border-white focus:shadow-[rgba(255,255,255,1)] active:!text-[#343f52] active:bg-[#ffffff] active:border-white disabled:text-white disabled:bg-transparent disabled:border-white !rounded-[50rem]"
                        aria-label="Get in touch with Brandbell"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <div className="swiper-controls">
            <div className="swiper-navigation">
              <div
                className="swiper-button swiper-button-prev"
                ref={prevRef}
                tabIndex="0"
                role="button"
                aria-label="Previous slide"
              ></div>
              <div
                className="swiper-button swiper-button-next"
                ref={nextRef}
                tabIndex="0"
                role="button"
                aria-label="Next slide"
              ></div>
            </div>
            <div
              ref={paginationRef}
              className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"
            >
              <span
                className="swiper-pagination-bullet"
                tabIndex="0"
                role="button"
                aria-label="Go to slide 1"
              ></span>
              <span
                className="swiper-pagination-bullet"
                tabIndex="0"
                role="button"
                aria-label="Go to slide 2"
              ></span>
              <span
                className="swiper-pagination-bullet swiper-pagination-bullet-active"
                tabIndex="0"
                role="button"
                aria-label="Go to slide 3"
                aria-current="true"
              ></span>
            </div>
          </div>
        </Swiper>
      </section>
    </>
  );
}

export default Hero;
