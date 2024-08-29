import { AccessorFnColumnDef } from "@tanstack/react-table";

export type Product = {
  id: string;
  name: string;
  price: string;
  quality: number;
  imageUrl: string;
  description: string;
};

export type Column =
  | AccessorFnColumnDef<Product, string>
  | AccessorFnColumnDef<Product, number>;
