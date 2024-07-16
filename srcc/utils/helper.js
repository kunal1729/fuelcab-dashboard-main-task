import { SUB_CATEGORIES } from "../constants/product";

export function getCategory(index) {
  const categories = Object.keys(SUB_CATEGORIES);
  return categories[index];
}

export function getCategoryFromPID(pid) {
  const categories = Object.keys(SUB_CATEGORIES);
  let category = "solid";
  categories.map((k) => {
    if (SUB_CATEGORIES[k].filter((p) => p.id === pid).length > 0) {
      category = k;
    }
  });
  return category;
}

export function getProductByID(pid) {
  const categories = Object.keys(SUB_CATEGORIES);
  let product = {};
  categories.map((k) => {
    SUB_CATEGORIES[k].map((p) =>{
      if(p.id === pid) product = p;
    })
  });
  console.log(product)
  return product;
}


export function getSubcategory(categoryIndex, subCategoryIndex) {
  const categories = Object.values(SUB_CATEGORIES);
  return categories[categoryIndex][subCategoryIndex];
}

export function getUserFormPercentage(userData) {
  const OPTIONAL_KEYS = [
    "brochureURL",
    "profileURL",
    "companyDesc",
    "gst",
    "address",
  ];
  let completedFields = 0,
    totalFields = 0;
  Object.entries(userData).map(([key, value]) => {
    if (!OPTIONAL_KEYS.includes(key) && !!value) {
      completedFields += 1;
      totalFields += 1;
    }
    if (key === "gst" && userData?.userType === 1) {
      if (!!value) completedFields += 1;
      totalFields += 1;
    }
  });
  return (completedFields / totalFields) * 100;
}
