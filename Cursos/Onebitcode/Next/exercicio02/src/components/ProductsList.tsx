// components/ProductsList.tsx
'use client';

import React from "react";
import { ProductType } from "@/services/products";
import { ProductCard } from "./ProductCard";

type ProductsListProps = {
    products: ProductType[];
}

export default function ProductsList({ products }: ProductsListProps) {
    return (
        <div className="flex gap-16 flex-wrap w-full justify-center">
            {products.map((product) => (
                <ProductCard product={product} key={product.id}/>
            ))}
        </div>
    );
}
