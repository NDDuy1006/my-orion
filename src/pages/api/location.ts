




// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


const dataDB = {
  data: [
    {
      title: 'Germany',
      value: 'germany',
      children: [
        { title: 'Sonnenhotel Weingut Römmert', value: 'SWR' },
        { title: 'Sun resort Ettershaus', value: 'SRE' },
        { title: 'Sonnenresort Hüttmann', value: 'SHN' },
        { title: 'Sonnenhotel Bayerischer Hof', value: 'SBH' },
        { title: 'Sonnenhotel Feldberg am See', value: 'SFS' },
        { title: 'Sonnenhotel Amtsheide', value: 'SAE' },
        { title: 'Sonnenhotel Wolfshof', value: 'SWF' },
        { title: 'Sonnenhotel Hoher Hahn', value: 'SHH' },
        { title: 'Sonnenhotel Fürstenbauer', value: 'SFR' },
      ],
    },
    {
      title: 'Austria',
      value: 'austria',
      children: [
        { title: 'Sonnenhotel Zum Stern', value: 'SZS' },
        { title: 'Sonnenresort Maltschacher See', value: 'SMS' },
        { title: 'Sonnenresort Ossiacher See', value: 'SOS' },
      ],
    },
  ]
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json(dataDB)
}
