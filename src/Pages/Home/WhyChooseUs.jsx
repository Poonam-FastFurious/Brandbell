import { useState } from "react";
import images from "../../Images/Image";

function Whychooseus() {
  const [isOpen, setIsOpen] = useState({
    collapseOne: true,
    collapseTwo: false,
    collapseThree: false,
  });

  const toggleCollapse = (collapse) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [collapse]: !prevState[collapse],
    }));
  };
  return (
    <>
      <section className="wrapper !bg-[#ffffff]">
        <div className="container  pb-24 xl:pb-32 lg:pb-32 md:pb-32">
          <div className="flex flex-wrap mx-[-15px] xsm:mt-[-50px] mt-[-80px] xl:mx-[-7.5px] lg:mx-[-7.5px] items-center">
            <div className="md:w-8/12 lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] px-[15px] mt-[50px] xl:mt-[80px] lg:mt-[80px] md:mt-[80px] sm:mt-[80px] xl:px-[7.5px] lg:px-[7.5px] max-w-full xl:!ml-[8.33333333%] lg:!ml-[8.33333333%] xl:!order-2 lg:!order-2 !relative">
              <div
                className="shape !rounded-[50%] bg-line aqua rellax !w-[8rem] !h-[8rem] !absolute z-[1] opacity-50"
                data-rellax-speed="1"
                style={{ top: "-2rem", right: "-1.9rem" }}
              ></div>
              <div
                className="shape rounded  rellax xl:block lg:block md:block absolute z-[1]"
                data-rellax-speed="0"
                style={{
                  bottom: "-1.8rem",
                  left: "-1.5rem",
                  width: "85%",
                  height: "90%",
                }}
              ></div>
              <figure className="rounded-[0.4rem] relative z-[2]">
                <img
                  className="rounded-[.4rem]"
                  src={images.whychoseimage}
                  srcSet={images.whychoseimage}
                  alt="image"
                />
              </figure>
            </div>

            <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] px-[15px] mt-[50px] xl:mt-[80px] lg:mt-[80px] md:mt-[80px] sm:mt-[80px] xl:px-[7.5px] lg:px-[7.5px] max-w-full">
              <h2 className="text-[0.8rem] uppercase inline-flex !leading-[1.35] text-line relative align-top pl-[1.4rem] tracking-[0.02rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#35778d] text-[#35778d] !mb-3">
                Why Choose Us?
              </h2>

              <h3 className="text-[calc(1.315rem_+_0.78vw)] font-bold xl:text-[1.9rem] !leading-[1.25] mb-7">
                A few reasons why our valued customers choose us.
              </h3>
              <div
                className="accordion accordion-wrapper"
                id="accordionExample"
              >
                <div className="card plain accordion-item">
                  <div
                    className="card-header !mb-0 !p-[0_0_.8rem_0] !border-0 !bg-inherit"
                    id="headingOne"
                  >
                    <button
                      className="before:!text-[#54a8c7] hover:!text-[#54a8c7] !p-[0_0_0_1.1rem] !text-[.9rem] accordion-button transition"
                      onClick={() => toggleCollapse("collapseOne")}
                    >
                      Professional Design
                    </button>
                  </div>

                  <div
                    id="collapseOne"
                    className={`accordion-collapse transition-all duration-300 collapse ${
                      isOpen.collapseOne ? "show" : ""
                    }`}
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="card-body flex-[1_1_auto] transition-all duration-800  pb-4 xl:p-[2rem_2.5rem_1.25rem] lg:p-[2rem_2.5rem_1.25rem] md:p-[2rem_2.5rem_1.25rem]">
                      <p>
                        At Brandbell, we create visually engaging and functional
                        designs that elevate your brand. From logos and websites
                        to marketing materials and product designs, we deliver
                        solutions tailored to your business needs. Our focus is
                        on blending creativity with strategy, ensuring your
                        design not only looks great but also aligns with your
                        goals.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card plain accordion-item">
                  <div
                    className="card-header !mb-0 !p-[0_0_.8rem_0] !border-0 !bg-inherit"
                    id="headingTwo"
                  >
                    <button
                      className="before:!text-[#54a8c7] hover:!text-[#54a8c7] !p-[0_0_0_1.1rem] !text-[.9rem] collapsed"
                      onClick={() => toggleCollapse("collapseTwo")}
                    >
                      Top-Notch Support
                    </button>
                  </div>

                  <div
                    id="collapseTwo"
                    className={`accordion-collapse collapse ${
                      isOpen.collapseTwo ? "show" : ""
                    }`}
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="card-body flex-[1_1_auto]  pb-4 xl:p-[2rem_2.5rem_1.25rem] lg:p-[2rem_2.5rem_1.25rem] md:p-[2rem_2.5rem_1.25rem]">
                      <p>
                        At Brandbell, we pride ourselves on offering exceptional
                        customer support that goes above and beyond. Our
                        dedicated team is always ready to assist you, providing
                        quick resolutions and expert guidance whenever you need
                        it. Whether you have questions, need technical
                        assistance, or require ongoing support, we’re here to
                        ensure your experience is seamless and hassle-free
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card plain accordion-item">
                  <div
                    className="card-header !mb-0 !p-[0_0_.8rem_0] !border-0 !bg-inherit"
                    id="headingThree"
                  >
                    <button
                      className="before:!text-[#54a8c7] hover:!text-[#54a8c7] !p-[0_0_0_1.1rem] !text-[.9rem] collapsed"
                      onClick={() => toggleCollapse("collapseThree")}
                    >
                      Customizable Features
                    </button>
                  </div>

                  <div
                    id="collapseThree"
                    className={`accordion-collapse collapse ${
                      isOpen.collapseThree ? "show" : ""
                    }`}
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="card-body flex-[1_1_auto]  pb-4 xl:p-[2rem_2.5rem_1.25rem] lg:p-[2rem_2.5rem_1.25rem] md:p-[2rem_2.5rem_1.25rem]">
                      <p>
                        At Brandbell, we provide customizable features and
                        design Options to make your website visually appealing
                        and easy to navigate. Our team works with you to choose
                        headers and sliders that perfectly match your brand’s
                        identity, ensuring a dynamic and engaging user
                        experience. Whether you prefer a sleek, minimalist
                        header or a vibrant slider to highlight your latest
                        offers, we deliver flexible and responsive solutions
                        tailored to your requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Whychooseus;
