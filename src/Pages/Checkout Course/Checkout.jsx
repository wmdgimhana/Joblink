import React, { useState } from "react";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PaypalIco from "../../assets/paypal.png";
import PaymentMethods from "../../assets/paymentMethods.png";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [cardOpen, setCardOpen] = useState(false);

  return (
    <div className="flex md:px-[50px] gap-[40px] md:flex-row flex-col">
      {/* left */}
      <div className="flex-[2]">
        {/* top */}
        <div className="flex flex-col gap-[20px] mt-[20px]">
          {/* title */}
          <span className="Inter text-[30px] font-[600] px-[20px] md:px-0">
            Checkout
          </span>

          <div className="flex flex-col">
            <span className=" Roboto text-[25px] px-[20px] md:px-0 font-[500] mb-[10px]">
              Payment Methods
            </span>
            {/* credit card */}
            <div className="flex flex-col px-[20px] md:px-0 mt-[20px] md:w-[550px] mb-[20px] ">
              <label
                className="flex items-center gap-[20px] p-[10px] cursor-pointer bg-gray-200 border-solid border-[1px] border-gray-300"
                htmlFor="credit"
                onClick={() => setCardOpen(true)}
              >
                <input
                  type="radio"
                  name="payment"
                  id="credit"
                  className="accent-black"
                />

                <div className="flex items-center gap-[5px]">
                  <CreditCardIcon />
                  <div className="flex items-center gap-[20px]">
                    <span className="Poppins">Credit/Debit Card</span>
                    <img
                      src={PaymentMethods}
                      alt="paymentMethods"
                      className="hidden md:block"
                    />
                  </div>
                </div>
              </label>

              {/* expand */}
              {cardOpen && (
                <div className="mt-[20px] w-[300px] md:w-full flex justify-center">
                  <form className="flex flex-col gap-[10px]">
                    <div className="flex flex-col justify-center gap-[5px]">
                      <label className="Roboto font-[500]">Name on card</label>
                      <input
                        type="text"
                        placeholder="Name on card"
                        required
                        className="Poppins p-[10px] bg-transparent border-solid border-[1px] border-black outline-none"
                      />
                    </div>

                    <div className="flex flex-col justify-center gap-[5px]">
                      <label className="Roboto font-[500]">Card number</label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        maxLength={16}
                        required
                        className="Poppins p-[10px] bg-transparent border-solid border-[1px] border-black outline-none"
                      />
                    </div>

                    <div className="flex md:flex-row flex-col">
                      <div className="flex flex-col md:block">
                        <label className="Roboto font-[500]">Expiry date</label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          maxLength={4}
                          required
                          className="Poppins p-[10px] bg-transparent border-solid border-[1px] border-black outline-none"
                        />
                      </div>

                      <div className="flex flex-col md:block">
                        <label className="Roboto font-[500]">CV/CVV</label>
                        <input
                          type="text"
                          placeholder="CVC"
                          maxLength={3}
                          required
                          className="Poppins p-[10px] bg-transparent border-solid border-[1px] border-black outline-none"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              )}
            </div>

            {/* paypal */}
            <div className="md:w-[550px] px-[20px] md:px-0">
              <label
                className="flex items-center gap-[20px] md:p-[15px] p-[10px] cursor-pointer bg-gray-200 border-solid border-[1px] border-gray-300"
                htmlFor="paypal"
                onClick={() => setCardOpen(false)}
              >
                <input
                  type="radio"
                  name="payment"
                  id="paypal"
                  className="accent-black"
                />

                <div className="flex items-center gap-[5px]">
                  <img
                    src={PaypalIco}
                    alt="paypal"
                    className="w-[20px] h-[20px] object-cover "
                  />
                  <span className="Poppins">Paypal</span>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* bottom */}

        <div className="mt-[50px] px-[20px] md:px-0 ">
          <span className="Roboto text-[25px] font-[500]">Order details</span>
          <div className="mt-[20px] flex items-center gap-[20px]">
            {/* image */}
            <img
              src="https://s3.us-east-2.amazonaws.com/stg.uploads.slidenest/template_656/templateColor_689/previewImages/fundamentals-of-web-development-powerpoint-google-slides-keynote-presentation-template-1.jpeg"
              alt="orderImg"
              className="w-[200px] h-[100px] object-cover"
            />

            {/* course details */}
            <div className="flex md:items-center md:flex-row flex-col md:gap-[50px] gap-[20px]">
              {/* title */}
              <Link
                to={"/course/1"}
                className="Inter font-[500] cursor-pointer hover:underline"
              >
                Web Development Fundamentals
              </Link>

              {/* price */}
              <span className="Poppins">$19.99</span>
            </div>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="md:h-[100vh]  p-[20px] md:p-0 bg-gray-100 w-[100%] flex justify-center  ">
        {/* summery */}
        <div className="flex flex-col w-[400px] max-h-[500px] mt-[10%] gap-[20px] sticky top-[10%]">
          {/* title */}
          <span className="Roboto text-[25px] font-[500]">Summery</span>

          {/* total */}
          <div className="flex justify-between">
            <span className="Poppins text-[18px] font-[500]">Total:</span>
            <span className="Poppins text-[18px] font-[500]">$19.99</span>
          </div>

          {/* checkout button */}
          <div className="p-[20px] bg-[#6E46AE] flex items-center justify-center cursor-pointer hover:bg-[#5d3a94]">
            <span className="Poppins text-white">Checkout Now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
