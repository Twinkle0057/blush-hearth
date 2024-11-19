export type Product = {
  category: Category;
  name: string;
  creator: string;
  rating: number;
  price: number;
  image: string;
  description?: string;
  id: number;
}

export type Category = {
  parent: string;
  child: string;
}