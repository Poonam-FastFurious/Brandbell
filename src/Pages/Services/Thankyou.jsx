
import { Link } from "react-router-dom";
import image from "../../assets/Newimages/thankyou.jpg";
function Thankyou() {
  

  return (
    <>
      <div
        className="bg-gray-100 bg-no-repeat bg-[center_center] bg-cover  inset-0"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="h-screen flex items-center justify-center">
          <div className="w-full max-w-sm p-6 bg-white shadow-md rounded-lg text-center">
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-orange-500 mx-auto"
                width="75"
                height="75"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-gray-800 mb-2">
                Thank You!
              </h1>
              <p className="text-gray-600 mb-4">
                We have received your enquiry and someone from our team will
                contact you soon.
              </p>
              <hr className="my-4 border-gray-300" />
              <p className=" text-lg text-black">Know More About us</p>
              <Link
                to="/"
                className="px-6 py-1 text-orange-500 border border-transparent rounded-lg  hover:text-orange-500  mb-4"
              >
                Visit Our Website
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Thankyou;
