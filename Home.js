function slideshowFun(images) {
    let currentindex = 1;
    const slideshow = document.querySelector("#slideshow");
    const allImg = document.createElement("img");
    allImg.setAttribute("src", images[0]);
    slideshow.appendChild(allImg);
    // slideShow.setAttribute("src", images[currentindex]); 
    setInterval(()=>{
      allImg.src=images[currentindex++]
      if (currentindex >= images.length) currentindex = 0;
  
    }, 2000)
  
  }
  
var Images = [
    "https://www.reliancedigital.in/medias/MIdnight-Sale-Carousel-07-12-2022.jpg?context=bWFzdGVyfGltYWdlc3w5OTA2OXxpbWFnZS9qcGVnfGltYWdlcy9oNzYvaGM5Lzk5MjgzODQ4Mzk3MTAuanBnfGUxZTBiNDNlOGU2ZWUzMzg2YjU3MWMwYmJiNTBhZjM5ODdkMzhjYjNiYWZhYzllYWJmNzE0MGY4MTFmMjY3MDU",

    "https://www.reliancedigital.in/medias/Summer-Offer-Reliance-1365x260.jpg?context=bWFzdGVyfGltYWdlc3wxNjA4NDV8aW1hZ2UvanBlZ3xpbWFnZXMvaGQyL2g4Zi85OTc1MTg1MzA5NzI2LmpwZ3xiYzk0YTc4OTBhYTg0ZGQzYmViZTY1NmFhNjMyYmUzZDlhZWNlNzg1NTE0YjA5ZDE3NzFhM2UwNGE1ZGJiNzVk",

]


window.addEventListener("load", function () {

    // add event-listeners;
    slideshowFun(Images);
});

// middle part..

