"use client"

import StarRating from "@/app/components/StartRating"
import { products } from "@/app/constants";
import { Product } from "@/app/types"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";

export default function ProductDetails() {
    const params = useParams();
    const [product, setProduct] = useState<Product | undefined>(products[0]);

    useEffect(() => {
      const id = Number(params["id"]);
      setProduct(products.find(p => p.id === id) ? products.find(p => p.id === id) : undefined);
    }, [params]);
  
    // In a real application, you would fetch the product details based on the ID
    // For this example, we'll use a mock product
    if(!product) {
      return <>Product not found!!!</>
    }
  
    return (
      <div className="min-h-screen bg-black p-8">
        <Link href="/" className="text-white mb-8 inline-block">&larr; Back to Products</Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-square bg-neutral-700 rounded-lg overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-white text-center p-4">
              <div>
                <div>{product.category.parent}</div>
                <div className="text-sm">{`>${product.category.child}`}</div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-white text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-neutral-400 text-xl mb-4">by {product.creator}</p>
            <StarRating rating={product.rating} />
            <p className="text-white text-2xl font-bold mt-4">${product.price.toFixed(2)}</p>
            <p className="text-neutral-300 mt-6">{product.description}</p>
            <button className="mt-8 bg-white text-black font-bold py-2 px-4 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    )
  }