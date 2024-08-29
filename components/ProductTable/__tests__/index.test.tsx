import { render, fireEvent } from "@testing-library/react";
import ProductTable from "@/components/ProductTable";
import { Product } from "@/types/Product";

const products: Product[] = [
  {
    id: "1",
    name: "Product 1",
    price: "$100",
    quality: 3,
    description: "Description of Product 1",
    imageUrl: "/path/to/image1.jpg",
  },
  {
    id: "2",
    name: "Product 2",
    price: "$200",
    quality: 4,
    description: "Description of Product 2",
    imageUrl: "/path/to/image2.jpg",
  },
];

describe("Product Table Component", () => {
  test("renders table header and body", () => {
    const { getByText, container, getAllByRole } = render(
      <ProductTable products={products} />,
    );

    const tableHead = container.querySelector("thead");
    const tableBody = container.querySelector("tbody");

    expect(getByText("Product 1")).toBeInTheDocument();
    expect(getByText("Product 2")).toBeInTheDocument();
    expect(getAllByRole("row")).toHaveLength(3);
    expect(tableHead?.querySelectorAll("tr").length).toBe(1);
    expect(tableBody?.querySelectorAll("tr").length).toBe(2);
  });

  test("quality sorting test", async () => {
    const { container } = render(<ProductTable products={products} />);

    const nameButtonContainer = container.querySelectorAll("th")[1];
    const nameButton = nameButtonContainer?.querySelectorAll("div")[0];

    const tableBody = container.querySelector("tbody");

    if (!nameButton) {
      throw new Error("Button does not exist");
    }

    expect(tableBody?.querySelectorAll("td")[1]).toHaveTextContent("Product 1");

    fireEvent.click(nameButton);

    expect(tableBody?.querySelectorAll("td")[1]).toHaveTextContent("Product 2");
  });

  test("description column hides on clicking description button from hide/show panel", () => {
    const { queryByText, getByText } = render(
      <ProductTable products={products} />,
    );

    expect(queryByText("Description of Product 1")).toBeInTheDocument();
    expect(queryByText("Description of Product 2")).toBeInTheDocument();

    fireEvent.click(getByText("Description"));

    expect(queryByText("Description of Product 1")).not.toBeInTheDocument();
    expect(queryByText("Description of Product 2")).not.toBeInTheDocument();
  });
});
