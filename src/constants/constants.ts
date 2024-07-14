const PRODUCTLIST = [
  {
    productCode: 1,
    productName: 'product1',
    price: 150,
    supplyPrice: 300,
    vat: 25,
    shippingCost: 15,
    arrivalLocation: 'C',
    departureLocation: 'A',
    stock: 20,
    material: 'cotton',
    origin: 'Brazil',
    actions: 'Edit',
  },
  {
    productCode: 2,
    productName: 'product2',
    price: 110,
    supplyPrice: 210,
    vat: 30,
    shippingCost: 14,
    arrivalLocation: 'B',
    departureLocation: 'C',
    stock: 28,
    material: 'silk',
    origin: 'UK',
    actions: 'Edit',
  },
  {
    productCode: 3,
    productName: 'product3',
    price: 240,
    supplyPrice: 200,
    vat: 20,
    shippingCost: 10,
    arrivalLocation: 'B',
    departureLocation: 'C',
    stock: 15,
    material: 'cotton',
    origin: 'China',
    actions: 'Edit',
  },
  {
    productCode: 4,
    productName: 'product4',
    price: 175,
    supplyPrice: 275,
    vat: 22,
    shippingCost: 9,
    arrivalLocation: 'E',
    departureLocation: 'F',
    stock: 18,
    material: 'linen',
    origin: 'Australia',
    actions: 'Edit',
  },
  {
    productCode: 5,
    productName: 'product5',
    price: 125,
    supplyPrice: 195,
    vat: 19,
    shippingCost: 11,
    arrivalLocation: 'G',
    departureLocation: 'H',
    stock: 22,
    material: 'rayon',
    origin: 'China',
    actions: 'Edit',
  },
  {
    productCode: 6,
    productName: 'product6',
    price: 128,
    supplyPrice: 250,
    vat: 18,
    shippingCost: 13,
    arrivalLocation: 'A',
    departureLocation: 'B',
    stock: 15,
    material: 'linen',
    origin: 'France',
    actions: 'Edit',
  },
  {
    productCode: 7,
    productName: 'product7',
    price: 112,
    supplyPrice: 240,
    vat: 25,
    shippingCost: 8,
    arrivalLocation: 'B',
    departureLocation: 'C',
    stock: 15,
    material: 'silk',
    origin: 'Korea',
    actions: 'Edit',
  },
  {
    productCode: 8,
    productName: 'product8',
    price: 90,
    supplyPrice: 190,
    vat: 22,
    shippingCost: 15,
    arrivalLocation: 'B',
    departureLocation: 'C',
    stock: 15,
    material: 'acrylic',
    origin: 'Germany',
    actions: 'Edit',
  },
  {
    productCode: 9,
    productName: 'product9',
    price: 105,
    supplyPrice: 215,
    vat: 19,
    shippingCost: 14,
    arrivalLocation: 'A',
    departureLocation: 'B',
    stock: 15,
    material: 'nylon',
    origin: 'Spain',
    actions: 'Edit',
  },
  {
    productCode: 10,
    productName: 'product10',
    price: 95,
    supplyPrice: 210,
    vat: 21,
    shippingCost: 11,
    arrivalLocation: 'A',
    departureLocation: 'B',
    stock: 15,
    material: 'nylon',
    origin: 'Canada',
    actions: 'Edit',
  },
  {
    productCode: 11,
    productName: 'product11',
    price: 135,
    supplyPrice: 230,
    vat: 20,
    shippingCost: 9,
    arrivalLocation: 'B',
    departureLocation: 'C',
    stock: 15,
    material: 'nylon',
    origin: 'Korea',
    actions: 'Edit',
  },
  {
    productCode: 12,
    productName: 'product12',
    price: 110,
    supplyPrice: 220,
    vat: 23,
    shippingCost: 12,
    arrivalLocation: 'A',
    departureLocation: 'B',
    stock: 15,
    material: 'wool',
    origin: 'Japan',
    actions: 'Edit',
  },
  {
    productCode: 13,
    productName: 'product13',
    price: 120,
    supplyPrice: 205,
    vat: 24,
    shippingCost: 10,
    arrivalLocation: 'A',
    departureLocation: 'B',
    stock: 15,
    material: 'cotton',
    origin: 'China',
    actions: 'Edit',
  },
  {
    productCode: 14,
    productName: 'product14',
    price: 100,
    supplyPrice: 200,
    vat: 20,
    shippingCost: 10,
    arrivalLocation: 'A',
    departureLocation: 'B',
    stock: 15,
    material: 'rayon',
    origin: 'US',
    actions: 'Edit',
  },
  {
    productCode: 15,
    productName: 'product15',
    price: 150,
    supplyPrice: 180,
    vat: 25,
    shippingCost: 15,
    arrivalLocation: 'B',
    departureLocation: 'C',
    stock: 15,
    material: 'polyester',
    origin: 'Korea',
    actions: 'Edit',
  },
  {
    productCode: 16,
    productName: 'product16',
    price: 120,
    supplyPrice: 190,
    vat: 18,
    shippingCost: 12,
    arrivalLocation: 'A',
    departureLocation: 'B',
    stock: 15,
    material: 'linen',
    origin: 'France',
    actions: 'Edit',
  },
  {
    productCode: 17,
    productName: 'product17',
    price: 130,
    supplyPrice: 210,
    vat: 22,
    shippingCost: 18,
    arrivalLocation: 'B',
    departureLocation: 'C',
    stock: 15,
    material: 'silk',
    origin: 'Korea',
    actions: 'Edit',
  },
  {
    productCode: 18,
    productName: 'product18',
    price: 140,
    supplyPrice: 175,
    vat: 20,
    shippingCost: 14,
    arrivalLocation: 'A',
    departureLocation: 'B',
    stock: 15,
    material: 'acrylic',
    origin: 'Germany',
    actions: 'Edit',
  },
  {
    productCode: 19,
    productName: 'product19',
    price: 110,
    supplyPrice: 220,
    vat: 24,
    shippingCost: 13,
    arrivalLocation: 'A',
    departureLocation: 'B',
    stock: 15,
    material: 'nylon',
    origin: 'Spain',
    actions: 'Edit',
  },
  {
    productCode: 20,
    productName: 'product20',
    price: 105,
    supplyPrice: 195,
    vat: 21,
    shippingCost: 17,
    arrivalLocation: 'B',
    departureLocation: 'C',
    stock: 15,
    material: 'nylon',
    origin: 'Canada',
    actions: 'Edit',
  },
  {
    productCode: 21,
    productName: 'product21',
    price: 115,
    supplyPrice: 185,
    vat: 19,
    shippingCost: 16,
    arrivalLocation: 'A',
    departureLocation: 'B',
    stock: 15,
    material: 'nylon',
    origin: 'Korea',
    actions: 'Edit',
  },
  {
    productCode: 22,
    productName: 'product22',
    price: 125,
    supplyPrice: 225,
    vat: 23,
    shippingCost: 11,
    arrivalLocation: 'A',
    departureLocation: 'B',
    stock: 15,
    material: 'wool',
    origin: 'Japan',
    actions: 'Edit',
  },
  {
    productCode: 23,
    productName: 'product23',
    price: 135,
    supplyPrice: 205,
    vat: 26,
    shippingCost: 19,
    arrivalLocation: 'B',
    departureLocation: 'C',
    stock: 15,
    material: 'cotton',
    origin: 'China',
    actions: 'Edit',
  },
  {
    productCode: 24,
    productName: 'product24',
    price: 145,
    supplyPrice: 215,
    vat: 27,
    shippingCost: 20,
    arrivalLocation: 'A',
    departureLocation: 'B',
    stock: 15,
    material: 'rayon',
    origin: 'US',
    actions: 'Edit',
  },
  {
    productCode: 25,
    productName: 'product25',
    price: 100,
    supplyPrice: 200,
    vat: 20,
    shippingCost: 10,
    arrivalLocation: 'A',
    departureLocation: 'B',
    stock: 15,
    material: 'polyester',
    origin: 'Korea',
    actions: 'Edit',
  },
  {
    productCode: 26,
    productName: 'product26',
    price: 100,
    supplyPrice: 200,
    vat: 20,
    shippingCost: 10,
    arrivalLocation: 'A',
    departureLocation: 'B',
    stock: 15,
    material: 'linen',
    origin: 'France',
    actions: 'Edit',
  },
  {
    productCode: 27,
    productName: 'product27',
    price: 100,
    supplyPrice: 200,
    vat: 20,
    shippingCost: 10,
    arrivalLocation: 'B',
    departureLocation: 'C',
    stock: 15,
    material: 'silk',
    origin: 'Korea',
    actions: 'Edit',
  },
  {
    productCode: 28,
    productName: 'product28',
    price: 100,
    supplyPrice: 200,
    vat: 20,
    shippingCost: 10,
    arrivalLocation: 'A',
    departureLocation: 'B',
    stock: 15,
    material: 'acrylic',
    origin: 'Germany',
    actions: 'Edit',
  },
  {
    productCode: 29,
    productName: 'product29',
    price: 100,
    supplyPrice: 200,
    vat: 20,
    shippingCost: 10,
    arrivalLocation: 'A',
    departureLocation: 'B',
    stock: 15,
    material: 'nylon',
    origin: 'Spain',
    actions: 'Edit',
  },
  {
    productCode: 30,
    productName: 'product30',
    price: 100,
    supplyPrice: 200,
    vat: 20,
    shippingCost: 10,
    arrivalLocation: 'A',
    departureLocation: 'B',
    stock: 15,
    material: 'nylon',
    origin: 'Canada',
    actions: 'Edit',
  },
  {
    productCode: 31,
    productName: 'product31',
    price: 100,
    supplyPrice: 200,
    vat: 20,
    shippingCost: 10,
    arrivalLocation: 'A',
    departureLocation: 'B',
    stock: 15,
    material: 'nylon',
    origin: 'Korea',
    actions: 'Edit',
  },
  {
    productCode: 32,
    productName: 'product22',
    price: 100,
    supplyPrice: 200,
    vat: 20,
    shippingCost: 10,
    arrivalLocation: 'A',
    departureLocation: 'B',
    stock: 15,
    material: 'wool',
    origin: 'Japan',
    actions: 'Edit',
  },
  {
    productCode: 33,
    productName: 'product23',
    price: 100,
    supplyPrice: 200,
    vat: 20,
    shippingCost: 10,
    arrivalLocation: 'A',
    departureLocation: 'B',
    stock: 15,
    material: 'cotton',
    origin: 'China',
    actions: 'Edit',
  },
  {
    productCode: 34,
    productName: 'product24',
    price: 100,
    supplyPrice: 200,
    vat: 20,
    shippingCost: 10,
    arrivalLocation: 'A',
    departureLocation: 'B',
    stock: 15,
    material: 'rayon',
    origin: 'US',
    actions: 'Edit',
  },
  {
    productCode: 35,
    productName: 'product25',
    price: 100,
    supplyPrice: 200,
    vat: 20,
    shippingCost: 10,
    arrivalLocation: 'A',
    departureLocation: 'B',
    stock: 15,
    material: 'polyester',
    origin: 'Korea',
    actions: 'Edit',
  },
  {
    productCode: 36,
    productName: 'product26',
    price: 100,
    supplyPrice: 200,
    vat: 20,
    shippingCost: 10,
    arrivalLocation: 'A',
    departureLocation: 'B',
    stock: 15,
    material: 'linen',
    origin: 'France',
    actions: 'Edit',
  },
  {
    productCode: 37,
    productName: 'product27',
    price: 100,
    supplyPrice: 200,
    vat: 20,
    shippingCost: 10,
    arrivalLocation: 'A',
    departureLocation: 'B',
    stock: 15,
    material: 'silk',
    origin: 'Korea',
    actions: 'Edit',
  },
  {
    productCode: 38,
    productName: 'product28',
    price: 100,
    supplyPrice: 200,
    vat: 20,
    shippingCost: 10,
    arrivalLocation: 'A',
    departureLocation: 'B',
    stock: 15,
    material: 'acrylic',
    origin: 'Germany',
    actions: 'Edit',
  },
  {
    productCode: 39,
    productName: 'product29',
    price: 100,
    supplyPrice: 200,
    vat: 20,
    shippingCost: 10,
    arrivalLocation: 'A',
    departureLocation: 'B',
    stock: 15,
    material: 'nylon',
    origin: 'Spain',
    actions: 'Edit',
  },
  {
    productCode: 40,
    productName: 'product30',
    price: 100,
    supplyPrice: 200,
    vat: 20,
    shippingCost: 10,
    arrivalLocation: 'A',
    departureLocation: 'B',
    stock: 15,
    material: 'nylon',
    origin: 'Canada',
    actions: 'Edit',
  },
];

export default PRODUCTLIST;
