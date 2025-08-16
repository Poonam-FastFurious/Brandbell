/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

function Privacy() {
  return (
    <>
      <section className="wrapper bg-soft-primary !bg-[#edf2fc]">
        <div className="container pt-10 pb-14 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] xl:pb-24 lg:pb-24 md:pb-24 !text-center">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="md:w-10/12 lg:w-8/12 xl:w-7/12 xxl:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
              <h1 className="text-[calc(1.365rem_+_1.38vw)] font-bold leading-[1.2] xl:text-[2.4rem] !mb-3">
                Privacy Policy
              </h1>
              <nav className="inline-block" aria-label="breadcrumb">
                <ol className="breadcrumb flex flex-wrap bg-[none] mb-4 p-0 !rounded-none list-none">
                  <li className="breadcrumb-item flex text-[#60697b]">
                    <Link className=" text-inherit text-[#60697b]" to="/">
                      Home
                    </Link>
                  </li>
                  <li
                    className="breadcrumb-item active flex text-[#60697b] pl-2 before:font-normal before:flex before:items-center before:text-[rgba(96,105,123,.35)] before:content-['\e931'] before:text-[0.9rem] before:-mt-px before:pr-2 before:font-Unicons"
                    aria-current="page"
                  >
                    Privacy Policy
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="flex flex-wrap mx-0">
          <div className=" w-full flex-[0_0_auto] max-w-full">
            <section id="terms-conditions" className="wrapper ">
              <div className="">
                <div className=" !p-10">
                  <p>
                    Brandbell recognizes your privacy and security concerns
                    regarding your personal information. We are dedicated to
                    protecting your data from all risks and ensuring its use
                    complies with legal standards. Our privacy policy is
                    designed to serve those worried about their 'Personally
                    Identifiable Information' (PII).
                  </p>
                </div>
              </div>
            </section>
            <section id="user-policy" className="wrapper pt-2">
              <div className="card">
                <div className="card-body !p-10">
                  <h2 className="!mb-3 !leading-[1.35]">
                    How We Use Your Information
                  </h2>
                  <p>
                    We may use the collected information when you fill out a
                    form, sign up for our newsletter, or respond to a survey or
                    marketing communication in the following ways:
                  </p>
                  <p> To better serve you in responding to your requests.</p>
                  <p>
                    To send periodic emails regarding our services and important
                    updates.
                  </p>
                  <br />
                  <p>
                    **Note**: We do not sell, misuse, or distribute your data
                    for any purpose unless required by law or authorized by you.
                    We are obligated to share your information if required by
                    law enforcement or government officials.
                  </p>
                </div>
              </div>
            </section>
            <section id="privacy-policy" className="wrapper pt-2">
              <div className="card">
                <div className="card-body !p-10">
                  <h2 className="!mb-3 !leading-[1.35]">
                    How We Protect Your Information
                  </h2>
                  <p>
                    We maintain strict technical, administrative, and physical
                    safeguards to protect your personal information from loss,
                    misuse, or unauthorized access. Our employees are trained to
                    uphold high standards of conduct regarding information
                    protection. We ensure that third parties assisting in our
                    services comply with our privacy practices and data
                    protection laws.
                  </p>
                  <p>
                    Our data privacy is safeguarded by industry-standard
                    technology and widely deployed security protocols, ensuring
                    safe data transmission.
                  </p>
                </div>
              </div>
            </section>
            <section id="user-policy" className="wrapper pt-2">
              <div className="card">
                <div className="card-body !p-10">
                  <h2 className="!mb-3 !leading-[1.35]">Third Party Links</h2>
                  <p>
                    Occasionally, we may include or offer third-party products
                    or services on our website. These sites have separate and
                    independent privacy policies. Therefore, we hold no
                    responsibility for their content or activities but welcome
                    feedback about these sites to maintain our site's integrity.
                  </p>
                </div>
              </div>
            </section>
            <section id="user-policy" className="wrapper pt-2">
              <div className="card">
                <div className="card-body !p-10">
                  <h2 className="!mb-3 !leading-[1.35]">Policy Changes</h2>
                  <p>
                    These policies may be amended at any time and without notice
                    but will be posted on this page. Continued use of our
                    websites, products, or services after amendments constitutes
                    your consent and acceptance.
                  </p>
                </div>
              </div>
            </section>
            <section id="user-policy" className="wrapper py-2">
              <div className="card">
                <div className="card-body !p-10">
                  <h2 className="!mb-3 !leading-[1.35]">Disclaimer</h2>
                  <p>
                    Internet-shared information is susceptible to security
                    risks. Brandbell holds no responsibility for any losses,
                    damage, alteration, or deletion due to unlawful use or
                    access.
                  </p>
                  <p>
                    For more details on our Privacy Policy, please fill out our
                    contact form or email us at Info@brandbell.in.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Privacy;
