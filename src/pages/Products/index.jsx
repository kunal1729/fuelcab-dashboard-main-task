import React, { useState, useEffect, useMemo } from "react";
import { Divider, Pagination } from "@mui/material";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Hero from "./Hero";
import Product from "./Product";
import RightPart from "./RightPart";
import Filters from "./Filters";
import { useLocation } from "react-router-dom";
import { getFilteredProducts } from "../../redux/api/product";

const PRODUCTPERPAGE = 10;
const initialFilters = {
  states: [],
  ratings: [],
  categories: [],
  productsId: [],
};

export default function Products() {
  const [filters, setFilters] = useState(initialFilters);
  const [productList, setProductList] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 10]);
  const [loading, setLoading] = useState(false);
  const routeData = useLocation().state;

  useEffect(() => {
    setLoading(true);
    getFilteredProducts(filters).then((products) => {
      setProductList(products);
      setLoading(false);
    });
  }, [filters]);

  useEffect(() => {
    const { categories, productsId, states } = routeData;
    setFilters((p) => ({
      ...p,
      categories: categories || [],
      productsId: productsId || [],
      states: states || [],
    }));
  }, [routeData]);

  // pagination & price
  const currentProduct = useMemo(() => {
    const indexofLastProduct = currentPage * PRODUCTPERPAGE;
    const indexofFirstProduct = indexofLastProduct - PRODUCTPERPAGE;
    return [...productList]
      .filter((p) => p.unitPrice.value >= price[0] && p.unitPrice.value <= price[1])
      .slice(indexofFirstProduct, indexofLastProduct);
  }, [currentPage, productList, price]);

  // max value for filter
  const maxProductPrice = useMemo(() => {
    let maxPrice = -1;
    productList.forEach((p) => {
      if (p.unitPrice.value > maxPrice) maxPrice = p.unitPrice.value;
    });
    setPrice([0, maxPrice]);
    return maxPrice;
  }, [productList]);

  const handleFilter = (name, value) => {
    let newValues = [];
    if (filters[name]?.includes(value)) {
      newValues = filters[name]?.filter((val) => val !== value);
    } else {
      newValues = [...filters[name], value];
    }
    setFilters((p) => ({ ...p, [name]: newValues }));
  };

  return (
    <div className="font-dmsans">
      <Navbar />
      <Hero />
      <div className="flex justify-between items-center px-14">
        <h2 className="text-4xl">Product Listings</h2>
        {!!productList.length && currentProduct.length > PRODUCTPERPAGE && (
          <div>
            <Pagination
              color="standard"
              defaultPage={1}
              count={Math.ceil(productList.length / PRODUCTPERPAGE)}
              size="large"
              page={currentPage}
              onChange={(value) => setcurrentPage(value)}
            />
          </div>
        )}
      </div>
      <div className="flex justify-between px-14 mt-8">
        <Filters
          filters={filters}
          price={price}
          setPrice={setPrice}
          handleFilter={handleFilter}
          maxProductPrice={maxProductPrice}
        />
        <div className="border px-8 py-6 w-[50%] rounded-md h-fit">
          {currentProduct.map((product, index) => {
            return (
              <React.Fragment key={product.id}>
                <Product product={product} />
                {index !== productList.length - 1 && <Divider sx={{ my: 4 }} />}
              </React.Fragment>
            );
          })}
          {loading && (
            <p className="text-gray-500 text-[1rem] text-center">Loading...</p>
          )}
          {!currentProduct.length && !loading && (
            <p className="text-gray-500 text-[1rem] text-center">
              No Product Found
            </p>
          )}
        </div>
        <RightPart />
      </div>
      <Footer />
    </div>
  );
}
