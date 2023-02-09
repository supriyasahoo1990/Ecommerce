const product = [
   
   { id: 1,
    image: 'pics/babycare.jpg',
    title: 'Babywipes',
    price: '$30',
   },
   {
    id: 2,
    image: 'pics/dress.jpg',
    title: 'Dress',
    price: '$150',

   },
   {
   id: 3,
   image: 'pics/television.jpg',
   title: 'LED tv',
   price: '$1350',

  },
  {
    id: 4,
    image: 'pics/f01.jpg',
    title: 'Smartwatch',
    price: '$2350',
 
   },
   {
    id: 5,
    image: 'pics/tshirt.jpg',
    title: 'Mens fashion',
    price: '$350',
 
   },
   {
    id: 6,
    image: 'pics/earpods.jpg',
    title: 'Earphones',
    price: '$2350',
 
   }
]
const categories = [...new Set(product.map((item)=>
    {return item}))]
    
    let cart = document.getElementById('root')
    cart.innerHTML = categories.map((item)=>
    {
        var {image, title, price} = item;
        return(
            `<div class = "box">
            <div class = "img-box">
            <img src = ${image}></img>
            </div>
            <div class ="left">
            <p>${title}</p>
            <button>  View more </button>
            </div>
            </div>`
        )
    }).join('')