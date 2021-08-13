import Review from "./Review";

interface Listing {
  _id: number;
  title: string;
  location: string;
  img: string;
  price: number;
  category: string;
  description?: string;
  owner: string;
  reviews: Array<Review>;

}

export default Listing;
