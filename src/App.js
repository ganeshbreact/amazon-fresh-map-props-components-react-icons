import logo from './logo.svg';
import './App.css';
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const cardData =[
  {
    img:"https://images-eu.ssl-images-amazon.com/images/I/71mTWHyvF3L.AC_SL240_.jpg",
    itemName:"Milky Mist Paneer, 200 g",
    quantitySize:"200g",
    sellingPrice:"₹114.00",
    originalPrice:"₹125.00",
    discountPercentage:"9% OFF",
  },
  {
    img:"https://images-eu.ssl-images-amazon.com/images/I/71TSXjY7SZL.AC_SL240_.jpg",
    itemName:"Amul Milk 1 L Carton",
    quantitySize:"1 L",
    sellingPrice:"₹74.00",
    originalPrice:"₹89.00",
    discountPercentage:"9% OFF",
  },
  {
    img:"https://images-eu.ssl-images-amazon.com/images/I/71BzsxldCBL.AC_SL240_.jpg",
    itemName:"Quaker Oats 1kg,",
    quantitySize:"200g",
    sellingPrice:"₹114.00",
    originalPrice:"₹125.00",
    discountPercentage:"9% OFF",
    rating:4,
    noOfReviews:"37,867"

  }

];

function App(){
  return(
    <div className="App" style={{display:"flex",gap :"20px"}}>

      {
        cardData.map(data => {
          return(
            <div style={{width:"400px",height:"550px",border:"2px solid black",marginTop:"10px",marginLeft:"10px"}}>
              <img src={data.img} alt={data.itemName} />
              <h3>{data.itemName}</h3>
              <p>{data.quantitySize}</p>
              <FaStar style={{color:"f7ca00"}}/>
              <FaStar style={{color:"f7ca00"}}/>
              <FaStar style={{color:"f7ca00"}}/>
              <FaStar style={{color:"f7ca00"}}/>
              <FaRegStar />
              <span style={{marginLeft:"5px"}}>{data?.noOfReviews}</span>
              <div style={{display:"flex",gap:"20px",justifyContent:"center"}}>
              <h2>{data.sellingPrice}</h2>
              <del><h2>{data.originalPrice}</h2></del>
              </div>
              <p>{data.discountPercentage}</p>
              <b>Add to Cart</b>




            </div>
          );
        })
      }


    </div>
  )
}

export default App;

































































































// import Cards from "./components/Cards";


// const photos = [{
//   "albumId": 1,
//   "id": 1,
//   "title": "accusamus beatae ad facilis cum similique qui sunt",
//   "url": "https://via.placeholder.com/600/92c952",
//   "thumbnailUrl": "https://via.placeholder.com/150/92c952"
// },
// {
//   "albumId": 1,
//   "id": 2,
//   "title": "reprehenderit est deserunt velit ipsam",
//   "url": "https://via.placeholder.com/600/771796",
//   "thumbnailUrl": "https://via.placeholder.com/150/771796"
// },
// {
//   "albumId": 1,
//   "id": 3,
//   "title": "officia porro iure quia iusto qui ipsa ut modi",
//   "url": "https://via.placeholder.com/600/24f355",
//   "thumbnailUrl": "https://via.placeholder.com/150/24f355"
// },
// {
//   "albumId": 1,
//   "id": 4,
//   "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
//   "url": "https://via.placeholder.com/600/d32776",
//   "thumbnailUrl": "https://via.placeholder.com/150/d32776"
// },
// {
//   "albumId": 1,
//   "id": 5,
//   "title": "natus nisi omnis corporis facere molestiae rerum in",
//   "url": "https://via.placeholder.com/600/f66b97",
//   "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
// },];

// function App() {
//   return (
//   <div style={{display:"flex", flexWrap:"wrap",gap:"20px"}}>
//     {
//       <>
//       <Cards ele = {photos[0]}/>
//       <Cards ele = {photos[1]}/>
//       <Cards ele = {photos[2]}/>
//       <Cards ele = {photos[3]}/>
//       <Cards ele = {photos[4]}/>

//       </>
      // photos.map(ele => {
      //   return  <Cards ele={ele}/>
        
      // })
//     }
//   </div>
//   );
// }

// export default App;


          

       