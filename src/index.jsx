import Post from "./Post";
import './style/style.scss';
// import '@pathJs/script';
import Image from '@/images/Group.png';
import Image1 from '@/images/MG1120.jpg';
import Image2 from '@/images/MG3223.jpg';
import json from './assets/json.json';
import React from "react";
import ReactDom, {render} from "react-dom/client";
import {App} from "@/App";

const post = new Post('Web Post Title', Image);
console.log('Post to String:', post.toString());
console.log('JSON:', json);

const root = ReactDom.createRoot(document.getElementById('app'));
root.render(<App/>)
