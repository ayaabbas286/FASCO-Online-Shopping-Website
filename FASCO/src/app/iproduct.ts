export interface Iproduct {
 id: string;
  product_category_id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  manufacturer: string;
  created_at: string;
  updated_at: string;
  product_category: Productcategory;
}
interface Productcategory {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
}
