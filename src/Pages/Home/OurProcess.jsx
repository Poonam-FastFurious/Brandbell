import images from "../../Images/Image";

function OurProcess() {
  return (
    <>
      <section className="wrapper !bg-[#ffffff]">
        <div className="container  ">
          <div className="flex flex-wrap mx-[-15px] xsm:mt-[-50px] mt-[-80px] xl:mx-[-7.5px] lg:mx-[-7.5px] mb-24 md:!mb-[8rem] items-center">
            <div className="md:w-8/12 lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] xl:px-[7.5px] lg:px-[7.5px] px-[15px] max-w-full !relative mt-[80px]">
              <div
                className="shape bg-dot rellax !w-[7rem] !h-[12.5rem] absolute z-[1] opacity-50 !bg-[radial-gradient(#54a8c7_2px,transparent_2.5px)]"
                data-rellax-speed="1"
                style={{ top: "-2rem", left: "-1.9rem" }}
              ></div>
              <div
                className="shape !rounded-[.4rem] !bg-[#edf2fc] rellax xl:block lg:block md:block !absolute z-[1]"
                data-rellax-speed="0"
                style={{
                  bottom: "-1.8rem",
                  right: "-1.5rem",
                  width: "85%",
                  height: "90%",
                }}
              ></div>
              <figure className="!rounded-[.4rem] relative z-[2]">
                <img
                  className="!rounded-[.4rem]"
                  src={images.proces}
                  alt="image"
                />
              </figure>
            </div>

            <div className="lg:w-5/12 xl:w-4/12 xl:!ml-[8.33333333%] lg:!ml-[8.33333333%] w-full flex-[0_0_auto] xl:px-[7.5px] lg:px-[7.5px] px-[15px] max-w-full mt-[80px] text-black">
              <h2 className="text-[0.8rem] uppercase inline-flex !leading-[1.35] text-line relative align-top pl-[1.4rem] tracking-[0.02rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#000000] text-[#000000]  !mb-3">
                Our Process?
              </h2>
              <h3 className="text-[calc(1.315rem_+_0.78vw)] font-bold xl:text-[1.4rem] !leading-[1.25] mb-7">
                Our Brandbell has a clear and efficient process.
              </h3>
              <div className="flex flex-row !mb-6">
                <div>
                  <span className="icon btn btn-block btn-soft-aqua pointer-events-none mr-5">
                    <span className="number !text-[0.9rem]">1</span>
                  </span>
                </div>
                <div>
                  <h4 className="!mb-1 !text-[1rem] !leading-[1.45]">
                    Free Concept
                  </h4>
                  <p className="!mb-0">
                    We start with a free concept, where we listen to your ideas
                    and provide a clear understanding of how we can bring them
                    to life.
                  </p>
                </div>
              </div>
              <div className="flex flex-row !mb-6">
                <div>
                  <span className="icon btn btn-block btn-soft-aqua pointer-events-none mr-5">
                    <span className="number !text-[0.9rem]">2</span>
                  </span>
                </div>
                <div>
                  <h4 className="!mb-1 !text-[1rem] !leading-[1.45]">
                    Design and Planning
                  </h4>
                  <p className="!mb-0">
                    Our team of experts will work with you to design and plan
                    your project, taking into account your goals, target
                    audience, and budget.
                  </p>
                </div>
              </div>
              <div className="flex flex-row !mb-6">
                <div>
                  <span className="icon btn btn-block btn-soft-aqua pointer-events-none mr-5">
                    <span className="number !text-[0.9rem]">3</span>
                  </span>
                </div>
                <div>
                  <h4 className="!mb-1 !text-[1rem] !leading-[1.45]">
                    Prototyping and Testing
                  </h4>
                  <p className="!mb-0">
                    We create prototypes and test them to ensure that your
                    project meets the highest standards of quality and
                    functionality.
                  </p>
                </div>
              </div>{" "}
              <div className="flex flex-row !mb-6">
                <div>
                  <span className="icon btn btn-block btn-soft-aqua pointer-events-none mr-5">
                    <span className="number !text-[0.9rem]">4</span>
                  </span>
                </div>
                <div>
                  <h4 className="!mb-1 !text-[1rem] !leading-[1.45]">
                    Production and Launch
                  </h4>
                  <p className="!mb-0">
                    Once youre satisfied with the prototype, we move into
                    production and launch your final product.
                  </p>
                </div>
              </div>{" "}
              <div className="flex flex-row !mb-6">
                <div>
                  <span className="icon btn btn-block btn-soft-aqua pointer-events-none mr-5">
                    <span className="number !text-[0.9rem]">5</span>
                  </span>
                </div>
                <div>
                  <h4 className="!mb-1 !text-[1rem] !leading-[1.45]">
                    Ongoing Support
                  </h4>
                  <p className="!mb-0">
                    Our support doesnt end with the launch. We provide ongoing
                    support and maintenance to ensure that your project
                    continues to meet your evolving needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurProcess;
