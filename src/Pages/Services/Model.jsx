/* eslint-disable react/prop-types */


const Model = ({setIsOpen,}) => {
 

  return (
    <>
      <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-[100%] z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
          <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-4 relative">
            <button
              className=" flex flex-end justify-end w-full"
              onClick={() => setIsOpen(false)}
            >
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500 float-right"
                viewBox="0 0 320.591 320.591"
              >
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"
                ></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"
                ></path>
              </svg>
            </button>

            <div className="my-8 text-center">
              <h4 className="text-3xl text-gray-800 font-extrabold">
                Contact Us
              </h4>
              <p className="text-sm text-gray-500 mt-4">
                Share your information and we will contact you soon.
              </p>
            </div>

            <form
              className="contact-form needs-validation"
              method="post"
              action="../../assets/php/contact.php"
              noValidate
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
                      First Name *
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
                      name="user_lastname"
                      className=" form-control  relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25]"
                      placeholder="Doe"
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
                      htmlFor="form_lastname"
                      className="text-[#959ca9] mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                    >
                      Last Name *
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
                      required
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
                      Email *
                    </label>
                    <div className="valid-feedback"> Looks good! </div>
                    <div className="invalid-feedback">
                      Please provide a valid email address.
                    </div>
                  </div>
                </div>

                <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                  <div className="form-select-wrapper mb-4">
                    <select
                      className="form-select"
                      id="form-select"
                      name="msg_subject"
                      required
                    >
                      <option selected disabled>
                        Select a department
                      </option>
                      <option value="Sales">Sales</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Customer Support">Customer Support</option>
                    </select>
                    <div className="valid-feedback"> Looks good! </div>
                    <div className="invalid-feedback">
                      Please select a department.
                    </div>
                  </div>
                </div>

                <div className="w-full flex-[0_0_auto] px-[15px] max-w-full">
                  <div className="form-floating relative !mb-4">
                    <textarea
                      id="form_message1"
                      name="message"
                      className=" form-control  relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25]"
                      placeholder="Your message"
                      style={{ height: "80px" }}
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
                  <input
                    type="submit"
                    value="Submit"
                    className="btn btn-primary text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:border-[#3f78e0] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] btn-send !mb-3 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
    </>
  );
};

export default Model;
