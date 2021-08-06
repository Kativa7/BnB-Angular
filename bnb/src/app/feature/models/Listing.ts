interface Listing {
  _id: number;
  title: string;
  location: string;
  img: string;
  price: number;
  category: string;
  description?: string;
  owner: string;

}

export default Listing;
