import { listAll,ref,getDownloadURL,getStorage } from "firebase/storage";
import {app} from "../firebase";

export const getProductImagesURL = async (productId)=>{
    const storage = getStorage(app);
    const productImgRes = await listAll(ref(storage, `products/${productId}`));
    const imagesURL = await Promise.all(productImgRes.items.map((ref) => getDownloadURL(ref)))
    return imagesURL;
}