import Post from "./Post";
import './style/style.scss';
import '@pathJs/script';
import Image from '@/images/Group.png';
import Image1 from '@/images/MG1120.jpg';
import Image2 from '@/images/MG3223.jpg';
import json from './assets/json.json';

const post = new Post('Web Post Title', Image);
console.log('Post to String:', post.toString());

console.log('test');
console.log('JSON:', json);
