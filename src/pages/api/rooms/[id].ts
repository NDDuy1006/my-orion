import { NextApiRequest, NextApiResponse } from "next";


const roomsData = [
  {
    "condition": "Clean",
    "id": "VIE-JMW",
    "hotelId": "VIE",
    "description": "First Floor Room 1",
    "code": "VIE-JMW-VIE",
    "name": "1.001",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-SGL"
  },
  {
    "condition": "Clean",
    "id": "MUC-YOW",
    "description": "First Floor Room 1",
    "code": "MUC-YOW-MUC",
    "name": "1.001",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "MUC-DBL"
  },
  {
    "condition": "Clean",
    "id": "PAR-BZT",
    "description": "First Floor Room 1",
    "code": "PAR-BZT-PAR",
    "name": "1.001",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "PAR-DBL"
  },
  {
    "condition": "Clean",
    "id": "BER-ING",
    "description": "First Floor Room 1",
    "code": "BER-ING-BER",
    "name": "1.001",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-SGL"
  },
  {
    "condition": "Clean",
    "id": "LND-YFU",
    "description": "First Floor Room 1",
    "code": "LND-YFU-LND",
    "name": "1.001",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "LND-DBL"
  },
  {
    "condition": "Clean",
    "id": "VIE-NUJ",
    "hotelId": "VIE",
    "description": "First Floor Room 2",
    "code": "VIE-NUJ-VIE",
    "name": "1.002",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-SGL"
  },
  {
    "condition": "Clean",
    "id": "MUC-TRZ",
    "description": "First Floor Room 2",
    "code": "MUC-TRZ-MUC",
    "name": "1.002",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "MUC-DBL"
  },
  {
    "condition": "Dirty",
    "id": "PAR-WNV",
    "description": "First Floor Room 2",
    "code": "PAR-WNV-PAR",
    "name": "1.002",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "PAR-DBL"
  },
  {
    "condition": "Clean",
    "id": "BER-BUC",
    "description": "First Floor Room 2",
    "code": "BER-BUC-BER",
    "name": "1.002",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-SGL"
  },
  {
    "condition": "Dirty",
    "id": "LND-ZCF",
    "description": "First Floor Room 2",
    "code": "LND-ZCF-LND",
    "name": "1.002",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "LND-DBL"
  },
  {
    "condition": "Clean",
    "id": "MUC-AKA",
    "description": "First Floor Room 3",
    "code": "MUC-AKA-MUC",
    "name": "1.003",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "MUC-SGL"
  },
  {
    "condition": "Clean",
    "id": "PAR-DRR",
    "description": "First Floor Room 3",
    "code": "PAR-DRR-PAR",
    "name": "1.003",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "PAR-SGL"
  },
  {
    "condition": "Clean",
    "id": "VIE-DYI",
    "hotelId": "VIE",
    "description": "First Floor Room 3",
    "code": "VIE-DYI-VIE",
    "name": "1.003",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-SGL"
  },
  {
    "condition": "Clean",
    "id": "BER-PAT",
    "description": "First Floor Room 3",
    "code": "BER-PAT-BER",
    "name": "1.003",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-SGL"
  },
  {
    "condition": "Clean",
    "id": "LND-YKT",
    "description": "First Floor Room 3",
    "code": "LND-YKT-LND",
    "name": "1.003",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "LND-SGL"
  },
  {
    "condition": "Dirty",
    "id": "MUC-WTM",
    "description": "First Floor Room 4",
    "code": "MUC-WTM-MUC",
    "name": "1.004",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "MUC-DBL"
  },
  {
    "condition": "Clean",
    "id": "PAR-ZID",
    "description": "First Floor Room 4",
    "code": "PAR-ZID-PAR",
    "name": "1.004",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "PAR-DBL"
  },
  {
    "condition": "Clean",
    "id": "VIE-YNR",
    "hotelId": "VIE",
    "description": "First Floor Room 4",
    "code": "VIE-YNR-VIE",
    "name": "1.004",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-DBL"
  },
  {
    "condition": "Dirty",
    "id": "BER-PRS",
    "description": "First Floor Room 4",
    "code": "BER-PRS-BER",
    "name": "1.004",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-DBL"
  },
  {
    "condition": "Clean",
    "id": "LND-RKZ",
    "description": "First Floor Room 4",
    "code": "LND-RKZ-LND",
    "name": "1.004",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "LND-DBL"
  },
  {
    "condition": "Clean",
    "id": "MUC-KKZ",
    "description": "First Floor Room 5",
    "code": "MUC-KKZ-MUC",
    "name": "1.005",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "MUC-DBL"
  },
  {
    "condition": "Clean",
    "id": "PAR-QYX",
    "description": "First Floor Room 5",
    "code": "PAR-QYX-PAR",
    "name": "1.005",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "PAR-DBL"
  },
  {
    "condition": "Clean",
    "id": "VIE-WPI",
    "hotelId": "VIE",
    "description": "First Floor Room 5",
    "code": "VIE-WPI-VIE",
    "name": "1.005",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-DBL"
  },
  {
    "condition": "Clean",
    "id": "BER-HKD",
    "description": "First Floor Room 5",
    "code": "BER-HKD-BER",
    "name": "1.005",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-DBL"
  },
  {
    "condition": "Clean",
    "id": "LND-EKC",
    "description": "First Floor Room 5",
    "code": "LND-EKC-LND",
    "name": "1.005",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "LND-DBL"
  },
  {
    "condition": "Clean",
    "id": "MUC-SFN",
    "description": "First Floor Room 6",
    "code": "MUC-SFN-MUC",
    "name": "1.006",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "MUC-DBL"
  },
  {
    "condition": "Clean",
    "id": "PAR-EGZ",
    "description": "First Floor Room 6",
    "code": "PAR-EGZ-PAR",
    "name": "1.006",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "PAR-DBL"
  },
  {
    "condition": "Clean",
    "id": "VIE-BYK",
    "hotelId": "VIE",
    "description": "First Floor Room 6",
    "code": "VIE-BYK-VIE",
    "name": "1.006",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-DBL"
  },
  {
    "condition": "Dirty",
    "id": "BER-TUH",
    "description": "First Floor Room 6",
    "code": "BER-TUH-BER",
    "name": "1.006",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-DBL"
  },
  {
    "condition": "Clean",
    "id": "LND-EFH",
    "description": "First Floor Room 6",
    "code": "LND-EFH-LND",
    "name": "1.006",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "LND-DBL"
  },
  {
    "condition": "Clean",
    "id": "MUC-PLC",
    "description": "First Floor Room 7",
    "code": "MUC-PLC-MUC",
    "name": "1.007",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "MUC-SGL"
  },
  {
    "condition": "Clean",
    "id": "PAR-IYG",
    "description": "First Floor Room 7",
    "code": "PAR-IYG-PAR",
    "name": "1.007",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "PAR-SGL"
  },
  {
    "condition": "Dirty",
    "id": "VIE-ARP",
    "hotelId": "VIE",
    "description": "First Floor Room 7",
    "code": "VIE-ARP-VIE",
    "name": "1.007",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-SGL"
  },
  {
    "condition": "Clean",
    "id": "BER-EKP",
    "description": "First Floor Room 7",
    "code": "BER-EKP-BER",
    "name": "1.007",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-SGL"
  },
  {
    "condition": "Clean",
    "id": "LND-KPV",
    "description": "First Floor Room 7",
    "code": "LND-KPV-LND",
    "name": "1.007",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "LND-SGL"
  },
  {
    "condition": "Clean",
    "id": "VIE-HQV",
    "hotelId": "VIE",
    "description": "First Floor Room 8",
    "code": "VIE-HQV-VIE",
    "name": "1.008",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-SGL"
  },
  {
    "condition": "Dirty",
    "id": "MUC-WIG",
    "description": "First Floor Room 8",
    "code": "MUC-WIG-MUC",
    "name": "1.008",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "MUC-DBL"
  },
  {
    "condition": "Dirty",
    "id": "PAR-ARR",
    "description": "First Floor Room 8",
    "code": "PAR-ARR-PAR",
    "name": "1.008",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "PAR-DBL"
  },
  {
    "condition": "Dirty",
    "id": "BER-SZQ",
    "description": "First Floor Room 8",
    "code": "BER-SZQ-BER",
    "name": "1.008",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-SGL"
  },
  {
    "condition": "Clean",
    "id": "LND-MNK",
    "description": "First Floor Room 8",
    "code": "LND-MNK-LND",
    "name": "1.008",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "LND-DBL"
  },
  {
    "condition": "Dirty",
    "id": "MUC-WZG",
    "description": "First Floor Room 9",
    "code": "MUC-WZG-MUC",
    "name": "1.009",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "MUC-DBL"
  },
  {
    "condition": "Clean",
    "id": "PAR-RDH",
    "description": "First Floor Room 9",
    "code": "PAR-RDH-PAR",
    "name": "1.009",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "PAR-DBL"
  },
  {
    "condition": "Clean",
    "id": "VIE-KGV",
    "hotelId": "VIE",
    "description": "First Floor Room 9",
    "code": "VIE-KGV-VIE",
    "name": "1.009",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-DBL"
  },
  {
    "condition": "Dirty",
    "id": "BER-VPQ",
    "description": "First Floor Room 9",
    "code": "BER-VPQ-BER",
    "name": "1.009",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-DBL"
  },
  {
    "condition": "Clean",
    "id": "LND-GDT",
    "description": "First Floor Room 9",
    "code": "LND-GDT-LND",
    "name": "1.009",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "LND-DBL"
  },
  {
    "condition": "Clean",
    "id": "MUC-DCI",
    "description": "First Floor Room 10",
    "code": "MUC-DCI-MUC",
    "name": "1.010",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "MUC-SGL"
  },
  {
    "condition": "Clean",
    "id": "PAR-CZL",
    "description": "First Floor Room 10",
    "code": "PAR-CZL-PAR",
    "name": "1.010",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "PAR-SGL"
  },
  {
    "condition": "Dirty",
    "id": "VIE-JDP",
    "hotelId": "VIE",
    "description": "First Floor Room 10",
    "code": "VIE-JDP-VIE",
    "name": "1.010",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-DBL"
  },
  {
    "condition": "Clean",
    "id": "BER-XIN",
    "description": "First Floor Room 10",
    "code": "BER-XIN-BER",
    "name": "1.010",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-DBL"
  },
  {
    "condition": "Clean",
    "id": "LND-YZT",
    "description": "First Floor Room 10",
    "code": "LND-YZT-LND",
    "name": "1.010",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "LND-SGL"
  },
  {
    "condition": "Clean",
    "id": "MUC-AEV",
    "description": "First Floor Room 11",
    "code": "MUC-AEV-MUC",
    "name": "1.011",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "MUC-SGL"
  },
  {
    "condition": "Dirty",
    "id": "PAR-WRY",
    "description": "First Floor Room 11",
    "code": "PAR-WRY-PAR",
    "name": "1.011",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "PAR-SGL"
  },
  {
    "condition": "Clean",
    "id": "VIE-XRO",
    "hotelId": "VIE",
    "description": "First Floor Room 11",
    "code": "VIE-XRO-VIE",
    "name": "1.011",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-SGL"
  },
  {
    "condition": "Clean",
    "id": "BER-QER",
    "description": "First Floor Room 11",
    "code": "BER-QER-BER",
    "name": "1.011",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-SGL"
  },
  {
    "condition": "Clean",
    "id": "LND-FKX",
    "description": "First Floor Room 11",
    "code": "LND-FKX-LND",
    "name": "1.011",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "LND-SGL"
  },
  {
    "condition": "Clean",
    "id": "VIE-EFP",
    "hotelId": "VIE",
    "description": "First Floor Room 12",
    "code": "VIE-EFP-VIE",
    "name": "1.012",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-SGL"
  },
  {
    "condition": "Clean",
    "id": "MUC-IGL",
    "description": "First Floor Room 12",
    "code": "MUC-IGL-MUC",
    "name": "1.012",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "MUC-DBL"
  },
  {
    "condition": "Dirty",
    "id": "PAR-GHB",
    "description": "First Floor Room 12",
    "code": "PAR-GHB-PAR",
    "name": "1.012",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "PAR-DBL"
  },
  {
    "condition": "Dirty",
    "id": "BER-OHC",
    "description": "First Floor Room 12",
    "code": "BER-OHC-BER",
    "name": "1.012",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-SGL"
  },
  {
    "condition": "Clean",
    "id": "LND-QZT",
    "description": "First Floor Room 12",
    "code": "LND-QZT-LND",
    "name": "1.012",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "LND-DBL"
  },
  {
    "condition": "Clean",
    "id": "VIE-JXF",
    "hotelId": "VIE",
    "description": "First Floor Room 13",
    "code": "VIE-JXF-VIE",
    "name": "1.013",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-SGL"
  },
  {
    "condition": "Dirty",
    "id": "MUC-IGR",
    "description": "First Floor Room 13",
    "code": "MUC-IGR-MUC",
    "name": "1.013",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "MUC-DBL"
  },
  {
    "condition": "Dirty",
    "id": "PAR-IZG",
    "description": "First Floor Room 13",
    "code": "PAR-IZG-PAR",
    "name": "1.013",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "PAR-DBL"
  },
  {
    "condition": "Clean",
    "id": "BER-LPS",
    "description": "First Floor Room 13",
    "code": "BER-LPS-BER",
    "name": "1.013",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-SGL"
  },
  {
    "condition": "Dirty",
    "id": "LND-LBE",
    "description": "First Floor Room 13",
    "code": "LND-LBE-LND",
    "name": "1.013",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "LND-DBL"
  },
  {
    "condition": "Dirty",
    "id": "MUC-SSY",
    "description": "First Floor Room 14",
    "code": "MUC-SSY-MUC",
    "name": "1.014",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "MUC-DBL"
  },
  {
    "condition": "Clean",
    "id": "PAR-RZJ",
    "description": "First Floor Room 14",
    "code": "PAR-RZJ-PAR",
    "name": "1.014",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "PAR-DBL"
  },
  {
    "condition": "Dirty",
    "id": "VIE-NBR",
    "hotelId": "VIE",
    "description": "First Floor Room 14",
    "code": "VIE-NBR-VIE",
    "name": "1.014",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-DBL"
  },
  {
    "condition": "Clean",
    "id": "BER-BWP",
    "description": "First Floor Room 14",
    "code": "BER-BWP-BER",
    "name": "1.014",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-DBL"
  },
  {
    "condition": "Clean",
    "id": "LND-IHW",
    "description": "First Floor Room 14",
    "code": "LND-IHW-LND",
    "name": "1.014",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "LND-DBL"
  },
  {
    "condition": "Clean",
    "id": "MUC-WOR",
    "description": "First Floor Room 15",
    "code": "MUC-WOR-MUC",
    "name": "1.015",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "MUC-DBL"
  },
  {
    "condition": "Dirty",
    "id": "PAR-RGN",
    "description": "First Floor Room 15",
    "code": "PAR-RGN-PAR",
    "name": "1.015",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "PAR-DBL"
  },
  {
    "condition": "Clean",
    "id": "VIE-OOY",
    "hotelId": "VIE",
    "description": "First Floor Room 15",
    "code": "VIE-OOY-VIE",
    "name": "1.015",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-DBL"
  },
  {
    "condition": "Dirty",
    "id": "BER-ASG",
    "description": "First Floor Room 15",
    "code": "BER-ASG-BER",
    "name": "1.015",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-DBL"
  },
  {
    "condition": "Clean",
    "id": "LND-BKW",
    "description": "First Floor Room 15",
    "code": "LND-BKW-LND",
    "name": "1.015",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "LND-DBL"
  },
  {
    "condition": "Clean",
    "id": "VIE-EIC",
    "hotelId": "VIE",
    "description": "First Floor Room 16",
    "code": "VIE-EIC-VIE",
    "name": "1.016",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-DBL"
  },
  {
    "condition": "Dirty",
    "id": "BER-ZQY",
    "description": "First Floor Room 16",
    "code": "BER-ZQY-BER",
    "name": "1.016",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-DBL"
  },
  {
    "condition": "Clean",
    "id": "VIE-QFW",
    "hotelId": "VIE",
    "description": "First Floor Room 17",
    "code": "VIE-QFW-VIE",
    "name": "1.017",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-SGL"
  },
  {
    "condition": "Clean",
    "id": "BER-PJQ",
    "description": "First Floor Room 17",
    "code": "BER-PJQ-BER",
    "name": "1.017",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-SGL"
  },
  {
    "condition": "Clean",
    "id": "VIE-DET",
    "hotelId": "VIE",
    "description": "First Floor Room 18",
    "code": "VIE-DET-VIE",
    "name": "1.018",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-SGL"
  },
  {
    "condition": "Dirty",
    "id": "BER-YZT",
    "description": "First Floor Room 18",
    "code": "BER-YZT-BER",
    "name": "1.018",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-SGL"
  },
  {
    "condition": "Clean",
    "id": "VIE-GGK",
    "hotelId": "VIE",
    "description": "First Floor Room 19",
    "code": "VIE-GGK-VIE",
    "name": "1.019",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-DBL"
  },
  {
    "condition": "Clean",
    "id": "BER-IUX",
    "description": "First Floor Room 19",
    "code": "BER-IUX-BER",
    "name": "1.019",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-DBL"
  },
  {
    "condition": "Dirty",
    "id": "VIE-BSX",
    "hotelId": "VIE",
    "description": "First Floor Room 20",
    "code": "VIE-BSX-VIE",
    "name": "1.020",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-DBL"
  },
  {
    "condition": "Clean",
    "id": "BER-WHS",
    "description": "First Floor Room 20",
    "code": "BER-WHS-BER",
    "name": "1.020",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-DBL"
  },
  {
    "condition": "Clean",
    "id": "MUC-SQZ",
    "description": "Second Floor Room 1",
    "code": "MUC-SQZ-MUC",
    "name": "2.001",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "MUC-SGL"
  },
  {
    "condition": "Clean",
    "id": "PAR-SSI",
    "description": "Second Floor Room 1",
    "code": "PAR-SSI-PAR",
    "name": "2.001",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "PAR-SGL"
  },
  {
    "condition": "Clean",
    "id": "VIE-XVF",
    "hotelId": "VIE",
    "description": "Second Floor Room 1",
    "code": "VIE-XVF-VIE",
    "name": "2.001",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-SGL"
  },
  {
    "condition": "Clean",
    "id": "BER-FKF",
    "description": "Second Floor Room 1",
    "code": "BER-FKF-BER",
    "name": "2.001",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-SGL"
  },
  {
    "condition": "Dirty",
    "id": "LND-SQS",
    "description": "Second Floor Room 1",
    "code": "LND-SQS-LND",
    "name": "2.001",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "LND-SGL"
  },
  {
    "condition": "Clean",
    "id": "PAR-ROV",
    "description": "Second Floor Room 2",
    "code": "PAR-ROV-PAR",
    "name": "2.002",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "PAR-SGL"
  },
  {
    "condition": "Clean",
    "id": "MUC-HRR",
    "description": "Second Floor Room 2",
    "code": "MUC-HRR-MUC",
    "name": "2.002",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "MUC-SGL"
  },
  {
    "condition": "Clean",
    "id": "VIE-DWB",
    "hotelId": "VIE",
    "description": "Second Floor Room 2",
    "code": "VIE-DWB-VIE",
    "name": "2.002",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-SGL"
  },
  {
    "condition": "Dirty",
    "id": "BER-HKP",
    "description": "Second Floor Room 2",
    "code": "BER-HKP-BER",
    "name": "2.002",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-SGL"
  },
  {
    "condition": "Clean",
    "id": "LND-ZYZ",
    "description": "Second Floor Room 2",
    "code": "LND-ZYZ-LND",
    "name": "2.002",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "LND-SGL"
  },
  {
    "condition": "Clean",
    "id": "MUC-OBS",
    "description": "Second Floor Room 3",
    "code": "MUC-OBS-MUC",
    "name": "2.003",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "MUC-SGL"
  },
  {
    "condition": "Dirty",
    "id": "PAR-YIO",
    "description": "Second Floor Room 3",
    "code": "PAR-YIO-PAR",
    "name": "2.003",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "PAR-SGL"
  },
  {
    "condition": "Clean",
    "id": "VIE-QVU",
    "hotelId": "VIE",
    "description": "Second Floor Room 3",
    "code": "VIE-QVU-VIE",
    "name": "2.003",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-SGL"
  },
  {
    "condition": "Clean",
    "id": "BER-IIW",
    "description": "Second Floor Room 3",
    "code": "BER-IIW-BER",
    "name": "2.003",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-SGL"
  },
  {
    "condition": "Clean",
    "id": "LND-SUU",
    "description": "Second Floor Room 3",
    "code": "LND-SUU-LND",
    "name": "2.003",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "LND-SGL"
  },
  {
    "condition": "Clean",
    "id": "MUC-BMN",
    "description": "Second Floor Room 4",
    "code": "MUC-BMN-MUC",
    "name": "2.004",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "MUC-DBL"
  },
  {
    "condition": "Clean",
    "id": "PAR-UHZ",
    "description": "Second Floor Room 4",
    "code": "PAR-UHZ-PAR",
    "name": "2.004",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "PAR-DBL"
  },
  {
    "condition": "Clean",
    "id": "VIE-WAY",
    "hotelId": "VIE",
    "description": "Second Floor Room 4",
    "code": "VIE-WAY-VIE",
    "name": "2.004",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-DBL"
  },
  {
    "condition": "Clean",
    "id": "BER-GID",
    "description": "Second Floor Room 4",
    "code": "BER-GID-BER",
    "name": "2.004",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-DBL"
  },
  {
    "condition": "Clean",
    "id": "LND-XVG",
    "description": "Second Floor Room 4",
    "code": "LND-XVG-LND",
    "name": "2.004",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "LND-DBL"
  },
  {
    "condition": "Clean",
    "id": "MUC-ZVP",
    "description": "Second Floor Room 5",
    "code": "MUC-ZVP-MUC",
    "name": "2.005",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "MUC-DBL"
  },
  {
    "condition": "Dirty",
    "id": "PAR-VBH",
    "description": "Second Floor Room 5",
    "code": "PAR-VBH-PAR",
    "name": "2.005",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "PAR-DBL"
  },
  {
    "condition": "Clean",
    "id": "VIE-HFY",
    "hotelId": "VIE",
    "description": "Second Floor Room 5",
    "code": "VIE-HFY-VIE",
    "name": "2.005",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-DBL"
  },
  {
    "condition": "Clean",
    "id": "BER-SGX",
    "description": "Second Floor Room 5",
    "code": "BER-SGX-BER",
    "name": "2.005",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-DBL"
  },
  {
    "condition": "Clean",
    "id": "LND-VNV",
    "description": "Second Floor Room 5",
    "code": "LND-VNV-LND",
    "name": "2.005",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "LND-DBL"
  },
  {
    "condition": "Clean",
    "id": "MUC-MJE",
    "description": "Second Floor Room 6",
    "code": "MUC-MJE-MUC",
    "name": "2.006",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "MUC-DBL"
  },
  {
    "condition": "Clean",
    "id": "PAR-GRI",
    "description": "Second Floor Room 6",
    "code": "PAR-GRI-PAR",
    "name": "2.006",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "PAR-DBL"
  },
  {
    "condition": "Clean",
    "id": "VIE-UFC",
    "hotelId": "VIE",
    "description": "Second Floor Room 6",
    "code": "VIE-UFC-VIE",
    "name": "2.006",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-DBL"
  },
  {
    "condition": "Dirty",
    "id": "BER-JBZ",
    "description": "Second Floor Room 6",
    "code": "BER-JBZ-BER",
    "name": "2.006",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-DBL"
  },
  {
    "condition": "Clean",
    "id": "LND-WRD",
    "description": "Second Floor Room 6",
    "code": "LND-WRD-LND",
    "name": "2.006",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "LND-DBL"
  },
  {
    "condition": "Clean",
    "id": "MUC-LMJ",
    "description": "Second Floor Room 7",
    "code": "MUC-LMJ-MUC",
    "name": "2.007",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "MUC-SGL"
  },
  {
    "condition": "Clean",
    "id": "PAR-ORL",
    "description": "Second Floor Room 7",
    "code": "PAR-ORL-PAR",
    "name": "2.007",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "PAR-SGL"
  },
  {
    "condition": "Clean",
    "id": "VIE-KOM",
    "hotelId": "VIE",
    "description": "Second Floor Room 7",
    "code": "VIE-KOM-VIE",
    "name": "2.007",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-SGL"
  },
  {
    "condition": "Clean",
    "id": "BER-YUK",
    "description": "Second Floor Room 7",
    "code": "BER-YUK-BER",
    "name": "2.007",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-SGL"
  },
  {
    "condition": "Clean",
    "id": "LND-PHI",
    "description": "Second Floor Room 7",
    "code": "LND-PHI-LND",
    "name": "2.007",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "LND-SGL"
  },
  {
    "condition": "Clean",
    "id": "MUC-HFB",
    "description": "Second Floor Room 8",
    "code": "MUC-HFB-MUC",
    "name": "2.008",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "MUC-SGL"
  },
  {
    "condition": "Clean",
    "id": "PAR-TSW",
    "description": "Second Floor Room 8",
    "code": "PAR-TSW-PAR",
    "name": "2.008",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "PAR-SGL"
  },
  {
    "condition": "Clean",
    "id": "VIE-HAK",
    "hotelId": "VIE",
    "description": "Second Floor Room 8",
    "code": "VIE-HAK-VIE",
    "name": "2.008",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-SGL"
  },
  {
    "condition": "Clean",
    "id": "BER-FPN",
    "description": "Second Floor Room 8",
    "code": "BER-FPN-BER",
    "name": "2.008",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-SGL"
  },
  {
    "condition": "Clean",
    "id": "LND-KYO",
    "description": "Second Floor Room 8",
    "code": "LND-KYO-LND",
    "name": "2.008",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "LND-SGL"
  },
  {
    "condition": "Clean",
    "id": "MUC-DQJ",
    "description": "Second Floor Room 9",
    "code": "MUC-DQJ-MUC",
    "name": "2.009",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "MUC-DBL"
  },
  {
    "condition": "Clean",
    "id": "PAR-ZFV",
    "description": "Second Floor Room 9",
    "code": "PAR-ZFV-PAR",
    "name": "2.009",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "PAR-DBL"
  },
  {
    "condition": "Clean",
    "id": "VIE-IID",
    "hotelId": "VIE",
    "description": "Second Floor Room 9",
    "code": "VIE-IID-VIE",
    "name": "2.009",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-DBL"
  },
  {
    "condition": "Dirty",
    "id": "BER-BOR",
    "description": "Second Floor Room 9",
    "code": "BER-BOR-BER",
    "name": "2.009",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-DBL"
  },
  {
    "condition": "Clean",
    "id": "LND-IUK",
    "description": "Second Floor Room 9",
    "code": "LND-IUK-LND",
    "name": "2.009",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "LND-DBL"
  },
  {
    "condition": "Clean",
    "id": "MUC-PII",
    "description": "Second Floor Room 10",
    "code": "MUC-PII-MUC",
    "name": "2.010",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "MUC-SGL"
  },
  {
    "condition": "Clean",
    "id": "PAR-IKA",
    "description": "Second Floor Room 10",
    "code": "PAR-IKA-PAR",
    "name": "2.010",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "PAR-SGL"
  },
  {
    "condition": "Clean",
    "id": "VIE-ELE",
    "hotelId": "VIE",
    "description": "Second Floor Room 10",
    "code": "VIE-ELE-VIE",
    "name": "2.010",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-DBL"
  },
  {
    "condition": "Clean",
    "id": "BER-STY",
    "description": "Second Floor Room 10",
    "code": "BER-STY-BER",
    "name": "2.010",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-DBL"
  },
  {
    "condition": "Clean",
    "id": "LND-YUD",
    "description": "Second Floor Room 10",
    "code": "LND-YUD-LND",
    "name": "2.010",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "LND-SGL"
  },
  {
    "condition": "Dirty",
    "id": "VIE-PZM",
    "hotelId": "VIE",
    "description": "Second Floor Room 11",
    "code": "VIE-PZM-VIE",
    "name": "2.011",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-SGL"
  },
  {
    "condition": "Clean",
    "id": "MUC-AJF",
    "description": "Second Floor Room 11",
    "code": "MUC-AJF-MUC",
    "name": "2.011",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "MUC-DBL"
  },
  {
    "condition": "Dirty",
    "id": "PAR-AMC",
    "description": "Second Floor Room 11",
    "code": "PAR-AMC-PAR",
    "name": "2.011",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "PAR-DBL"
  },
  {
    "condition": "Clean",
    "id": "BER-QUH",
    "description": "Second Floor Room 11",
    "code": "BER-QUH-BER",
    "name": "2.011",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-SGL"
  },
  {
    "condition": "Clean",
    "id": "LND-URM",
    "description": "Second Floor Room 11",
    "code": "LND-URM-LND",
    "name": "2.011",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "LND-DBL"
  },
  {
    "condition": "Clean",
    "id": "MUC-GIA",
    "description": "Second Floor Room 12",
    "code": "MUC-GIA-MUC",
    "name": "2.012",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "MUC-SGL"
  },
  {
    "condition": "Clean",
    "id": "PAR-KRA",
    "description": "Second Floor Room 12",
    "code": "PAR-KRA-PAR",
    "name": "2.012",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "PAR-SGL"
  },
  {
    "condition": "Clean",
    "id": "VIE-EDX",
    "hotelId": "VIE",
    "description": "Second Floor Room 12",
    "code": "VIE-EDX-VIE",
    "name": "2.012",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-SGL"
  },
  {
    "condition": "Clean",
    "id": "BER-NCQ",
    "description": "Second Floor Room 12",
    "code": "BER-NCQ-BER",
    "name": "2.012",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-SGL"
  },
  {
    "condition": "Clean",
    "id": "LND-EEQ",
    "description": "Second Floor Room 12",
    "code": "LND-EEQ-LND",
    "name": "2.012",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "LND-SGL"
  },
  {
    "condition": "Clean",
    "id": "MUC-BRF",
    "description": "Second Floor Room 13",
    "code": "MUC-BRF-MUC",
    "name": "2.013",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "MUC-SGL"
  },
  {
    "condition": "Clean",
    "id": "PAR-OCU",
    "description": "Second Floor Room 13",
    "code": "PAR-OCU-PAR",
    "name": "2.013",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "PAR-SGL"
  },
  {
    "condition": "Clean",
    "id": "VIE-VIY",
    "hotelId": "VIE",
    "description": "Second Floor Room 13",
    "code": "VIE-VIY-VIE",
    "name": "2.013",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-SGL"
  },
  {
    "condition": "Clean",
    "id": "BER-LFS",
    "description": "Second Floor Room 13",
    "code": "BER-LFS-BER",
    "name": "2.013",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-SGL"
  },
  {
    "condition": "Clean",
    "id": "LND-ECU",
    "description": "Second Floor Room 13",
    "code": "LND-ECU-LND",
    "name": "2.013",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "LND-SGL"
  },
  {
    "condition": "Clean",
    "id": "MUC-RCF",
    "description": "Second Floor Room 14",
    "code": "MUC-RCF-MUC",
    "name": "2.014",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "MUC-DBL"
  },
  {
    "condition": "Dirty",
    "id": "PAR-DZJ",
    "description": "Second Floor Room 14",
    "code": "PAR-DZJ-PAR",
    "name": "2.014",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "PAR-DBL"
  },
  {
    "condition": "Clean",
    "id": "VIE-NUY",
    "hotelId": "VIE",
    "description": "Second Floor Room 14",
    "code": "VIE-NUY-VIE",
    "name": "2.014",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-DBL"
  },
  {
    "condition": "Clean",
    "id": "BER-XTK",
    "description": "Second Floor Room 14",
    "code": "BER-XTK-BER",
    "name": "2.014",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-DBL"
  },
  {
    "condition": "Clean",
    "id": "LND-GIS",
    "description": "Second Floor Room 14",
    "code": "LND-GIS-LND",
    "name": "2.014",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "LND-DBL"
  },
  {
    "condition": "Clean",
    "id": "MUC-VMQ",
    "description": "Second Floor Room 15",
    "code": "MUC-VMQ-MUC",
    "name": "2.015",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "MUC-DBL"
  },
  {
    "condition": "Dirty",
    "id": "PAR-HRD",
    "description": "Second Floor Room 15",
    "code": "PAR-HRD-PAR",
    "name": "2.015",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "PAR-DBL"
  },
  {
    "condition": "Clean",
    "id": "VIE-IIQ",
    "hotelId": "VIE",
    "description": "Second Floor Room 15",
    "code": "VIE-IIQ-VIE",
    "name": "2.015",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-DBL"
  },
  {
    "condition": "Clean",
    "id": "BER-JZQ",
    "description": "Second Floor Room 15",
    "code": "BER-JZQ-BER",
    "name": "2.015",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-DBL"
  },
  {
    "condition": "Clean",
    "id": "LND-PAY",
    "description": "Second Floor Room 15",
    "code": "LND-PAY-LND",
    "name": "2.015",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "LND-DBL"
  },
  {
    "condition": "Dirty",
    "id": "MUC-USP",
    "description": "Second Floor Room16",
    "code": "MUC-USP-MUC",
    "name": "2.016",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "MUC-DBL"
  },
  {
    "condition": "Dirty",
    "id": "PAR-SAI",
    "description": "Second Floor Room16",
    "code": "PAR-SAI-PAR",
    "name": "2.016",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "PAR-DBL"
  },
  {
    "condition": "Dirty",
    "id": "VIE-YZA",
    "hotelId": "VIE",
    "description": "Second Floor Room 16",
    "code": "VIE-YZA-VIE",
    "name": "2.016",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-DBL"
  },
  {
    "condition": "Clean",
    "id": "BER-CDH",
    "description": "Second Floor Room 16",
    "code": "BER-CDH-BER",
    "name": "2.016",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-DBL"
  },
  {
    "condition": "Clean",
    "id": "LND-TQR",
    "description": "Second Floor Room16",
    "code": "LND-TQR-LND",
    "name": "2.016",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "LND-DBL"
  },
  {
    "condition": "Clean",
    "id": "MUC-LXE",
    "description": "Second Floor Room 17",
    "code": "MUC-LXE-MUC",
    "name": "2.017",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "MUC-SGL"
  },
  {
    "condition": "Dirty",
    "id": "PAR-PNX",
    "description": "Second Floor Room 17",
    "code": "PAR-PNX-PAR",
    "name": "2.017",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "PAR-SGL"
  },
  {
    "condition": "Clean",
    "id": "VIE-HKU",
    "hotelId": "VIE",
    "description": "Second Floor Room 17",
    "code": "VIE-HKU-VIE",
    "name": "2.017",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-SGL"
  },
  {
    "condition": "Dirty",
    "id": "BER-JMY",
    "description": "Second Floor Room 17",
    "code": "BER-JMY-BER",
    "name": "2.017",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-SGL"
  },
  {
    "condition": "Clean",
    "id": "LND-XKC",
    "description": "Second Floor Room 17",
    "code": "LND-XKC-LND",
    "name": "2.017",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "LND-SGL"
  },
  {
    "condition": "Clean",
    "id": "VIE-FAV",
    "hotelId": "VIE",
    "description": "Second Floor Room 18",
    "code": "VIE-FAV-VIE",
    "name": "2.018",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-SGL"
  },
  {
    "condition": "Dirty",
    "id": "BER-KVX",
    "description": "Second Floor Room 18",
    "code": "BER-KVX-BER",
    "name": "2.018",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-SGL"
  },
  {
    "condition": "Clean",
    "id": "VIE-CWN",
    "hotelId": "VIE",
    "description": "Second Floor Room 19",
    "code": "VIE-CWN-VIE",
    "name": "2.019",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-DBL"
  },
  {
    "condition": "Dirty",
    "id": "BER-PDK",
    "description": "Second Floor Room 19",
    "code": "BER-PDK-BER",
    "name": "2.019",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-DBL"
  },
  {
    "condition": "Dirty",
    "id": "VIE-RKN",
    "hotelId": "VIE",
    "description": "Second Floor Room 20",
    "code": "VIE-RKN-VIE",
    "name": "2.020",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-DBL"
  },
  {
    "condition": "Clean",
    "id": "BER-TKG",
    "description": "Second Floor Room 20",
    "code": "BER-TKG-BER",
    "name": "2.020",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-DBL"
  },
  {
    "condition": "Dirty",
    "id": "LND-CGG",
    "description": "Penthouse Park View",
    "code": "LND-CGG-LND",
    "name": "3.001",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "LND-FAMILY"
  },
  {
    "condition": "Clean",
    "id": "VIE-KTD",
    "hotelId": "VIE",
    "description": "Third Floor Room 1",
    "code": "VIE-KTD-VIE",
    "name": "3.001",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-SGL"
  },
  {
    "condition": "Dirty",
    "id": "MUC-YYN",
    "description": "Penthouse Park View",
    "code": "MUC-YYN-MUC",
    "name": "3.001",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "MUC-FAMILY"
  },
  {
    "condition": "Clean",
    "id": "PAR-NKV",
    "description": "Penthouse Park View",
    "code": "PAR-NKV-PAR",
    "name": "3.001",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "PAR-FAMILY"
  },
  {
    "condition": "Dirty",
    "id": "BER-JHG",
    "description": "Third Floor Room 1",
    "code": "BER-JHG-BER",
    "name": "3.001",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-SGL"
  },
  {
    "condition": "Dirty",
    "id": "LND-MVC",
    "description": "Penthouse City View",
    "code": "LND-MVC-LND",
    "name": "3.002",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "LND-FAMILY"
  },
  {
    "condition": "Clean",
    "id": "VIE-VEF",
    "hotelId": "VIE",
    "description": "Third Floor Room 2",
    "code": "VIE-VEF-VIE",
    "name": "3.002",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-SGL"
  },
  {
    "condition": "Dirty",
    "id": "MUC-LQZ",
    "description": "Penthouse City View",
    "code": "MUC-LQZ-MUC",
    "name": "3.002",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "MUC-FAMILY"
  },
  {
    "condition": "Clean",
    "id": "PAR-SZQ",
    "description": "Penthouse City View",
    "code": "PAR-SZQ-PAR",
    "name": "3.002",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "PAR-FAMILY"
  },
  {
    "condition": "Clean",
    "id": "BER-WZT",
    "description": "Third Floor Room 2",
    "code": "BER-WZT-BER",
    "name": "3.002",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-SGL"
  },
  {
    "condition": "Clean",
    "id": "VIE-AFM",
    "hotelId": "VIE",
    "description": "Third Floor Room 3",
    "code": "VIE-AFM-VIE",
    "name": "3.003",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-SGL"
  },
  {
    "condition": "Dirty",
    "id": "BER-EVZ",
    "description": "Third Floor Room 3",
    "code": "BER-EVZ-BER",
    "name": "3.003",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-SGL"
  },
  {
    "condition": "Clean",
    "id": "VIE-PKH",
    "hotelId": "VIE",
    "description": "Third Floor Room 4",
    "code": "VIE-PKH-VIE",
    "name": "3.004",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-DBL"
  },
  {
    "condition": "Dirty",
    "id": "BER-GDP",
    "description": "Third Floor Room 4",
    "code": "BER-GDP-BER",
    "name": "3.004",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-DBL"
  },
  {
    "condition": "Dirty",
    "id": "VIE-TJK",
    "hotelId": "VIE",
    "description": "Third Floor Room 5",
    "code": "VIE-TJK-VIE",
    "name": "3.005",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-DBL"
  },
  {
    "condition": "Dirty",
    "id": "BER-VGR",
    "description": "Third Floor Room 5",
    "code": "BER-VGR-BER",
    "name": "3.005",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-DBL"
  },
  {
    "condition": "Dirty",
    "id": "VIE-DOX",
    "hotelId": "VIE",
    "description": "Third Floor Room 6",
    "code": "VIE-DOX-VIE",
    "name": "3.006",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-DBL"
  },
  {
    "condition": "Clean",
    "id": "BER-HMW",
    "description": "Third Floor Room 6",
    "code": "BER-HMW-BER",
    "name": "3.006",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-DBL"
  },
  {
    "condition": "Clean",
    "id": "VIE-CXE",
    "hotelId": "VIE",
    "description": "Third Floor Room 7",
    "code": "VIE-CXE-VIE",
    "name": "3.007",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-SGL"
  },
  {
    "condition": "Clean",
    "id": "BER-CQU",
    "description": "Third Floor Room 7",
    "code": "BER-CQU-BER",
    "name": "3.007",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-SGL"
  },
  {
    "condition": "Clean",
    "id": "VIE-YVR",
    "hotelId": "VIE",
    "description": "Third Floor Room 8",
    "code": "VIE-YVR-VIE",
    "name": "3.008",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-SGL"
  },
  {
    "condition": "Clean",
    "id": "BER-BDF",
    "description": "Third Floor Room 8",
    "code": "BER-BDF-BER",
    "name": "3.008",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-SGL"
  },
  {
    "condition": "Clean",
    "id": "VIE-SQY",
    "hotelId": "VIE",
    "description": "Third Floor Room 9",
    "code": "VIE-SQY-VIE",
    "name": "3.009",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-DBL"
  },
  {
    "condition": "Clean",
    "id": "BER-XFX",
    "description": "Third Floor Room 9",
    "code": "BER-XFX-BER",
    "name": "3.009",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-DBL"
  },
  {
    "condition": "Clean",
    "id": "VIE-YTQ",
    "hotelId": "VIE",
    "description": "Third Floor Room 10",
    "code": "VIE-YTQ-VIE",
    "name": "3.010",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-DBL"
  },
  {
    "condition": "Dirty",
    "id": "BER-IWQ",
    "description": "Third Floor Room 10",
    "code": "BER-IWQ-BER",
    "name": "3.010",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-DBL"
  },
  {
    "condition": "Clean",
    "id": "VIE-UOA",
    "hotelId": "VIE",
    "description": "Third Floor Room 11",
    "code": "VIE-UOA-VIE",
    "name": "3.011",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-SGL"
  },
  {
    "condition": "Clean",
    "id": "BER-KLG",
    "description": "Third Floor Room 11",
    "code": "BER-KLG-BER",
    "name": "3.011",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-SGL"
  },
  {
    "condition": "Clean",
    "id": "VIE-HKV",
    "hotelId": "VIE",
    "description": "Third Floor Room 12",
    "code": "VIE-HKV-VIE",
    "name": "3.012",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-SGL"
  },
  {
    "condition": "Clean",
    "id": "BER-MTG",
    "description": "Third Floor Room 12",
    "code": "BER-MTG-BER",
    "name": "3.012",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-SGL"
  },
  {
    "condition": "Clean",
    "id": "VIE-XTZ",
    "hotelId": "VIE",
    "description": "Third Floor Room 13",
    "code": "VIE-XTZ-VIE",
    "name": "3.013",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-SGL"
  },
  {
    "condition": "Clean",
    "id": "BER-QOQ",
    "description": "Third Floor Room 13",
    "code": "BER-QOQ-BER",
    "name": "3.013",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-SGL"
  },
  {
    "condition": "Clean",
    "id": "VIE-PTB",
    "hotelId": "VIE",
    "description": "Third Floor Room 14",
    "code": "VIE-PTB-VIE",
    "name": "3.014",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-DBL"
  },
  {
    "condition": "Clean",
    "id": "BER-WUF",
    "description": "Third Floor Room 14",
    "code": "BER-WUF-BER",
    "name": "3.014",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-DBL"
  },
  {
    "condition": "Clean",
    "id": "VIE-WGV",
    "hotelId": "VIE",
    "description": "Third Floor Room 15",
    "code": "VIE-WGV-VIE",
    "name": "3.015",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-DBL"
  },
  {
    "condition": "Clean",
    "id": "BER-JYA",
    "description": "Third Floor Room 15",
    "code": "BER-JYA-BER",
    "name": "3.015",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-DBL"
  },
  {
    "condition": "Clean",
    "id": "VIE-GAE",
    "hotelId": "VIE",
    "description": "Third Floor Room 16",
    "code": "VIE-GAE-VIE",
    "name": "3.016",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-DBL"
  },
  {
    "condition": "Dirty",
    "id": "BER-SWV",
    "description": "Third Floor Room 16",
    "code": "BER-SWV-BER",
    "name": "3.016",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-DBL"
  },
  {
    "condition": "Clean",
    "id": "VIE-PGL",
    "hotelId": "VIE",
    "description": "Third Floor Room 17",
    "code": "VIE-PGL-VIE",
    "name": "3.017",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-SGL"
  },
  {
    "condition": "Clean",
    "id": "BER-ZOL",
    "description": "Third Floor Room 17",
    "code": "BER-ZOL-BER",
    "name": "3.017",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-SGL"
  },
  {
    "condition": "Clean",
    "id": "VIE-MSC",
    "hotelId": "VIE",
    "description": "Third Floor Room 18",
    "code": "VIE-MSC-VIE",
    "name": "3.018",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-SGL"
  },
  {
    "condition": "Dirty",
    "id": "BER-ZKW",
    "description": "Third Floor Room 18",
    "code": "BER-ZKW-BER",
    "name": "3.018",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-SGL"
  },
  {
    "condition": "Dirty",
    "id": "VIE-RTL",
    "hotelId": "VIE",
    "description": "Third Floor Room 19",
    "code": "VIE-RTL-VIE",
    "name": "3.019",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-DBL"
  },
  {
    "condition": "Clean",
    "id": "BER-EST",
    "description": "Third Floor Room 19",
    "code": "BER-EST-BER",
    "name": "3.019",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-DBL"
  },
  {
    "condition": "Dirty",
    "id": "VIE-JDS",
    "hotelId": "VIE",
    "description": "Third Floor Room 20",
    "code": "VIE-JDS-VIE",
    "name": "3.020",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-DBL"
  },
  {
    "condition": "Clean",
    "id": "BER-DRW",
    "description": "Third Floor Room 20",
    "code": "BER-DRW-BER",
    "name": "3.020",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-DBL"
  },
  {
    "condition": "Clean",
    "id": "VIE-NDK",
    "hotelId": "VIE",
    "description": "Fourth Floor Room 1",
    "code": "VIE-NDK-VIE",
    "name": "4.001",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-SGL"
  },
  {
    "condition": "Clean",
    "id": "BER-FIR",
    "description": "Fourth Floor Room 1",
    "code": "BER-FIR-BER",
    "name": "4.001",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-SGL"
  },
  {
    "condition": "Clean",
    "id": "VIE-CIT",
    "hotelId": "VIE",
    "description": "Fourth Floor Room 2",
    "code": "VIE-CIT-VIE",
    "name": "4.002",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-SGL"
  },
  {
    "condition": "Clean",
    "id": "BER-JUD",
    "description": "Fourth Floor Room 2",
    "code": "BER-JUD-BER",
    "name": "4.002",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-SGL"
  },
  {
    "condition": "Clean",
    "id": "VIE-CHJ",
    "hotelId": "VIE",
    "description": "Fourth Floor Room 3",
    "code": "VIE-CHJ-VIE",
    "name": "4.003",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-SGL"
  },
  {
    "condition": "Clean",
    "id": "BER-BKH",
    "description": "Fourth Floor Room 3",
    "code": "BER-BKH-BER",
    "name": "4.003",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-SGL"
  },
  {
    "condition": "Clean",
    "id": "VIE-QJE",
    "hotelId": "VIE",
    "description": "Fourth Floor Room 4",
    "code": "VIE-QJE-VIE",
    "name": "4.004",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-DBL"
  },
  {
    "condition": "Clean",
    "id": "BER-ZHN",
    "description": "Fourth Floor Room 4",
    "code": "BER-ZHN-BER",
    "name": "4.004",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-DBL"
  },
  {
    "condition": "Clean",
    "id": "VIE-UZV",
    "hotelId": "VIE",
    "description": "Fourth Floor Room 5",
    "code": "VIE-UZV-VIE",
    "name": "4.005",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-DBL"
  },
  {
    "condition": "Clean",
    "id": "BER-CAF",
    "description": "Fourth Floor Room 5",
    "code": "BER-CAF-BER",
    "name": "4.005",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-DBL"
  },
  {
    "condition": "Dirty",
    "id": "VIE-CDL",
    "hotelId": "VIE",
    "description": "Fourth Floor Room 6",
    "code": "VIE-CDL-VIE",
    "name": "4.006",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-DBL"
  },
  {
    "condition": "Clean",
    "id": "BER-XSA",
    "description": "Fourth Floor Room 6",
    "code": "BER-XSA-BER",
    "name": "4.006",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-DBL"
  },
  {
    "condition": "Clean",
    "id": "VIE-QBY",
    "hotelId": "VIE",
    "description": "Fourth Floor Room 7",
    "code": "VIE-QBY-VIE",
    "name": "4.007",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-SGL"
  },
  {
    "condition": "Clean",
    "id": "BER-BRR",
    "description": "Fourth Floor Room 7",
    "code": "BER-BRR-BER",
    "name": "4.007",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-SGL"
  },
  {
    "condition": "Clean",
    "id": "VIE-YNA",
    "hotelId": "VIE",
    "description": "Fourth Floor Room 8",
    "code": "VIE-YNA-VIE",
    "name": "4.008",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-SGL"
  },
  {
    "condition": "Clean",
    "id": "BER-EYW",
    "description": "Fourth Floor Room 8",
    "code": "BER-EYW-BER",
    "name": "4.008",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-SGL"
  },
  {
    "condition": "Clean",
    "id": "VIE-LUR",
    "hotelId": "VIE",
    "description": "Fourth Floor Room 9",
    "code": "VIE-LUR-VIE",
    "name": "4.009",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-DBL"
  },
  {
    "condition": "Clean",
    "id": "BER-DWC",
    "description": "Fourth Floor Room 9",
    "code": "BER-DWC-BER",
    "name": "4.009",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-DBL"
  },
  {
    "condition": "Clean",
    "id": "VIE-JFU",
    "hotelId": "VIE",
    "description": "Fourth Floor Room 10",
    "code": "VIE-JFU-VIE",
    "name": "4.010",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-DBL"
  },
  {
    "condition": "Clean",
    "id": "BER-KDF",
    "description": "Fourth Floor Room 10",
    "code": "BER-KDF-BER",
    "name": "4.010",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-DBL"
  },
  {
    "condition": "Clean",
    "id": "VIE-UMA",
    "hotelId": "VIE",
    "description": "Fourth Floor Room 11",
    "code": "VIE-UMA-VIE",
    "name": "4.011",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-SGL"
  },
  {
    "condition": "Clean",
    "id": "BER-ZIT",
    "description": "Fourth Floor Room 11",
    "code": "BER-ZIT-BER",
    "name": "4.011",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-SGL"
  },
  {
    "condition": "Clean",
    "id": "VIE-XKU",
    "hotelId": "VIE",
    "description": "Fourth Floor Room 12",
    "code": "VIE-XKU-VIE",
    "name": "4.012",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-SGL"
  },
  {
    "condition": "Dirty",
    "id": "BER-VCW",
    "description": "Fourth Floor Room 12",
    "code": "BER-VCW-BER",
    "name": "4.012",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-SGL"
  },
  {
    "condition": "Clean",
    "id": "VIE-YMT",
    "hotelId": "VIE",
    "description": "Fourth Floor Room 13",
    "code": "VIE-YMT-VIE",
    "name": "4.013",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-SGL"
  },
  {
    "condition": "Dirty",
    "id": "BER-DPB",
    "description": "Fourth Floor Room 13",
    "code": "BER-DPB-BER",
    "name": "4.013",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-SGL"
  },
  {
    "condition": "Clean",
    "id": "VIE-CHN",
    "hotelId": "VIE",
    "description": "Fourth Floor Room 14",
    "code": "VIE-CHN-VIE",
    "name": "4.014",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-DBL"
  },
  {
    "condition": "Dirty",
    "id": "BER-FTF",
    "description": "Fourth Floor Room 14",
    "code": "BER-FTF-BER",
    "name": "4.014",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-DBL"
  },
  {
    "condition": "Clean",
    "id": "VIE-SYR",
    "hotelId": "VIE",
    "description": "Fourth Floor Room 15",
    "code": "VIE-SYR-VIE",
    "name": "4.015",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-DBL"
  },
  {
    "condition": "Clean",
    "id": "BER-HVA",
    "description": "Fourth Floor Room 15",
    "code": "BER-HVA-BER",
    "name": "4.015",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-DBL"
  },
  {
    "condition": "Dirty",
    "id": "VIE-QGY",
    "hotelId": "VIE",
    "description": "Fourth Floor Room 16",
    "code": "VIE-QGY-VIE",
    "name": "4.016",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-DBL"
  },
  {
    "condition": "Dirty",
    "id": "BER-FII",
    "description": "Fourth Floor Room 16",
    "code": "BER-FII-BER",
    "name": "4.016",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-DBL"
  },
  {
    "condition": "Clean",
    "id": "VIE-JXX",
    "hotelId": "VIE",
    "description": "Fourth Floor Room 17",
    "code": "VIE-JXX-VIE",
    "name": "4.017",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-SGL"
  },
  {
    "condition": "Clean",
    "id": "BER-MFI",
    "description": "Fourth Floor Room 17",
    "code": "BER-MFI-BER",
    "name": "4.017",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-SGL"
  },
  {
    "condition": "Clean",
    "id": "VIE-LAV",
    "hotelId": "VIE",
    "description": "Fourth Floor Room 18",
    "code": "VIE-LAV-VIE",
    "name": "4.018",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-SGL"
  },
  {
    "condition": "Clean",
    "id": "BER-FHO",
    "description": "Fourth Floor Room 18",
    "code": "BER-FHO-BER",
    "name": "4.018",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-SGL"
  },
  {
    "condition": "Clean",
    "id": "VIE-FQO",
    "hotelId": "VIE",
    "description": "Fourth Floor Room 19",
    "code": "VIE-FQO-VIE",
    "name": "4.019",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-DBL"
  },
  {
    "condition": "Dirty",
    "id": "BER-UDE",
    "description": "Fourth Floor Room 19",
    "code": "BER-UDE-BER",
    "name": "4.019",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-DBL"
  },
  {
    "condition": "Clean",
    "id": "VIE-KIU",
    "hotelId": "VIE",
    "description": "Fourth Floor Room 20",
    "code": "VIE-KIU-VIE",
    "name": "4.020",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-DBL"
  },
  {
    "condition": "Clean",
    "id": "BER-HTH",
    "description": "Fourth Floor Room 20",
    "code": "BER-HTH-BER",
    "name": "4.020",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-DBL"
  },
  {
    "condition": "Clean",
    "id": "BER-WXB",
    "description": "Penthouse Cathedral View",
    "code": "BER-WXB-BER",
    "name": "5.001",
    "createdAt": 1684317268,
    "updatedAt": 1684317268
  },
  {
    "condition": "Clean",
    "id": "VIE-OEW",
    "hotelId": "VIE",
    "description": "Penthouse Cathedral View",
    "code": "VIE-OEW-VIE",
    "name": "5.001",
    "createdAt": 1684317268,
    "updatedAt": 1684317268
  },
  {
    "condition": "Clean",
    "id": "BER-BWL",
    "description": "Penthouse City View",
    "code": "BER-BWL-BER",
    "name": "5.002",
    "createdAt": 1684317268,
    "updatedAt": 1684317268
  },
  {
    "condition": "Clean",
    "id": "VIE-IYR",
    "hotelId": "VIE",
    "description": "Penthouse City View",
    "code": "VIE-IYR-VIE",
    "name": "5.002",
    "createdAt": 1684317268,
    "updatedAt": 1684317268
  },
  {
    "condition": "Clean",
    "id": "BER-WUU",
    "description": "Fits up to 12 persons",
    "code": "BER-WUU-BER",
    "name": "Atlantic",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-MEET"
  },
  {
    "condition": "Clean",
    "id": "VIE-FMF",
    "hotelId": "VIE",
    "description": "Fits up to 12 persons",
    "code": "VIE-FMF-VIE",
    "name": "Atlantic",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-MEET"
  },
  {
    "condition": "Clean",
    "id": "MUC-VES",
    "description": "Ground Floor Room 1",
    "code": "MUC-VES-MUC",
    "name": "G.001",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "MUC-SGL"
  },
  {
    "condition": "Clean",
    "id": "PAR-SIE",
    "description": "Ground Floor Room 1",
    "code": "PAR-SIE-PAR",
    "name": "G.001",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "PAR-SGL"
  },
  {
    "condition": "Clean",
    "id": "VIE-CTJ",
    "hotelId": "VIE",
    "description": "Ground Floor Room 1",
    "code": "VIE-CTJ-VIE",
    "name": "G.001",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-SGL"
  },
  {
    "condition": "Dirty",
    "id": "BER-ECH",
    "description": "Ground Floor Room 1",
    "code": "BER-ECH-BER",
    "name": "G.001",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-SGL"
  },
  {
    "condition": "Clean",
    "id": "LND-FDI",
    "description": "Ground Floor Room 1",
    "code": "LND-FDI-LND",
    "name": "G.001",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "LND-SGL"
  },
  {
    "condition": "Clean",
    "id": "MUC-FRX",
    "description": "Ground Floor Room 2",
    "code": "MUC-FRX-MUC",
    "name": "G.002",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "MUC-SGL"
  },
  {
    "condition": "Clean",
    "id": "PAR-DBG",
    "description": "Ground Floor Room 2",
    "code": "PAR-DBG-PAR",
    "name": "G.002",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "PAR-SGL"
  },
  {
    "condition": "Clean",
    "id": "VIE-REA",
    "hotelId": "VIE",
    "description": "Ground Floor Room 2",
    "code": "VIE-REA-VIE",
    "name": "G.002",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-SGL"
  },
  {
    "condition": "Clean",
    "id": "BER-QOJ",
    "description": "Ground Floor Room 2",
    "code": "BER-QOJ-BER",
    "name": "G.002",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-SGL"
  },
  {
    "condition": "Clean",
    "id": "LND-LSM",
    "description": "Ground Floor Room 2",
    "code": "LND-LSM-LND",
    "name": "G.002",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "LND-SGL"
  },
  {
    "condition": "Clean",
    "id": "MUC-OCE",
    "description": "Ground Floor Room 3",
    "code": "MUC-OCE-MUC",
    "name": "G.003",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "MUC-SGL"
  },
  {
    "condition": "Dirty",
    "id": "PAR-ZOV",
    "description": "Ground Floor Room 3",
    "code": "PAR-ZOV-PAR",
    "name": "G.003",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "PAR-SGL"
  },
  {
    "condition": "Clean",
    "id": "VIE-DEJ",
    "hotelId": "VIE",
    "description": "Ground Floor Room 3",
    "code": "VIE-DEJ-VIE",
    "name": "G.003",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-SGL"
  },
  {
    "condition": "Clean",
    "id": "BER-HSS",
    "description": "Ground Floor Room 3",
    "code": "BER-HSS-BER",
    "name": "G.003",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-SGL"
  },
  {
    "condition": "Clean",
    "id": "LND-RAU",
    "description": "Ground Floor Room 3",
    "code": "LND-RAU-LND",
    "name": "G.003",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "LND-SGL"
  },
  {
    "condition": "Clean",
    "id": "MUC-QZI",
    "description": "Ground Floor Room 4",
    "code": "MUC-QZI-MUC",
    "name": "G.004",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "MUC-DBL"
  },
  {
    "condition": "Clean",
    "id": "PAR-YLW",
    "description": "Ground Floor Room 4",
    "code": "PAR-YLW-PAR",
    "name": "G.004",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "PAR-DBL"
  },
  {
    "condition": "Clean",
    "id": "VIE-QJD",
    "hotelId": "VIE",
    "description": "Ground Floor Room 4",
    "code": "VIE-QJD-VIE",
    "name": "G.004",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-DBL"
  },
  {
    "condition": "Dirty",
    "id": "BER-UOW",
    "description": "Ground Floor Room 4",
    "code": "BER-UOW-BER",
    "name": "G.004",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-DBL"
  },
  {
    "condition": "Clean",
    "id": "LND-IBT",
    "description": "Ground Floor Room 4",
    "code": "LND-IBT-LND",
    "name": "G.004",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "LND-DBL"
  },
  {
    "condition": "Dirty",
    "id": "MUC-DSJ",
    "description": "Ground Floor Room 5",
    "code": "MUC-DSJ-MUC",
    "name": "G.005",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "MUC-DBL"
  },
  {
    "condition": "Clean",
    "id": "PAR-JBY",
    "description": "Ground Floor Room 5",
    "code": "PAR-JBY-PAR",
    "name": "G.005",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "PAR-DBL"
  },
  {
    "condition": "Clean",
    "id": "VIE-SIL",
    "hotelId": "VIE",
    "description": "Ground Floor Room 5",
    "code": "VIE-SIL-VIE",
    "name": "G.005",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-DBL"
  },
  {
    "condition": "Dirty",
    "id": "BER-JXJ",
    "description": "Ground Floor Room 5",
    "code": "BER-JXJ-BER",
    "name": "G.005",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-DBL"
  },
  {
    "condition": "Clean",
    "id": "LND-KLL",
    "description": "Ground Floor Room 5",
    "code": "LND-KLL-LND",
    "name": "G.005",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "LND-DBL"
  },
  {
    "condition": "Clean",
    "id": "MUC-RYL",
    "description": "Ground Floor Room 6",
    "code": "MUC-RYL-MUC",
    "name": "G.006",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "MUC-DBL"
  },
  {
    "condition": "Dirty",
    "id": "PAR-KTO",
    "description": "Ground Floor Room 6",
    "code": "PAR-KTO-PAR",
    "name": "G.006",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "PAR-DBL"
  },
  {
    "condition": "Clean",
    "id": "VIE-RPA",
    "hotelId": "VIE",
    "description": "Ground Floor Room 6",
    "code": "VIE-RPA-VIE",
    "name": "G.006",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-DBL"
  },
  {
    "condition": "Dirty",
    "id": "BER-JIP",
    "description": "Ground Floor Room 6",
    "code": "BER-JIP-BER",
    "name": "G.006",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-DBL"
  },
  {
    "condition": "Clean",
    "id": "LND-LIA",
    "description": "Ground Floor Room 6",
    "code": "LND-LIA-LND",
    "name": "G.006",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "LND-DBL"
  },
  {
    "condition": "Dirty",
    "id": "MUC-MEE",
    "description": "Ground Floor Room 7",
    "code": "MUC-MEE-MUC",
    "name": "G.007",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "MUC-SGL"
  },
  {
    "condition": "Clean",
    "id": "PAR-IXA",
    "description": "Ground Floor Room 7",
    "code": "PAR-IXA-PAR",
    "name": "G.007",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "PAR-SGL"
  },
  {
    "condition": "Clean",
    "id": "VIE-GDR",
    "hotelId": "VIE",
    "description": "Ground Floor Room 7",
    "code": "VIE-GDR-VIE",
    "name": "G.007",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-SGL"
  },
  {
    "condition": "Clean",
    "id": "BER-KTF",
    "description": "Ground Floor Room 7",
    "code": "BER-KTF-BER",
    "name": "G.007",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "BER-SGL"
  },
  {
    "condition": "Clean",
    "id": "LND-DGA",
    "description": "Ground Floor Room 7",
    "code": "LND-DGA-LND",
    "name": "G.007",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "LND-SGL"
  },
  {
    "condition": "Clean",
    "id": "MUC-QMV",
    "description": "Ground Floor Room 8",
    "code": "MUC-QMV-MUC",
    "name": "G.008",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "MUC-SGL"
  },
  {
    "condition": "Clean",
    "id": "VIE-JZV",
    "hotelId": "VIE",
    "description": "Ground Floor Room 8",
    "code": "VIE-JZV-VIE",
    "name": "G.008",
    "createdAt": 1684317268,
    "updatedAt": 1684317268,
    "roomTypeId": "VIE-SGL"
  },
  {
    "condition": "Clean",
    "id": "PAR-UHM",
    "description": "Ground Floor Room 8",
    "code": "PAR-UHM-PAR",
    "name": "G.008",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "PAR-SGL"
  },
  {
    "condition": "Clean",
    "id": "BER-PKF",
    "description": "Ground Floor Room 8",
    "code": "BER-PKF-BER",
    "name": "G.008",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "BER-SGL"
  },
  {
    "condition": "Clean",
    "id": "LND-CBP",
    "description": "Ground Floor Room 8",
    "code": "LND-CBP-LND",
    "name": "G.008",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "LND-SGL"
  },
  {
    "condition": "Clean",
    "id": "MUC-QJS",
    "description": "Ground Floor Room 9",
    "code": "MUC-QJS-MUC",
    "name": "G.009",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "MUC-DBL"
  },
  {
    "condition": "Clean",
    "id": "PAR-ZUQ",
    "description": "Ground Floor Room 9",
    "code": "PAR-ZUQ-PAR",
    "name": "G.009",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "PAR-DBL"
  },
  {
    "condition": "Clean",
    "id": "VIE-YKD",
    "hotelId": "VIE",
    "description": "Ground Floor Room 9",
    "code": "VIE-YKD-VIE",
    "name": "G.009",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "VIE-DBL"
  },
  {
    "condition": "Dirty",
    "id": "BER-PRJ",
    "description": "Ground Floor Room 9",
    "code": "BER-PRJ-BER",
    "name": "G.009",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "BER-DBL"
  },
  {
    "condition": "Clean",
    "id": "LND-GJX",
    "description": "Ground Floor Room 9",
    "code": "LND-GJX-LND",
    "name": "G.009",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "LND-DBL"
  },
  {
    "condition": "Clean",
    "id": "MUC-DCR",
    "description": "Ground Floor Room 10",
    "code": "MUC-DCR-MUC",
    "name": "G.010",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "MUC-SGL"
  },
  {
    "condition": "Clean",
    "id": "PAR-UXE",
    "description": "Ground Floor Room 10",
    "code": "PAR-UXE-PAR",
    "name": "G.010",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "PAR-SGL"
  },
  {
    "condition": "Clean",
    "id": "VIE-GIB",
    "hotelId": "VIE",
    "description": "Ground Floor Room 10",
    "code": "VIE-GIB-VIE",
    "name": "G.010",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "VIE-DBL"
  },
  {
    "condition": "Dirty",
    "id": "BER-TTJ",
    "description": "Ground Floor Room 10",
    "code": "BER-TTJ-BER",
    "name": "G.010",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "BER-DBL"
  },
  {
    "condition": "Clean",
    "id": "LND-TYU",
    "description": "Ground Floor Room 10",
    "code": "LND-TYU-LND",
    "name": "G.010",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "LND-SGL"
  },
  {
    "condition": "Clean",
    "id": "VIE-EGI",
    "hotelId": "VIE",
    "description": "Ground Floor Room 11",
    "code": "VIE-EGI-VIE",
    "name": "G.011",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "VIE-SGL"
  },
  {
    "condition": "Dirty",
    "id": "MUC-FDG",
    "description": "Ground Floor Room 11",
    "code": "MUC-FDG-MUC",
    "name": "G.011",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "MUC-DBL"
  },
  {
    "condition": "Clean",
    "id": "PAR-YUU",
    "description": "Ground Floor Room 11",
    "code": "PAR-YUU-PAR",
    "name": "G.011",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "PAR-DBL"
  },
  {
    "condition": "Clean",
    "id": "BER-XLZ",
    "description": "Ground Floor Room 11",
    "code": "BER-XLZ-BER",
    "name": "G.011",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "BER-SGL"
  },
  {
    "condition": "Clean",
    "id": "LND-BKQ",
    "description": "Ground Floor Room 11",
    "code": "LND-BKQ-LND",
    "name": "G.011",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "LND-DBL"
  },
  {
    "condition": "Clean",
    "id": "MUC-BRE",
    "description": "Ground Floor Room 12",
    "code": "MUC-BRE-MUC",
    "name": "G.012",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "MUC-SGL"
  },
  {
    "condition": "Clean",
    "id": "PAR-EAL",
    "description": "Ground Floor Room 12",
    "code": "PAR-EAL-PAR",
    "name": "G.012",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "PAR-SGL"
  },
  {
    "condition": "Clean",
    "id": "VIE-OTI",
    "hotelId": "VIE",
    "description": "Ground Floor Room 12",
    "code": "VIE-OTI-VIE",
    "name": "G.012",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "VIE-SGL"
  },
  {
    "condition": "Dirty",
    "id": "BER-GGF",
    "description": "Ground Floor Room 12",
    "code": "BER-GGF-BER",
    "name": "G.012",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "BER-SGL"
  },
  {
    "condition": "Clean",
    "id": "LND-NNT",
    "description": "Ground Floor Room 12",
    "code": "LND-NNT-LND",
    "name": "G.012",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "LND-SGL"
  },
  {
    "condition": "Clean",
    "id": "MUC-FNV",
    "description": "Ground Floor Room 13",
    "code": "MUC-FNV-MUC",
    "name": "G.013",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "MUC-SGL"
  },
  {
    "condition": "Clean",
    "id": "PAR-AGX",
    "description": "Ground Floor Room 13",
    "code": "PAR-AGX-PAR",
    "name": "G.013",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "PAR-SGL"
  },
  {
    "condition": "Clean",
    "id": "VIE-YUA",
    "hotelId": "VIE",
    "description": "Ground Floor Room 13",
    "code": "VIE-YUA-VIE",
    "name": "G.013",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "VIE-SGL"
  },
  {
    "condition": "Dirty",
    "id": "BER-UAQ",
    "description": "Ground Floor Room 13",
    "code": "BER-UAQ-BER",
    "name": "G.013",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "BER-SGL"
  },
  {
    "condition": "Clean",
    "id": "LND-AAM",
    "description": "Ground Floor Room 13",
    "code": "LND-AAM-LND",
    "name": "G.013",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "LND-SGL"
  },
  {
    "condition": "Clean",
    "id": "MUC-MGP",
    "description": "Ground Floor Room 14",
    "code": "MUC-MGP-MUC",
    "name": "G.014",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "MUC-DBL"
  },
  {
    "condition": "Dirty",
    "id": "PAR-QBX",
    "description": "Ground Floor Room 14",
    "code": "PAR-QBX-PAR",
    "name": "G.014",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "PAR-DBL"
  },
  {
    "condition": "Dirty",
    "id": "VIE-WTK",
    "hotelId": "VIE",
    "description": "Ground Floor Room 14",
    "code": "VIE-WTK-VIE",
    "name": "G.014",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "VIE-DBL"
  },
  {
    "condition": "Dirty",
    "id": "BER-HUG",
    "description": "Ground Floor Room 14",
    "code": "BER-HUG-BER",
    "name": "G.014",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "BER-DBL"
  },
  {
    "condition": "Clean",
    "id": "LND-PME",
    "description": "Ground Floor Room 14",
    "code": "LND-PME-LND",
    "name": "G.014",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "LND-DBL"
  },
  {
    "condition": "Clean",
    "id": "MUC-HOG",
    "description": "Ground Floor Room 15",
    "code": "MUC-HOG-MUC",
    "name": "G.015",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "MUC-DBL"
  },
  {
    "condition": "Dirty",
    "id": "PAR-UCW",
    "description": "Ground Floor Room 15",
    "code": "PAR-UCW-PAR",
    "name": "G.015",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "PAR-DBL"
  },
  {
    "condition": "Clean",
    "id": "VIE-YMV",
    "hotelId": "VIE",
    "description": "Ground Floor Room 15",
    "code": "VIE-YMV-VIE",
    "name": "G.015",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "VIE-DBL"
  },
  {
    "condition": "Dirty",
    "id": "BER-ZTT",
    "description": "Ground Floor Room 15",
    "code": "BER-ZTT-BER",
    "name": "G.015",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "BER-DBL"
  },
  {
    "condition": "Clean",
    "id": "LND-INJ",
    "description": "Ground Floor Room 15",
    "code": "LND-INJ-LND",
    "name": "G.015",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "LND-DBL"
  },
  {
    "condition": "Dirty",
    "id": "MUC-XMB",
    "description": "Ground Floor Room16",
    "code": "MUC-XMB-MUC",
    "name": "G.016",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "MUC-DBL"
  },
  {
    "condition": "Clean",
    "id": "PAR-HBG",
    "description": "Ground Floor Room16",
    "code": "PAR-HBG-PAR",
    "name": "G.016",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "PAR-DBL"
  },
  {
    "condition": "Dirty",
    "id": "VIE-FVM",
    "hotelId": "VIE",
    "description": "Ground Floor Room 16",
    "code": "VIE-FVM-VIE",
    "name": "G.016",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "VIE-DBL"
  },
  {
    "condition": "Dirty",
    "id": "BER-DQE",
    "description": "Ground Floor Room 16",
    "code": "BER-DQE-BER",
    "name": "G.016",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "BER-DBL"
  },
  {
    "condition": "Clean",
    "id": "LND-MNN",
    "description": "Ground Floor Room16",
    "code": "LND-MNN-LND",
    "name": "G.016",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "LND-DBL"
  },
  {
    "condition": "Clean",
    "id": "MUC-LGM",
    "description": "Ground Floor Room 17",
    "code": "MUC-LGM-MUC",
    "name": "G.017",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "MUC-SGL"
  },
  {
    "condition": "Clean",
    "id": "PAR-LVQ",
    "description": "Ground Floor Room 17",
    "code": "PAR-LVQ-PAR",
    "name": "G.017",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "PAR-SGL"
  },
  {
    "condition": "Clean",
    "id": "VIE-BOB",
    "hotelId": "VIE",
    "description": "Ground Floor Room 17",
    "code": "VIE-BOB-VIE",
    "name": "G.017",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "VIE-SGL"
  },
  {
    "condition": "Clean",
    "id": "BER-FLX",
    "description": "Ground Floor Room 17",
    "code": "BER-FLX-BER",
    "name": "G.017",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "BER-SGL"
  },
  {
    "condition": "Clean",
    "id": "LND-KPH",
    "description": "Ground Floor Room 17",
    "code": "LND-KPH-LND",
    "name": "G.017",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "LND-SGL"
  },
  {
    "condition": "Clean",
    "id": "VIE-RFK",
    "hotelId": "VIE",
    "description": "Ground Floor Room 18",
    "code": "VIE-RFK-VIE",
    "name": "G.018",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "VIE-SGL"
  },
  {
    "condition": "Clean",
    "id": "BER-IZT",
    "description": "Ground Floor Room 18",
    "code": "BER-IZT-BER",
    "name": "G.018",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "BER-SGL"
  },
  {
    "condition": "Clean",
    "id": "VIE-KPP",
    "hotelId": "VIE",
    "description": "Ground Floor Room 19",
    "code": "VIE-KPP-VIE",
    "name": "G.019",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "VIE-DBL"
  },
  {
    "condition": "Clean",
    "id": "BER-FGI",
    "description": "Ground Floor Room 19",
    "code": "BER-FGI-BER",
    "name": "G.019",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "BER-DBL"
  },
  {
    "condition": "Dirty",
    "id": "VIE-BWZ",
    "hotelId": "VIE",
    "description": "Ground Floor Room 20",
    "code": "VIE-BWZ-VIE",
    "name": "G.020",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "VIE-DBL"
  },
  {
    "condition": "Clean",
    "id": "BER-HKK",
    "description": "Ground Floor Room 20",
    "code": "BER-HKK-BER",
    "name": "G.020",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "BER-DBL"
  },
  {
    "condition": "Clean",
    "id": "BER-ZWO",
    "description": "Fits up to 6 persons",
    "code": "BER-ZWO-BER",
    "name": "Mediterranean",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "BER-MEET"
  },
  {
    "condition": "Clean",
    "id": "VIE-HKA",
    "hotelId": "VIE",
    "description": "Fits up to 6 persons",
    "code": "VIE-HKA-VIE",
    "name": "Mediterranean",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "VIE-MEET"
  },
  {
    "condition": "Clean",
    "id": "BER-TMD",

    "description": "Fits up to 18 persons",
    "code": "BER-TMD-BER",
    "name": "Pacific",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "BER-MEET"
  },
  {
    "condition": "Clean",
    "id": "VIE-CPO",
    "hotelId": "VIE",
    "description": "Fits up to 18 persons",
    "code": "VIE-CPO-VIE",
    "name": "Pacific",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "VIE-MEET"
  },
  {
    "condition": "Clean",
    "id": "BER-EPV",
    "description": "xzxzxzx",
    "code": "BER-EPV-BER",
    "name": "zxzxz",
    "createdAt": 1684317269,
    "updatedAt": 1684317269,
    "roomTypeId": "BER-MEET"
  }
];


export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {

  let { id, page, perPage } = req.query;

  const findData = roomsData.filter((ele: any) => ele.hotelId === id);

  let startPoint = (Number(page) - 1) * Number(perPage);
  let endPoint = startPoint + Number(perPage);
  let totalCount = Math.ceil(findData.length);

  const dataPagination = findData.slice(Number(startPoint), Number(endPoint));


  if (findData.length <= 0) {
    return res.status(404).json({ message: 'Not found!' })!
  }

  return res.status(200).json({ data: dataPagination, currentPage: Number(page), total: totalCount });

}