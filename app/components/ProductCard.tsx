"use client";

import { useRouter } from "next/navigation";
import { Product } from "../types";
import StarRating from "./StartRating";

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const router = useRouter();

  const navigateToProduct = (id: number) => {
    router.push('/product/' + id);
  }

  return (
    <div className="flex flex-col" onClick={() => {navigateToProduct(product.id)}}>
      <div className="relative aspect-square mb-4 bg-neutral-700 rounded-lg overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
          <div>{product.category.parent}</div>
          <div className="text-sm">{`>${product.category.child}`}</div>
        </div>
      </div>
      <h3 className="text-white font-medium">{product.name}</h3>
      <p className="text-neutral-400 text-sm">{product.creator}</p>
      <div className="flex items-center justify-between mt-1">
        <StarRating rating={product.rating} />
        <span className="text-white">${product.price.toFixed(2)}</span>
      </div>
    </div>
  )
}

export default ProductCard;