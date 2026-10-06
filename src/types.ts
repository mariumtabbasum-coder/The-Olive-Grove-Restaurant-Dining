export interface Dish {
  id: string;
  name: string;
  category: 'Starters' | 'Main Course' | 'Pasta' | 'Pizza' | 'Desserts' | 'Drinks';
  price: number;
  rating: number;
  reviewsCount: number;
  prepTime: string;
  serves: string;
  calories?: string;
  description: string;
  ingredients: string;
  image: string;
  objectPosition?: string;
  isSignature?: boolean;
}

export interface CartItem {
  dish: Dish;
  quantity: number;
}

export interface Chef {
  id: string;
  name: string;
  role: string;
  experience: string;
  image: string;
  objectPosition?: string;
  rating: number;
  specialty: string;
  bio: string;
  signatureDish: string;
  awards: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Food' | 'Interior' | 'Events';
  image: string;
  caption: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
