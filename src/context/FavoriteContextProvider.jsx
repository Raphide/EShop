import { createContext, useState } from "react";

export const FavoriteContext = createContext(null);

const favoriteContextProvider = ({children}) => {
    const [isFavorite, setIsFavorite] = useState(product.favorited);

}