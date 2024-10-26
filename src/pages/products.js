import product2 from "../assets/img/about.png";
import product3 from "../assets/img/product3.png";
import product4 from "../assets/img/product4.png";

const headphoneImages = [
    "https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
    "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
    "https://media.istockphoto.com/id/1412240771/photo/headphones-on-white-background.jpg?s=2048x2048&w=is&k=20&c=UrFVGxBN3NTrnSkOPAqZMoCKMyeB7ZkO-Fs-VVbWyCQ=",
    "https://media.istockphoto.com/id/1246138278/photo/silver-metallic-white-wireless-headphones-in-the-air-isolated-on-white-background-music.jpg?b=1&s=612x612&w=0&k=20&c=HgJppqNiRMq3DGLNrEmtV3-DOHJ-W4_9pavpKqsQjeo=",
    "https://media.istockphoto.com/id/860853774/photo/blue-headphones-isolated-on-a-white-background.jpg?b=1&s=612x612&w=0&k=20&c=eeYvbhzJB8nP8TdHb0lSp79I8lj1F3BBA575r4bFcgA=",
    "https://images.pexels.com/photos/5081386/pexels-photo-5081386.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/6686448/pexels-photo-6686448.jpeg?auto=compress&cs=tinysrgb&w=600",
    product2,
    product3,
    product4
];

const randomProducts = Array.from({ length: 40 }, (_, i) => ({
    id: i + 1,
    name: `Headphones Model ${i + 1}`,
    price: `$${(Math.random() * (500 - 50) + 50).toFixed(2)}`,
    image: headphoneImages[i % headphoneImages.length],
}));

console.log(randomProducts);


export default randomProducts