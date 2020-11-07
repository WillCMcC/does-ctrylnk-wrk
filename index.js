const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();

const getOffers = async () => {
  var tokenConfig = {
    method: "post",
    url: "https://api.centurylink.com/oauth/token?grant_type=client_credentials",
    headers: {
      Referer: "https://shop.centurylink.com/",
      Origin: "https://shop.centurylink.com/",
      Host: "api.centurylink.com",
      Authorization:
        "Basic aEhzNTRxNUpnbFN1a1ZHWlNvdGxpdldhN083OE5TVVE6OWNjemhSOTd1V0VoNTg5OA==",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: { "grant_type": "client_credentials" },
  };

  const { data: token_data } = await axios(tokenConfig);

  let token = token_data.access_token;

  var config = {
    method: "post",
    url: "https://api.centurylink.com/Application/v2/DCEP-Consumer/offer",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    data: {
      addressId: "211959565",
      billingSource: "L-Q",
      fullAddress: "607 W 28TH ST,VANCOUVER,WA 98660,USA",
      orderRefNum: "ORD1604598892183",
      wireCenter: "VANCWA01",
    },
  };

  const { data: offers } = await axios(config);

  return offers;
};

app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.get('/offers', async function(req, res) {
  let offers
  try {
   offers = await getOffers()
  } catch (error) {
    console.log(error.message)
  }
  res.json(offers);
});
app.listen(9000);