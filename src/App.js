import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  
  //fetch api
  const [users,setUsers] = useState([]);

  const fetchData = () => {
    fetch("http://jsonplaceholder.typicode.com/users")
    .then(response => {
      return response.json()
     
    })
    .then(data => {
      setUsers(data)
    })
  }
  useEffect(() => {
    fetchData()
  },[])

  //react slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1

  };

  return (
    <div>
      {users.length > 0 && (
        <div className='flex flex-col m-10'> 
          <Slider {...settings}>
          {users.map(user => (  
            
            <div className="text-center text-sky-400 flex flex-col" key={user.id}>
              <p> {user.name} </p>
              <p> {user.email} </p>
            </div>  
            
          ))}
          </Slider>
          
        </div>
      )}
    </div>
  );
}

export default App;
