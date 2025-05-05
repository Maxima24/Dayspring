<<<<<<< Updated upstream
import React from 'react'
=======
import React, { useEffect, useState } from 'react'
import store from '../../store';
import Button from '../../components/Button';
import { Link, Navigate, useNavigate, useParams, } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../feautures/cartSlice';
import { GetProduct } from '../../services/apiAuth';



const GuestPage = () => {
  const [products,setProducts] = useState([])
  useEffect(()=>{
    async function getProduct(){
      const product = await GetProduct()
      console.log(products)
      setProducts(product)
    }
    getProduct()
   
  },[])

  const state = useSelector(state=>state.user)
  console.log(state)
  const cart = useSelector(state=>state.cart.cart)
  console.log(cart)
  const username =state.username
  const navigate = useNavigate()
  const dispatch = useDispatch()


  // const {id} = useParams()

  
 
  const role =state.role
  const Guestrole = role === "GUEST"
  console.log(Guestrole)
  if(!Guestrole)  return <Navigate to={"/newuser/login"}></Navigate>
  console.log(state)

  const user = { name: username }

  ; // Replace with real user data
  const featuredItems = [
    { id: 1, title: "MTH 202", price: "$5", image: "/images/sneakers.jpg" },
    { id: 2, title: "PHY 102", price: "$10", image: "/images/watch.jpg" },
  ];

  const categories = [
    
    { name: "Past Questions", image: "/images/electronics.jpg" },
      {name:"Digital Skills",image:"/images/electronics.jpg"}
    
  ];
  // const products = await GetProduct()

  // const products = [
  //   { id: 1, title: "MTH 202",quantity:1, price: "$59.99", image: "/images/headphones.jpg" },
  //   { id: 2, title: "MEE 206",quantity:1, price: "$129.99", image: "/images/jacket.jpg" },
  //   { id: 3, title: "MTH 306",quantity:1, price: "$39.99", image: "/images/lamp.jpg" },
  //   { id: 4, title: "PHY 102",quantity:1, price: "$299.99", image: "/images/tablet.jpg" },
  //   { id: 5, title: "PHY 106",quantity:1, price: "$299.99", image: "/images/tablet.jpg" },
  //   { id: 6, title: "MTH 106",quantity:1, price: "$299.99", image: "/images/tablet.jpg" },
  //   { id: 7, title: "CHM 102",quantity:1, price: "$299.99", image: "/images/tablet.jpg" },
  //   { id: 8, title: "MTH 104",quantity:1, price: "$299.99", image: "/images/tablet.jpg" }
  // ];
  function addInCart(id){
   dispatch(addToCart(products[products.findIndex(item=> item.id ==id)]))
    navigate(`/cart/${role}/${username}`)
  }
>>>>>>> Stashed changes

function GuestPage() {
  return (
<<<<<<< Updated upstream
    <div>GuestPage</div>
  )
}
=======
    <div className="p-6 space-y-12 h-auto text-blue-300 bg-gradient-to-br from-slate-950 to-slate-800 px-4 ">
      {/* Welcome Section */}
      <section className="text-2xl font-semibold flex justify-between border-b border-stone-200 ">
      <div>
      Welcome back, {user.name}! 👋
        <p className="text-gray-600 text-base mb-2">Check out what’s new today.</p>
      </div>
      <div>
        <Button to={"/newuser/login"} type={"secondary"}>Log out</Button>
      </div>
      </section>
     

      {/* Featured Items */}
      <section>
        <h2 className="text-xl font-bold mb-4">Featured Items</h2>
        <div className="flex space-x-4 overflow-x-auto pb-2">
          {featuredItems.map((item) => (
            <div key={item.id} className="min-w-[200px] bg-white shadow rounded-lg p-4">
              <img src={item.image} alt={item.title} className="h-40 w-full object-cover rounded" />
              <h3 className="mt-2 font-semibold">{item.title}</h3>
              <p className="text-gray-700">{item.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section>
        <h2 className="text-xl font-bold mb-4">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <div key={cat.name} className="bg-white rounded-lg shadow p-4 text-center">
              <img src={cat.image} alt={cat.name} className="h-24 w-full object-cover rounded" />
              <button className='hover:text-blue-500'><h3 className="mt-2 font-semibold">{cat.name}</h3></button>
            </div>
          ))}
        </div>
      </section>

      {/* Product Listing */}
      <section>
        <h2 className="text-xl font-bold mb-4">All Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow">
              <img src={product.image} alt={product.title} className="h-40 w-full object-cover rounded" />
              <h3 className="mt-2 font-medium">{product.title}</h3>
              <p className="text-gray-700">{product.price}</p>
              {
                !cart.find((item)=>item.id==product.id) ?
              <button className="mt-2 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700" onClick={()=>addInCart(product.id)}>
                Add to Cart
              </button> : "Added to Cart"
              }
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
>>>>>>> Stashed changes

export default GuestPage