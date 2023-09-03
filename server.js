module.exports = () => {
  const data = {
    products: [],
  };

  for (let i = 0; i < 1000; i++) {
    data.products.push({
      id: i + 1,
      name: `Camiseta ${i + 1}`,
      price: Math.round(Math.random() * 100000) / 100,
    });
  }

  return data;
};
