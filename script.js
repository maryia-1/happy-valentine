const images =[
    {
        src: "images/firsdaymeet.jpg",
        caption: "The night we met! It was a chaotic night!"
    },
    {
        src: "images/dayattheisland.jpg",
        caption: "Our day on the island, where we swam and watched the sunset, it was such a beautiful day :)"
    },
    {
        src: "images/erasmus2.jpg",
        caption:"another erasmus night, ended with a bussin kebab"
    },
    {
        src:"images/kadikoy.jpg",
        caption:"a day spent wandering around in kadikoy, drinking coffee and petting kitties, ended with a kiss :)"
    },
    {
        src:"images/valentine1yrago.jpg",
        caption:"Valentine's day a year ago, we went to the tax office in the morning lol, you gave me pretty earrings :) i had an amazing day:)"
    },
    {
        src:"images/chesswcat.jpg",
        caption:"Visted my uni's other campus, played chess with a little company:)"
    },
    {
        src:"images/phons.jpg",
        caption:"and then you left, but we stayed in contact we became phone lovers :D"
    },
    {
        src:"images/games.jpg",
        caption:"and we played games! roblox getting freaky"
    },
    {
        src:"images/firstday.jpg",
        caption:"and then you came to visit! We spent the day wandering around istanbul :D"
    },
    {
        src:"images/ushehe.jpg",
        caption: "we wandered some more, you came to my campus, met some of my friends and we wandered around even more!! Thank you so much for visiting, you make me happy!"
    },

];
let currentIndex=0;
const imageelement=document.getElementById("slide-image");
const captionelement =document.getElementById("slide-caption");
const prevbtn =document.querySelector(".prev");
const nextbtn=document.querySelector(".next");
function changeSlide(){
    imageelement.src =images[currentIndex].src;
    captionelement.textContent=images[currentIndex].caption;

}
nextbtn.addEventListener("click",function() 
{
    currentIndex++;
    if(currentIndex >=images.length) 
    {
        currentIndex=0;
    }
    changeSlide();
});
prevbtn.addEventListener("click",function() {
    currentIndex--;
    if(currentIndex<0){
        currentIndex=images.length-1;
    }
    changeSlide();
});

