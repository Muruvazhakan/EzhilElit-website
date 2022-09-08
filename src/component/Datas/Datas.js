// import axios from 'axios';
// import React, { useEffect,useState } from 'react';
export const server_Url='http://3.109.191.181/JRModEnt/'; 
export const Modularkitchen_Url =`${server_Url}Image/Image_Retrive.php`;
export const Form_Url =`${server_Url}Contact_Us_Form/Client_Details.php`;
export const Img_Server =`https://storage.googleapis.com/helpone-9bf33.appspot.com/EzhilElit`;
export const primary_color="rgba(221,197,78,255);";
export const HeaderImagUrl=[
  { imageUrls: `${Img_Server}/MainSlide/1.jpg`},
  { imageUrls: `${Img_Server}/MainSlide/2.jpg`},
  { imageUrls: `${Img_Server}/MainSlide/3.jpg`},
  { imageUrls:`${Img_Server}/MainSlide/4.jpg`},
  { imageUrls: `${Img_Server}/MainSlide/5.jpg`},
  { imageUrls: `${Img_Server}/MainSlide/6.jpg`},
  { imageUrls: `${Img_Server}/MainSlide/7.jpg`},
]

export const  primaryblue="#1c2237";
export const images = [
  { id: 1, src: 'https://storage.googleapis.com/helpone-9bf33.appspot.com/EzhilElit/MainSlide/1.jpg', title: 'foo', description: 'bar' },
  { id: 2, src: 'https://storage.googleapis.com/helpone-9bf33.appspot.com/EzhilElit/MainSlide/2.jpg', title: 'foo', description: 'bar' },
  { id: 3, src: 'https://storage.googleapis.com/helpone-9bf33.appspot.com/EzhilElit/MainSlide/3.jpg', title: 'foo', description: 'bar' },
  { id: 4, src: 'https://storage.googleapis.com/helpone-9bf33.appspot.com/EzhilElit/MainSlide/4.jpg', title: 'foo', description: 'bar' },
  { id: 5, src: 'https://storage.googleapis.com/helpone-9bf33.appspot.com/EzhilElit/MainSlide/5.jpg', title: 'foo', description: 'bar' },
];
export const whatsapp=[
  {accountName:'EzhilElit',Url:`${Img_Server}/Main-Img/EElogoL.png`,phno:"917397292434"}
]
let imgcountdata=[];
// let initi=[
//   {title:'Cupboard',counts:10},
//   {title:'PvcDoor',counts:10}
// ]
export const contact_number=[{Title:"Primary Number",Number:'7397292434'},
 {Title:"Sec Number",Number:'9176176499'}
];
export const my_img=`${Img_Server}/Main-Img/me.jpg`;
export const mail_id='ezhilelit@gmail.com';
// const [allimgcount,setallimgcount]=useState(initi);
export const pvc_icons=[
  {Name:'Durable',url:`${Img_Server}/PvcIcons/durable.png`},
  {Name:'Ecofriendly',url:`${Img_Server}/PvcIcons/eco.png`},
  {Name:'EasyToInstall',url:`${Img_Server}/PvcIcons/easy.png`},
  {Name:'FireRet',url:`${Img_Server}/PvcIcons/fire.png`},
  {Name:'Teriminate',url:`${Img_Server}/PvcIcons/teriminate.png`},
  {Name:'WaterProof',url:`${Img_Server}/PvcIcons/waterproof.png`},
];
export const my_icons=[
  {Name:'Happy',Url:`${Img_Server}/PvcIcons/happy.png`,Title:'560+ Happy Customers'},
  {Name:'Guarantee',Url:`${Img_Server}/PvcIcons/Guarantee.png`,Title:'15 Days Work Guarantee'},  
  {Name:'Warranty',Url:`${Img_Server}/PvcIcons/warranty.png`,Title:' 10+Years Warranty'},  
];
export const Our_Work=[{title:'Bridal Makeup', url:'BridalMakeup',counts:10},
{title:'Puberty Makeup', url:'PubertyMakeup',counts:10},
{title:'Baby Shower', url:'MomToBe',counts:10},
{title:'Shoots', url:'Shoots',counts:0},
{title:'Hairstyle', url:'Hairstyle',counts:0},
{title:'Bridal Mehendhi', url:'BridalMehendhi',counts:10},
{title:'Saree Drapping', url:'SareeDrapping',counts:0},
{title:'Hairstyle Training', url:'HairstyleTraining',counts:10},];
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

export const EELogo=`${Img_Server}/Main-Img/EElogoL.png`;
// export const JRLogo='https://storage.googleapis.com/helpone-9bf33.appspot.com/jrmodularenterprises/JRImages/JRLogo.png';

