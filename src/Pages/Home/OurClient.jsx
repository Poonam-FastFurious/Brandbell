import images from "../../Images/Image";

function OurClient() {
  return (
    <>
      <section className="wrapper !bg-[#ffffff] ">
        <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
          <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-50px] xl:mt-0 lg:mt-0">
            <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full xl:!mt-2 lg:!mt-2 mt-[50px]">
              <h2 className="!text-[.75rem] uppercase !mb-3 tracking-[0.02rem] leading-[1.35]">
                Our Clients
              </h2>
              <h3 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] !leading-[1.3] mb-3 xxl:pr-5">
                Trusted by over 1000+ clients
              </h3>
              <p className="lead text-[1rem]  !mb-0 xxl:pr-5">
                We bring solutions to make life easier for our customers.
              </p>
            </div>

            <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mt-[50px] xl:mt-0 lg:mt-0">
              <div className="flex flex-wrap mx-[-15px] md:mx-[-20px] xl:mx-[-35px] mt-[-70px]">
                <div className="xl:w-3/12 lg:w-3/12 md:w-3/12 w-6/12 flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full mt-[70px]">
                  <figure className="px-3 xl:!px-0 lg:!px-0 md:!px-0 xxl:!px-2">
                    <img
                      src={images.sarlogo}
                      alt="image"
                    />
                  </figure>
                </div>

                <div className="xl:w-3/12 lg:w-3/12 md:w-3/12 w-6/12 flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full mt-[70px]">
                  <figure className="px-3 xl:!px-0 lg:!px-0 md:!px-0 xxl:!px-2">
                    <img
                      src={images.Comwaylogo}
                      alt="image"
                    />
                  </figure>
                </div>

                <div className="xl:w-3/12 lg:w-3/12 md:w-3/12 w-6/12 flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full mt-[70px]">
                  <figure className="px-3 xl:!px-0 lg:!px-0 md:!px-0 xxl:!px-2">
                    <img
                      src={images.Fusionnetlogo}
                      alt="image"
                    />
                  </figure>
                </div>

                <div className="xl:w-3/12 lg:w-3/12 md:w-3/12 w-6/12 flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full mt-[70px]">
                  <figure className="px-3 xl:!px-0 lg:!px-0 md:!px-0 xxl:!px-2">
                    <img
                      src={images.myinternetlogo}
                      alt="image"
                    />
                  </figure>
                </div>

                <div className="xl:w-3/12 lg:w-3/12 md:w-3/12 w-6/12 flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full mt-[70px]">
                  <figure className="px-3 xl:!px-0 lg:!px-0 md:!px-0 xxl:!px-2">
                    <img
                      src={images.fitstar}
                      alt="image"
                    />
                  </figure>
                </div>

                <div className="xl:w-3/12 lg:w-3/12 md:w-3/12 w-6/12 flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full mt-[70px]">
                  <figure className="px-3 xl:!px-0 lg:!px-0 md:!px-0 xxl:!px-2">
                    <img
                      src={images.charansparsh}
                      alt="image"
                    />
                  </figure>
                </div>

                <div className="xl:w-3/12 lg:w-3/12 md:w-3/12 w-6/12 flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full mt-[70px]">
                  <figure className="px-3 xl:!px-0 lg:!px-0 md:!px-0 xxl:!px-2">
                    <img
                      src={images.micred}
                      alt="image"
                    />
                  </figure>
                </div>

                <div className="xl:w-3/12 lg:w-3/12 md:w-3/12 w-6/12 flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full mt-[70px]">
                  <figure className="px-3 xl:!px-0 lg:!px-0 md:!px-0 xxl:!px-2">
                    <img
                      src={images.khetansolar}
                      alt="image"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurClient;
