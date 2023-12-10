import Post from "./Post";
import './style/style.scss';
// import '@pathJs/script';
import '@pathJs/brands';
import Image from '@/images/Group.png';
import Image1 from '@/images/MG1120.jpg';
import Image2 from '@/images/MG3223.jpg';
import Image3 from '@/images/lenovo.svg';
import Image4 from '@/images/acer.svg';
import Image5 from '@/images/Apple.svg';
import Image6 from '@/images/BOSCH.svg';
import Image7 from '@/images/hp.svg';
import Image8 from '@/images/Samsung.svg';
import Image9 from '@/images/sony.svg';
import Image10 from '@/images/VS.svg';
import json from './assets/json.json';
import React from "react";
import ReactDom, {render} from "react-dom/client";
// import Swiper from "./swiper";
import {App} from "@/App";

const post = new Post('Web Post Title', Image);
console.log('Post to String:', post.toString());
console.log('JSON:', json);

const root = ReactDom.createRoot(document.getElementById('app'));
root.render(<App/>)
