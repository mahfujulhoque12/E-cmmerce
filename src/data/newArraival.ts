
import image1 from "/public/new-arraival/cabinet1.png";
import image2 from "/public/new-arraival/cabinet2.png";
import image3 from "/public/new-arraival/cabinet3.png";
import image4 from "/public/new-arraival/cabinet4.png";
import image5 from "/public/new-arraival/cabinet5.png";
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
  moreImg:string[];
  brand:string;
  des:string;
  source:string;
};

export const cardData: CardData[] = [
  {
    id: 201,
    title: "Simpel bed for  new arraival test",
    source:"new-arraival",
    slug: createSlug( "Simpel bed for you and your family"),
    category:"new arraival",
    image: image1.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
    moreImg:[image2.src, image4.src, image5.src,image6.src],
    brand:"Top Ten",
    des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and sc",
  },
  {
    id: 202,
    title: "Speacial bed for you",
    source:"new-arraival",
    slug: createSlug("Speacial bed for you"),
     category:"new arraival",
    image: image2.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
        moreImg:[image2.src, image4.src, image5.src,image6.src],
        brand:"Top Ten",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and sc",
        
  },
  {
    id: 203,
    title: "Normal bed for you",
    source:"new-arraival",
    slug: createSlug( "Normal bed for you",),
     category:"new arraival",
    image: image3.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
        moreImg:[image2.src, image4.src, image5.src,image6.src],
        brand:"Top Ten",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and sc",
  },
  {
    id: 204,
    title: "Luxzary bed for you",
    source:"new-arraival",
    slug: createSlug( "Luxzary bed for you"),
     category:"new arraival",
    image: image4.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
        moreImg:[image2.src, image4.src, image5.src,image6.src],
        brand:"Top Ten",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and sc",
  },
  {
    id: 205,
    title: "Classic bed for you",
    source:"new-arraival",
    slug: createSlug( "Classic bed for you"),
     category:"new arraival",
    image: image5.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
        moreImg:[image2.src, image4.src, image5.src,image6.src],
        brand:"Top Ten",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and sc",
  },
  {
    id: 206,
    title: "Kid's Furnitue for you",
    source:"new-arraival",
    slug: createSlug("Kid's Furnitue for you"),
     category:"new arraival",
    image: image6.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
        moreImg:[image2.src, image4.src, image5.src,image6.src],
        brand:"Top Ten",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and sc",
  },
  {
    id: 207,
    title: "Classic Kid's Furnitue",
    source:"new-arraival",
    slug: createSlug("Classic Kid's Furnitue"),
     category:"new arraival",
    image: image7.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
        moreImg:[image2.src, image4.src, image5.src,image6.src],
        brand:"Top Ten",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and sc",
  },
  {
    id: 208,
    title: "Simple Chair For you",
    source:"new-arraival",
    slug: createSlug("Simple Chair For you"),
     category:"new arraival",
    image: image8.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
        moreImg:[image2.src, image4.src, image5.src,image6.src],
        brand:"Top Ten",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and sc",
  },
  {
    id: 209,
    title: "Normal Chair For you",
    source:"new-arraival",
    slug: createSlug("Normal Chair For you"),
     category:"new arraival",
    image: image9.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
        moreImg:[image2.src, image4.src, image5.src,image6.src],
        brand:"Top Ten",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and sc",
  },
  {
    id: 210,
    title: "Simple Light For you",
    source:"new-arraival",
    slug: createSlug("Simple Light For you"),
     category:"new arraival",
    image: image10.src,
    price: 8500,
    oldPrice: 9650,
    discount: 650,
    moreImg:[image2.src, image4.src, image5.src,image6.src],
    brand:"Top Ten",
    des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and sc",
  },
]