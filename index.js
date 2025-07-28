const dataload= ()=>{

fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
.then((res)=> res.json())
.then((data)=> dataDisplay(data.categories))
.catch((err)=> console.log(err))

}

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






