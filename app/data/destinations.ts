export interface Destination {
  id: string;
  location: string;
  title: string;
  description: string;
  image: string;
  duration?: string;
  link?: string;
}

export const destinationsData: Destination[] = [
  {
    id: "1",
    location: "VARANSI - UTTAR PRADESH",
    title: "VARANSI'S GHATS",
    description:
      "Experience the timeless beauty of Varanasi Ghats, where ancient traditions meet the sacred Ganges. From peaceful sunrise boat rides to the vibrant Ganga Aarti.",
    image:
      "https://res.cloudinary.com/df4axdsuf/image/upload/v1786524474/gurth-bramall-stb2vJYb_es-unsplash.jpg_y3rhpn.jpg",
    duration: "0:18",
    link: "/packages",
  },
  {
    id: "2",
    location: "LEH - LADAKH",
    title: "LEH LADAKH",
    description:
      "Discover the breathtaking landscapes of Leh Ladakh, where rugged mountains, winding roads, and vast valleys create the ultimate adventure.",
    image:
      "https://res.cloudinary.com/df4axdsuf/image/upload/v1786524460/vamshi-vangapally-fH-BSvYeX5g-unsplash.jpg_wm3hp5.jpg",
    duration: "0:18",
    link: "/packages",
  },
  {
    id: "3",
    location: "LAKSHADWEEP - INDIA",
    title: "LAKSHADWEEP BEACHES",
    description:
      "Escape to the pristine beauty of Lakshadweep, where crystal-clear waters, soft white sands, and peaceful tropical beaches create a perfect island getaway.",
    image:
      "https://res.cloudinary.com/df4axdsuf/image/upload/v1786524462/margo-evardson-s86oSsYUxOY-unsplash.jpg_w96qhq.jpg",
    duration: "0:18",
    link: "/packages",
  },
  {
    id: "4",
    location: "SPITI VALLEY - HIMACHAL PRADESH",
    title: "SPITI VALLEY",
    description:
      "Journey through the rugged beauty of Spiti Valley, where dramatic mountains, ancient monasteries, and remote Himalayan villages create an unforgettable adventure.",
    image:
      "https://res.cloudinary.com/df4axdsuf/image/upload/v1786524476/yasser-mir-WSOE5jOtJY4-unsplash.jpg_tifgtz.jpg",
    duration: "0:18",
    link: "/packages",
  },
  {
    id: "5",
    location: "GULMARG - JAMMU & KASHMIR",
    title: "GULMARG",
    description:
      "Experience the breathtaking beauty of Gulmarg, surrounded by majestic mountains, lush landscapes, and serene Himalayan views.",
    image:
      "https://res.cloudinary.com/df4axdsuf/image/upload/v1786524479/darshan-chudasama-v1oGBUnXVDs-unsplash.jpg_y18qie.jpg",
    duration: "0:18",
    link: "/packages",
  },
  {
  id: "6",
  location: "RISHIKESH - UTTARAKHAND",
  title: "BOATING IN RISHIKESH",
  description:
    "Experience the refreshing beauty of Rishikesh as you glide along the sacred Ganges surrounded by lush green hills and peaceful landscapes.",
  image:
    "https://res.cloudinary.com/df4axdsuf/image/upload/v1786524468/vince-fleming-jmwlyZDxu80-unsplash.jpg_zuhpiy.jpg",
  duration: "0:18",
  link: "/packages",
},
];
