import React, { useEffect, useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Fuse from "fuse.js";

import { SUB_CATEGORIES } from "../../constants/product";
import { useNavigate } from "react-router-dom";

export default function ProductSearchBar({ removeStyles }) {
  const [searchAutocomplete, setSearchAutocomplete] = useState([]);
  const [product, setProduct] = useState();
  const navigate = useNavigate();
  const fuse = useRef();

  const handleNavigation = (subCategory) => {
    let categoryIdx = -1,
      subCategoryIdx = -1;
    Object.keys(SUB_CATEGORIES).map((c, cIdx) => {
      SUB_CATEGORIES[c].map(({ title }, idx) => {
        if (title == subCategory.title) {
          subCategoryIdx = idx;
          categoryIdx = cIdx;
        }
      });
    });

    navigate(`/products?category=${categoryIdx}&subCategory=${subCategoryIdx}`);
  };

  useEffect(() => {
    const { gas, liquid, solid } = SUB_CATEGORIES;
    fuse.current = new Fuse([...gas, ...liquid, ...solid], {
      keys: ["title", "desc"],
    });
  }, []);

  return (
    <div className={`w-full flex items-center relative`}>
      <SearchIcon style={{ color: "gray" }} fontSize="small" />
      <input
        type="text"
        required
        value={product}
        onChange={(e) => {
          setProduct(e.target.value);
          if (fuse.current) {
            const res = fuse.current.search(e.target.value);
            setSearchAutocomplete(res.slice(0, 10));
          }
        }}
        className="text-black h-full text-sm w-full px-2 outline-none"
        placeholder="Search For a Product..."
      />
      {!!searchAutocomplete.length && (
        <div className="absolute z-10 bg-white border rounded-md left-0 top-10 px-2 py-6 w-full">
          {searchAutocomplete.map(({ item }, index) => (
            <button
              key={index}
              onClick={() => {
                setProduct(item.title);
                handleNavigation(item);
                setSearchAutocomplete([]);
              }}
              value={item}
              className="text-sm leading-[28px] h-[40px] p-2 text-[#111B29] rounded-md flex items-center justify-start hover:bg-[#f6f6f6] w-full"
            >
              {item.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