export const MenuItem =[
  {
      title:'Home',
      url:'/',
      cName:'nav-link',
      display:'menu',
  },
  {
      title:'Makeup',
      url:'BridalMakeup',
      cName:'nav-link',
      display:'menu',
  },
  
  {
      title:'Hairstyle',
      url:'Hairstyle',
      cName:'nav-link',
      display:'side',
  },
  {
      title:'Saree Drapping',
      url:'SareeDrapping',
      cName:'nav-link',
      display:'side',
  },
//   {
//     title:'Special Occation',
//     url:'SpecialOccation',
//     cName:'nav-link',
//     display:'side',
// },
  {
    title:'Ezhil Accessories',
    url:'EzhilAccessories',
    cName:'nav-link',
    display:'menu',
  },
//   {
//     title:'Shoots',
//     url:'Shoots',
//     cName:'nav-link',
//     display:'side',
// },
  // {
  //     title:'Pvc Door',
  //     url:'PvcDoor',
  //     cName:'nav-link',
  //     display:'side',
  // },
  // {
  //     title:'ContactUS',
  //     url:'ContactUS',
  //     cName:'nav-link',
  //     display:'side',
  // },
  
];
// export const Map_link='//https://goo.gl/maps/QZ4EjzuADWZXcgPVA';
export const Map_link='//www.google.com/maps/place/EzhilElit/@12.9792461,80.2033786,15z/data=!4m5!3m4!1s0x0:0x6394bdbaa97c5490!8m2!3d12.9792461!4d80.2033786';
export const JrMapimg=`https://storage.googleapis.com/helpone-9bf33.appspot.com/EzhilElit/Main-Img/EzhilElit-Map.png`;

export const Youtube_link='//www.youtube.com/channel/UCL5homLXX6x8eXzO4_M2xgw';

export const Insta_link="//www.instagram.com/ezhil_elit/";
export const OurWork = {
  lightBg: false,
  lightText: false,
  lightTextDesc: false,
  topLine: 'OurWork',   
  label: 'It\'s always good to change and keep things fresh, whether it\'s a Hairstyle or Cupboard.',
  title:'Design with Your deam Wardrobe',
  imgStart: '',
  img: 'images/svg-1.svg',
  imgcount:imgcountdata.Cupboard,
  imgurl:`${Img_Server}/CupBoard/`,
  titleimage:`${Img_Server}/CupBoard/1.jpg`,
  alt: 'Trendy Kitchens built with anodize',
  autoplay:"true",
  buttonLabel:"View More"
};

export const MainScreen = { 
  imgcount:15,
  imgurl:`${Img_Server}/Main-Img/Mainscreen/`,
  titleimage:`${Img_Server}/MainSlide/8.jpg`,
  alt: 'MainScreen img',
};
export const BridalMakeup = {
  lightBg:  true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Bridal Makeup',   
  label: 'Love of beauty is taste. The creation of beauty is art. – Ralph Waldo Emerson',
  title:'Be Special on you Big-Day!',
  imgStart: 'end',
  img: 'images/svg-1.svg',
  imgcount:12,
  imgurl:`${Img_Server}/BridalMakeup/`,
  titleimage:`${Img_Server}/MainSlide/8.jpg`,
  alt: 'img',
  autoplay:"true",
  buttonLabel:"View More",
  url:"BridalMakeup",
  // types:["Bridal Makeup","Puberty Makeup","Baby Shower"],
  types:[{topLine:"Bridal Makeup",url:`${Img_Server}/BridalMakeup/2.jpg`,label: 'Love of beauty is taste. The creation of beauty is art. – Ralph Waldo Emerson',},
  // {topLine:"Puberty Makeup",url:`${Img_Server}/MainSlide/7.jpg`,label: 'Love of beauty is taste. The creation of beauty is art. – Ralph Waldo Emerson',},
  {topLine:"Puberty Makeup",url:`${Img_Server}/BridalMakeup/8.jpg`,label: 'Love of beauty is taste. The creation of beauty is art. – Ralph Waldo Emerson',},
  {topLine:"Baby Shower",url:`${Img_Server}/BridalMakeup/9.jpg`,label: 'Love of beauty is taste. The creation of beauty is art. – Ralph Waldo Emerson',}],
  
};

