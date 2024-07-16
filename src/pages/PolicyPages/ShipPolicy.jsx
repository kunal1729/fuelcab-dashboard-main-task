import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ShipPolicy = () => {
  return (
    <>
      <Navbar />
      <section className="w-full bg-[#F7F8FA] pb-7">
        <div className="w-full text-center px-[32px] py-12 border border-y-neutral-300">
          <h1 className="text-[1.75rem] font-semibold leading-[36px] text-[#424242]">
            OUR SHIPPING POLICY
          </h1>
        </div>
        <div className=" mx-[10rem] my-7 bg-white border border-neutral-300">
          <div className="  py-14">
            <h3 className="text-center "> OUR SHIPPING POLICY</h3>
            <h4 className="text-center font-semibold pt-4">
              Last updated: 05<sup>th</sup> March 2024
            </h4>
          </div>
          <section className="flex justify-start items-start">
            <div className="px-16 pb-7">
              <div className="w-full flex flex-col items-start">
                <div className="my-2 w-full h-full flex">
                  <div className="flex flex-col items-start">
                    <h2 className=" mb-4  font-[700]">
                      For the purposes of this Disclaimer:
                    </h2>
                    <ul>
                      <li className="my-2">
                        1."OUS" refers to The Triple S fuelcab Business
                        Solutions LLP, a limited liability partnership firm
                        registered under the Limited Liability Partnership Act,
                        2008 having its registered office at Ground Floor 272,
                        Green Park Rampur Chungi, Rampur Urban Roorkee, Haridwar
                        Uttarakhand-247687.
                      </li>
                      <li className="my-2">
                        2."Goods" refers to the items offered for sale on the
                        Service.
                      </li>
                      <li className="my-2">
                        3."Orders" means a request by You to purchase Goods from
                        Us.
                      </li>
                      <li className="my-2">
                        4."Service" refers to the Website.
                      </li>
                      <li className="my-2">
                        5."Website" refers to Fuelcab, accessible from
                        https://www.fuelcab.com/
                      </li>
                      <li className="my-2">
                        6."You" means the individual accessing the Service, or
                        the company, or other legal entity on behalf of which
                        such individual is accessing or using the Service, as
                        applicable.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex  gap-16 my-4 items-center">
                  <div className=" w-full">
                    <h2 className=" mb-4  font-[700]">
                      Domestic Shipping Policy
                    </h2>
                    <div>
                      <p>
                        All Orders are processed within 2-3 business days.
                        Orders are not shipped or delivered on weekends or
                        holidays.
                      </p>
                      <p classname=" text-sm my-2">
                        If We are experiencing a high volume of orders,
                        shipments may be delayed by a few days. Please allow
                        additional days in transit for delivery. If there will
                        be a significant delay in shipment of Your Order, We
                        will contact You via email or telephone.
                      </p>
                      <p>
                        Shipping charges for Your Orders will be calculated and
                        displayed at checkout.
                      </p>
                    </div>
                    <div className="flex flex-col items-start w-full mt-4">
                      <p>
                        Overnight delivery is only available for Orders with
                        delivery addresses within India.
                      </p>
                      <p>Delivery delays can occasionally occur.</p>
                      <p>Shipment to P.O. boxes or APO/FPO addresses</p>
                      <p>
                        Fuelcab.com ships to addresses within the India, India
                        Territories, and APO/FPO/DPO addresses.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-16 items-center my-4">
                  <div className=" w-full md:w-2/3">
                    <div className="flex flex-col items-start w-full">
                      <h2 className="  font-[700] mb-4">
                        Shipment confirmation & Order tracking
                      </h2>
                      <p>
                        You will receive a Shipment Confirmation Email once Your
                        Order has shipped containing your tracking number(s).
                        The tracking number will be active within 24 hours.
                      </p>
                    </div>
                    <div className="flex flex-col items-start w-full mt-4">
                      <h2 className=" font-[700]">Customs, Duties and Taxes</h2>
                      <p classname=" text-sm my-2">
                        Fuelcab is not responsible for any customs and taxes
                        applied to Your Order. All fees imposed during or after
                        shipping are the responsibility of the customer
                        (tariffs, taxes)
                      </p>
                    </div>
                    <div className="flex flex-col  items-start w-full">
                      <h2 className=" font-[700] ">Damages</h2>
                      <p classname=" text-sm my-2">
                        Fuelcab.com is not liable for any products damaged or
                        lost during shipping. If You received Your Order
                        damaged, please contact the shipment carrier to file a
                        claim.
                      </p>
                    </div>
                  </div>
                </div>
                <p classname=" text-sm my-32 text-center">
                  Please save all packaging materials and damaged goods before
                  filing a claim.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ShipPolicy;
