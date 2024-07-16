import React, { useState } from "react";
import { State } from "country-state-city";
import StarRating from "../../components/StarRating";
import Button from "../../components/UIElements/Button/Button";
import { SUB_CATEGORIES } from "../../constants/product";
import { Slider } from "@mui/material";
import CheckBox from "../../components/UIElements/CheckBox/CheckBox";

const RATINGS = [1, 2, 3, 4, 5];

export default function Filters({
  filters,
  handleFilter,
  maxProductPrice,
  setPrice,
  price,
}) {
  const [showMoreState, setShowMoreState] = useState(false);
  const [showMoreSC, setShowMoreSC] = useState(false);

  const products = filters.categories.reduce(
    (sc, c) => [...sc, ...SUB_CATEGORIES[c]],
    []
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 border w-[260px] text-[12px] p-5 rounded-md">
        <p className="font-semibold text-[18px] text-[#151515] leading-[27px]">
          Location
        </p>
        <div className="mt-2 flex flex-col">
          {State.getStatesOfCountry("IN")
            .slice(0, showMoreState ? State.getStatesOfCountry("IN").length : 8)
            .map((state, index) => (
              <CheckBox
                type="checkbox"
                size="small"
                label={`${state.name}`.slice(0, 20)}
                checked={filters?.states.includes(state.isoCode)}
                onChange={() => handleFilter("states", state.isoCode)}
              />
            ))}
        </div>
        <Button
          mode="text"
          onClick={() => setShowMoreState(!showMoreState)}
          size="sm"
        >
          Show {showMoreState ? "Less" : "More"}
        </Button>
      </div>
      <div className="flex flex-col border w-[260px] text-[12px] px-4 py-5 rounded-md gap-4">
        <p className="font-poppins font-semibold text-[18px] text-[#151515] leading-[27px]">
          Price Range
        </p>
        <div className="flex flex-col gap-[12px]">
          <div className="flex items-center gap-[8px]">
            <span>Price Range:</span>
            <span>
              {price[0]} - {price[1]}
            </span>
          </div>
          <Slider
            value={price}
            onChange={(_, val) => setPrice(val)}
            style={{ color: "#1D523B" }}
            valueLabelDisplay="auto"
            min={0}
            max={maxProductPrice}
            step={1}
          />
        </div>
      </div>
      <div className="flex flex-col border w-[260px] text-[12px] px-4 py-5 rounded-md gap-4">
        <p className="font-poppins font-semibold text-[18px] text-[#151515] leading-[27px]">
          Rating
        </p>
        <div className="flex flex-col">
          {RATINGS.map((item, index) => (
            <div key={index} className="flex items-center">
              <CheckBox
                checked={filters?.ratings.includes(index + 1)}
                label={""}
                size="small"
                type="checkbox"
                onChange={() => handleFilter("ratings", index + 1)}
              />
              <div className="flex gap-[2px]">
                <StarRating star={item} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 border w-[260px] text-[12px] p-5 rounded-md">
        <p className="font-semibold text-[18px] text-[#151515] leading-[27px]">
          Category
        </p>
        <div className="mt-2 flex flex-col">
          {Object.keys(SUB_CATEGORIES).map((c, index) => (
            <CheckBox
              type="checkbox"
              size="small"
              label={`${c}`.slice(0, 20)}
              checked={filters?.categories.includes(c)}
              onChange={() => handleFilter("categories", c)}
            />
          ))}
        </div>
      </div>
      {!!products.length && (
        <div className="flex flex-col gap-4 border w-[260px] text-[12px] p-5 rounded-md">
          <p className="font-semibold text-[18px] text-[#151515] leading-[27px]">
            Product
          </p>
          <div className="mt-2 flex flex-col">
            {products
              .slice(0, showMoreSC ? products.length : 8)
              .map((sc, index) => (
                <CheckBox
                  type="checkbox"
                  size="small"
                  label={`${sc.title}`.slice(0, 20)}
                  checked={filters?.productsId.includes(sc.id)}
                  onChange={() => handleFilter("productsId", sc.id)}
                />
              ))}
          </div>
          <Button
            mode="text"
            onClick={() => setShowMoreSC(!showMoreSC)}
            size="sm"
          >
            Show {showMoreSC ? "Less" : "More"}
          </Button>
        </div>
      )}
    </div>
  );
}
