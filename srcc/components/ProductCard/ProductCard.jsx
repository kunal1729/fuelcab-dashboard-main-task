import React, { useState, useEffect ,useMemo} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/store/cartSlice";
import { ref, getStorage, getDownloadURL } from "firebase/storage";
import { openQuotationModal } from "../../redux/store/modalSlice";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import StarRating from "../StarRating/StarRating"
import { Chip } from "@mui/material";
import { VerifiedUser,LibraryBooks } from "@mui/icons-material";

const EMPTY_IMAGE_URL = "https://firebasestorage.googleapis.com/v0/b/fuelcab.appspot.com/o/empty-product.png?alt=media&token=60656eaf-80c4-472b-9636-ca5925b02cfb"

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState("");
  const storage = getStorage();

  const getImageUrl = async (path) => {
    const image = await getDownloadURL(ref(storage, path));
    setImageUrl(image);
  };

  useEffect(() => {
    async function getImage() {
      await getImageUrl(product.imagesUrl[0]);
    }
    product.imagesUrl && getImage();
  }, [imageUrl]);

  function handleDetail() {
    navigate(`/product/${product.id}`, { state: product });
  }

  const fullAddress = useMemo(()=>{
    let addr = `${product.address?.addressLine}, ${product.address?.state}`
    if(addr.length > 20) addr = addr.slice(0,20) + "...";
    return addr;
  },[product.address])

  return (
    <div className="flex flex-col md:flex-row border items-center bg-white border-[#d1d1d1]">
      <div className="md:w-[35%] w-full h-full cursor-pointer" onClick={handleDetail}>
        <img
          className="w-full h-full m-0 bg-[#F9F9F9] object-cover"
          src={imageUrl || EMPTY_IMAGE_URL}
          style={{ objectFit: "contain" }}
          alt={`${product.name}-img`}
        />
      </div>

      <div className="flex flex-col md:w-[40%] w-full p-6">
        <p onClick={handleDetail} className="hover:underline cursor-pointer text-3xl font-semibold leading-[27px] items-center text-[#151515]">
          {product.name}
        </p>
        <p className="mb-2 font-[500] text-lg text-[#151515]">
          {`${product.price} / ${product.quantity?.unit}`}
        </p>
        <StarRating star={product.rating} />
        <p className="text-xs text-gray-600 mt-1">{`(${product.reviewsNumber} reviews)`} </p>
        <div className="flex flex-row w-full items-start gap-4 mt-4">
          <div className="flex flex-col gap-2">
            <div className="font-semibold text-sm text-[#373B29] leading-5">
              Location
            </div>
            <p className="font-semibold text-sm text-[#373B29] leading-5">
              Speciality
            </p>
            <p className="font-semibold text-sm text-[#373B29] leading-5">
              Form
            </p>
            <div className="font-semibold text-sm text-[#373B29] leading-5">
              Shipping
            </div>
            <div className="font-semibold text-sm text-[#373B29] leading-5">
              Min Order
            </div>
          </div>
          <div className="flex flex-col gap-[8px] ">
            <div className="font-[300] text-sm text-[#373B29] leading-5">
              {fullAddress}
            </div>
            <div className="font-[300] text-sm text-[#373B29] leading-5">
              {product.speciality}
            </div>
            <div className="font-[300] text-sm text-[#373B29] leading-5">
              {product.quantity?.unit}
            </div>
            <div className="font-[300] text-sm text-[#373B29] leading-5">
              Free
            </div>
            <div className="font-[300] text-sm text-[#373B29] leading-5">
              <span className="text-[#373B29] font-semibold">
                {product.inStock ? product.quantity?.value : "Not in Stock"}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-[20%] w-full px-8 md:px-0 pb-6 md:pb-0">
        <div className="">
          <p className="font-[500] text-xl">{product.sellerName}</p>
          <Chip size="small" sx={{my:1}} icon={<VerifiedUser color="inherit" style={{color:"#1D523B"}} fontSize="small"/>} label="Verified Seller" />
          {product?.brochureURL && <Chip size="small" style={{cursor:"pointer"}} icon={<LibraryBooks  fontSize="small"/>} label="Bronchure"/>}
        </div>
        <div className="mt-4">
          <button
            onClick={handleDetail}
            className={`bg-[#1D523B] w-full font-semibold text-sm flex justify-center cursor-pointer items-center text-white px-4 py-3 `}
          >
            {product.sellerId === user?.id ? "Edit" : "Details"}
            <ChevronRightIcon />
          </button>
          {product.sellerId !== user?.id ? <button
            onClick={() => dispatch(openQuotationModal(product))}
            className={`bg-[#F5F5F5] mt-2 w-full justify-center flex px-4 py-3 items-center ${product.sellerId === user?.id
              ? "cursor-not-allowed"
              : "cursor-pointer"
              } `}
          >
            <span
              className={`font-semibold text-sm leading-[22.5px] text-[#151515] order-1`}
            >
              Book
            </span>
          </button> : (
            <button
              onClick={() => { }}
              className={`bg-[#F5F5F5] mt-2 w-full justify-center flex px-4 py-3 items-center`}
            >
              <span
                className={`font-semibold text-sm leading-[22.5px] text-[#151515] order-1`}
              >
                Delete
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
