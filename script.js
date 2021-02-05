const searchBox=document.querySelector('.search-box')
const navContainerBtn=document.querySelector('.nav-btn-container')
const searchBtn=document.querySelector('.search-btn')
const closeBtn=document.querySelector('.close-btn')
console.log(closeBtn);


searchBtn.addEventListener('click',()=>{
    navContainerBtn.classList.add('active')
searchBox.classList.add('active')
 
})
closeBtn.addEventListener('click',()=>{
    console.log('hello');
    navContainerBtn.classList.remove('active')
    searchBox.classList.remove('active')
})