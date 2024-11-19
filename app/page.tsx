"use client";

import { useEffect, useState } from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard"
import { products } from "./constants"
import { Product } from "./types";


export default function Home() {
  const [category, setCategory] = useState<{ parent: string, child: string }>({
    parent: 'All',
    child: 'All',
  });
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  useEffect(() => {
    const p = prompt("Password:");
    if(p === 'fedev2024test') {
      setAuthenticated(true);
    }
  }, [])

  useEffect(() => {
    let arr: Product[] = [];
    switch (category.parent) {
      case 'All':
        arr = products;
        switch (category.child) {
          case 'Clothes':
            arr = arr.filter(product => product.category.child === 'Clothes');
            break;
          case 'Accessories':
            arr = arr.filter(product => product.category.child === 'Accessories');
            break;
          case 'Human-like':
            arr = arr.filter(product => product.category.child === 'Human-like');
            break;
          case 'Anthro & Furry':
            arr = arr.filter(product => product.category.child === 'Anthro & Furry');
            break;
          case 'Robot & Cyborgs':
            arr = arr.filter(product => product.category.child === 'Robot & Cyborgs');
            break;
          case 'Others':
            arr = arr.filter(product => product.category.child === 'Others');
            break;
          default:
            arr = arr;
            break;
        }
        break;
      case 'Fashion':
        arr = products.filter(product => product.category.parent === 'Fashion');
        switch (category.child) {
          case 'Clothes':
            arr = arr.filter(product => product.category.child === 'Clothes');
            break;
          case 'Accessories':
            arr = arr.filter(product => product.category.child === 'Accessories');
            break;
          case 'Others':
            arr = arr.filter(product => product.category.child === 'Others');
            break;
          default:
            arr = arr;
            break;
        }
        break;
      case 'Avatars':
        arr = products.filter(product => product.category.parent === 'Avatars');
        switch (category.child) {
          case 'Human-like':
            arr = arr.filter(product => product.category.child === 'Human-like');
            break;
          case 'Anthro & Furry':
            arr = arr.filter(product => product.category.child === 'Anthro & Furry');
            break;
          case 'Robot & Cyborgs':
            arr = arr.filter(product => product.category.child === 'Robot & Cyborgs');
            break;
          case 'Others':
            arr = arr.filter(product => product.category.child === 'Others');
            break;
          default:
            arr = arr;
            break;
        }
        break;
      default:
        arr = products;
    }
    setFilteredProducts(arr);
  }, [category])

  if(!authenticated) {
    return (
      <h1>Page under developemnt</h1>
    )
  }

  return (
    <>
      <Header onCategoryChange={(parent, child) => {
        setCategory({ parent: parent, child: child });
      }} />

      <div className="min-h-screen bg-black p-8">
        <h1 className="text-white text-2xl mb-8">{category.parent}&gt;{category.child}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </>
  )
}