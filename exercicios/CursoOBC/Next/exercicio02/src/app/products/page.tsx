// app/products/page.tsx
import Head from "next/head";
import React from "react";
import ProductsList from "@/components/ProductsList"; // Client Component
import { fetchProducts, ProductType } from "@/services/products";

// Função para buscar dados
async function getData(): Promise<ProductType[]> {
    const products = await fetchProducts();
    return products;
}

export default async function Products() {
    const products = await getData();

    return (
        <>
            <Head>
                <title>Nossos Produtos</title>
                <meta name="description" content="Conheça nossos produtos" />
                <link rel="icon" href="../favicon.ico" />
            </Head>

            <section>
                    <h2 className="py-6 font-bold text-5xl my-6 text-center">Produtos que combinam com você:</h2>
                <div className="mb-4">
                    {products ? <ProductsList products={products} /> : <p>Carregando...</p>}
                </div>
            </section>
        </>
    );
}
