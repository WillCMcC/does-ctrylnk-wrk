import { useQuery } from "react-query";
import axios from "axios";

const getOffers = async () => {

  const { data: offers } = await axios.get('/offers');
  console.log(offers.offersList)
  return offers.offersList;
};

export default function useCheck() {
  return useQuery("offers", getOffers);
}
