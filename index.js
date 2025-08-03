const dataload= ()=>{

fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
.then((res)=> res.json())
.then((data)=> dataDisplay(data.categories))
.catch((err)=> console.log(err))

}
// videolond 
const videolond = ()=>{

    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
.then((res)=> res.json())
.then((data)=> displayVideo (data.videos))
.catch((err)=> console.log(err))

}
videolond()




const dataDisplay= (categories)=>{
    
const btndiv = document.getElementById("buttondiv");

categories.forEach(item => {

console.log(item.category);

const button= document.createElement('button')
button.classList='btn'
button.innerText = item.category;
console.log(button);
btndiv.append(button)

});

}
dataload()
              

// videolond 

const displayVideo = (videoPaice)=>{
  const videodiv = document.createElement('div')
videodiv.classList=`flex justify-center gap-7 flex-wrap `

console.log(videoPaice);

videoPaice.forEach((item)=>{

// console.log(item);
const cart= document.createElement('div')
cart.innerHTML=`
<div class="card bg-base-100 w-96 shadow-sm">
  <figure class="h-48">
    <img
      src="${item.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${item.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
`;

videodiv.append(cart)

});

document.body.append(videodiv)

}






