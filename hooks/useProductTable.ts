import { Column, Product } from "@/types/Product";
import { useState } from "react";
import {
  getSortedRowModel,
  getCoreRowModel,
  VisibilityState,
  useReactTable,
  SortingState,
} from "@tanstack/react-table";

export const useProductTable = (products: Product[], columns: Column[]) => {
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [sorting, setSorting] = useState<SortingState>([
    { id: "Name", desc: false },
    { id: "Price", desc: true },
    { id: "Quality", desc: true },
    { id: "Description", desc: true },
  ]);

  const table = useReactTable<Product>({
    data: products,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      columnVisibility,
      sorting,
    },
    onColumnVisibilityChange: setColumnVisibility,
    columnResizeMode: "onChange",
    columnResizeDirection: "ltr",
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    enableMultiSort: true,
  });

  return { table };
};
