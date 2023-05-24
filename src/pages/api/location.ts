




// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


const dataDB = [
  {
    title: 'Germany',
    value: 'germany',
    children: [
      { title: 'Sonnenhotel Weingut Römmert, Volkach', value: 'SWR' },
      { title: 'Sun resort Ettershaus, Munich', value: 'SRE' },
      { title: 'Sonnenresort Hüttmann, Volkach', value: 'SHN' },
      { title: 'Sonnenhotel Bayerischer Hof, Volkach', value: 'SBH' },
      { title: 'Sonnenhotel Feldberg am See, Volkach', value: 'SFS' },
      { title: 'Sonnenhotel Amtsheide, Volkach', value: 'SAE' },
      { title: 'Sonnenhotel Wolfshof, Volkach', value: 'SWF' },
      { title: 'Sonnenhotel Hoher Hahn, Volkach', value: 'SHH' },
      { title: 'Sonnenhotel Fürstenbauer, Volkach', value: 'SFR' },
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


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json(dataDB)
}
