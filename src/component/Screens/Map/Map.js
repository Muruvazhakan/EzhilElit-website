// import React, { useState } from 'react';
// import { Map as Maps, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
// // import GoogleMapReact,{Maps} from 'google-map-react';
// const mapkey = 'AIzaSyAmLh29Y3U8VAqNximAO0YxnkYQMWee6Kg';
// //  const mapkey = 'AIzaSyCGGUFhDPfBDnRG9Yu1vrRujYeJq6z0aNY';

// const Map = (props) => {

//   const initial = {
//     center: {
//       lat: 59.955413,
//       lng: 30.33
//     },
//     zoom: 11
//   };
//   const onMarkerClick=(props, marker, e) => {
//     console.log("onMarkerClick props, marker, e  "+props, marker, e);
//   }
//   const AnyReactComponent = ({ text }) => <div>{text}</div>;
//   const [state, setState] = useState(initial);
//   return (
//     <div>
//       <div
//        style={{ height: '100vh', width: '10%',alignContent:'center',marginRight:'30px' }}
//       >
//         <Maps
//          google={window.google}
//           zoom={14}>

//           {/* <Marker onClick={onMarkerClick}
//             name={'Current location'} /> */}

//           <InfoWindow style={{ height: '50vh', width: '10%',alignContent:'center',marginRight:'30px' }}  >
//             <div>
//               <h1>Location</h1>
//             </div>
//           </InfoWindow>
//         </Maps>

//         {/* <GoogleMapReact
//           bootstrapURLKeys={{ key:'AIzaSyAmLh29Y3U8VAqNximAO0YxnkYQMWee6Kg'}}
//           defaultCenter={state.center}
//           defaultZoom={state.zoom}
//         >
//           <AnyReactComponent
//             lat={59.955413}
//             lng={30.337844}
//             text="My Marker"
//           />
//         </GoogleMapReact> */}

//         {/* <div id="map">
//           <script async
//             src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAmLh29Y3U8VAqNximAO0YxnkYQMWee6Kg&callback=initMap">
//           </script>
//         </div> */}
//       </div>
//     </div>
//   )
// }
// // export default Map;

// export default GoogleApiWrapper({
//   apiKey: mapkey,
//   language: "ENG"
// })(Map)