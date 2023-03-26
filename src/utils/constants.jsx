export const url = "https://fakestoreapi.com/products";

export const formatPrice = (price) => {
  return `${Math.round(price * 40)} Rs`;
};

export const paginate = (items) => {
  if (!items.length) return;
  const itemsPerPage = 6;
  const pages = Math.ceil(items.length / itemsPerPage);
  const newItems = Array.from({ length: pages }, (_, index) => {

    const range = index * itemsPerPage;
    return items.slice(range, range + itemsPerPage);
  });
  return newItems
};
