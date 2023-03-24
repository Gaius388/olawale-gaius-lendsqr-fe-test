const paginate = (houses) => {
  const itemsPerPage = 10;
  const noOfPages = Math.ceil(houses.length / itemsPerPage);
  const newHouses = Array.from({ length: noOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return houses.slice(start, start + itemsPerPage);
  });

  return newHouses;
};

export default paginate;
