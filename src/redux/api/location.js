import { getStructuredLocation } from "../../utils/location";

const googleMapsApiKey = process.env.REACT_APP_MAPS_KEY;

export async function getReverseGeo(latitude, longitude) {
  if (!latitude || !longitude) return {};
  return fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${googleMapsApiKey}`
  )
    .then((res) => res.json())
    .then(({ results }) => getStructuredLocation(results[0]))
    .catch((err) => err.message);
}
