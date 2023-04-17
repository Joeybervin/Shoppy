export const  applyDiscount = (total, discount) =>  {
    const reducedTotal = total - (total * discount / 100);
    const discountTotal = (total - reducedTotal).toFixed(2);
    return discountTotal;
}