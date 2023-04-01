function slideshowFun(images) {
    let currentindex = 1;
    const slideshow = document.querySelector("#slideshow");
    const allImg = document.createElement("img");
    allImg.setAttribute("src", images[0]);
    slideshow.appendChild(allImg);
    // slideShow.setAttribute("src", images[currentindex]); 
    setInterval(() => {
        allImg.src = images[currentindex++]
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
var images = [


    "https://www.reliancedigital.in/medias/Sony-TV-Soundbar-Carousel-Banner-09-03-2023.jpg?context=bWFzdGVyfGltYWdlc3wxMzMwOTZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDk1L2gxMi85OTY5MTE0NDQ3OTAyLmpwZ3xmMjQxZDUyNGExOWIzNjNiNGJlOGE4MzFkZTFjZDk2ZjNkN2U3N2ZmZDlmNmNjMzUwMmFhZGFhMWE5YzJiZTc5",
    "https://www.reliancedigital.in/medias/AC-Chill-Fest-Carousel-Banner-24-02-2023.jpg?context=bWFzdGVyfGltYWdlc3w5MTE5M3xpbWFnZS9qcGVnfGltYWdlcy9oZWYvaDViLzk5NjU0ODY4NjY0NjIuanBnfGFiOTM5NjlmODJmY2RiYmZiZTU2ZjIzMjQ4MGU3ZWU1ZDllMjY2MTU5NmMxZWEyNTllOGIxMTBjNDUwZTg5NmQ",
    "https://www.reliancedigital.in/medias/Smart-Home-Devices-Carousel-Banner-20-03-2023.jpg?context=bWFzdGVyfGltYWdlc3w3MzU3N3xpbWFnZS9qcGVnfGltYWdlcy9oZjEvaGJjLzk5NzI2Nzc1NzQ2ODYuanBnfDI5YzRlN2U3MjlkZmJkMzViNjI4ZDNjNTEzMWU3OTE2OGQzNzc4NGJhZDIxMGI0OTk4ZTg2OTVkYmY4NDcwOTA",

    "https://www.reliancedigital.in/medias/SanDisk-World-Back-Up-Day-Carousel-Banner-20-03-2023.jpg?context=bWFzdGVyfGltYWdlc3wxMDg3OTF8aW1hZ2UvanBlZ3xpbWFnZXMvaDc0L2gyYS85OTczNzI2MzE0NTI2LmpwZ3xiZjVmMWRmMWNiNmMzMzAxYzhiNTFkZWI1YTc3ZTAyODk4NWJjZGRiMDBmNzBiNzQxYWEwZjEzNmNhMmUwY2Qx",

]


function slideshowFunction(images) {
    let currentindex = 1;
    const slideshow2 = document.querySelector("#slideshow2");
    const allImg = document.createElement("img");
    allImg.setAttribute("src", images[0]);
    slideshow2.appendChild(allImg);
    // slideShow.setAttribute("src", images[currentindex]); 
    setInterval(() => {
        allImg.src = images[currentindex++]
        if (currentindex >= images.length) currentindex = 0;

    }, 2000)

}




window.addEventListener("load", function () {

    // add event-listeners;
    slideshowFunction(images);
});



const all_produt = [


    {
        "id": 10,
        "image": "https://www.reliancedigital.in/medias/HISENSE-43A6GE-Smart-LED-492338735-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3NjY5OXxpbWFnZS9qcGVnfGltYWdlcy9oMTEvaDcwLzk3Nzg4NDI1OTk0NTQuanBnfGFiNzdlZmMxODczMmUyNzdlMDRkZGJjMzEyNTA4YTNhMGVhYjlhYmU0MzYwNDBmNmY4NjBlOGJjNDQwZjEzMjg",
        "title": "Hisense 108 cm (43 inch) 2Yr Warranty 4K Ultra HD Smart Certified Android LED TV 43A6GE (Black) with Dolby Vision and ATMOS",
        "brand": "HISENSE",
        "rating": 4.5,
        "offerprice": 20990.0,
        "mrp": 44990.0,
        "category": "Telivision"
    },
    {
        "id": 12,
        "image": "https://www.reliancedigital.in/medias/Itel-G4330IE-Television-493072590-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MDM2NXxpbWFnZS9qcGVnfGltYWdlcy9oNmIvaDQyLzk4OTU1NjY1MDgwNjIuanBnfDc4NDUxNjU3MGMyYmQ2ZjIwNjIxOThlZTI0ZTRlYmIzZmI1YWUwMzc4NzZkYjhhNTcwMzI3OGMwNjk2ZGZiMjM",
        "title": "Itel 108 cm (43 inch) Full HD Android Smart LED TV, G4330IE",
        "brand": "ITEL",
        "rating": 4.1,
        "offerprice": 15990.0,
        "mrp": 40000.0,
        "category": "Telivision"
    },
    {
        "id": 13,
        "image": "https://www.reliancedigital.in/medias/Hisense-55A7H-LED-Smart-TVs-493179250-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w4NDA5NXxpbWFnZS9qcGVnfGltYWdlcy9oNTEvaDIzLzk5MTUxMzAwODU0MDYuanBnfDgzZjgwNzBiNDZmZmM5ZDk4MzFhZDgyZjhjYjdkNzg3ZjNhM2U1MGM4OTdjOWNiMzhjNmNlZGVkOWYzNzQyZjk",
        "title": "Hisense 139 cm (55 inch) Ultra HD (4K) LED Smart Google TV, 55A7H",
        "brand": "HISENSE",
        "rating": 4.8,
        "offerprice": 42990.0,
        "mrp": 60990.0,
        "category": "Telivision"
    },
    {
        "id": 10,
        "image": "https://www.reliancedigital.in/medias/HISENSE-43A6GE-Smart-LED-492338735-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3NjY5OXxpbWFnZS9qcGVnfGltYWdlcy9oMTEvaDcwLzk3Nzg4NDI1OTk0NTQuanBnfGFiNzdlZmMxODczMmUyNzdlMDRkZGJjMzEyNTA4YTNhMGVhYjlhYmU0MzYwNDBmNmY4NjBlOGJjNDQwZjEzMjg",
        "title": "Hisense 108 cm (43 inch) 2Yr Warranty 4K Ultra HD Smart Certified Android LED TV 43A6GE (Black) with Dolby Vision and ATMOS",
        "brand": "HISENSE",
        "rating": 4.5,
        "offerprice": 20990.0,
        "mrp": 44990.0,
        "category": "Telivision"
    },

    {
        "id": 12,
        "image": "https://www.reliancedigital.in/medias/Itel-G4330IE-Television-493072590-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MDM2NXxpbWFnZS9qcGVnfGltYWdlcy9oNmIvaDQyLzk4OTU1NjY1MDgwNjIuanBnfDc4NDUxNjU3MGMyYmQ2ZjIwNjIxOThlZTI0ZTRlYmIzZmI1YWUwMzc4NzZkYjhhNTcwMzI3OGMwNjk2ZGZiMjM",
        "title": "Itel 108 cm (43 inch) Full HD Android Smart LED TV, G4330IE",
        "brand": "ITEL",
        "rating": 4.1,
        "offerprice": 15990.0,
        "mrp": 40000.0,
        "category": "Telivision"
    },


]

const all_iteams = document.getElementById("all_iteams");

for (i = 0; i < all_produt.length; i++) {
    const card = document.createElement("div");

    const image = document.createElement("img")
    image.src = all_produt[i].image

    const title = document.createElement("p");
    title.innerText = all_produt[i].title;


    const brand = document.createElement("h6");
    brand.innerText = all_produt[i].brand;

    const rating = document.createElement("h6")
    rating.innerHTML = "Rating - " + all_produt[i].rating + " ⭐⭐⭐⭐";

    const offerprice = document.createElement("h5")
    offerprice.innerHTML = "Deal Price - ₹" + all_produt[i].offerprice;


    let mrp = document.createElement("h6");
    mrp.innerHTML = "M.R.P. - ₹" + all_produt[i].mrp;

    let discount = document.createElement("h6");
    discount.innerHTML = "You Save - ₹" + Number(all_produt[i].mrp - all_produt[i].offerprice);

    let category = document.createElement("h6");
    category.innerHTML = "Category - " + all_produt[i].category;


    card.append(image, title, brand, rating, offerprice, discount, category);
    all_iteams.append(card);


}


let view = [
    "https://www.reliancedigital.in/medias/OnePlus-Nord-CE-3-Lite-5G-CLP-Banner-23-03-2023.jpg?context=bWFzdGVyfGltYWdlc3w3NDA3NXxpbWFnZS9qcGVnfGltYWdlcy9oODIvaDE5Lzk5NzMyODA5NjQ2MzguanBnfGUyNThmYWJmMmJhMDcxN2MwMTA3M2Q3ZjJjYWQyYjRiYjc5Zjg4ZTI4NGVhNjUxMzUwMmJkNjQzMGQ1MWRhODA",

    "https://www.reliancedigital.in/medias/BoAt-Wave-Lynk-Voice-CLP-Banner-28-02-2023.jpg?context=bWFzdGVyfGltYWdlc3w5NTMzNHxpbWFnZS9qcGVnfGltYWdlcy9oMzQvaDM3Lzk5NjU1MTcyMDk2MzAuanBnfDBlZjJhMjNlMjk4OGVjZjExYjVmYmRmNjJiZmJjNzFhZTQyZmVmNDY5ZmM3ZTVhMWY2ODk5NjNiZTJmNzdjODY",


    "https://www.reliancedigital.in/medias/1365-x-260-px-JBL-WAVE-RD-3499-jpeg.jpg?context=bWFzdGVyfGltYWdlc3wxOTg5MjN8aW1hZ2UvanBlZ3xpbWFnZXMvaGQxL2g2Zi85OTY2NDYyMzA0Mjg2LmpwZ3wwYjg1M2NiMzhiMmMyYjJiOTRjZDZkMjZiMTJjYmFhMjBmZTNhOTEzYzA3NzllNjVjMTMxY2EwNjYyMzRjMDM3",

    "https://www.reliancedigital.in/medias/Xiaomi-13-Pro-CLP-Banner-24-03-2023.jpg?context=bWFzdGVyfGltYWdlc3w0OTUyOHxpbWFnZS9qcGVnfGltYWdlcy9oYzQvaDgyLzk5NzM3Mjg0NDQ0NDYuanBnfDhhZWE0ZTY1ZGRlNWRhZjdhZDVkNGY3MjUwMTM4YmQ3OTlhMTBhYzViZDRhMGU2ZTFlOTk3NjJhMDk0YmRmMzI",

]

function slideshow(images) {
    let currentindex = 1;
    const slideshow3 = document.querySelector("#slideshow3");
    const allImg = document.createElement("img");
    allImg.setAttribute("src", images[0]);
    slideshow3.appendChild(allImg);
    // slideShow.setAttribute("src", images[currentindex]); 
    setInterval(() => {
        allImg.src = images[currentindex++]
        if (currentindex >= images.length) currentindex = 0;

    }, 2000)

}



window.addEventListener("load", function () {

    // add event-listeners;
    slideshow(view);
});



const produt = [
    {
        "id": 13,
        "image": "https://www.reliancedigital.in/medias/Philips-HD9270-70-Airfryer-492572874-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w5NzgxODl8aW1hZ2UvcG5nfGltYWdlcy9oODIvaGYwLzk4NDMxMjUyNTYyMjIucG5nfDcyNmYyNzhkMzBhODM3YjgyNzAwZTU2OWU5YzdlYzcyZGY0ZjlmNDJlODk2MjAzMzMzNWIwYWYzZGU0NzY0MTc",
        "brand": "Philips Airfryer XL 6.2 Litres HD9270/70 with Rapid Air Technology (Black)",
        "rating": 4.5,
        "offerprice": 20990.0,
        "mrp": 44990.0,
    },
    {
        "id": 14,
        "image": "https://www.reliancedigital.in/medias/Lifelong-Infinia-Juicer-Mixer-Grinder-492391909-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1MTMwMXxpbWFnZS9qcGVnfGltYWdlcy9oNzAvaDNjLzk2NDk2NDg1MDA3NjYuanBnfDViM2QyYTQ0NGJkMDYyNTZiZWEyM2MxNTJkNWM2Mjc2OTZhZmI5ZmRkNGViNzY5MGM4ZDRjMDE3NGNhMjEwZGU",
        "brand": "Lifelong Infinia 500 Watts Mixer Grinder, Grey",
        "rating": 4.5,
        "offerprice": 20990.0,
        "mrp": 44990.0,
    },
    {
        "id": 14,
        "image": "https://www.reliancedigital.in/medias/Orient-Electric-3134817112010-Fan-493627369-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzNzM0MHxpbWFnZS9qcGVnfGltYWdlcy9oODcvaDY5Lzk5MzY1MDg1NTExOTguanBnfGVkMWQ3YjUwZGI1NGU4NDU5M2M4NGViNzYwOWI5MjFlYWJmNjIzMDE4Y2U5OTdhOWZmZjVhZjAyZWI1NTY0ZmY",
        "brand": "Orient Electric Ujala Energy Saver 1200 mm 3 Blade Ceiling Fan, Brown",
        "rating": 4.5,
        "offerprice": 20990.0,
        "mrp": 44990.0,
    },
    {
        "id": 14,
        "image": "https://www.reliancedigital.in/medias/Philips-Viva-Collection-HL7701-00-Mixer-Grinder-491265144-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w5ODQ5NnxpbWFnZS9qcGVnfGltYWdlcy9oNDcvaGRiLzg5MzA2ODY3OTU4MDYuanBnfDBjYTI2OWU2MTM2MzlmODJmMmExZDU3NGM2YzE4YWZhZGEyYjFmZjcxOTVhNWViM2E5YmM5MjVkMzRmYmRiYTc",
        "brand": "Philips Viva Collection HL7701/00 750-watt Juicer Mixer Grinder with 4 Leakproof jars",
        "rating": 4.5,
        "offerprice": 20990.0,
        "mrp": 44990.0,
    },


]

const B = document.getElementById("B");

for (i = 0; i < produt.length; i++) {
    const card = document.createElement("div");

    const image = document.createElement("img")
    image.src = produt[i].image

    // const title = document.createElement("p");
    // title.innerText =produt[i].title;


    const brand = document.createElement("h5");
    brand.innerText = produt[i].brand;

    const rating = document.createElement("h6")
    rating.innerHTML = "Rating - " + produt[i].rating + " ⭐⭐⭐⭐";

    const offerprice = document.createElement("h5")
    offerprice.innerHTML = "Deal Price - ₹" + produt[i].offerprice;


    let mrp = document.createElement("h6");
    mrp.innerHTML = "M.R.P. - ₹" + produt[i].mrp;

    let discount = document.createElement("h6");
    discount.innerHTML = "You Save - ₹" + Number(produt[i].mrp - produt[i].offerprice);




    card.append(image, brand, rating, offerprice, discount);
    B.append(card);


}


// search function..
const searchiteam = () => {
    const iteams = document.getElementById("audioContainer");
}


  // Current branch(day-4) > push all the updates
  // make new folder on desktop and copy all the files from day-4 branch(vs code)
  // open main branch on vs code and delete any existing files from it, also push it to github
  // paste the files from the new folder to the main branch and push again