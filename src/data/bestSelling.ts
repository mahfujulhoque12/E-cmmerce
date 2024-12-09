
import image1 from "/public/feature-products/bed5.png";
import image2 from "/public/feature-products/chair2.png";
import image3 from "/public/new-arraival/cabinet3.png";
import image4 from "/public/feature-products/table2.png";
import image5 from "/public/feature-products/sofa1.png";
import image6 from "/public/new-arraival/cabinet6.png";
import image7 from "/public/new-arraival/cabinet7.png";
import image8 from "/public/new-arraival/cabinet8.png";
import image9 from "/public/new-arraival/cabinet9.png";
import image10 from "/public/new-arraival/cabinet10.png";



function createSlug(text: string): string {
  return text
    .toString() // Convert to string
    .toLowerCase() // Convert to lowercase
    .trim() // Remove whitespace from both ends
    .replace(/[\s\W-]+/g, "-") // Replace spaces and non-word characters with a single hyphen
    .replace(/^-+|-+$/g, ""); // Remove leading or trailing hyphens
}

type CardData = {
  id: number;
  slug: string;
  image: string;
  price: number;
  oldPrice: number;
  discount: number;
  title: string;
  category:string;
  moreImg:string[]
  brand:string;
  des:string;
  source:string;
};

export const cardData: CardData[] = [
  {
    
    id: 211,
    title: "Simpel bed for best selling test",
   source:'best-selling',
    slug: createSlug("Simpel bed for you and your family10"),
    category:"new arraival",
    image: image1.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
    moreImg:[image2.src,image1.src,image3.src,image10.src,],
    brand:"Top Ten",
    des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and sc",
  },
  {
    id: 212,
    title: "Speacial bed for you",
   source:'best-selling',
    slug: createSlug( "Speacial bed for you9"),
     category:"new arraival",
    image: image2.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
    moreImg:[image2.src,image1.src,image3.src,image10.src,],
     brand:"Top Ten",
    des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and sc",
  },
  {
    id: 213,
    title: "Normal bed for you",
   source:'best-selling',
    slug: createSlug("Normal bed for you8"),
     category:"new arraival",
    image: image3.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
    moreImg:[image2.src,image1.src,image3.src,image10.src,],
     brand:"Top Ten",
    des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and sc",
  },
  {
    id: 214,
    title: "Luxzary bed for you",
   source:'best-selling',
    slug: createSlug( "Luxzary bed for you7"),
     category:"new arraival",
    image: image4.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
    moreImg:[image2.src,image1.src,image3.src,image10.src,],
     brand:"Top Ten",
    des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and sc",
  },
  {
    id: 215,
    title: "Classic bed for you",
   source:'best-selling',
    slug: createSlug( "Classic bed for you6"),
     category:"new arraival",
    image: image5.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
    moreImg:[image2.src,image1.src,image3.src,image10.src,],
     brand:"Top Ten",
    des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and sc",
  },
  {
    id: 216,
    title: "Kid's Furnitue for you",
   source:'best-selling',
    slug: createSlug("Kid's Furnitue for you5"),
     category:"new arraival",
    image: image6.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
    moreImg:[image2.src,image1.src,image3.src,image10.src,],
     brand:"Top Ten",
    des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and sc",
  },
  {
    id: 217,
    title: "Classic Kid's Furnitue",
   source:'best-selling',
    slug: createSlug("Classic Kid's Furnitue4"),
     category:"new arraival",
    image: image7.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
    moreImg:[image2.src,image1.src,image3.src,image10.src,],
     brand:"Top Ten",
    des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and sc",
  },
  {
    id: 218,
    title: "Simple Chair For you",
   source:'best-selling',
    slug: createSlug("Simple Chair For you3"),
     category:"new arraival",
    image: image8.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
    moreImg:[image2.src,image1.src,image3.src,image10.src,],
     brand:"Top Ten",
    des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and sc",
  },
  {
    id: 219,
    title: "Normal Chair For you",
   source:'best-selling',
    slug: createSlug("Normal Chair For you2"),
     category:"new arraival",
    image: image9.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
    moreImg:[image2.src,image1.src,image3.src,image10.src,],
     brand:"Top Ten",
    des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and sc",
  },
  {
    id: 220,
    title: "Simple Light For you",
   source:'best-selling',
    slug: createSlug( "Simple Light For you1"),
     category:"new arraival",
    image: image10.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
    moreImg:[image2.src,image1.src,image3.src,image10.src,],
     brand:"Top Ten",
    des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and sc",
  },
]