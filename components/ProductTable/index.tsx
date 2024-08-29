"use client";
import { useProductTable } from "@/hooks/useProductTable";
import { Product, Column } from "@/types/Product";
import Image from "next/image";
import {
  AccessorFnColumnDef,
  createColumnHelper,
  flexRender,
} from "@tanstack/react-table";

const columnHelper = createColumnHelper<Product>();

const columns: Column[] = [
  columnHelper.accessor((row) => row.id, {
    header: "ID",
    enableSorting: false,
    cell: (props) => props.getValue(),
  }) as AccessorFnColumnDef<Product, string>,
  columnHelper.accessor((row) => row.name, {
    header: "Name",
    cell: (props) => props.getValue(),
    enableHiding: false,
  }) as AccessorFnColumnDef<Product, string>,
  columnHelper.accessor((row) => row.price, {
    header: "Price",
    cell: (props) => props.getValue(),
  }) as AccessorFnColumnDef<Product, string>,
  columnHelper.accessor((row) => row.quality, {
    header: "Quality",
    cell: (props) => props.getValue(),
  }) as AccessorFnColumnDef<Product, number>,
  columnHelper.accessor((row) => row.description, {
    header: "Description",
    cell: (props) => props.getValue(),
  }) as AccessorFnColumnDef<Product, string>,
  columnHelper.accessor((row) => row.imageUrl, {
    header: "Image",
    enableSorting: false,
    cell: (props) => (
      <div className="relative w-32 h-32">
        <Image
          src={props.getValue()}
          fill
          alt="Product"
          className="object-cover"
        />
      </div>
    ),
  }) as AccessorFnColumnDef<Product, string>,
];

const Index = (props: { products: Product[] }) => {
  const { table } = useProductTable(props.products, columns);

  return (
    <div className="p-4">
      <div className="border border-gray-200 shadow rounded flex gap-2 w-fit p-2 mb-4 flex-wrap">
        {table.getAllColumns().map((column) => (
          <label key={column.id} className="cursor-pointer">
            <input
              checked={column.getIsVisible()}
              disabled={!column.getCanHide()}
              onChange={column.getToggleVisibilityHandler()}
              type="checkbox"
            />
            {`${column.columnDef.header}`}
          </label>
        ))}
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="border p-2 bg-gray-200 relative min-w-40"
                    style={{ width: `${header.getSize()}px` }}
                  >
                    <div
                      className={
                        header.column.getCanSort()
                          ? "cursor-pointer select-none"
                          : ""
                      }
                      onClick={header.column.getToggleSortingHandler()}
                      title={
                        header.column.getCanSort()
                          ? header.column.getNextSortingOrder() === "asc"
                            ? "Sort ascending"
                            : header.column.getNextSortingOrder() === "desc"
                              ? "Sort descending"
                              : "Clear sort"
                          : undefined
                      }
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                      {{
                        asc: " 🔼",
                        desc: " 🔽",
                      }[header.column.getIsSorted() as string] ?? null}
                      <div
                        className="w-2 h-full absolute top-0 right-0 cursor-col-resize	select-none	touch-none bg-gray-500"
                        style={{}}
                        onMouseDown={header.getResizeHandler()}
                        onTouchStart={header.getResizeHandler()}
                      />
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="border-b">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="border p-2">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Index;
