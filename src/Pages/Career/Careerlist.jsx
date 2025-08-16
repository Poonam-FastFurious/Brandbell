import { Link } from "react-router-dom";
import jobs from "../../data/jobs";
function Careerlist() {
  return (
    <>
      <section className="wrapper !bg-[#ffffff]">
        <div className="container pt-12 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
          <div className="flex flex-wrap mx-[-15px] !text-center">
            <div className="xl:w-10/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
              <h2 className="!text-[.75rem] uppercase text-[#3f78e0] tracking-[0.02rem] leading-[1.35] !mb-3">
                Job Positions
              </h2>
              <h3 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] !leading-[1.3] mb-10 xxl:!px-20">
                We’re always searching for amazing people to join our team. Take
                a look at our current openings.
              </h3>
            </div>
          </div>

          <div className="flex flex-wrap mx-[-15px] mt-[-30px]">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]"
              >
                <Link
                  to="#"
                  className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] lift !h-full"
                >
                  <div className="card-body p-5 flex flex-row">
                    <div>
                      <span
                        className={`flex items-center justify-center font-bold leading-[1.7] tracking-[-0.01rem] rounded-[100%] ${job.iconBg} opacity-100 text-white !w-[3rem] !h-[3rem] text-[1rem] !mr-4`}
                      >
                        {job.initials}
                      </span>
                    </div>
                    <div>
                      <span
                        className={`badge ${job.badgeColor}  rounded py-1 mb-2 `}
                        style={{ color: job.badgeTextColor }}
                      >
                        {job.badgeText}
                      </span>
                      <h4 className="!mb-1">{job.title}</h4>
                      <p className="mb-0 text-[#60697b]">{job.location}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Careerlist;
