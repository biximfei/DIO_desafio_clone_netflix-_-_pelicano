$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

//função para inserir backgroud das divs .item
var bgItem = function(){

    const arrItem = document.getElementsByClassName('item');

    for (let i = 0; i < arrItem.length ; i++) {
        //console.log(i);

        let item = arrItem[i];
        let imgItem = arrItem[i].getElementsByTagName('img')[0].getAttribute('src');

        arrItem[i].style.backgroundImage = "linear-gradient(rgba(5,5,5,.70),rgba(5,5,5,.70)), url('" + imgItem + "') ";
     
    }
}
bgItem();