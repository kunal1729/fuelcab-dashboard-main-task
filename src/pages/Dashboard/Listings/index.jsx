import Button from "../../../components/UIElements/Button/Button";
import New_RFQ from "./New_RFQ";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";

function Card({name, image, desc, qty, unit, price, loc, date}) {
  return (
    <div class="group grid gap-4 w-full bg-white grid-cols-12 rounded-lg p-4 text-gray-700 border transition hover:shadow-lg">
      <a
        href="#"
        class="col-span-2 text-left text-gray-600 hover:text-gray-700"
      >
        <img
          src= {image}
          alt="img"
          class="h-full w-full object-cover text-gray-700 rounded-lg"
        />
      </a>
      <div class="col-span-5 flex flex-col text-left">
        <a
          href="#"
          class="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl"
        >
          {name}
        </a>
        <p class="overflow-hidden pr-7 text-sm">
          {desc}
        </p>
      </div>
      <div class="grid grid-cols-2 col-span-5 flex-col text-sm font-medium text-gray-500"> 
        <div class="">
          Quantity
          <span class="ml-2 font-bold mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">
            {qty} {unit}
          </span>
        </div> 
        <div class="">
          Price
          <span class="ml-2 mr-3 font-bold rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">
            Rs{price}
          </span>
        </div>
        <div class="">
          Delivery Location
          <span class="ml-2 font-bold mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">
            {loc}
          </span>
        </div>
        <div class="">
          Delivery Date
          <span class="ml-2  mr-3 font-bold rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">
            {date}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Listings() {

  const [openPopup, setOpenPopup] = useState(false);
  const [details, setDetails] = useState([]);
  var [type, setType] = useState("Live");
  const [filteredRFQs, setFilteredRFQs] = useState([])
  const today = new Date().getTime();
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = () => 
  {
    setOpenPopup(true);
  }

  useEffect(() => {
    const t = details.filter((rfq) => {
      const obj = new Date(rfq.date);
      if (type === 'Live') {
        return (obj.getTime()) > (today)
      } 
      else if (type === 'Expired') {
        return (obj.getTime()) < (today);
      }
      else {
        return true;
      }
    })
    setFilteredRFQs([...t])
  }, [type, details, today])
  


  return (
    <div className="bg-gray-50">
      <nav class="flex flex-wrap items-center gap-4 bg-white py-2 px-3">
        <a
          onClick={() => setType("All")}
          href="#"
          class={`inline-flex whitespace-nowrap border-b-2 border-transparent py-2 px-3 text-sm   transition-all duration-200 ease-in-out   ${type === "All" ? "text-purple-600 border-b-purple-600 font-semibold" : "text-gray-600 hover:border-b-purple-600 hover:text-purple-600"}`}
        >
          All
        </a>

        <a
          onClick={() => setType("Live")}
          href="#"
          class={`inline-flex whitespace-nowrap border-b-2 border-transparent py-2 px-3 text-sm   transition-all duration-200 ease-in-out   ${type === "Live" ? "text-purple-600 border-b-purple-600 font-semibold" : "text-gray-600 hover:border-b-purple-600 hover:text-purple-600"}`}
        >
          Live
        </a>

        <a
          onClick={() => setType("Expired")}
          href="#"
          class={`inline-flex whitespace-nowrap border-b-2 border-transparent py-2 px-3 text-sm   transition-all duration-200 ease-in-out   ${type === "Expired" ? "text-purple-600 border-b-purple-600 font-semibold" : "text-gray-600 hover:border-b-purple-600 hover:text-purple-600"}`}
        >
          Expired
        </a>
        <Button onClick = {handleClick} size="md" className="ml-auto">
          Add Listing
        </Button>
        
      </nav>
      <div class="space-y-4 min-h-96 p-8">
        {filteredRFQs.length ?
        filteredRFQs.slice((currentPage - 1) * 5, currentPage * 5 ).map((rfq) => {
          return(
          <Card name = {rfq.name} image = {rfq.image} desc = {rfq.desc} qty = {rfq.quantity} unit = {rfq.unit} price = {rfq.price} min = {rfq.min} max = {rfq.max} loc = {rfq.location} date = {rfq.date} />
          )
        })
        : <h1>No Listings created.</h1>}
      </div>
      <div className="p-2">
        <Pagination currentPage = {currentPage} setCurrentPage = {setCurrentPage} totalPages = {filteredRFQs.length/5} />
      </div>      
      <New_RFQ  details = {details} setDetails = {setDetails} openPopup = {openPopup} setOpenPopup = {setOpenPopup} />
    </div>
  );
}