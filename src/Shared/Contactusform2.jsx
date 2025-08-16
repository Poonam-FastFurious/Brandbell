import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
function Contactusform2() {
  const form = useRef();
  const navigate = useNavigate(); // Initialize navigate
  const sendEmail = (e) => {
    e.preventDefault();
    if (!form.current.checkValidity()) {
      toast.error("Please fill in all required fields correctly.");
      return;
    }
    emailjs
      .sendForm("service_v8xww9j", "template_cot7jpf", form.current, {
        publicKey: "sbkFJ3SGMzbAVcPrw",
      })
      .then(
        () => {
          console.log("SUCCESS!");

          toast.success("Email sent successfully!", {
            autoClose: 2000, // Toast will auto-close after 2 seconds
            onClose: () => {
              // Redirect after toast closes
              navigate("/Thank-you"); // Change the URL as needed
            },
          });
          form.current.reset(); // Clear the form
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Failed to send email: " + error.text);
        }
      );
  };

  return (
    <>
      <ToastContainer />
      <section className="wrapper !bg-[#ffffff] ">
        <div className="flex flex-wrap flex-col text-center justify-center items-center mx-auto w-full">
          <h2 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] !mb-3">
            Get in Touch
          </h2>
          <p className="lead text-[0.9rem] font-medium !leading-[1.65] !mb-8 xl:pr-10 text-justify px-4 sm:px-0">
            Have any questions? Reach out to us from our contact form and we
            will get back to you shortly.
          </p>
        </div>
        <div className="container pt-10 xl:pt-12 lg:pt-12 md:pt-12 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="xl:w-10/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
              <div className="flex flex-wrap mx-[-15px] mt-[-50px] xl:mx-[-35px] lg:mx-[-20px]">
                <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mt-[50px]">
                  <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="contact-form needs-validation"
                    method="post"
                  >
                    <div className="messages"></div>
                    <div className="flex flex-wrap mx-[-10px]">
                      <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                        <div className="form-floating relative !mb-4">
                          <input
                            id="form_name1"
                            type="text"
                            name="user_name"
                            className=" form-control  relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25]"
                            placeholder="Jane"
                            required
                            onInput={(e) => {
                              // Remove any characters that are not letters or spaces
                              e.target.value = e.target.value.replace(
                                /[^a-zA-Z\s]/g,
                                ""
                              );
                            }}
                          />
                          <label
                            htmlFor="form_name1"
                            className="text-[#959ca9] mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                          >
                            Name *
                          </label>
                          <div className="valid-feedback"> Looks good! </div>
                          <div className="invalid-feedback">
                            Please enter your first name.
                          </div>
                        </div>
                      </div>

                      <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                        <div className="form-floating relative !mb-4">
                          <input
                            id="form_lastname"
                            type="text"
                            name="number"
                            className=" form-control  relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25]"
                            placeholder="Doe"
                            required
                            onInput={(e) => {
                              // Remove non-numeric characters
                              e.target.value = e.target.value.replace(/[^0-9]/g, "");
                              // Truncate to 10 digits
                              if (e.target.value.length > 10) {
                                e.target.value = e.target.value.slice(0, 10);
                              }
                            }}
                          />
                          <label
                            htmlFor="form_lastname"
                            className="text-[#959ca9] mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                          >
                            Number *
                          </label>
                          <div className="valid-feedback"> Looks good! </div>
                          <div className="invalid-feedback">
                            Please enter your last name.
                          </div>
                        </div>
                      </div>

                      <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                        <div className="form-floating relative !mb-4">
                          <input
                            id="form_email1"
                            type="email"
                            name="user_email"
                            className=" form-control  relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25]"
                            placeholder="jane.doe@example.com"
                           
                            onInput={(e) => {
                              // Allow only letters, numbers, @, and .
                              e.target.value = e.target.value.replace(
                                /[^a-zA-Z0-9@.]/g,
                                ""
                              );
                            }}
                          />
                          <label
                            htmlFor="form_email1"
                            className="text-[#959ca9] mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                          >
                            Email 
                          </label>
                          <div className="valid-feedback"> Looks good! </div>
                          <div className="invalid-feedback">
                            Please provide a valid email address.
                          </div>
                        </div>
                      </div>

                      <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                        <div className="form-select-wrapper mb-4">
                        <input
                            id="form_email1"
                            type="text"
                            name="city"
                            className=" form-control  relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25]"
                            placeholder="City"
                            
                            onInput={(e) => {
                              // Remove any characters that are not letters or spaces
                              e.target.value = e.target.value.replace(
                                /[^a-zA-Z\s]/g,
                                ""
                              );
                            }}
                          />
                          <div className="valid-feedback"> Looks good! </div>
                         
                        </div>
                      </div>

                      <div className="w-full flex-[0_0_auto] px-[15px] max-w-full">
                        <div className="form-floating relative !mb-4">
                          <textarea
                            id="form_message1"
                            name="message"
                            className=" form-control  relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25]"
                            placeholder="Your message"
                            style={{ height: "150px" }}
                            required
                            onInput={(e) => {
                              // Remove any characters that are not letters or spaces
                              e.target.value = e.target.value.replace(
                                /[^a-zA-Z\s]/g,
                                ""
                              );
                            }}
                          ></textarea>
                          <label
                            htmlFor="form_message1"
                            className="text-[#959ca9] mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                          >
                            Message *
                          </label>
                          <div className="valid-feedback"> Looks good! </div>
                          <div className="invalid-feedback">
                            Please enter your messsage.
                          </div>
                        </div>
                      </div>

                      <div className="w-full flex-[0_0_auto] px-[15px] max-w-full">
                        <div className="form-check block min-h-[1.36rem] pl-[1.55rem] mb-4 ">
                          <input
                            className="form-check-input checked:bg-green-500"
                            type="checkbox"
                            id="invalidCheck"
                            required
                          />
                          <label
                            className="form-check-label "
                            htmlFor="invalidCheck"
                          >
                            I agree to 
                            <Link
                              to="/TermsandConditions"
                              target="_blank"
                              className="hover pl-2"
                            >
                              terms and policy
                            </Link>
                            .
                          </label>
                          <div className="invalid-feedback">
                            You must agree before submitting.
                          </div>
                        </div>
                      </div>

                      <div className="w-full flex-[0_0_auto] px-[15px] max-w-full">
                        <input
                          type="submit"
                          value="Send"
                          className="btn btn-primary text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:border-[#3f78e0] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] btn-send !mb-3 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                        />
                        <p className="text-[#aab0bc]">
                          <strong>*</strong> These fields are required.
                        </p>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mt-[50px]">
                  <div className="flex flex-row">
                    <div>
                      <div className="icon text-[#3f78e0] xl:text-[1.4rem] text-[calc(1.265rem_+_0.18vw)] !mr-4 mt-[-0.25rem]">
                        <i className="uil uil-location-pin-alt before:content-['\ebd8']"></i>
                      </div>
                    </div>
                    <div>
                      <h5 className="!mb-1">Address</h5>
                      <address className=" not-italic leading-[inherit] mb-4">
                        C-20/1 sector 62 Noida,{" "}
                        <br className="hidden xl:block lg:block md:block" />{" "}
                        Uttar Pradesh - 201309
                      </address>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div>
                      <div className="icon text-[#3f78e0] xl:text-[1.4rem] text-[calc(1.265rem_+_0.18vw)] !mr-4 mt-[-0.25rem]">
                        <i className="uil uil-phone-volume before:content-['\ec50']"></i>
                      </div>
                    </div>
                    <div className="!mb-4">
                      <h5 className="!mb-1">Phone</h5>
                      <Link to="tel:+917303392444" className="text-[#60697b] ">
                        +91 73033 92444
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div>
                      <div className="icon text-[#3f78e0] xl:text-[1.4rem] text-[calc(1.265rem_+_0.18vw)] !mr-4 mt-[-0.25rem]">
                        <i className="uil uil-envelope before:content-['\eac8']"></i>
                      </div>
                    </div>
                    <div>
                      <h5 className="!mb-1">E-mail</h5>
                      <p className="!mb-0">
                        <a
                          href="mailto: Info@brandbell.in"
                          className="text-[#60697b]"
                        >
                          Info@brandbell.in
                        </a>
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

export default Contactusform2;
