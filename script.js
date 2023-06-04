// document.write("JAI SHREE RAM");
const h1=document.getElementById('h1-date');

const searchBtn=document.getElementById('search-form');



// const img=document.getElementsById('img');
// img.src="./DSC_6190.JPG";
// const your_api_key='e1LRNnmvLPH0sQ2JyBoexuUF8W8H0RmNE6ncl2cp';

// const currentDate = new Date().toISOString().split("T")[0];
// console.log(currentDate)


   
 

function getImageofTheDay(userdate){
           if(new Date(userdate)>new Date){
            alert('Oops! can not show, This date is in future');
            return;
           }
    



    let your_api_key='e1LRNnmvLPH0sQ2JyBoexuUF8W8H0RmNE6ncl2cp';
    fetch(`https://api.nasa.gov/planetary/apod?date=${userdate}&api_key=${your_api_key}`).
    
    then((resp)=> resp.json()).
    then((data)=>{
        // console.log(data)
        const currentImageContainer=document.getElementById('current-image-container');
        currentImageContainer.innerHTML=`
        <h1>NASA PICTURE OF THE ${userdate}</h1>
        <img src="${data.url}" alt="${data.title}">
        <br>
        <h2>${data.title}</h2>
        <br>
        <p>${data.explanation}</p>

        `;
        saveSearch(userdate);
        addSearchToHistory(userdate);
    }).catch(err=> console.log(err));
}
const your_api_key='e1LRNnmvLPH0sQ2JyBoexuUF8W8H0RmNE6ncl2cp';

searchBtn.addEventListener('submit',(e)=>{
   e.preventDefault();
   const userDate=document.getElementById('search-input').value;
    getImageofTheDay(userDate);


})
//function to save in localstorage
function saveSearch(date){
    const savedData=JSON.parse(localStorage.getItem('savedData')) || [];

    savedData.push(date);
    localStorage.setItem('savedData',JSON.stringify(savedData));
}//function to add in history
function addSearchToHistory(date){
    const historyList=document.getElementById('search-history');
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.href = "javascript:void(0)";
    link.textContent = date;
    link.addEventListener("click", function() {
        // Fetch and display the image for the clicked date
        getImageofTheDay(date);
    });
    li.appendChild(link);
    historyList.appendChild(li);
    
}

const currentDate = new Date().toISOString().split("T")[0];
function getCurrentImageOfTheDay(){
    
    fetch(`https://api.nasa.gov/planetary/apod?date=${currentDate}&api_key=${your_api_key}`).
    then((resp)=> resp.json()).
    then((data)=>{
        // console.log(data);
        const currentImageContainer=document.getElementById('current-image-container');
        currentImageContainer.innerHTML=`
        <h1>NASA PICTURE OF THE ${currentDate}</h1>
        <img src="${data.url}" alt="${data.title}">
        <h2>${data.title}</h2>
        <br>
        <p>${data.explanation}</p>

        `
    }).catch(err=> console.log(err));

}
getCurrentImageOfTheDay();

