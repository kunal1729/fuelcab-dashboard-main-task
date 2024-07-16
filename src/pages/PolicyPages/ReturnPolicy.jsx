import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ReturnPolicy = () => {
  return (
    <>
      <Navbar />
      <section>
        <div className="w-full text-center px-[32px] py-12 border border-y-neutral-300">
          <h1 className="text-[1.75rem] font-semibold leading-[36px] text-[#424242]">
            Return and Refund Policy
          </h1>
        </div>
      </section>
      <div className=" mx-[10rem] my-7 bg-white border border-neutral-300">
        <div className=" py-14 ">
          <h3 className="text-center">Return and Refund Policy</h3>
          <h4 className="text-center font-semibold pt-4">
            Last updated: 05<sup>th</sup> March 2024
          </h4>
        </div>
        <section className="flex justify-start items-start">
          <div className="px-16">
            <div className="w-full flex flex-col items-start">
              <div className="flex  gap-16 items-center">
                <div className=" w-full ">
                  <p className=" my-2">
                    The words of which the initial letter is capitalized have
                    meanings defined under the following conditions. The
                    following definitions shall have the same meaning regardless
                    of whether they appear in singular or in plural.
                  </p>
                </div>
              </div>

              <div className="flex   gap-16 items-center">
                <div className="flex flex-col  items-start  ">
                  <ul className="flex flex-col items-start w-full mt-4">
                    <h2 className=" font-[600] my-2">
                      For the purposes of this Return and Refund Policy:
                    </h2>
                    <li>
                      <p className=" my-2">
                        1."Company" refers to The Triple S fuelcab Business
                        Solutions LLP, a limited liability partnership firm
                        registered under the Limited Liability Partnership Act,
                        2008 having its registered office at Ground Floor 272,
                        Green Park Rampur Chungi, Rampur Urban Roorkee, Haridwar
                        Uttarakhand-247687.
                      </p>
                    </li>
                    <li>
                      <p className=" my-2">
                        2."Goods" refers to the items offered for sale on the
                        Service.
                      </p>
                    </li>
                    <li>
                      <p className=" my-2">
                        3."Orders" means a request by You to purchase Goods from
                        Us.
                      </p>
                    </li>
                    <li>
                      <p className=" my-2">
                        4."Service" refers to the Website.
                      </p>
                    </li>
                    <li>
                      <p className=" my-2">
                        5."Website" refers to Fuelcab.com, accessible from
                        <a href="https://www.fuelcab.com/">Fuelcab</a>
                      </p>
                    </li>
                    <li>
                      <p className=" my-2">
                        6."You" means the individual accessing or using the
                        Service, or the company, or other legal entity on behalf
                        of which such individual is accessing or using the
                        Service, as applicable.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex   gap-16 items-center">
                <div className=" w-full ">
                  <h2 className=" my-4  font-[700]">
                    Your Order Cancellation Rights
                  </h2>
                  <p className=" my-2">
                    You are entitled to cancel Your Order within 14 days without
                    giving any reason for doing so.
                  </p>
                  <p className=" my-2">
                    The deadline for cancelling an Order is 14 days from the
                    date on which You received the Goods or on which a third
                    party you have appointed, who is not the carrier, takes
                    possession of the product delivered.
                  </p>
                </div>
              </div>

              <div className="flex   gap-16 items-center">
                <div className=" w-full  ">
                  <p className=" my-2">
                    In order to exercise Your right of cancellation, You must
                    inform Us of your decision by means of a clear statement.
                  </p>
                  <ul className="flex flex-col items-start w-full mt-4">
                    <h2 className=" font-[700]">
                      You can inform us of your decision by:
                    </h2>
                    <li className=" my-2">
                      1.By visiting this page on our website:
                      <a href="https://www.fuelcab.com/">Fuelcab</a>
                    </li>
                    <li className="">
                      2.By sending us an email: info@fuelcab.com{" "}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex   gap-16 items-center">
                <div className=" w-full ">
                  <h2 className=" my-4  font-[700]">Conditions for Returns</h2>
                  <p className=" my-2">
                    We will reimburse You no later than 14 days from the day on
                    which We receive the returned Goods. We will use the same
                    means of payment as You used for the Order, and You will not
                    incur any fees for such reimbursement.
                  </p>
                  <p className=" my-2">
                    In order for the Goods to be eligible for a return, please
                    make sure that:
                  </p>
                  <ul className="flex flex-col items-start w-full">
                    <li className=" my-2">
                      1.The Goods were purchased in the last 14 days
                    </li>
                    <li className="">
                      2.The Goods are in the original packaging
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex   gap-16 items-center">
                <div className=" w-full my-4 ">
                  <h2 className="font-[700] my-2">
                    The following Goods cannot be returned:
                  </h2>
                  <ul>
                    <li className="my-2">
                      1.The supply of Goods made to Your specifications or
                      clearly personalized.
                    </li>
                    <li className="my-2">
                      2.The supply of Goods which according to their nature are
                      not suitable to be returned, deteriorate rapidly or where
                      the date of expiry is over.
                    </li>
                    <li className="my-2">
                      3.The supply of Goods which are not suitable for return
                      due to health protection or hygiene reasons and were
                      unsealed after delivery.
                    </li>
                    <li className="my-2">
                      4.The supply of Goods which are, after delivery, according
                      to their nature, inseparably mixed with other items.
                    </li>
                  </ul>
                  <p className=" my-2">
                    We reserve the right to refuse returns of any merchandise
                    that does not meet the above return conditions in our sole
                    discretion.
                  </p>
                </div>
              </div>

              <div className="flex   gap-16 items-center">
                <div className=" w-full ">
                  <h2 className=" my-4  font-[700]">Returning Goods</h2>
                  <p className=" my-2">
                    We cannot be held responsible for Goods damaged or lost in
                    return shipment. Therefore, We recommend an insured and
                    trackable mail service. We are unable to issue a refund
                    without actual receipt of the Goods or proof of received
                    return delivery.
                  </p>
                </div>
              </div>
              <div className="flex gap-16 mb-6 items-center">
                <div className=" w-full  ">
                  <h2 className=" my-4  font-[700]">Gifts</h2>
                  <p className=" my-2">
                    If the Goods were marked as a gift when purchased and then
                    shipped directly to you, You'll receive a gift credit for
                    the value of your return. Once the returned product is
                    received, a gift certificate will be mailed to You.
                  </p>
                  <p className=" my-2">
                    If the Goods weren't marked as a gift when purchased, or the
                    gift giver had the Order shipped to themselves to give it to
                    You later, We will send the refund to the gift giver.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default ReturnPolicy;
