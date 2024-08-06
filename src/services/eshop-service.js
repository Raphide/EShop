import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../config/firestore";

export const getProductCollection = async () => {
  const collectionRef = collection(db, "products");
  const snapshot = await getDocs(collectionRef);
  console.log(snapshot);
  const cleanedData = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  console.log(cleanedData);
  return cleanedData;
};

// need to push data from products into here when added to cart
export const getCart = async () => {
  const collectionRef = collection(db, "cart");
  const snapshot = await getDocs(collectionRef);
  console.log(snapshot);
  const cleanedData = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  console.log(cleanedData);
  return cleanedData;
}

export const getAllFavorites = async () => {
  const docRef = collection(db, "products");
  try{
  const q = query(docRef, where("favorited", "==", true));
  const querySnapshot = await getDocs(q);
  const cleanedData = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return cleanedData;
}catch (e) {
  console.warn(e);
  throw(e);
}
}

export const getFeaturedProducts = async () => {
  const docRef = collection(db, "products");
  try{
  const q = query(docRef, where("featured", "==", true));
  const querySnapshot = await getDocs(q);
  const cleanedData = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return cleanedData;
}catch (e) {
  console.warn(e);
  throw(e);
}
}

export const getProductById = async (id) => {
  const docRef = doc(db, "products", id);
  const snapshot = await getDoc(docRef);
  if (!snapshot.exists()) {
    throw new Error(`Product not found with id: ${id}`);
  }
  return { id: snapshot.id, ...snapshot.data() };
};

export const cleanProductData = (productData) => {
  const defaultImgLink = "https://imgur.com/Q559yo4";
  const { imageLink, ...rest } = productData;
  const newProduct = { ...rest, imageLink: imageLink || defaultImgLink };
  newProduct.name = newProduct.name.trim();
  return newProduct;
};

// export const uploadProduct = async (productData) => {
//   try {
//     const cleanProductData = cleanProductData(productData);
//     const collectionRef = collection(db, "products");
//     const docRef = await addDoc(collectionRef, cleanProductData);
//     return docRef.id;
//   } catch (e) {
//     console.warn(e);
//     throw e;
//   }
// };

export const addProductToCart = async (productData) => {
  try {
    const collectionRef = collection(db, "cart");
    const docRef = await addDoc(collectionRef, {
      productData});
    return docRef.id;
  } catch (e) {
    console.warn(e);
    throw e;
  }
};

export const deleteProductFromCart = async (id) => {
  const docRef = doc(db, "cart", id);
  await deleteDoc(docRef);
};

export const setFavorite = async (id, bool) => {
  const docRef = doc(db, "products", id);
  await setDoc(docRef, { favorited: bool }, { merge: true });
};

export const setInCartStatus = async (id, bool) => {
  const docRef = doc(db, "products", id);
  await setDoc(docRef, { inCart: bool }, { merge: true });
};

// export const editProductById = async (id, data) => {
//   const docRef = doc(db, "products", id);
//   const cleanProductData = cleanProductData(data);
//   await updateDoc(docRef, cleanProductData);
// };

export const subscribeToProducts = (callback) => {
  const collectionRef = collection(db, "products");
  const unsub = onSnapshot(collectionRef, (snapshot) => {
    const productData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(productData);
  });
  return unsub;
};

export const subscribeToCart = (callback) => {
  const collectionRef = collection(db, "cart");
  const unsub = onSnapshot(collectionRef, (snapshot) => {
    const cartData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(cartData);
  });
  return unsub;
};

//to-do: create favorite subscription