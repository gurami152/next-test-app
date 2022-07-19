// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


import {fetchData} from "../../utils/fetch";

export default async function handler(req, res) {
  const data = await fetchData('https://aeroapi.flightaware.com/aeroapi/airports');
  res.status(200).json(data)
}
