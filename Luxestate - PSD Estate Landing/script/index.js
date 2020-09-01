let input = document.querySelector(".hero-search-input");
let ApartInput = document.querySelector(".appartaments__search-input");


input.addEventListener('click', () =>{
    input.value = '';
});

ApartInput.addEventListener('click', (e) =>{  
        ApartInput.value = '';
    
});


//change color onmouseover

// let boxes =  document.querySelector(".howItWorks__boxes");

// let boxesTitle = document.querySelector(".howItWorks__boxes-description-title");
// let boxesDescription = document.querySelector(".howItWorks__boxes-description-text");
// let boxesSpan = document.querySelector('howItWorks__boxes-description-span');


// function f(e) {
// 	if(e.target.onmouseover == boxes){
// 		console.log(e.target)
// 	}
// }
// f();

// boxes.onmouseover = () => {
// 	boxesTitle.style.color = '#fff';
// 	boxesDescription.style.color = '#fff';
// 	boxesSpan.style.color = '#fff';
// }
// boxes.onmouseout = () => {
// 	boxesTitle.style.color = '';
// 	boxesDescription.style.color = '';
// 	boxesSpan.style.color = '';
// }
