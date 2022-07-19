// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


import {fetchData} from '../../../utils/fetch'

export default async function handler(req, res) {
    const pid  = req.query.id

    const data = await fetchData('https://aeroapi.flightaware.com/aeroapi/airports/' + pid);
    res.status(200).json(data)
}
