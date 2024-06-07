
async function getData(){
const url = 'https://the-vegan-recipes-db.p.rapidapi.com';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7ba7a0db7fmsh2926f80b51e958dp1b552bjsn7b40dadb2630',
		'X-RapidAPI-Host': 'the-vegan-recipes-db.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	localStorage.setItem('recipes',JSON.stringify(result));
	const data=localStorage.getItem('recipes');
	if(data){
		 let contain=document.getElementById('container');
		//  console.log(contain);
		contain.classList.add('container');
		
		result.forEach((x)=>{
		      const card= document.createElement('div');
              card.classList.add('card');


		       const image=document.createElement('img');
			   image.classList.add('image');


			   let name=document.createElement('h1');
			    name.textContent=x.title;
			    image.src=x.image;


				let btn=document.createElement('button');
				btn.textContent='get Recipe'

				/* btn.addEventListener('onClick',(e)=>{
					e.preventDefault();
					window.location.href = `recipe.html?id=${x.id}`;
				}); */
                
             card.appendChild(image);
			 card.appendChild(name);
			 card.appendChild(btn);
	
			contain.appendChild(card);
			
		});
	}else{
		console.log('no data is not avail in localstorage');
	}
	
} catch (error) {
	console.error(error);
}
}
getData();





