import {
  doc,
  setDoc,
  getDoc,
  where,
  query,
  collection,
  addDoc,
  getDocs,
  Timestamp,
  serverTimestamp,
  updateDoc,
  or,
  and,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
// import { ref, getStorage, uploadBytes } from "firebase/storage";
import * as geofire from "geofire-common";
import { app, db } from "../../firebase";

export async function getProductReviews(productId) {
  try {
    const q = query(collection(db, "products", productId, "reviews"));
    const querySnapshot = await getDocs(q);
    const reviews = [];
    querySnapshot.forEach((doc) => {
      if (doc.exists()) reviews.push({ id: doc.id, ...doc.data() });
    });
    return reviews;
  } catch (err) {
    console.log("chat", err);
  }
}

export async function createProductReview(productId, review) {
  try {
    const data = {
      ...review,
      createdAt: Timestamp.fromDate(new Date()),
    };
    await addDoc(collection(db, "products", productId, "reviews"), data);
    return data;
  } catch (err) {
    console.log("product", err);
  }
}

export const postProduct = async (productData) => {
  try {
    const storage = getStorage(app);
    const id = uuidv4();
    const imagePromises = productData.images.map(async (file, index) => {
      const storageRef = ref(storage, `products/${id}/${index}`);
      return uploadBytes(storageRef, file);
    });
    const imagesRef = await Promise.all(imagePromises);
    delete productData.images;
    const { latitude, longitude } = productData.origin.coords;
    await setDoc(doc(db, "products", id), {
      ...productData,
      averageRating: 0,
      reviewsCount: 0,
      bookingsCount: 0,
      geoHash: geofire.geohashForLocation([latitude, longitude]),
      createdAt: Timestamp.fromDate(new Date()),
      imagesURL: imagesRef.map(({ metadata }) => `${metadata.fullPath}`),
    });
  } catch (err) {
    console.log(err);
  }
};

// products ---------------------

export const getProducts = async (category, subCategory) => {
  try {
    const storage = getStorage(app);
    let products = [];
    const q = query(
      collection(db, "products"),
      where("category", "==", category),
      where("subCategory", "==", subCategory)
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      if (doc.id) products.push({ ...doc.data(), id: doc.id });
    });
    const productsImgPromise = products.map(async (doc) => {
      const listRef = ref(storage, `products/${doc.id}`);
      return listAll(listRef);
    });
    let productsImgRes = await Promise.all(productsImgPromise);
    productsImgRes = productsImgRes.map(({ items }) =>
      Promise.all(items.map((ref) => getDownloadURL(ref)))
    );
    productsImgRes = await Promise.all(productsImgRes);
    products = products.map((product, index) => {
      return { ...product, imagesRef: productsImgRes[index] };
    });
    return products;
  } catch (err) {
    console.log(err);
  }
};

export const getRelatedProducts = async (category) => {
  try {
    let products = [];
    const q = query(
      collection(db, "products"),
      where("category", "==", category)
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      if (doc.id) products.push({ ...doc.data(), id: doc.id });
    });
    return products;
  } catch (err) {
    console.log(err);
  }
};

export const getProduct = async (productId) => {
  try {
    const docSnap = await getDoc(doc(db, "products", productId));
    if (!docSnap.exists()) {
      return;
    }
    return { id: docSnap.id, ...docSnap.data() };
  } catch (err) {
    console.log(err);
  }
};

// get products using filters
export const getFilteredProducts = async (filters) => {
  let sQueries = undefined;
  let cQueries = undefined;
  let scQueries = undefined;
  let rQueries = undefined;
  let allQueries = [];

  if (filters?.states.length > 0) {
    sQueries = or(
      ...filters?.states.map((c) => {
        return where("address.state", "==", c);
      })
    );
    allQueries.push(sQueries);
  }

  if (filters?.ratings.length > 0) {
    rQueries = or(
      ...filters?.ratings.map((r) => {
        return where("rating", "==", r);
      })
    );
    allQueries.push(rQueries);
  }

  if (filters?.categories.length > 0) {
    cQueries = or(
      ...filters?.categories.map((c) => {
        return where("category", "==", c);
      })
    );
    allQueries.push(cQueries);
  }

  if (filters?.productsId.length > 0) {
    scQueries = or(
      ...filters?.productsId.map((c) => {
        return where("productId", "==", c);
      })
    );
    allQueries.push(scQueries);
  }

  if (allQueries.length > 1) {
    allQueries = [and(...allQueries)];
  }

  const productQuery = query(collection(db, "products"), ...allQueries);

  try {
    const { docs } = await getDocs(productQuery);
    const products = docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    return products;
  } catch (err) {
    console.log(err, "products");
  }
};
