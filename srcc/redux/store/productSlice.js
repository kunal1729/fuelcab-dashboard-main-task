import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  where,
  getDocs,
  collection,
  query,
  orderBy,
  limit,
  startAt,
  endAt,
} from "firebase/firestore";
import * as geofire from "geofire-common";
import { db } from "../../firebase";

const initialState = {
  userProducts: [],
  productsByFC: [],
  newProducts: [],
  nearByProducts: [],
  trendingProducts: [],
  solidProducts: [],
  liquidProducts: [],
  gasProducts: [],
};

export const fetchUserProducts = createAsyncThunk(
  "products/fetchUserProducts",
  async (arg, { getState }) => {
    const user = getState().auth.user;
    const q = query(
      collection(db, "products"),
      where("sellerId", "==", user.id)
    );
    const querySnapshot = await getDocs(q);
    const products = [];
    querySnapshot.forEach((doc) => {
      if (doc.id) products.push({ ...doc.data(), id: doc.id });
    });
    console.log(products)
    return products;
  }
);

export const fetchSolidProducts = createAsyncThunk(
  "products/fetchSolidProducts",
  async () => {
    const q = query(
      collection(db, "products"),
      where("category", "==", "solid")
    );
    const querySnapshot = await getDocs(q);
    const products = [];
    querySnapshot.forEach((doc) => {
      if (doc.id) products.push({ ...doc.data(), id: doc.id });
    });
    return products;
  }
);

export const fetchLiquidProducts = createAsyncThunk(
  "products/fetchLiquidProducts",
  async () => {
    const q = query(
      collection(db, "products"),
      where("category", "==", "liquid")
    );
    const querySnapshot = await getDocs(q);
    const products = [];
    querySnapshot.forEach((doc) => {
      if (doc.id) products.push({ ...doc.data(), id: doc.id });
    });
    return products;
  }
);

export const fetchGasProducts = createAsyncThunk(
  "products/fetchGasProducts",
  async () => {
    const q = query(collection(db, "products"), where("category", "==", "gas"));
    const querySnapshot = await getDocs(q);
    const products = [];
    querySnapshot.forEach((doc) => {
      if (doc.id) products.push({ ...doc.data(), id: doc.id });
    });
    return products;
  }
);

export const fetchTrendingProducts = createAsyncThunk(
  "products/fetchTrendingProducts",
  async () => {
    const q = query(
      collection(db, "products"),
      orderBy("rating", "desc"),
      limit(6)
    );
    const querySnapshot = await getDocs(q);
    const products = [];
    querySnapshot.forEach((doc) => {
      if (doc.id) products.push({ ...doc.data(), id: doc.id });
    });
    return products;
  }
);

export const fetchProductsByFC = createAsyncThunk(
  "products/fetchProductsByFC",
  async () => {
    const q = query(collection(db, "products"), where("byAdmin", "==", true));
    const querySnapshot = await getDocs(q);
    const products = [];
    querySnapshot.forEach((doc) => {
      if (doc.id) products.push({ ...doc.data(), id: doc.id });
    });
    return products;
  }
);

export const fetchNewProducts = createAsyncThunk(
  "products/fetchNewProducts",
  async () => {
    const q = query(
      collection(db, "products"),
      orderBy("createdAt", "desc"),
      limit(6)
    );
    const querySnapshot = await getDocs(q);
    const products = [];
    querySnapshot.forEach((doc) => {
      if (doc.id) products.push({ ...doc.data(), id: doc.id });
    });
    return products;
  }
);

export const fetchNearByProducts = createAsyncThunk(
  "products/fetchNearByProducts",
  async (coords) => {
    const center = [coords.latitude, coords.longitude];
    const radiusInM = 50 * 1000;

    const bounds = geofire.geohashQueryBounds(center, radiusInM);
    const promises = [];
    for (const b of bounds) {
      const q = query(
        collection(db, "products"),
        orderBy("geoHash"),
        startAt(b[0]),
        endAt(b[1])
      );

      promises.push(getDocs(q));
    }

    const snapshots = await Promise.all(promises);

    const matchingDocs = [];
    for (const snap of snapshots) {
      for (const doc of snap.docs) {
        const lat = doc.get("lat");
        const lng = doc.get("lng");

        // We have to filter out a few false positives due to GeoHash
        // accuracy, but most will match
        const distanceInKm = geofire.distanceBetween([lat, lng], center);
        const distanceInM = distanceInKm * 1000;
        if (distanceInM <= radiusInM) {
          matchingDocs.push(doc);
        }
      }
    }
    return matchingDocs;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProducts.pending, (state) => {})
      .addCase(fetchUserProducts.fulfilled, (state, action) => {
        state.userProducts = action.payload;
      })
      .addCase(fetchUserProducts.rejected, (state) => {});
    builder
      .addCase(fetchProductsByFC.pending, (state) => {})
      .addCase(fetchProductsByFC.fulfilled, (state, action) => {
        state.productsByFC = action.payload;
      })
      .addCase(fetchProductsByFC.rejected, (state) => {});
    builder
      .addCase(fetchNewProducts.pending, (state) => {})
      .addCase(fetchNewProducts.fulfilled, (state, action) => {
        state.newProducts = action.payload;
      })
      .addCase(fetchNewProducts.rejected, (state) => {});
    builder
      .addCase(fetchNearByProducts.pending, (state) => {})
      .addCase(fetchNearByProducts.fulfilled, (state, action) => {
        state.nearByProducts = action.payload;
      })
      .addCase(fetchNearByProducts.rejected, (state) => {});
    builder
      .addCase(fetchTrendingProducts.pending, (state) => {})
      .addCase(fetchTrendingProducts.fulfilled, (state, action) => {
        state.trendingProducts = action.payload;
      })
      .addCase(fetchTrendingProducts.rejected, (state) => {});
    builder
      .addCase(fetchSolidProducts.pending, (state) => {})
      .addCase(fetchSolidProducts.fulfilled, (state, action) => {
        state.solidProducts = action.payload;
      })
      .addCase(fetchSolidProducts.rejected, (state) => {});
    builder
      .addCase(fetchLiquidProducts.pending, (state) => {})
      .addCase(fetchLiquidProducts.fulfilled, (state, action) => {
        state.liquidProducts = action.payload;
      })
      .addCase(fetchLiquidProducts.rejected, (state) => {});
    builder
      .addCase(fetchGasProducts.pending, (state) => {})
      .addCase(fetchGasProducts.fulfilled, (state, action) => {
        state.gasProducts = action.payload;
      })
      .addCase(fetchGasProducts.rejected, (state) => {});
  },
});

export const {} = productsSlice.actions;
export default productsSlice.reducer;
