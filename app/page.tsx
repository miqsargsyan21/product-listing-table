import ProductTable from "../components/ProductTable";

const data = [
  {
    id: "1",
    name: "First Product",
    price: "$500",
    quality: 4,
    description:
      "It is first product, It is first product, It is first product",
    imageUrl:
      "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "2",
    name: "First Product",
    price: "$600",
    quality: 4,
    description: "It is first product",
    imageUrl:
      "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "4",
    name: "First Product",
    price: "$600",
    quality: 5,
    description: "It is first product",
    imageUrl:
      "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "5",
    name: "First Product",
    price: "$500",
    quality: 5,
    description: "It is first product",
    imageUrl:
      "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "3",
    name: "Second Product",
    price: "$350",
    quality: 5,
    description: "It is second product",
    imageUrl:
      "https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export default function Home() {
  return (
    <main>
      <ProductTable products={data} />
    </main>
  );
}
