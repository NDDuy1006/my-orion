// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


const resData = `{
  data: [
    {
      data_source: "Apaleo",
      data_version: "v1",
      data_id: "OKAB",
      data: [
        {
          property: {
            code: "BER",
            id: "BER",
            name: "Hotel Berlin",
            description: "Explore the important places of recent history or simply enjoy the view over the rooftops of Berlin Mitte on our roof terrace."
          },
          offers: [
            {
              arrival: "2023-05-20T17:00:00+02:00",
              departure: "2023-05-22T10:00:00+02:00",
              ratePlan: {
                id: "BER-PROMO-DBL",
                code: "PROMO",
                name: "Promotion",
                description: "Super special rate for single rooms only available in the promotion period."
              },
              totalGrossAmount: {
                amount: 152,
                currency: "EUR"
              },
              unitGroup: {
                id: "BER-DBL",
                code: "DBL",
                name: "Double",
                description: "Big room with balcony, whirlpool and a kingsize bed.",
                maxPersons: 2,
                type: "BedRoom"
              }
            },
            {
              arrival: "2023-05-20T17:00:00+02:00",
              departure: "2023-05-22T10:00:00+02:00",
              ratePlan: {
                id: "BER-NONREF-DBL",
                code: "NONREF",
                name: "Non Refundable",
                description: "Pay in advance and save money. In case of cancellation or changes, we keep the total amount of the stay."
              },
              totalGrossAmount: {
                amount: 178,
                currency: "EUR"
              },
              unitGroup: {
                id: "BER-DBL",
                code: "DBL",
                name: "Double",
                description: "Big room with balcony, whirlpool and a kingsize bed.",
                maxPersons: 2,
                type: "BedRoom"
              }
            },
            {
              arrival: "2023-05-20T17:00:00+02:00",
              departure: "2023-05-22T10:00:00+02:00",
              ratePlan: {
                id: "BER-IBRKF-DBL",
                code: "IBRKF",
                name: "Include breakfast",
                description: "A rate for double rooms with breakfast included."
              },
              totalGrossAmount: {
                amount: 238,
                currency: "EUR"
              },
              unitGroup: {
                id: "BER-DBL",
                code: "DBL",
                name: "Double",
                description: "Big room with balcony, whirlpool and a kingsize bed.",
                maxPersons: 2,
                type: "BedRoom"
              }
            },
            {
              arrival: "2023-05-20T17:00:00+02:00",
              departure: "2023-05-22T10:00:00+02:00",
              ratePlan: {
                id: "BER-PROMO-SGL",
                code: "PROMO",
                name: "Promotion",
                description: "Super special rate for single rooms only available in the promotion period."
              },
              totalGrossAmount: {
                amount: 102,
                currency: "EUR"
              },
              unitGroup: {
                id: "BER-SGL",
                code: "SGL",
                name: "Single",
                description: "Nice and comfortable room with shower and single bed.",
                maxPersons: 1,
                type: "BedRoom"
              }
            },
            {
              arrival: "2023-05-20T17:00:00+02:00",
              departure: "2023-05-22T10:00:00+02:00",
              ratePlan: {
                id: "BER-FLEX-DBL",
                code: "FLEX",
                name: "Flexible",
                description: "Stay fully flexible with free cancellation until midnight one day prior to arrival. Just put your CC on file to guarantee the booking."
              },
              totalGrossAmount: {
                amount: 218,
                currency: "EUR"
              },
              unitGroup: {
                id: "BER-DBL",
                code: "DBL",
                name: "Double",
                description: "Big room with balcony, whirlpool and a kingsize bed.",
                maxPersons: 2,
                type: "BedRoom"
              }
            },
            {
              arrival: "2023-05-20T17:00:00+02:00",
              departure: "2023-05-22T10:00:00+02:00",
              ratePlan: {
                id: "BER-NONREF-SGL",
                code: "NONREF",
                name: "Non Refundable",
                description: "Pay in advance and save money. In case of cancellation or changes, we keep the total amount of the stay."
              },
              totalGrossAmount: {
                amount: 118,
                currency: "EUR"
              },
              unitGroup: {
                id: "BER-SGL",
                code: "SGL",
                name: "Single",
                description: "Nice and comfortable room with shower and single bed.",
                maxPersons: 1,
                type: "BedRoom"
              }
            },
            {
              arrival: "2023-05-20T17:00:00+02:00",
              departure: "2023-05-22T10:00:00+02:00",
              ratePlan: {
                id: "BER-FLEX-SGL",
                code: "FLEX",
                name: "Flexible",
                description: "Stay fully flexible with free cancellation until midnight one day prior to arrival. Just put your CC on file to guarantee the booking."
              },
              totalGrossAmount: {
                amount: 158,
                currency: "EUR"
              },
              unitGroup: {
                id: "BER-SGL",
                code: "SGL",
                name: "Single",
                description: "Nice and comfortable room with shower and single bed.",
                maxPersons: 1,
                type: "BedRoom"
              }
            }
          ]
        },
        {
          property: {
            code: "MUC",
            id: "MUC",
            name: "Hotel Munich",
            description: "This new cozy hotel is located in the heart of Schwabing and is walking distance from the historical city center."
          },
          offers: [
            {
              arrival: "2023-05-20T10:00:00+02:00",
              departure: "2023-05-22T09:00:00+02:00",
              ratePlan: {
                id: "MUC-FLEX-FAMILY",
                code: "FLEX",
                name: "Flexible Family",
                description: "Stay fully flexible with free cancellation until midnight one day prior to arrival. Just put your CC on file to guarantee the booking."
              },
              totalGrossAmount: {
                amount: 309,
                currency: "EUR"
              },
              unitGroup: {
                id: "MUC-FAMILY",
                code: "FAMILY",
                name: "Family room",
                description: "Big room with balcony, whirlpool and two kingsize beds.",
                maxPersons: 4,
                type: "BedRoom"
              }
            },
            {
              arrival: "2023-05-20T10:00:00+02:00",
              departure: "2023-05-22T09:00:00+02:00",
              ratePlan: {
                id: "MUC-PROMO-SGL",
                code: "PROMO",
                name: "Promotion",
                description: "Super special rate for single rooms only available in the promotion period."
              },
              totalGrossAmount: {
                amount: 157,
                currency: "EUR"
              },
              unitGroup: {
                id: "MUC-SGL",
                code: "SGL",
                name: "Single",
                description: "Nice and comfortable room with shower and single bed.",
                maxPersons: 1,
                type: "BedRoom"
              }
            },
            {
              arrival: "2023-05-20T10:00:00+02:00",
              departure: "2023-05-22T09:00:00+02:00",
              ratePlan: {
                id: "MUC-IBRKF-DBL",
                code: "IBRKF",
                name: "Include breakfast",
                description: "A rate for double rooms with breakfast included."
              },
              totalGrossAmount: {
                amount: 304,
                currency: "EUR"
              },
              unitGroup: {
                id: "MUC-DBL",
                code: "DBL",
                name: "Double",
                description: "Big room with balcony, whirlpool and a kingsize bed.",
                maxPersons: 2,
                type: "BedRoom"
              }
            },
            {
              arrival: "2023-05-20T10:00:00+02:00",
              departure: "2023-05-22T09:00:00+02:00",
              ratePlan: {
                id: "MUC-NONREF-FAMILY",
                code: "NONREF",
                name: "Non Refundable Family",
                description: "Pay in advance and save money. In case of cancellation or changes, we keep the total amount of the stay."
              },
              totalGrossAmount: {
                amount: 269,
                currency: "EUR"
              },
              unitGroup: {
                id: "MUC-FAMILY",
                code: "FAMILY",
                name: "Family room",
                description: "Big room with balcony, whirlpool and two kingsize beds.",
                maxPersons: 4,
                type: "BedRoom"
              }
            },
            {
              arrival: "2023-05-20T10:00:00+02:00",
              departure: "2023-05-22T09:00:00+02:00",
              ratePlan: {
                id: "MUC-NONREF-DBL",
                code: "NONREF",
                name: "Non Refundable",
                description: "Pay in advance and save money. In case of cancellation or changes, we keep the total amount of the stay."
              },
              totalGrossAmount: {
                amount: 244,
                currency: "EUR"
              },
              unitGroup: {
                id: "MUC-DBL",
                code: "DBL",
                name: "Double",
                description: "Big room with balcony, whirlpool and a kingsize bed.",
                maxPersons: 2,
                type: "BedRoom"
              }
            },
            {
              arrival: "2023-05-20T10:00:00+02:00",
              departure: "2023-05-22T09:00:00+02:00",
              ratePlan: {
                id: "MUC-FLEX-DBL",
                code: "FLEX",
                name: "Flexible",
                description: "Stay fully flexible with free cancellation until midnight one day prior to arrival. Just put your CC on file to guarantee the booking."
              },
              totalGrossAmount: {
                amount: 284,
                currency: "EUR"
              },
              unitGroup: {
                id: "MUC-DBL",
                code: "DBL",
                name: "Double",
                description: "Big room with balcony, whirlpool and a kingsize bed.",
                maxPersons: 2,
                type: "BedRoom"
              }
            },
            {
              arrival: "2023-05-20T10:00:00+02:00",
              departure: "2023-05-22T09:00:00+02:00",
              ratePlan: {
                id: "MUC-FLEX-SGL",
                code: "FLEX",
                name: "Flexible",
                description: "Stay fully flexible with free cancellation until midnight one day prior to arrival. Just put your CC on file to guarantee the booking."
              },
              totalGrossAmount: {
                amount: 224,
                currency: "EUR"
              },
              unitGroup: {
                id: "MUC-SGL",
                code: "SGL",
                name: "Single",
                description: "Nice and comfortable room with shower and single bed.",
                maxPersons: 1,
                type: "BedRoom"
              }
            },
            {
              arrival: "2023-05-20T10:00:00+02:00",
              departure: "2023-05-22T09:00:00+02:00",
              ratePlan: {
                id: "MUC-PROMO-DBL",
                code: "PROMO",
                name: "Promotion",
                description: "Super special rate for single rooms only available in the promotion period."
              },
              totalGrossAmount: {
                amount: 208,
                currency: "EUR"
              },
              unitGroup: {
                id: "MUC-DBL",
                code: "DBL",
                name: "Double",
                description: "Big room with balcony, whirlpool and a kingsize bed.",
                maxPersons: 2,
                type: "BedRoom"
              }
            },
            {
              arrival: "2023-05-20T10:00:00+02:00",
              departure: "2023-05-22T09:00:00+02:00",
              ratePlan: {
                id: "MUC-NONREF-SGL",
                code: "NONREF",
                name: "Non Refundable",
                description: "Pay in advance and save money. In case of cancellation or changes, we keep the total amount of the stay."
              },
              totalGrossAmount: {
                amount: 184,
                currency: "EUR"
              },
              unitGroup: {
                id: "MUC-SGL",
                code: "SGL",
                name: "Single",
                description: "Nice and comfortable room with shower and single bed.",
                maxPersons: 1,
                type: "BedRoom"
              }
            }
          ]
        }
      ]
    }
  ],
  message: "success",
  success: true
}`

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json(JSON.parse(resData))
}
