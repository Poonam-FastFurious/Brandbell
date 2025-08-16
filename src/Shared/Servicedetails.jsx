/* eslint-disable react/prop-types */

function Servicedetails({
  Title,
  description,
  subpara1,
  subpara2,
  subpara3,
  subpara4,
  image
}) {
  return (
    <>
      <section className="wrapper !bg-[#ffffff] ">
        <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 ">
          <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-50px] !mb-[1.5rem] xl:!mb-[4rem] lg:!mb-[4rem] md:!mb-[4rem] items-center">
            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mt-[50px] !relative">
              <div
                className="shape bg-line leaf !rounded-[50%] rellax !w-[7rem] !h-[7rem] !absolute z-[1] opacity-50"
                data-rellax-speed="1"
                style={{ top: "-2rem", right: "-0.6rem" }}
              ></div>
              <div
                className="shape bg-[#f0eaf6] !rounded-[50%] rellax !w-[7rem] !h-[7rem] !absolute z-[1] opacity-50"
                data-rellax-speed="1"
                style={{ bottom: "-2rem", left: "-0.4rem" }}
              ></div>
              <figure className="!rounded-[.4rem] !mb-0">
                <img className="!rounded-[.4rem]" src={image} alt="image" />
              </figure>
            </div>

            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mt-[50px]">
              <h3 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] !leading-[1.3] mb-4">
                {Title}
              </h3>
              <p className="!mb-5">{description}</p>
              <div className="flex flex-wrap ">
                <div className="xl:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[15px]">
                  <ul className="pl-0 list-none bullet-bg bullet-soft-leaf !mb-0">
                    <li className="relative pl-6">
                      <span>
                        <i className="uil uil-check !w-4 !h-4 text-[0.8rem] leading-none tracking-[normal] text-center table !text-[#7cb798] !bg-[#e7f2ec] absolute rounded-[100%] left-0 top-[0.2rem] before:align-middle before:table-cell before:content-['\e9dd']"></i>
                      </span>
                      <span>{subpara1}</span>
                    </li>
                    <li className="mt-3 relative pl-6">
                      <span>
                        <i className="uil uil-check !w-4 !h-4 text-[0.8rem] leading-none tracking-[normal] text-center table !text-[#7cb798] !bg-[#e7f2ec] absolute rounded-[100%] left-0 top-[0.2rem] before:align-middle before:table-cell before:content-['\e9dd']"></i>
                      </span>
                      <span>{subpara2}</span>
                    </li>
                  </ul>
                </div>

                <div className="xl:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[15px]">
                  <ul className="pl-0 list-none bullet-bg bullet-soft-leaf !mb-0">
                    <li className="relative pl-6">
                      <span>
                        <i className="uil uil-check !w-4 !h-4 text-[0.8rem] leading-none tracking-[normal] text-center table !text-[#7cb798] !bg-[#e7f2ec] absolute rounded-[100%] left-0 top-[0.2rem] before:align-middle before:table-cell before:content-['\e9dd']"></i>
                      </span>
                      <span>{subpara3}</span>
                    </li>
                    <li className="mt-3 relative pl-6">
                      <span>
                        <i className="uil uil-check !w-4 !h-4 text-[0.8rem] leading-none tracking-[normal] text-center table !text-[#7cb798] !bg-[#e7f2ec] absolute rounded-[100%] left-0 top-[0.2rem] before:align-middle before:table-cell before:content-['\e9dd']"></i>
                      </span>
                      <span>{subpara4}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Servicedetails;
