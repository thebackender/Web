export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    rating: number;
    open_gallery: boolean;
    gallery: Array<string>;
    link: string;
  }
  
  export const amazon_products = [
    {
      id: 1,
      name: 'Capacity',
      price: 35.67,
      description: 'Amazon Basics 8-Sheet Capacity, Cross-Cut Paper and Credit Card Shredder, 4.1 Gallon',
      image: '../assets/images/1_1.jpg',
      rating: 5,
      open_gallery: false,
      gallery: ['../assets/images/1_2.jpg', '../assets/images/1_3.jpg', '../assets/images/1_4.jpg'],
      link: 'https://www.amazon.com/AmazonBasics-8-Sheet-Cross-Cut-Credit-Shredder/dp/B00YFTHJ9C/ref=sr_1_5?keywords=amazonbasics&pd_rd_r=8aec6e70-7187-409b-b93d-cad4a10fdaae&pd_rd_w=fldAm&pd_rd_wg=W278W&pf_rd_p=9349ffb9-3aaa-476f-8532-6a4a5c3da3e7&pf_rd_r=52J70YGXCY071XNJSKR3&qid=1646576392&sr=8-5'
    },
    {
      id: 2,
      name: 'Bed Sheet Set',
      price: 19.99,
      description: 'Amazon Basics Lightweight Super Soft Easy Care Microfiber Bed Sheet Set with 14" Deep Pockets - Queen, Dark Gray',
      image: '../assets/images/2_1.jpg',
      rating: 2,
      open_gallery: false,
      gallery: ['../assets/images/2_2.jpg', '../assets/images/2_3.jpg', '../assets/images/2_4.jpg'],
      link: 'https://www.amazon.com/AmazonBasics-Microfiber-Sheet-Set-Queen/dp/B00Q7OARO2/ref=sr_1_omk_6?keywords=amazonbasics&pd_rd_r=8aec6e70-7187-409b-b93d-cad4a10fdaae&pd_rd_w=fldAm&pd_rd_wg=W278W&pf_rd_p=9349ffb9-3aaa-476f-8532-6a4a5c3da3e7&pf_rd_r=52J70YGXCY071XNJSKR3&qid=1646576392&sr=8-6'
    },
    {
      id: 3,
      name: 'Batteries',
      price: 15.36,
      description: '',
      image: '../assets/images/3_1.jpg',
      rating: 3,
      open_gallery: false,
      gallery: ['../assets/images/3_2.jpg', '../assets/images/3_3.jpg', '../assets/images/3_4.jpg'],
      link: 'https://www.amazon.com/AmazonBasics-Performance-Alkaline-Batteries-Count/dp/B00MNV8E0C/ref=sr_1_7?keywords=amazonbasics&pd_rd_r=8aec6e70-7187-409b-b93d-cad4a10fdaae&pd_rd_w=fldAm&pd_rd_wg=W278W&pf_rd_p=9349ffb9-3aaa-476f-8532-6a4a5c3da3e7&pf_rd_r=52J70YGXCY071XNJSKR3&qid=1646576543&sr=8-7'
    },
    {
      id: 4,
      name: 'Cloth Hanger',
      price: 26.53,
      description: 'Amazon Basics Slim, Velvet, Non-Slip Suit Clothes Hangers, Black/Silver - Pack of 50',
      image: '../assets/images/4_1.jpg',
      rating: 1,
      open_gallery: false,
      gallery: ['../assets/images/4_2.jpg', '../assets/images/4_3.jpg', '../assets/images/4_4.jpg'],
      link: 'https://www.amazon.com/Amazon-Basics-Non-Slip-Clothes-Hangers/dp/B00FXNAAW2/ref=sr_1_8?keywords=amazonbasics&pd_rd_r=8aec6e70-7187-409b-b93d-cad4a10fdaae&pd_rd_w=fldAm&pd_rd_wg=W278W&pf_rd_p=9349ffb9-3aaa-476f-8532-6a4a5c3da3e7&pf_rd_r=52J70YGXCY071XNJSKR3&qid=1646576543&sr=8-8'
    },
    {
      id: 5,
      name: 'Storage Bag',
      price: 9.72,
      description: 'Amazon Basics Sandwich Storage Bags, 300 Count (Previously Solimo)',
      image: '../assets/images/5_1.jpg',
      rating: 4,
      open_gallery: false,
      gallery: ['../assets/images/5_2.jpg', '../assets/images/5_3.jpg', '../assets/images/5_4.jpg'],
      link: 'https://www.amazon.com/Amazon-Basics-Sandwich-Storage-Previously/dp/B095PQ6SX7/ref=sr_1_10?keywords=amazonbasics&pd_rd_r=8aec6e70-7187-409b-b93d-cad4a10fdaae&pd_rd_w=fldAm&pd_rd_wg=W278W&pf_rd_p=9349ffb9-3aaa-476f-8532-6a4a5c3da3e7&pf_rd_r=52J70YGXCY071XNJSKR3&qid=1646576543&sr=8-10'
    },
    {
      id: 6,
      name: 'Outlets',
      price: 15.99,
      description: 'ECHOGEAR On-Wall Surge Protector with 6 Pivoting AC Outlets & 1080 Joules of Surge Protection - Low Profile Design Installs Over Existing Outlets to Protect Your Gear (White)',
      image: '../assets/images/6_1.jpg',
      rating: 2,
      open_gallery: false,
      gallery: ['../assets/images/6_2.jpg', '../assets/images/6_3.jpg', '../assets/images/6_4.jpg'],
      link: 'https://www.amazon.com/ECHOGEAR-Protector-Pivoting-Outlets-Protection/dp/B071NGLS26/ref=sr_1_9?keywords=amazonbasics&pd_rd_r=8aec6e70-7187-409b-b93d-cad4a10fdaae&pd_rd_w=fldAm&pd_rd_wg=W278W&pf_rd_p=9349ffb9-3aaa-476f-8532-6a4a5c3da3e7&pf_rd_r=52J70YGXCY071XNJSKR3&qid=1646576543&sr=8-9'
    },
    {
      id: 7,
      name: 'Dermaplaning tool',
      price: 4.38,
      description: 'Amazon Basics Multipurpose Exfoliating Dermaplaning Tool, Eyebrow Razor, and Facial Razor, Includes Blade Cover, 3 Count, 1 Pack of 3',
      image: '../assets/images/7_1.jpg',
      rating: 5,
      open_gallery: false,
      gallery: ['../assets/images/7_2.jpg', '../assets/images/7_3.jpg', '../assets/images/7_4.jpg'],
      link: 'https://www.amazon.com/Amazon-Basics-Dermaplane-Razor/dp/B08WQB1CDG/ref=sr_1_11?keywords=amazonbasics&pd_rd_r=8aec6e70-7187-409b-b93d-cad4a10fdaae&pd_rd_w=fldAm&pd_rd_wg=W278W&pf_rd_p=9349ffb9-3aaa-476f-8532-6a4a5c3da3e7&pf_rd_r=52J70YGXCY071XNJSKR3&qid=1646576543&sr=8-11'
    },
    {
      id: 8,
      name: 'Power strip',
      price: 10.72,
      description: '',
      image: '../assets/images/8_1.jpg',
      rating: 1,
      open_gallery: false,
      gallery: ['../assets/images/8_2.jpg', '../assets/images/8_3.jpg', '../assets/images/8_4.jpg'],
      link: 'https://www.amazon.com/Protector-Nuetsa-Extension-Outlets-Joules/dp/B09F2XPJ47/ref=sr_1_12?keywords=amazonbasics&pd_rd_r=8aec6e70-7187-409b-b93d-cad4a10fdaae&pd_rd_w=fldAm&pd_rd_wg=W278W&pf_rd_p=9349ffb9-3aaa-476f-8532-6a4a5c3da3e7&pf_rd_r=52J70YGXCY071XNJSKR3&qid=1646576543&sr=8-12'
    },
    {
      id: 9,
      name: 'Food Storage',
      price: 13.15,
      description: 'Amazon Basics Glass Food Storage, 3.6-Cup, 8-Piece Set, 4 Containers and 4 BPA-Free Lids',
      image: '../assets/images/9_1.jpg',
      rating: 5,
      open_gallery: false,
      gallery: ['../assets/images/9_2.jpg', '../assets/images/9_3.jpg', '../assets/images/9_4.jpg'],
      link: 'https://www.amazon.com/AmazonBasics-Storage-3-6-Cup-Containers-BPA-Free/dp/B08BS6K7W2/ref=sr_1_13?keywords=amazonbasics&pd_rd_r=8aec6e70-7187-409b-b93d-cad4a10fdaae&pd_rd_w=fldAm&pd_rd_wg=W278W&pf_rd_p=9349ffb9-3aaa-476f-8532-6a4a5c3da3e7&pf_rd_r=52J70YGXCY071XNJSKR3&qid=1646576543&sr=8-13'
    },
    {
      id: 10,
      name: 'Steel Scraper',
      price: 8.32,
      description: 'Amazon Basics Multi-Purpose Stainless Steel Scraper/Chopper with Contoured Grip, 6-Inch',
      image: '../assets/images/10_1.jpg',
      rating: 0,
      open_gallery: false,
      gallery: ['../assets/images/10_2.jpg', '../assets/images/10_3.jpg', '../assets/images/10_4.jpg'],
      link: 'https://www.amazon.com/AmazonBasics-Multi-purpose-Stainless-Scraper-Chopper/dp/B07255T6SW/ref=sr_1_15?keywords=amazonbasics&pd_rd_r=8aec6e70-7187-409b-b93d-cad4a10fdaae&pd_rd_w=fldAm&pd_rd_wg=W278W&pf_rd_p=9349ffb9-3aaa-476f-8532-6a4a5c3da3e7&pf_rd_r=52J70YGXCY071XNJSKR3&qid=1646577363&sr=8-15'
    }
  ];
  
  
  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */