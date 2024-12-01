// import axios from 'axios';
// import React, { useEffect,useState } from 'react';
// export const isbackendconnect = "No";
export const isbackendconnect = "Yes";
// export const backendUrl = "http://localhost:4000/";
export const backendUrl = "https://ezhilelit-backend.onrender.com/";
export const getMenudataUrl = `${backendUrl}menuData`;
export const getHeaderDetailsUrl = `${backendUrl}header`;
export const getSelectedHeaderDetailsUrl = `${backendUrl}header`;

export const server_Url = 'http://43.204.119.91/EzhilElit/';

export const Form_Url = `${server_Url}Contact_Us_Form/Client_Details.php`;
export const Img_Server = `https://storage.googleapis.com/helpone-9bf33.appspot.com/EzhilElit`;
export const primary_color = "rgba(221,197,78,255);";
// export const User_Details = `${server_Url}Profile/user_profile_upload.php`;

export const User_Login = `${backendUrl}user/login/`;
export const User_Signup = `${backendUrl}user/signin/`;
export const Create_Post = `${backendUrl}blog/`;
// export const Upload_Image_Post = `${backendUrl}blog/imageupload/`;
export const Upload_Image_Post = `${backendUrl}upload`;

export const Image_Count = `${server_Url}Dynamic/Sub_Details/Image_Retrive.php`;
export const Headrer_Details = `${server_Url}Dynamic/Header_Retrive.php`;
export const Sub_Details = `${server_Url}Dynamic/Sub_Details/Sub_Details.php`;
export const Update_Headrer_Details = `${server_Url}Dynamic/Update_Details/Update_Header_Details.php`;
export const Insert_Image = `http://43.204.119.91/JRModEnt/Ezhil_Insert_Image.php`;
export const HeaderImagUrl = [
  { imageUrls: `${Img_Server}/MainSlide/1.jpg` },
  { imageUrls: `${Img_Server}/MainSlide/2.jpg` },
  { imageUrls: `${Img_Server}/MainSlide/3.jpg` },
  { imageUrls: `${Img_Server}/MainSlide/4.jpg` },
  { imageUrls: `${Img_Server}/MainSlide/5.jpg` },
  { imageUrls: `${Img_Server}/MainSlide/6.jpg` },
  { imageUrls: `${Img_Server}/MainSlide/7.jpg` },
]
export const GoogleReviewURL = `https://api.reviewsmaker.com/gmb/?placeid=ChIJXx4ttEZdUjoRkFR8qbq9lGM`;
export const primaryblue = "#1c2237";
export const images = [
  { id: 1, src: 'https://storage.googleapis.com/helpone-9bf33.appspot.com/EzhilElit/MainSlide/1.jpg', title: 'foo', description: 'bar' },
  { id: 2, src: 'https://storage.googleapis.com/helpone-9bf33.appspot.com/EzhilElit/MainSlide/2.jpg', title: 'foo', description: 'bar' },
  { id: 3, src: 'https://storage.googleapis.com/helpone-9bf33.appspot.com/EzhilElit/MainSlide/3.jpg', title: 'foo', description: 'bar' },
  { id: 4, src: 'https://storage.googleapis.com/helpone-9bf33.appspot.com/EzhilElit/MainSlide/4.jpg', title: 'foo', description: 'bar' },
  { id: 5, src: 'https://storage.googleapis.com/helpone-9bf33.appspot.com/EzhilElit/MainSlide/5.jpg', title: 'foo', description: 'bar' },
];
export const whatsapp = [
  { accountName: 'EzhilElit', Url: `${Img_Server}/Main-Img/EElogoL.png`, phno: "917397292434" }
]
let imgcountdata = [];
// let initi=[
//   {title:'Cupboard',counts:10},
//   {title:'PvcDoor',counts:10}
// ]
export const contact_number = [{ Title: "Primary Number", Number: '7397292434' },
{ Title: "Sec Number", Number: '9176176499' }
];

export const aboutMe = {
  title: "Makeup artist at Chennai",
  quotes: "Get dolledup on your Big Day.",
  name: "Kodhai Ezhil",
  prof: "MAKEUP ARTIST",
  contact_number: [{ Title: "Primary Number", Number: '7397292434' },
  { Title: "Sec Number", Number: '9176176499' }],
  mail_id: 'ezhilelit@gmail.com',
  instagram: "//www.instagram.com/ezhil_elit/",
  youtube: "//www.youtube.com/channel/UCL5homLXX6x8eXzO4_M2xgw"

}
export const my_img = `${Img_Server}/Main-Img/me.jpg`;
export const mail_id = 'ezhilelit@gmail.com';
// const [allimgcount,setallimgcount]=useState(initi);
export const Our_Work = [{ title: 'Bridal Makeup', url: 'BridalMakeup', counts: 10 },
{ title: 'Puberty Makeup', url: 'PubertyMakeup', counts: 10 },
{ title: 'Baby Shower', url: 'MomToBe', counts: 10 },
{ title: 'Shoots', url: 'Shoots', counts: 0 },
{ title: 'Hairstyle', url: 'Hairstyle', counts: 0 },
{ title: 'Bridal Mehendhi', url: 'BridalMehendhi', counts: 10 },
{ title: 'Saree Drapping', url: 'SareeDrapping', counts: 0 },
{ title: 'Hairstyle Training', url: 'HairstyleTraining', counts: 10 },];
// fetch(Modularkitchen_Url,
//   {
//  // mode: 'no-cors',
//  // method: 'post',
//  header: {
//    'Accept': 'application/json',
//    'Content-type': 'application/json',
//  },      
// }
// ).then(res => res.json()).then(res => {
//  console.log("mysss1222s");
//  console.log(res[0]);   
//  console.log(res[0].Modularkitchen);   
//  console.log(res[0].CupBoard); 
//  console.log(res[0].FalseCeiling);     
//  console.log(res[0].PvcDoor); 
//  Our_Work[0].counts=res[0].Modularkitchen;
//  imgcountdata=res[0];
//  console.log(imgcountdata); 
// //  if(initi.title === 'PvcDoor')
// //  {
// //   console.log("initi.title    "+ initi.title); 
// //  }

//  if (res == "No") {
//    console.log("No");           

//  }
//  else {       
//    console.log("else");
//    console.log(res);        

//  }

// })
//  .catch((error) => {
//    console.error(error);
//  });

export const EELogo = `${Img_Server}/Main-Img/EElogoL.png`;
// export const JRLogo='https://storage.googleapis.com/helpone-9bf33.appspot.com/jrmodularenterprises/JRImages/JRLogo.png';

export const MenuItem = [
  {
    title: 'Home',
    url: '/',
    cName: 'nav-link',
    display: 'menu',
  },
  {
    title: 'Makeup',
    url: 'BridalMakeup',
    cName: 'nav-link',
    display: 'menu',
  },

  {
    title: 'Hairstyle',
    url: 'Hairstyle',
    cName: 'nav-link',
    display: 'side',
  },
  {
    title: 'Saree Drapping',
    url: 'SareeDrapping',
    cName: 'nav-link',
    display: 'side',
  },
   
  {
    title: 'Ezhil Accessories',
    url: 'EzhilAccessories',
    cName: 'nav-link',
    display: 'menu',
  },
  {
    title:'Blog',
    url:'blog',
    cName:'nav-link',
    display:'side',
},
];
// export const Map_link='//https://goo.gl/maps/QZ4EjzuADWZXcgPVA';
export const Map_link = '//www.google.com/maps/place/EzhilElit/@12.9792461,80.2033786,15z/data=!4m5!3m4!1s0x0:0x6394bdbaa97c5490!8m2!3d12.9792461!4d80.2033786';
export const JrMapimg = `https://storage.googleapis.com/helpone-9bf33.appspot.com/EzhilElit/Main-Img/EzhilElit-Map.png`;

export const Youtube_link = '//www.youtube.com/channel/UCL5homLXX6x8eXzO4_M2xgw';

export const Insta_link = "//www.instagram.com/ezhil_elit/";

export const MainScreen = {
  imgcount: 15,
  imgurl: `${Img_Server}/Main-Img/Mainscreen/`,
  titleimage: `${Img_Server}/MainSlide/8.jpg`,
  alt: 'MainScreen img',
};

export const MyServices = [
  {
    // screen: 'SubScreen',
    screenname: 'BridalMakeup',
    topLine: 'BridalMakeup',

    Display_No: 1,
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    User_Display: '1',
    alt: 'Bridal Makeup',
    label: 'Love of beauty is taste. The creation of beauty is art. – Ralph Waldo Emerson',
    title: 'Be Special on you Big-Day!',
    imgStart: 'end',
    img: 'images/svg-1.svg',
    imgcount: 12,
    imgurl: `${Img_Server}/BridalMakeup/`,
    titleimage: `/BridalMakeup/1.jpg`,
    alt1: 'Bridal Makeup',
    autoplay: "true",
    buttonLabel: "View More",
    url: "BridalMakeup",
    // types:["Bridal Makeup","Puberty Makeup","Baby Shower"],
    types: [{ topLine: "Bridal Makeup", subscreenname: "BridalMakeup", Sub_Display_No: 1, Sub_TitleImage: `/BridalMakeup/2.jpg`, subLable: 'Love of beauty is taste. The creation of beauty is art. – Ralph Waldo Emerson',imgcount: 3, desc :"" },
    // {topLine:"Puberty Makeup",titleimage:`${Img_Server}/MainSlide/7.jpg`,label: 'Love of beauty is taste. The creation of beauty is art. – Ralph Waldo Emerson',},
    { topLine: "Puberty Makeup", subscreenname: "PubertyMakeup", Sub_Display_No: 2, Sub_TitleImage: `/BridalMakeup/8.jpg`, subLable: 'Love of beauty is taste. The creation of beauty is art. – Ralph Waldo Emerson',imgcount: 4, desc :"" },
    { topLine: "Baby Shower", subscreenname: "BabyShower", Sub_Display_No: 3, Sub_TitleImage: `/BridalMakeup/9.jpg`, subLable: 'Love of beauty is taste. The creation of beauty is art. – Ralph Waldo Emerson',imgcount: 3, desc :"" }]
  },
  {
    // screen: 'SubScreen',
    screenname: 'Hairstyle',
    topLine: 'Hairstyle',
    Display_No: 2,
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    User_Display: '1',
    alt: 'Hair style',
    label: 'Life is more beautiful when you meet the right hairdresser. – Peter Coppola',
    title: 'Design with Your deam Hairstyle',
    imgStart: 'start',
    img: 'images/svg-1.svg',
    imgcount: 28,
    imgurl: `${Img_Server}/Hairstyle/`,
    titleimage: `/Hairstyle/1.jpg`,
    alt1: 'Trendy Kitchens built with anodize',
    autoplay: "true",
    buttonLabel: "View More",
    url: "Hairstyle",
    types: [{ topLine: "Bridas", User_Display: '1', subscreenname: "Bridas", Sub_Display_No: 1, Sub_TitleImage: `/Hairstyle/Bridas/5.jpg`, subLable: 'Different types of briads without extensions',imgcount: 7, desc :"Bridas Styles"
       },
    { topLine: "Buns", subscreenname: "Buns", Sub_Display_No: 2, Sub_TitleImage: `/Hairstyle/Bun/6.jpg`, subLable: 'Different types of Buns',imgcount: 14, desc :"Buns Styles" },
    { topLine: "Curls", subscreenname: "Curls", Sub_Display_No: 3, Sub_TitleImage: `/Hairstyle/Curls/3.jpg`, subLable: 'Different types of Curls',imgcount: 5, desc :"Curls Styles" }],
  },
  {
    // screen: 'SubScreen',
    screenname: 'SareeDrapping',
    topLine: 'SareeDrapping',
    Display_No: 3,
    User_Display: '1',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    alt: 'Saree Drapping',
    label: `A saree is not just a garment. It’s a power, an identity, a language!`,
    title: 'It is an outfit that can be worn on almost all occasions.',
    imgStart: 'end',
    img: 'images/svg-1.svg',
    imgcount: 6,
    imgurl: `${Img_Server}/SareeDrapping/`,
    titleimage: `/MainSlide/6.jpg`,
    alt1: 'img',
    autoplay: "true",
    buttonLabel: "View More",
    url: "SareeDrapping",
    types: [
      { topLine: "Traditional Saree Draping", subscreenname: "TraditionalSareeDraping", Sub_Display_No: 1, Sub_TitleImage: `/SareeDrapping/3.jpg`, subLable: 'When you feel troubles wrapping up your life, wrap yourself in a saree and fight them in style!', imgcount: 6, desc :""},],
  },
  {
    // screen: 'SubScreen',
    screenname: 'SpecialOccation',
    topLine: 'SpecialOccation',
    User_Display: '1',
    Display_No: 4,
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    alt: 'Special Occation',
    label: `You will find that makeup with us which help you feel more confident on your Special Occation.`,
    title: 'The most important reasons to wear makeup is that it makes you feel more confident.',
    imgStart: 'start',
    img: 'images/svg-1.svg',
    imgcount: Our_Work[0].counts,
    imgurl: `${Img_Server}/SpecialOccation/`,
    titleimage: `/MainSlide/2.jpg`,
    alt1: 'img',
    autoplay: "true",
    buttonLabel: "View More",
    url: "SpecialOccation",
    types: [{ topLine: "Shoots", subscreenname: "Shoots", Sub_Display_No: 1, Sub_TitleImage: `/SpecialOccation/Shoots/1.jpg`, subLable: 'Every Eye has it Look',imgcount: 10, desc :"", },
    { topLine: "Outdoor Paties", subscreenname: "OutdoorPaties", Sub_Display_No: 2, Sub_TitleImage: `/SpecialOccation/OutdoorPaties/4.jpg`, subLable: 'Life isn\'T perfect but your Eye Brows can be ',imgcount: 10, desc :"", },

    ],
  },
  {
    // screen: 'SubScreen',
    screenname: 'EzhilAccessories',
    topLine: 'EzhilAccessories',
    User_Display: '1',
    Display_No: 5,
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    alt: 'Ezhil Accessories',
    label: `Proper Makeup matching the clothes and accessories will make the models look stunning to the eyes of the customers.`,
    title: 'You can find Accessories here.',
    imgStart: '',
    img: 'images/svg-1.svg',
    imgcount: 18,
    imgurl: `${Img_Server}/EzhilAccessories/`,
    titleimage: `/EzhilAccessories/1.jpg`,
    alt1: 'img',
    autoplay: "true",
    buttonLabel: "View More",
    url: "EzhilAccessories",
    types: [{ topLine: "Lens", subscreenname: "Lens", Sub_Display_No: 1, Sub_TitleImage: `/EzhilAccessories/Lens/1.jpg`, subLable: 'Every Eye has it Look' ,imgcount: 1, desc :"", },
    { topLine: "Lashes", subscreenname: "Lashes", Sub_Display_No: 2, Sub_TitleImage: `/EzhilAccessories/Lashes/2.jpg`, subLable: 'Life isn\'T perfect but your Eye Brows can be ', imgcount: 7, desc :"",},
    { topLine: "Hair Spray", subscreenname: "HairSpray", Sub_Display_No: 3, Sub_TitleImage: `/EzhilAccessories/HairSpray/3.jpg`, subLable: 'Inner Beauty is Great but a little Hairspray never Hurts!',imgcount: 4, desc :"", },
    { topLine: "Dust Powder", subscreenname: "DustPowder", Sub_Display_No: 4, Sub_TitleImage: `/EzhilAccessories/DustPowder/2.jpg`, subLable: 'Love of beauty is taste. The creation of beauty is art. – Ralph Waldo Emerson',imgcount: 6, desc :"", }],
  },


]
export const BridalMakeup = {
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Bridal Makeup',
  label: 'Love of beauty is taste. The creation of beauty is art. – Ralph Waldo Emerson',
  title: 'Be Special on you Big-Day!',
  imgStart: 'end',
  img: 'images/svg-1.svg',
  imgcount: 12,
  imgurl: `${Img_Server}/BridalMakeup/`,
  titleimage: `${Img_Server}/MainSlide/8.jpg`,
  alt: 'img',
  autoplay: "true",
  buttonLabel: "View More",
  url: "BridalMakeup",
  // types:["Bridal Makeup","Puberty Makeup","Baby Shower"],
  types: [{ topLine: "Bridal Makeup", titleimage: `${Img_Server}/BridalMakeup/2.jpg`, subLable: 'Love of beauty is taste. The creation of beauty is art. – Ralph Waldo Emerson', },
  // {topLine:"Puberty Makeup",titleimage:`${Img_Server}/MainSlide/7.jpg`,label: 'Love of beauty is taste. The creation of beauty is art. – Ralph Waldo Emerson',},
  { topLine: "Puberty Makeup", titleimage: `${Img_Server}/BridalMakeup/8.jpg`, subLable: 'Love of beauty is taste. The creation of beauty is art. – Ralph Waldo Emerson', },
  { topLine: "Baby Shower", titleimage: `${Img_Server}/BridalMakeup/9.jpg`, subLable: 'Love of beauty is taste. The creation of beauty is art. – Ralph Waldo Emerson', }],

};

export const Hairstyle = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Hairstyle',
  label: 'Life is more beautiful when you meet the right hairdresser. – Peter Coppola',
  title: 'Design with Your deam Hairstyle',
  imgStart: 'start',
  img: 'images/svg-1.svg',
  imgcount: 28,
  imgurl: `${Img_Server}/Hairstyle/`,
  titleimage: `${Img_Server}/MainSlide/5.jpg`,
  alt: 'Trendy Kitchens built with anodize',
  autoplay: "true",
  buttonLabel: "View More",
  url: "Hairstyle",
  types: [{ topLine: "Bridas", titleimage: `${Img_Server}/Hairstyle/5.jpg`, label: 'Different types of briads without extensions', },
  { topLine: "Buns", titleimage: `${Img_Server}/Hairstyle/6.jpg`, label: 'Different types of Buns', },
  { topLine: "Curls", titleimage: `${Img_Server}/Hairstyle/7.jpg`, label: 'Different types of Curls', }],
};

export const SareeDrapping = {
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Saree Drapping',
  label: `A saree is not just a garment. It’s a power, an identity, a language!`,
  title: 'It is an outfit that can be worn on almost all occasions.',
  imgStart: 'end',
  img: 'images/svg-1.svg',
  imgcount: 6,
  imgurl: `${Img_Server}/SareeDrapping/`,
  titleimage: `${Img_Server}/MainSlide/6.jpg`,
  alt: 'img',
  autoplay: "true",
  buttonLabel: "View More",
  url: "SareeDrapping",
  types: [
    { topLine: "Traditional Saree Draping", url: `${Img_Server}/SareeDrapping/3.jpg`, label: 'When you feel troubles wrapping up your life, wrap yourself in a saree and fight them in style!', },
    // {topLine:"Can-Can",url:`${Img_Server}/MainSlide/7.jpg`,label: 'Different types of briads without extensions',},   
    // {topLine:"Curls",url:`${Img_Server}/MainSlide/7.jpg`,label: 'Different types of Curls',}
  ],
};

export const SpecialOccation = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Special Occation',
  label: `You will find that makeup with us which help you feel more confident on your Special Occation.`,
  title: 'The most important reasons to wear makeup is that it makes you feel more confident.',
  imgStart: 'start',
  img: 'images/svg-1.svg',
  imgcount: Our_Work[0].counts,
  imgurl: `${Img_Server}/SpecialOccation/`,
  titleimage: `${Img_Server}/MainSlide/2.jpg`,
  alt: 'img',
  autoplay: "true",
  buttonLabel: "View More",
  url: "SpecialOccation",
  types: [{ topLine: "Shoots", url: `${Img_Server}/EzhilAccessories/1.jpg`, label: 'Every Eye has it Look', },
  { topLine: "Outdoor Paties", url: `${Img_Server}/EzhilAccessories/4.jpg`, label: 'Life isn\'T perfect but your Eye Brows can be ', },
  { topLine: "Hair Spray", url: `${Img_Server}/EzhilAccessories/1.jpg`, label: 'Life isn\'T perfect but your Eye Brows can be!', },
  { topLine: "Dust Powder", url: `${Img_Server}/EzhilAccessories/1.jpg`, label: 'Love of beauty is taste. The creation of beauty is art. – Ralph Waldo Emerson', }],
};

export const EzhilAccessories = {
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Ezhil Accessories',
  label: `Proper Makeup matching the clothes and accessories will make the models look stunning to the eyes of the customers.`,
  title: 'You can find Accessories here.',
  imgStart: '',
  img: 'images/svg-1.svg',
  imgcount: 18,
  imgurl: `${Img_Server}/EzhilAccessories/`,
  titleimage: `${Img_Server}/EzhilAccessories/1.jpg`,
  alt: 'img',
  autoplay: "true",
  buttonLabel: "View More",
  url: "EzhilAccessories",
  types: [{ topLine: "Lens", url: `${Img_Server}/EzhilAccessories/1.jpg`, label: 'Every Eye has it Look', },
  { topLine: "Lashes", url: `${Img_Server}/EzhilAccessories/4.jpg`, label: 'Life isn\'T perfect but your Eye Brows can be ', },
  { topLine: "Hair Spray", url: `${Img_Server}/EzhilAccessories/3.jpg`, label: 'Inner Beauty is Great but a little Hairspray never Hurts!', },
  { topLine: "Dust Powder", url: `${Img_Server}/EzhilAccessories/2.jpg`, label: 'Love of beauty is taste. The creation of beauty is art. – Ralph Waldo Emerson', }],
};

// const aws='https://storage.googleapis.com/helpone-9bf33.appspot.com/jrmodularenterprises/ModularKitchen/ModularKitchenImage.txt';
// const response =  fetch(Modularkitchen_Url);
// const data =  response.json();
// console.log("responseaws");
// console.log(response);
// console.log(data);
// const response1 =  fetch(aws);
// console.log("response1");
// console.log(response1);
// axios({
//   method: 'post',
//   url: Modularkitchen_Url,
//   data: {
//     firstName: 'Fred',
//     lastName: 'Flintstone'
//   }
// }).then((response) => {
//   // handle success
//   console.log("response"); 
//   console.log(response);

