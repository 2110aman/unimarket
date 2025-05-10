export interface User {
  id: string;
  email?: string;
  full_name: string;
  phone_number: string;
  is_admin: boolean;
  is_banned: boolean;
}

export interface Item {
  id: number;
  title: string;
  description: string;
  price: number;
  condition: string;
  image_url: string;
  category_id: number;
  seller_id: string;
  status: string;
  created_at: string;
  seller: {
    full_name: string;
    email: string;
    phone_number: string;
  };
  category: {
    name: string;
  };
}

export interface Report {
  id: number;
  item_id: number;
  reporter_id: string;
  reason: string;
  details: string;
  status: string;
  created_at: string;
  item: Item;
  reporter: {
    full_name: string;
    email: string;
  };
} 