import { useState } from "react";

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle open/close
  };

  return (
    <>
      <section className="wrapper bg-white">
        <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
          <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-50px]">
            {/* Left Column */}
            <div className="xl:w-6/12 lg:w-6/12 w-full px-[15px] max-w-full mt-[50px]">
              <h2 className="text-[0.75rem] uppercase text-blue-800 font-bold mb-3">
                FAQ
              </h2>
              <h3 className="text-[1.6rem] font-bold text-gray-800 mb-4">
                If you don’t see an answer to your question, you can send us an
                email from our contact form.
              </h3>
            </div>

            {/* Accordion Section */}
            <div className="xl:w-6/12 lg:w-6/12 w-full px-[15px] max-w-full mt-[50px]">
              <div className="accordion-wrapper ">
                {/* FAQ Item 1 */}
                <div className="card accordion-item mb-5">
                  <div
                    className="card-header bg-gray-100 p-4 border-b border-gray-300"
                    onClick={() => toggleAccordion(1)}
                  >
                    <button className="w-full text-left text-gray-900 font-medium">
                      What services does Brandbell offer?
                    </button>
                  </div>
                  {activeIndex === 1 && (
                    <div className="card-body p-4 bg-white  text-black">
                      <p>
                        We specialize in a wide range of services, including
                        digital marketing, web and mobile app development, SEO,
                        UI/UX design, Augmented and Virtual Reality solutions,
                        content creation, and many more.
                      </p>
                    </div>
                  )}
                </div>

                {/* FAQ Item 2 */}
                <div className="card accordion-item mb-5">
                  <div
                    className="card-header bg-gray-100 p-4 border-b border-gray-300"
                    onClick={() => toggleAccordion(2)}
                  >
                    <button className="w-full text-left text-gray-900 font-medium">
                      How can Brandbell help my business grow?
                    </button>
                  </div>
                  {activeIndex === 2 && (
                    <div className="card-body p-4 bg-white text-black">
                      <p>
                        Our solutions are designed to improve brand visibility,
                        increase sales, and enhance customer engagement through
                        innovative digital strategies tailored to your business
                        needs.
                      </p>
                    </div>
                  )}
                </div>

                {/* FAQ Item 3 */}
                <div className="card accordion-item mb-5">
                  <div
                    className="card-header bg-gray-100 p-4 border-b border-gray-300"
                    onClick={() => toggleAccordion(3)}
                  >
                    <button className="w-full text-left text-gray-900 font-medium">
                      What industries do you serve?
                    </button>
                  </div>
                  {activeIndex === 3 && (
                    <div className="card-body p-4 bg-white text-black">
                      <p>
                        We work with businesses across various industries,
                        including e-commerce, education, healthcare, real
                        estate, technology, and entertainment, providing
                        customized solutions to meet unique industry needs.
                      </p>
                    </div>
                  )}
                </div>

                {/* FAQ Item 4 */}
                <div className="card accordion-item mb-5">
                  <div
                    className="card-header bg-gray-100 p-4 border-b border-gray-300"
                    onClick={() => toggleAccordion(4)}
                  >
                    <button className="w-full text-left text-gray-900 font-medium">
                      How long does it take to complete a project?
                    </button>
                  </div>
                  {activeIndex === 4 && (
                    <div className="card-body p-4 bg-white text-black">
                      <p>
                        Project timelines vary depending on the scope and
                        complexity of the work. We will provide you with a clear
                        timeline and keep you updated throughout the process.
                      </p>
                    </div>
                  )}
                </div>

                {/* FAQ Item 5 */}
                <div className="card accordion-item mb-5">
                  <div
                    className="card-header bg-gray-100 p-4 border-b border-gray-300"
                    onClick={() => toggleAccordion(5)}
                  >
                    <button className="w-full text-left text-gray-900 font-medium">
                      Do you offer ongoing support after project completion?
                    </button>
                  </div>
                  {activeIndex === 5 && (
                    <div className="card-body p-4 bg-white text-black">
                      <p>
                        Yes, we provide continuous support and maintenance to
                        ensure your project runs smoothly post-launch, offering
                        updates and addressing any issues that arise.
                      </p>
                    </div>
                  )}
                </div>

                {/* FAQ Item 6 */}
                <div className="card accordion-item mb-5">
                  <div
                    className="card-header bg-gray-100 p-4 border-b border-gray-300"
                    onClick={() => toggleAccordion(6)}
                  >
                    <button className="w-full text-left text-gray-900 font-medium">
                      How do I get started?
                    </button>
                  </div>
                  {activeIndex === 6 && (
                    <div className="card-body p-4 bg-white text-black">
                      <p>
                        Getting started is easy! Simply contact us to schedule a
                        consultation. Our team will discuss your needs, offer
                        insights, and help define the best approach for your
                        project.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
