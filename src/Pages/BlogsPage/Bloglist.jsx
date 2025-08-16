import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useRef } from "react";
import Toppages from "../../Shared/Toppages";
import images from "../../Images/Image";
import { Link } from "react-router-dom";
import { blogs } from "../../Data/Blogs";
function Bloglist() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);
 
  return (
    <>
      <Toppages Title="Blogs" image={images.topimage} />
      <section className="wrapper !bg-[#ffffff]">
        <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
          <h2 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] mb-3 !text-center">
            Our Journal
          </h2>
          <p className="lead text-[1rem] mb-10 !text-center md:!px-24 lg:!px-[12.5rem] xl:!px-0">
            Here are the latest company news from our blog that got the most
            attention.
          </p>
          <Swiper
            className="blog grid-view !mb-6"
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{
              el: paginationRef.current,
              clickable: false,
            }}
            spaceBetween={30}
            breakpoints={{
              1024: { slidesPerView: 3 },
              768: { slidesPerView: 2 },
              320: { slidesPerView: 1 },
            }}
          >
            {blogs.map((blog, index) => (
              <SwiperSlide key={index}>
                <article>
                  <figure className="overlay overlay-1 hover-scale group rounded !mb-5">
                    <Link to={`/Blogs/${blog.url.replace(/\s+/g, "-")}`}>
                      <img
                        className="!transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105 h-[20px]"
                        src={blog.image}
                        alt={blog.title}
                      />
                    </Link>
                  </figure>
                  <div className="post-header">
                    <div className="inline-flex mb-[.4rem] uppercase tracking-[0.02rem] text-[0.7rem] font-bold text-[#aab0bc] relative align-top pl-[1.4rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#3f78e0]">
                      <Link
                        to={`/Blogs/${blog.url.replace(/\s+/g, "-")}`}
                        className="hover"
                        rel="category"
                      >
                        {blog.category}
                      </Link>
                    </div>
                    <h2 className="post-title h3 !mt-1 !mb-3">
                      <Link
                        className="text-[#343f52] hover:text-[#3f78e0]"
                        to={`/Blogs/${blog.url.replace(/\s+/g, "-")}`}
                      >
                        {blog.title}
                      </Link>
                    </h2>
                  </div>
                  <div className="post-footer">
                    <ul className="text-[0.7rem] text-[#aab0bc] m-0 p-0 list-none !mb-0">
                      <li className="post-date inline-block">
                        <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem]"></i>
                        <span>{blog.date}</span>
                      </li>
                      <li className="post-comments inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0] before:rounded-[100%] before:align-[.15rem] before:bg-[#aab0bc]">
                        <Link
                          className="text-[#aab0bc] hover:text-[#3f78e0] hover:border-[#3f78e0]"
                          to={`/Blogs/${blog.url.replace(/\s+/g, "-")}`}
                        >
                          <i className="uil uil-comment pr-[0.2rem] align-[-.05rem]"></i>
                          {blog.comments}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Bloglist;
