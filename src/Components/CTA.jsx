import { Link } from "react-router-dom"
import images from "../Images/Image"


function CTA() {
  return (
    <>
       <footer className="!bg-[#ffffff] ">
        <div className="container ">
          <div
            className="card image-wrapper bg-full bg-image bg-overlay bg-overlay-300 !my-[1.5rem] [background-size:100%] bg-[center_center] bg-no-repeat !bg-scroll relative z-0 before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.3)] before:!rounded-[.4rem]"
            style={{
              backgroundImage: `url(${images.testimonialbg})`,
            }}
          >
            <div className="card-body !p-10 xl:!p-14">
              <div className="flex flex-wrap mx-[-15px] !text-center">
                <div className="xl:w-11/12 xxl:w-9/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                  <h2 className="text-[0.8rem] !leading-[1.35] uppercase text-white !mb-3">
                    Join Our Community
                  </h2>
                  <h3 className="xl:text-[2.1rem] text-[calc(1.335rem_+_1.02vw)] !leading-[1.2] font-semibold !mb-8 xl:!px-8 lg:!px-8 text-white">
                    We are{" "}
                    <span className="!relative z-[2] after:content-[''] after:absolute after:z-[-1] after:block after:bg-no-repeat after:bg-bottom after:bottom-0 after:w-[110%] after:h-[0.3em] after:-translate-x-2/4 after:left-2/4  style-2 yellow">
                      trusted
                    </span>{" "}
                    by over 1000+ clients. Join them now and grow your business.
                  </h3>
                </div>
              </div>

              <div className="flex justify-center">
                <span>
                  <Link to="/contact" className="btn btn-white rounded">Get Started</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default CTA
