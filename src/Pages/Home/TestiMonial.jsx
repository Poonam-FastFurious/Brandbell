import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useRef } from "react";
import images from "../../Images/Image";
function TestiMonial() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);
  const testimonials = [
    {
      text: "Brandbell team is exceptionally professional, reliable, and dedicated. They ensure the job is done efficiently and at your convenience. I highly recommend their outstanding services!",
      name: "Manan Chaudhary",
      title: "Financial Analyst",
    },
    {
      text: "I had an excellent experience with Brandbell. They delivered our website within the promised timelines, ensuring top-notch quality. I highly recommend their exceptional services!",
      name: "Techcom smart solutions",
      title: "Marketing Specialist",
    },
    {
      text: "The Brandbell team delivers work on time and with great efficiency. Their professionalism and dedication are commendable. However, they are a reliable service provider.",
      name: "Saar Team",
      title: "Sales Manager",
    },
    {
      text: "Brandbell impressed us with their customer-first approach and tailored solutions that perfectly fit our needs. However,  They remain a trustworthy and dependable partner!",
      name: "Myinternet Team",
      title: "Sales Manager",
    },
    {
      text: "Brandbell provided reliable and effective services that ensured our work was completed smoothly.  faster response times would make them a 5-star provider. Highly recommend ",
      name: "Compliance Townhall ",
      title: "Marketing team",
    },
  ];
  return (
    <>
      <section id="testimonials">
        <div
          className="wrapper image-wrapper bg-image bg-overlay bg-fixed bg-no-repeat bg-[center_center] bg-cover relative z-0 before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.5)]"
          style={{
            backgroundImage: `url(${images.testimonialbg})`,
          }}
        >
          <div className="container py-[5rem] xl:!py-[7rem] lg:!py-[7rem] md:!py-[7rem]">
            <h2 className="xl:text-[1.7rem] text-[calc(1.295rem_+_0.54vw)] !leading-[1.25] !font-semibold mb-4 !text-center text-white">
              Happy Customers
            </h2>
            <div className="swiper-container dots-closer dots-light dots-light-75">
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
                loop={true}
                spaceBetween={0}
                slidesPerView={3}
                breakpoints={{
                  1024: { slidesPerView: 3 },
                  768: { slidesPerView: 2 },
                  320: { slidesPerView: 1 },
                }}
                className="swiper-container"
              >
                <div className="swiper-wrapper">
                  {testimonials.map((testimonial, index) => (
                    <SwiperSlide className="swiper-slide" key={index}>
                      <div className="item-inner">
                        <div className="card border-0 !bg-[rgba(255,255,255,.9)]">
                          <div className="card-body flex-[1_1_auto] p-[40px]">
                            <span className="ratings  inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-3"></span>
                            <blockquote className="border-0 !mb-0 !text-[.9rem] !leading-[1.7] font-medium m-[0_0_1rem] text-black">
                              <p>{testimonial.text}</p>
                              <div className="flex items-center text-left">
                                <div className="info p-0">
                                  <div className="!mb-0  font-semibold">{testimonial.name}</div>
                                  <p className="!mb-0 text-[.85rem]">
                                    {testimonial.title}
                                  </p>
                                </div>
                              </div>
                            </blockquote>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}

                  <div className="swiper-controls">
                    <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                      <span
                        className="swiper-pagination-bullet swiper-pagination-bullet-active"
                        tabIndex="0"
                        role="button"
                        aria-label="Go to slide 1"
                        aria-current="true"
                      ></span>
                      <span
                        className="swiper-pagination-bullet"
                        tabIndex="0"
                        role="button"
                        aria-label="Go to slide 2"
                      ></span>
                      <span
                        className="swiper-pagination-bullet"
                        tabIndex="0"
                        role="button"
                        aria-label="Go to slide 3"
                      ></span>
                      <span
                        className="swiper-pagination-bullet"
                        tabIndex="0"
                        role="button"
                        aria-label="Go to slide 4"
                      ></span>
                      <span
                        className="swiper-pagination-bullet"
                        tabIndex="0"
                        role="button"
                        aria-label="Go to slide 5"
                      ></span>
                      <span
                        className="swiper-pagination-bullet"
                        tabIndex="0"
                        role="button"
                        aria-label="Go to slide 6"
                      ></span>
                    </div>
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TestiMonial;