export const Hairstyle = {
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Hairstyle',   
    label: 'Life is more beautiful when you meet the right hairdresser. – Peter Coppola',
    title:'Design with Your deam Hairstyle',
    imgStart: 'start',
    img: 'images/svg-1.svg',
    imgcount:28,    
    imgurl:`${Img_Server}/Hairstyle/`,
    titleimage:`${Img_Server}/MainSlide/5.jpg`,
    alt: 'Trendy Kitchens built with anodize',
    autoplay:"true",
    buttonLabel:"View More",
    url:"Hairstyle",
    types:[{topLine:"Bridas",url:`${Img_Server}/Hairstyle/5.jpg`,label: 'Different types of briads without extensions',},
    {topLine:"Buns",url:`${Img_Server}/Hairstyle/6.jpg`,label: 'Different types of Buns',},
    {topLine:"Curls",url:`${Img_Server}/Hairstyle/7.jpg`,label: 'Different types of Curls',}],
  };

  export const SareeDrapping = {
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Saree Drapping',   
    label: `A saree is not just a garment. It’s a power, an identity, a language!`,
    title:'It is an outfit that can be worn on almost all occasions.' ,
    imgStart: 'end',
    img: 'images/svg-1.svg',
    imgcount:6,
    imgurl:`${Img_Server}/SareeDrapping/`,
    titleimage:`${Img_Server}/MainSlide/6.jpg`,
    alt: 'img',
    autoplay:"true",
    buttonLabel:"View More",
    url:"SareeDrapping",
    types:[
      {topLine:"Traditional Saree Draping",url:`${Img_Server}/SareeDrapping/3.jpg`,label: 'When you feel troubles wrapping up your life, wrap yourself in a saree and fight them in style!',},
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
    title:'The most important reasons to wear makeup is that it makes you feel more confident.',
    imgStart: 'start',
    img: 'images/svg-1.svg',
    imgcount:Our_Work[0].counts,
    imgurl:`${Img_Server}/SpecialOccation/`,
    titleimage:`${Img_Server}/MainSlide/2.jpg`,
    alt: 'img',
    autoplay:"true",
    buttonLabel:"View More",
    url:"SpecialOccation",
    types:[{topLine:"Shoots",url:`${Img_Server}/EzhilAccessories/1.jpg`,label: 'Every Eye has it Look',},
    {topLine:"Outdoor Paties",url:`${Img_Server}/EzhilAccessories/4.jpg`,label: 'Life isn\'T perfect but your Eye Brows can be ',},
    {topLine:"Hair Spray",url:`${Img_Server}/EzhilAccessories/1.jpg`,label: 'Life isn\'T perfect but your Eye Brows can be!',},
    {topLine:"Dust Powder",url:`${Img_Server}/EzhilAccessories/1.jpg`,label: 'Love of beauty is taste. The creation of beauty is art. – Ralph Waldo Emerson',}],
  };

  export const EzhilAccessories = {
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Ezhil Accessories',   
    label: `Proper Makeup matching the clothes and accessories will make the models look stunning to the eyes of the customers.`,
    title:'You can find Accessories here.',
    imgStart: '',
    img: 'images/svg-1.svg',
    imgcount:18,
    imgurl:`${Img_Server}/EzhilAccessories/`,
    titleimage:`${Img_Server}/EzhilAccessories/1.jpg`,
    alt: 'img',
    autoplay:"true",
    buttonLabel:"View More",
    url:"EzhilAccessories",
    types:[{topLine:"Lens",url:`${Img_Server}/EzhilAccessories/1.jpg`,label: 'Every Eye has it Look',},
  {topLine:"Lashes",url:`${Img_Server}/EzhilAccessories/4.jpg`,label: 'Life isn\'T perfect but your Eye Brows can be ',},
  {topLine:"Hair Spray",url:`${Img_Server}/EzhilAccessories/3.jpg`,label: 'Inner Beauty is Great but a little Hairspray never Hurts!',},
  {topLine:"Dust Powder",url:`${Img_Server}/EzhilAccessories/2.jpg`,label: 'Love of beauty is taste. The creation of beauty is art. – Ralph Waldo Emerson',}],
  };
  
  export const PvcDoor = {
    lightBg:  true,
    lightText: false,
    lightTextDesc: false,
    title:'',
    topLine: 'PvcDoor',   
    label: 'Get Started',
    imgStart: '',
    img: 'images/svg-1.svg',
    imgcount:imgcountdata.PvcDoor,
    imgurl:`${Img_Server}/PvcDoor/`,
    alt: 'img',
    autoplay:"false"
  };

  export const Netlon = {
    lightBg:  true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Netlon',   
    title:'',
    label: 'Get Started',
    imgStart: '',    
    imgcount:imgcountdata.PvcDoor,
    imgurl:`${Img_Server}/Netlon/`,
    alt: 'img',
    autoplay:"false"
  };

  export const FalseCeiling = {
    lightBg:  true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'False Ceiling',   
    title:'',
    label: 'Get Started',
    imgStart: '',
    img: 'images/svg-1.svg',
    imgcount:imgcountdata.PvcDoor,
    imgurl:`${Img_Server}/FalseCeiling/`,
    alt: 'img',
    autoplay:"false"
  };

  export const AluminiumWindow = {
    lightBg:  true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Aluminium Windows',   
    title:'',
    label: '',
    imgStart: '',
    img: 'images/svg-1.svg',
    imgcount:imgcountdata.Netlon,
    imgurl:`${Img_Server}/AluminumWindow/`,
    alt: 'img',
    autoplay:"false"
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
