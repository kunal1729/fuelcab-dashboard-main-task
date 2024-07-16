import React, { useState, useEffect, useRef, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProduct, getRelatedProducts } from "../../redux/api/product";
import { PRODUCT_UNIT } from "../../constants/product";
import StarRating from "../../components/StarRating";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProductList from "../../components/ProductList";
import Button from "../../components/UIElements/Button/Button";
import { Chip } from "@mui/material";
import { FireTruck } from "@mui/icons-material";
import { openOrderFormModal } from "../../redux/store/modalSlice";

export default function ProductDetail() {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewForm, setReviewForm] = useState({ note: "", rating: 0 });
  const [reviews, setReviews] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [company, setCompany] = useState(null);
  const [product, setProduct] = useState(null);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const productId = location.pathname.split("/")[2];
    async function fetchProduct() {
      const p = await getProduct(productId);
      setProduct(p);
    }
    fetchProduct();
  }, [location]);

  useEffect(() => {
    if (!product) return;
    getRelatedProducts(product.category).then((products) =>
      setRelatedProducts(products)
    );
  }, [product]);

  function handleOrder() {
    dispatch(openOrderFormModal());
  }

  const getDeliveryDays = () => {
    if (!product) return 0;
    const startDate = product?.createdAt.toDate();
    const relativeDate = product?.expectedDelivery.toDate();
    const differenceInTime = relativeDate.getTime() - startDate.getTime();
    return Math.round(differenceInTime / (1000 * 3600 * 24));
  };

  return (
    <>
      <Navbar />
      <div className="font-dmsans flex flex-col p-12 w-full">
        <div className="flex gap-12 justify-center items-center">
          <div className="w-[40%] h-[500px] rounded-xl">
            {product?.imagesURL?.map((img) => (
              <img
                src={img}
                alt="product image"
                className="rounded-xl w-full h-full"
              />
            ))}
          </div>
          <div>
            <h2 className="capitalize text-3xl">
              {`${product?.productId}`.replace("_", " ")}
            </h2>
            <h3 className="text-4xl mt-2">{`₹${product?.unitPrice.value} Per ${
              PRODUCT_UNIT[product?.unit]
            }`}</h3>
            <span className="flex gap-4 mt-2">
              <StarRating star={4} />
              <p className="text-gray-400">{`${reviews.length} Reviews`}</p>
            </span>
            <div class="border border-gray-200 border-dashed h-0 w-full my-4"></div>
            <p>{product?.qualityRemark}</p>

            <ul className="mt-4 border-t pt-4 !list-disc">
              <li className="flex gap-4">
                <p className="font-medium text-gray-900">Available Quanity:</p>
                <span className="capitalize text-gray-400">
                  {product?.quantity?.value + " " + PRODUCT_UNIT[product?.unit]}
                </span>
              </li>
              <li className="flex gap-4">
                <p className="font-medium text-gray-900">Category:</p>
                <span className="capitalize text-gray-400">
                  {product?.category}
                </span>
              </li>
              <li className="flex gap-4">
                <p className="font-medium text-gray-900">Pickup Location:</p>
                <span className="capitalize text-gray-400">
                  {product?.origin?.addressLine}
                </span>
              </li>
              <li className="flex gap-4">
                <p className="font-medium text-gray-900">
                  Expected Delivery Time:
                </p>
                <span className="capitalize text-gray-400">
                  {`${getDeliveryDays()} Days`}
                </span>
              </li>
            </ul>

            <p className="mt-4 border-t pt-4">
              Payment Terms 50% and the this afterwads.
            </p>
            <div className="mt-2 flex gap-2">
              <Chip label="Negotiable Price" variant="outlined" />
              <Chip label="GST Included" variant="outlined" />
              <Chip label="Delivery Not Applicable" variant="outlined" />
            </div>
            <Button className="mt-4 w-full" onClick={handleOrder}>
              Create Order
              <span className="ml-2 text-sm">{`(${product?.bookingCount} Bookings)`}</span>
            </Button>
          </div>
        </div>

        <div className="mt-8 p-8 border rounded-md">
          <h2 className="text-2xl">Company Details</h2>
          <div class="border-t w-full my-4"></div>
          <div className="mt-2 w-full flex gap-12">
            <div className="w-[70%]">
              <h3 className="text-xl">Info</h3>
              <span className="text-md text-gray-400 mt-4">
                asdh aishd iashd iahsd iahsd aishd asi Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Repudiandae, velit harum?
                Explicabo debitis rem laudantium quae! Veritatis est quis
                numquam ipsum cum accusamus veniam nisi error distinctio,
                cumque, et obcaecati. Quae reiciendis voluptate consequatur
                magnam quis culpa libero ipsum molestias dolorum mollitia
                repudiandae illum, deserunt repellendus voluptatem sint quas
                veritatis perspiciatis incidunt amet.
              </span>
              <h3 className="text-xl mt-6">History</h3>
              <span className="text-gray-400 text-md mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
                quos! Amet deleniti cupiditate, illo aliquid dicta praesentium
                eveniet fugiat a voluptate error omnis corporis accusantium sed
                minima officiis velit expedita? Placeat doloribus accusamus,
                voluptate cumque molestiae id praesentium nobis ullam porro ad
                quasi quibusdam suscipit delectus facilis tempore repellendus
                sequi amet debitis, magni voluptatibus sed eveniet error
                architecto soluta. Nihil. Beatae et autem ipsum explicabo
              </span>
            </div>
            <img
              src="https://picsum.photos/200"
              width={300}
              height={300}
              className="rounded-xl"
            />
          </div>
          <div className="flex gap-8 mt-8">
            <div className="flex items-center gap-4">
              <span className="bg-[#1D523B] p-6 rounded-[50%]">
                <FireTruck fontSize="large" sx={{ color: "white" }} />
              </span>
              <span className="flex flex-col">
                <h4 className="font-medium text-2xl text-gray-900">
                  Established
                </h4>
                <p className="text-gray-600">2334</p>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="bg-[#1D523B] p-6 rounded-[50%]">
                <FireTruck fontSize="large" sx={{ color: "white" }} />
              </span>
              <span className="flex flex-col">
                <h4 className="font-medium text-2xl text-gray-900">
                  Established
                </h4>
                <p className="text-gray-600">2334</p>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 p-8 border rounded-md">
          <h2 className="text-2xl">Rating & Review</h2>
          <div class="gap-2 flex items-center">
            <StarRating star={3} />
            <p class="mt-1 text-sm font-medium text-gray-500">4.95 out of 5</p>
          </div>
          <p class="mt-2 text-sm font-medium text-gray-500">
            1,745 global ratings
          </p>
          <div class="border-t w-full my-4"></div>

          <article>
            <div class="font-medium">
              <p>Jese Leos </p>
            </div>
            <StarRating star={3} />
            <footer class="mt-2 mb-5 text-sm text-gray-500 dark:text-gray-400">
              <p>
                Reviewed on
                <time datetime="2017-03-03 19:00"> March 3, 2017</time>
              </p>
            </footer>
            <p class="mb-2 text-gray-500">
              This is my third Invicta Pro Diver. They are just fantastic value
              for money. This one arrived yesterday and the first thing I did
              was set the time, popped on an identical strap from another
              Invicta and went in the shower with it to test the
              waterproofing.... No problems.
            </p>
            <p class="mb-3 text-gray-500">
              It is obviously not the same build quality as those very expensive
              watches. But that is like comparing a Citroën to a Ferrari. This
              watch was well under £100! An absolute bargain.
            </p>
          </article>

          <div className="mt-4">
            {!showReviewForm && (
              <Button onClick={() => setShowReviewForm(true)}>
                Write a review
              </Button>
            )}
            {showReviewForm && (
              <form className="mt-8">
                <h3 className="text-2xl">Give the rating.</h3>
                <StarRating star={3} />
                <div className="flex flex-col gap-2 mt-2">
                  <label className="text-sm font-[500]" htmlFor="review-note">
                    Note
                  </label>
                  <textarea
                    minRows={3}
                    id="review-note"
                    name="review-note"
                    value={reviewForm.note}
                    placeholder="I like it."
                    required
                    onChange={(e) =>
                      setReviewForm((p) => ({
                        ...p,
                        note: e.target.value,
                      }))
                    }
                    className="mt-1 p-4 min-h-[70%] text-black text-sm border rounded-md outline-none"
                  />
                </div>
                <Button disabled={!reviewForm.note} className="mt-2">
                  Add Review
                </Button>
              </form>
            )}
          </div>
        </div>

        {!!relatedProducts.length && (
          <ProductList
            title="Related Products"
            subtitle="Explore"
            products={relatedProducts}
            showPrice
          />
        )}
      </div>
      <Footer />
    </>
  );
}
