export function sortByPriceAscending(data) {
    return data.sort((a, b) => a.price - b.price);
}

export function sortByPriceDescending(data) {
    return data.sort((a, b) => b.price - a.price);
}

export function sortByAZ(data) {
    return data.sort((a, b) => a.productName.localeCompare(b.productName));
}

export function filterByPriceRange(data, minPrice, maxPrice) {
    return data.filter((item) => item.price >= minPrice && item.price <= maxPrice);
}
