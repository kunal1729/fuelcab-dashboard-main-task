import { roundToDecimal } from "./math";
import { getReverseGeo } from "../redux/api/location";

export function islocationEqual(loc1, loc2) {
  if (roundToDecimal(loc1.latitude, 1) === roundToDecimal(loc2.latitude, 1)) {
    if (
      roundToDecimal(loc1.longitude, 1) === roundToDecimal(loc2.longitude, 1)
    ) {
      return true;
    }
    return false;
  }
  return false;
}

const findName = (level, components) => {
  const temp = components.find((obj) => {
    return obj.types[0] && obj.types[0] === level;
  });
  return temp?.long_name;
};

export const getStructuredLocation = (place) => {
  if (!place)
    return {
      city: "",
      state: "",
      country: "",
      postalCode: "",
      addressLine: "",
      coords: {
        latitude: "",
        longitude: "",
      },
    };
  const { address_components, formatted_address, geometry } = place;
  const location = {
    city: address_components[0].long_name,
    state: findName("administrative_area_level_1", address_components) || "",
    postalCode: findName("postal_code", address_components) || "",
    addressLine: formatted_address,
    coords: {
      latitude: geometry.location.lat,
      longitude: geometry.location.lng,
    },
  };
  return location;
};

export const getDeviceLocation = async () => {
  if (!navigator.geolocation) return;
  try {
    const pos = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    const { latitude, longitude } = pos.coords;
    const loc = await getReverseGeo(latitude, longitude);
    localStorage.setItem("lastLocation", JSON.stringify(loc));
    return loc;
  } catch (error) {
    console.error("Error getting location:", error);
  }
};

export const getStoredLocation = async () => {
  try {
    const location = JSON.parse(localStorage.getItem("lastLocation"));
    if (location) return location;
  } catch (error) {
    console.log("error get stored location");
  }
};
