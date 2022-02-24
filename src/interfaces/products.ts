export interface Product {
  id: string;
  name: string;
  price: number;
  special_price?: number;
  public_price: number;
  description: string;
  pum: Array<string>;
  image_medium_url: string;
  image_small_url: string;
}

export interface ProductResponse {
  data: [
    {
      id: string;
      attributes: Omit<Product, 'id'>;
    }
  ];
}
