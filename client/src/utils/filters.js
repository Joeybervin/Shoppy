export const sortByPriceAscending = (data) => {
    return data.sort((a, b) => a.price - b.price);
}

export const sortByPriceDescending = (data) => {
    return data.sort((a, b) => b.price - a.price);
}

export const sortByAZ = (data) => {
    return data.sort((a, b) => a.productName.localeCompare(b.productName));
}

export const filterByPriceRange = (data, minPrice, maxPrice) => {
    return data.filter((item) => item.price >= minPrice && item.price <= maxPrice);
}
