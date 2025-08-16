
import BlogAside from "./BlogAside";
import { blogs } from "../../Data/Blogs";
import { Link, useParams } from "react-router-dom";

function Blogdetails() {
  const { blogUrl } = useParams();
 
  const blog = blogs.find((b) => b.url.replace(/\s+/g, "-") === blogUrl);
  return (
    <>
      <section
        className="wrapper image-wrapper bg-image bg-overlay !text-white !bg-fixed bg-no-repeat bg-[center_center] bg-cover relative z-0 before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.5)]"
        style={{
          backgroundImage: `url(${blog.largimage})`,
        }}
      >
        <div className="container pt-32 pb-20 xl:pt-40 lg:pt-40 md:pt-40 xl:pb-36 lg:pb-36 md:pb-36 !text-center">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="md:w-10/12 lg:w-10/12 xl:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
              <div className="post-header !mb-[.9rem]">
                <div className="inline-flex uppercase tracking-[0.02rem] text-[0.7rem] font-bold text-white mb-[0.4rem]  text-line relative align-top pl-[1.4rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#ffffff]">
                  <Link
                    to="#"
                    className="!text-inherit opacity-100"
                    rel="category"
                  >
                    {blog.category}
                  </Link>
                </div>

                <h1 className="text-white text-[calc(1.365rem_+_1.38vw)] font-bold leading-[1.2] xl:text-[2.4rem] mb-4">
                  {blog.url}
                </h1>
                <ul className="text-[0.8rem] text-white m-0 p-0 list-none">
                  <li className="post-date inline-block">
                    <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']"></i>
                    <span>{blog.date}</span>
                  </li>
                  <li className="post-author inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0_.4rem] before:rounded-[100%] before:align-[.15rem] before:bg-[#ffffff]">
                    <a
                      className="text-[0.8rem] text-white hover:text-white"
                      href="#"
                    >
                      <i className="uil uil-user pr-[0.2rem] align-[-.05rem] before:content-['\ed6f']"></i>
                      <span>By Brandbell</span>
                    </a>
                  </li>
                  <li className="post-comments inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0_.4rem] before:rounded-[100%] before:align-[.15rem] before:bg-[#ffffff]">
                    <a
                      className="text-[0.8rem] text-white hover:text-white"
                      href="#"
                    >
                      <i className="uil uil-comment pr-[0.2rem] align-[-.05rem] before:content-['\ea54']"></i>
                      {blog.comments}
                      <span> Comments</span>
                    </a>
                  </li>
                  <li className="post-likes inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0_.4rem] before:rounded-[100%] before:align-[.15rem] before:bg-[#ffffff]">
                    <a
                      className="text-[0.8rem] text-white hover:text-white"
                      href="#"
                    >
                      <i className="uil uil-heart-alt pr-[0.2rem] align-[-.05rem] before:content-['\eb60']"></i>
                      3<span> Likes</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper !bg-[#ffffff]">
        <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
          <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px]">
            <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full md:px-[20px] lg:px-[20px] xl:px-[35px]">
              <div className="blog single">
                <div className="card">
                  <figure className="card-img-top">
                    <img src={blog.image} alt="image" />
                  </figure>
                  <div className="card-body flex-[1_1_auto] p-[40px] xl:p-[2.8rem_3rem_2.8rem] lg:p-[2.8rem_3rem_2.8rem] md:p-[2.8rem_3rem_2.8rem]">
                    <div className="classic-view">
                      <article className="post mb-8">
                        <div className="relative mb-5">
                          <h2 className="h1 !mb-4 !leading-[1.3]">
                            {blog.title}
                          </h2>
                          <article className="post mb-8">
                            {blog.content.map((block, index) => {
                              if (block.type === "paragraph") {
                                return (
                                  <p key={index} className=" text-justify">
                                    {block.text}
                                  </p>
                                );
                              } else if (block.type === "heading") {
                                return <h3 key={index}>{block.text}</h3>;
                              }
                              return null;
                            })}
                          </article>
                        </div>

                        <div className="post-footer xl:flex xl:!flex-row xl:!justify-between lg:flex lg:!flex-row lg:!justify-between md:flex md:!flex-row md:!justify-between !items-center !mt-8">
                          <div>
                            <ul className="pl-0 list-none tag-list  !mb-0">
                              {blog.tags.map((tag, index) => (
                                <li
                                  key={index}
                                  className="mt-0 mb-[0.45rem] mr-[0.2rem] inline-block"
                                >
                                  <Link
                                    to="#"
                                    className="btn btn-soft-ash btn-sm !rounded-[50rem] flex items-center hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,.05)] before:not-italic before:content-['#'] before:font-normal before:pr-[0.2rem]"
                                  >
                                    {tag}
                                  </Link>
                                </li>
                              ))}
                              
                            </ul>
                          </div>
                        </div>
                      </article>
                    </div>

                    <hr />
                  </div>
                </div>
              </div>
            </div>

            <BlogAside />
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogdetails;
