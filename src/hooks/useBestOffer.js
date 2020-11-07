import { useQuery } from "react-query";
import axios from "axios";

const getOffer = async () => {

  const { data: offer } = await axios.get(
    "https://apime.dev/api/centurylink_offer?order=price.desc&limit=1",
    {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJQSG1QTVBHU3JwNjdITllXVzVwSDd5emd5QmRqTG1NWHZjckFaR0RiZnRGeTR0Zml6Rm9LY1pqdTdFQmtEbzdLSFpLUEZKaGJaUG1GZiI6InQtYjhmY2EyOGYtYTdjYi00ZWY2LWI4NmEtYzE4YTc5NzMxZjUxIiwiSG12TE1nMnFlUDNuSzVWbTV0TVE3RFQzeVd2NmtIRXB1dkJZMmhnYWVSR0dMandTTjRzTDU4MmZXdU5ZM3p6UlY4aGZGSG96Q1BjbkQiOiI3NmExYzk0OS1hNDljLTQwYjgtYWVjOS0xNmVlMzA4OTMyZmMiLCJQVUhpOXdvcEh3VmZ4OUJQR1c1RGI1SEtob3lHUGJDb2pBaEFOSHlmb2lGNFRnRTJEQlNGbnR6RWh2bTdacGlTcVc2ekRaaUpvaHU0QiI6dHJ1ZSwiV0ZEWWROb3ZZb1F4dnJWeFI0dmFiQXVoc0g5dHRnbUszVVVod0hVOHd0RGR5alJnSlE0NFBCMjVSY0hZQUFERGtvZWdTZnU4ZXlCcVQiOnRydWUsIlk1NThkalNWeHN0ZWczUGtBaDhCUUVaeFBLVGJuc1FKaFcyOXVldER6U0JTM3o4NWtZeG5rRVZHRHBabW9EMlJLdXZ0NHI1ZENhbW93Ijp0cnVlLCJzaWduZWQiOnRydWUsImlhdCI6MTYwMTAwMTQ2NX0.yrD48Ogj-6ydFDu7ML-H7Jo8DNk_Ae3McHrGiBBMttM`,
      },
    }
  );;
  return offer;
};

export default function useBestOffer() {
  return useQuery("best", getOffer);
}
