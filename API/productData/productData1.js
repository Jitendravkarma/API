const image_url =
  "https://designcollection.in/codecanyon/prolist-bootstrap-4-and-materialize-framework-layout/bootstrap-framework/images/image-";
const data1 = [
  {
    id: 1,
    category: "Clothes",
    title: "Cotton T-shirt",
    sizePrice: [
      {size:"L", price: 499, originalPrice:699, discount:35},
      {size:"S", price: 399, originalPrice:599, discount:34},
      {size:"XXS", price: 299, originalPrice:499, discount:33},
      {size:"XS", price: 199, originalPrice:399, discount:32},
      {size:"S", price: 99, originalPrice:299, discount:31}
    ],
    colors: ["Red", "Blue", "Green"],
    description:
      "Stay comfortable all day in this classic striped cotton t-shirt. Made from soft, breathable fabric, it features a crew neckline and short sleeves. Perfect for everyday wear.",
    images: {
      red: `${image_url}1.jpg`,
      blue: `${image_url}2.jpg`,
      green: `${image_url}3.jpg`,
    },
  },
  {
    id: 2,
    category: "Clothes",
    title: "Cotton Shirt",
    sizePrice: [
      {size:"L", price: 499, originalPrice:699, discount:35},
      {size:"M", price: 399, originalPrice:599, discount:34},
      {size:"S", price: 299, originalPrice:499, discount:33},
    ],
    colors: ["Red", "Blue", "Green"],
    description:
      "Stay comfortable all day in this classic striped cotton t-shirt. Made from soft, breathable fabric, it features a crew neckline and short sleeves. Perfect for everyday wear.",
    images: {
      red: `${image_url}2.jpg`,
      blue: `${image_url}2.jpg`,
      green: `${image_url}3.jpg`,
    },
  },
];
export { data1 };
