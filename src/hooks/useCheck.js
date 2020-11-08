import { useQuery } from "react-query";
import axios from "axios";

const getOffers = async () => {

  const { data: offers } = await axios.get('/offers');

  return offers.offersList;
};

export default function useCheck() {
  return useQuery("offers", getOffers);
}