// })
// .catch(function (error) {
//   // handle error
//   console.log(error);
// });

// axios(Modularkitchen_Url)
// .then((response) => {
//   // handle success
//   console.log("response"); 
//   console.log(response);

// })
// .catch(function (error) {
//   // handle error
//   console.log(error);
// })
// .then(function () {
//   // always executed
// });



// fetch(Modularkitchen_Url,{
//   mode: 'no-cors'
// }      
//   )
//   .then(res => 
//     {
//       console.log(res+"res1");  
//       res.text();
//     }     
//     )
//   .then(res => {
//     console.log("[Datas] Modularkitchen_Url");
//     console.log(res+"res");  

//   //   Server_URL='http://65.0.74.65/HelpOne'
//   //  dispatch(toggledata.toggleip_address(res.toString()));              
//   // res=res.toString();
//     //console.log(res.data);    
//   })
//     .catch((error) => {
//       console.error(error);
//     });

export const blogimgUrl="https://storage.googleapis.com/helpone-9bf33.appspot.com/EzhilElit/Blog/";
export const lenspost = [
  
  {blog_id:"11017c9f-4d4c-48d6-8a3a-d1aa19d87995",
    title:"Transform Your Look: Lens Trend in Chennai",
    category:"Accessories",
    coverimg:"b7227d47-240b-49c4-8b31-04b1c56bc08c.jpg",img1:"",des:"Lens allow you to express yourself and stand out effortlessly, whether you’re heading to a casual coffee date or a grand reception. Plus, with so many shades to choose from, you’re bound to find one (or ten!) that suit your personality. The best part? You don’t have to be a pro makeup artist to pull off this trend. With a little practice and the right makeup accessories, you can take your look to the next level in no time. So go ahead, try a new shade, and let your eyes do the talking!",content:[{subtitle:"Trending Colored Lenses to Match Your Style",desc:"Have you ever considered how a simple switch in eye color could transform your entire look? Colored contact lenses are not just a fun accessory—they’re a total game changer! From subtle enhancements to bold, dramatic hues, these little beauties can complement your makeup, mood, or even your outfit. In Chennai, where trends meet tradition, colored lenses are becoming a go-to for makeup enthusiasts looking to up their game. Let’s dive into how you can rock trending colored lenses and match them perfectly with your unique style.",parts:[{subcontentitemheader:"Find the Right Shade for Every Occasion",subcontentitemdesc:["Choosing the right colored lens is all about striking a balance between your personal style and the occasion. Want a natural look for a day at work or college? Try soft browns or hazel tones that add a hint of mystery without overpowering your look. For weddings or parties, my client's fashionistas are loving vibrant greens and shimmering grays, which stand out beautifully under bold eye makeup. If you're feeling adventurous, go for daring shades like sapphire blue or violet—perfect for those Instagram-worthy moments!","Shopping for makeup accessories in Chennai or Chrompet or Tambaram or Tamilnadhu, especially colored lenses, can be overwhelming with so many options with us, but don’t stress! Start small by experimenting with shades close to your natural eye color before diving into brighter hues. This way, you’ll ease into the trend while finding what truly suits your vibe."]},{subcontentitemheader:"Pair Colored Lenses with Flawless Makeup",subcontentitemdesc:["If you’re going for vibrant blue lenses, keep your makeup minimal to let your eyes shine. On the flip side, bold lashes with green or hazel lenses can make your eyes pop for glamorous events. Luckily, you can find an amazing range of complementary makeup accessories in our website, from richly pigmented eyeshadows to fluttery false lashes. These products not only elevate your look but also bring out the full potential of your colored lenses."]},{subcontentitemheader:"Pro Tips for Comfortable and Stylish Wear",subcontentitemdesc:["For beginners, wearing lenses might feel a little intimidating. Practice makes perfect! Start by applying your makeup after inserting your lenses to avoid smudges or irritation. If your eyes feel dry, keep a small bottle of rewetting drops handy—especially during those long, humid Chennai days. And here’s a bonus tip: always match your lenses with outfits that complement the vibe. A pastel saree with green lenses or a black gown with gray ones? Perfection!"]}]}],"tags":["Lens","Chennai","Trends","Look"],activity:{"total_likes":{"$numberInt":"0"},"total_comments":{"$numberInt":"0"},"total_reads":{"$numberInt":"0"},"total_parent_comments":{"$numberInt":"0"}},"comments":[],"draft":false,"createdAt":"2024-11-23T08:09:06.944Z",publishedAt:{"$date":{"$numberLong":"1732349346952"}},updatedAt:{"$date":{"$numberLong":"1732349346952"}},
   },
   {blog_id:"b7227d47-240b-49c4-8b31-04b1c56bc08c",title:"Matching Lens Shades to Your Natural Eye Hue",category:"Accessories",coverimg:"b7227d47-240b-49c4-8b31-04b1c56bc08c.jpg",img1:"",des:"Your eyes are the windows to your soul, and the right lenses can make those windows even more captivating! Matching lens shades to your natural eye color might seem tricky, but with a few simple tips, you can enhance your look effortlessly. Let’s dive into the fun world of colored lenses and discover what works best for you.",content:[{subtitle:"Brown Eyes: Endless Possibilities",desc:"",parts:[{subcontentitemheader:"",subcontentitemdesc:["If you’ve got brown eyes, congratulations! You have one of the most versatile eye colors when it comes to lenses. Warm hazels, rich greens, and even icy blues can make your eyes pop in the most magical way. Want something more natural? Go for honey or caramel tones—they’ll brighten your gaze without looking overdone.","For those bold days, try sapphire blue or gray lenses. They contrast beautifully with the warmth of brown eyes, creating a stunning effect. Pair your new lenses with Ezhil makeup accessories in Chennai, like neutral-toned eyeshadow palettes or a swipe of golden shimmer, and you're set to steal the show."]}]},{subtitle:"Green Eyes: Amplify the Mystery",desc:"",parts:[{subcontentitemheader:"",subcontentitemdesc:["Green eyes are already mesmerizing, but the right lens shade can take them to a whole new level. Subtle greens, like olive or emerald, can enhance your natural beauty without overwhelming your features. If you want something more daring, amber or violet lenses will add a unique twist to your look.","Soft pink or bronze can complement green eyes and your chosen lenses, creating a harmonious yet striking appearance. Whether you’re going for a natural vibe or a glamorous statement, green eyes offer endless possibilities to play with lens colors."]}]},{subtitle:"Blue Eyes: Add Depth and Drama",desc:"",parts:[{subcontentitemheader:"",subcontentitemdesc:["Blue eyes are known for their captivating charm, but who says you can’t level up the drama? Enhance the depth of your blue eyes with gray or slate-colored lenses for a sophisticated look. If you’re in the mood to experiment, try turquoise or aqua lenses—they add a vibrant twist that’s perfect for sunny Chennai vibes.","Don’t forget to pair your lenses with Ezhil accessories in Chennai like a soft highlighter or a cool-toned eyeliner. These small additions will amplify the effect of your lenses and leave you looking effortlessly chic."]}]},{subtitle:"Hazel Eyes: Highlight the Harmony",desc:"",parts:[{subcontentitemheader:"",subcontentitemdesc:["Hazel eyes are a mix of green, gold, and brown, offering a natural gradient that’s already captivating. To amplify this beauty, opt for lenses in warm amber or light brown shades—they’ll bring out the golden tones in your eyes. For a playful twist, try teal or deep green lenses that enhance the green flecks in hazel eyes.","When it comes to makeup, keep it warm and earthy. Peachy tones or soft browns will work beautifully with your lenses and give you a radiant glow. Stock up on our Ezhil accessories in Chennai to find the perfect match for your hazel-inspired look."]}]},{subtitle:"Pro Tips for Flawless Lens Application",desc:"",parts:[{subcontentitemheader:"",subcontentitemdesc:["Finally, don’t let your effort go to waste with improper lens application. Always handle your lenses with clean hands, and make sure they’re stored properly to maintain their quality. A good mirror, a steady hand, and a bit of patience will go a long way in perfecting your lens look.","To sum up, matching lens shades to your natural eye color is an art that anyone can master. With the right lenses and a little help from Ezhil accessories in Chennai, you can create a style that’s uniquely yours. So, go ahead, experiment with colors, and let your eyes do all the talking!"]}]}],"tags":["Eye Accessories","Chennai, Chrompet, Tambaram","Natural Eye","Brown Eyes","Green Eyes","Blue Eyes","Hazel Eyes"],activity:{"total_likes":{"$numberInt":"0"},"total_comments":{"$numberInt":"0"},"total_reads":{"$numberInt":"0"},"total_parent_comments":{"$numberInt":"0"}},"comments":[],"draft":false,"createdAt":"2024-11-27T12:21:23.154Z",publishedAt:{"$date":{"$numberLong":"1732710083198"}},updatedAt:{"$date":{"$numberLong":"1732710083198"}},__v:{"$numberInt":"0"}}
  , {blog_id:"fae5b258-ccf4-4e61-bb87-9c1d029f7dd6",title:"Myths About Lens Colors and How to Avoid Them",category:"Accessories",coverimg:"b7227d47-240b-49c4-8b31-04b1c56bc08c.jpg",img1:"",des:"If you’ve ever considered trying colored lenses, you’ve probably come across a few rumors that made you hesitate. From exaggerated tales of discomfort to wild claims about unnatural appearances, myths about lens colors can be overwhelming. Let’s debunk some of these misconceptions so you can confidently explore the world of colored lenses.",content:[{subtitle:"Myth 1: Colored Lenses Always Look Unnatural",desc:"",parts:[{subcontentitemheader:"",subcontentitemdesc:["One of the most common myths is that colored lenses make your eyes look fake or over-the-top. While this might have been true with older lens technology, today’s lenses are designed to blend seamlessly with your natural eye color. High-quality lenses come in subtle tones that enhance your features rather than overpowering them.","If you're in Chennai, you’ll find plenty of options at Ezhil accessories in Chennai to suit every preference, from natural hues to bold shades. Whether you’re going for a soft brown or a striking sapphire blue, modern lenses can look incredibly realistic.","How to Avoid It: Choose lenses that complement your natural eye color. If your eyes are dark, opt for opaque lenses; for lighter eyes, translucent lenses can add a delicate touch.",""]}]},{subtitle:"Myth 2: Colored Lenses Are Uncomfortable",desc:"",parts:[{subcontentitemheader:"",subcontentitemdesc:["Another myth that keeps many people from trying colored lenses is the idea that they’re less comfortable than clear ones. The truth? Comfort depends on the lens material and how well they’re fitted—not the color. High-quality colored lenses are just as comfortable as their clear counterparts, provided you follow the care instructions","Living in Chennai’s warm climate might make you worry about dryness, but the right lens and a reliable contact lens solution can keep your eyes feeling fresh. Pair this with high-quality from Ezhil accessories in Chennai, and you’ll achieve a flawless look without discomfort."]}]},{subtitle:"Myth 3: Colored Lenses Are Only for Special Occasions",desc:"",parts:[{subcontentitemheader:"",subcontentitemdesc:["Some people think colored lenses are just for costume parties, weddings, or festive events. While they can certainly add glamor to these occasions, colored lenses are versatile enough for everyday wear. From a subtle tint for work meetings to a bold pop of color for brunch, there’s a lens for every situation.","If you’re someone who loves experimenting with your look, colored lenses are just as essential you can get this from Ezhil accessories in Chennai. We guide you to transform your appearance effortlessly, making every day a special occasion.","How to Avoid It: Don’t limit yourself to thinking of lenses as a rare indulgence. Incorporate them into your daily style and match them with your outfit or mood."]}]},{subtitle:"Myth 4: You Can’t Wear Makeup with Colored Lenses",desc:"",parts:[{subcontentitemheader:"",subcontentitemdesc:["Here’s a myth that makes no sense! Some believe that makeup and colored lenses don’t mix, fearing smudges or irritation. The reality is that you absolutely can pair lenses with your favorite beauty products—it’s all about technique.","With access to top-notch Ezhil accessories in Chennai, you can create stunning looks that complement your lenses. Just remember to apply your lenses before doing your makeup and remove them before cleansing your face to keep them clean and clear.","How to Avoid It: Use hypoallergenic, water-based makeup products to minimize the risk of irritation. Avoid applying eyeliner too close to the lash line."]}]},{subtitle:"Conclusion: Step Into the World of Colored Lenses with Confidence",desc:"",parts:[{subcontentitemheader:"",subcontentitemdesc:["Now that these myths have been busted, what’s stopping you from trying colored lenses? They’re comfortable, versatile, and safe when used correctly. Plus, they can elevate your look effortlessly, just like your favorite @ Ezhil accessories in Chennai.","So go ahead, experiment with colors, and discover how a simple change can make a big impact. With the right knowledge with our guidance and quality products, you can confidently embrace the beauty of colored lenses."]}]}],"tags":["Colored lenses","Myth","Chennai, Chrompet, Tambaram","Eye Accessories"],activity:{"total_likes":{"$numberInt":"0"},"total_comments":{"$numberInt":"0"},"total_reads":{"$numberInt":"0"},"total_parent_comments":{"$numberInt":"0"}},"comments":[],"draft":false,"createdAt":"2024-11-27T13:06:17.473Z",publishedAt:{"$date":{"$numberLong":"1732712777509"}},updatedAt:{"$date":{"$numberLong":"1732712777509"}},__v:{"$numberInt":"0"}}
  ]