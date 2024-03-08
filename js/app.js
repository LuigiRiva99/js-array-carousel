
//inserisco i div,con all'interno le immagini, nell'html tramite js
    //creo l'array con all'interno i path delle img
    //selezionare dal DOM l'elemento contenitore nel quale inserire i div
    //creo un ciclo for il quale inserira tutti i div con un template literal
    //tutte le img avranno display none tranne la prima (che sara visibile)

const imagesList= ["./img/01.webp","./img/02.webp","./img/03.webp","./img/04.webp","./img/05.webp"];
// seleziono container per immagini principali
const imagesContainerDomElement= document.querySelector('.images');
//seleziono container per thumbnails
const thumbnailContainerDomElement= document.querySelector('.thumbnails');
//ciclo per inserire div con immagini 
let mainImage = ''
for (let i = 0; i < imagesList.length; i++) {
    const imageListElement = imagesList[i]

    const sliderItem =  `
        <div class="item">
            <img src="${imageListElement}" alt="">
        </div>`;
    
    mainImage += sliderItem;
    
}

imagesContainerDomElement.innerHTML= mainImage;

//ciclo per inserire div con immagini thumbnails
let thumbnailImage = ''
for (let i = 0; i < imagesList.length; i++) {
    const imageListElement = imagesList[i]

    const sliderItem =  `
        <div class="thumbnail_image opacity_active">
            <img src="${imageListElement}" alt="">
        </div>`;
    
    thumbnailImage += sliderItem;
    
}

thumbnailContainerDomElement.innerHTML= thumbnailImage;


//seleziono tutti gli elementi con classe item (diventa come un array)
const itemList= imagesContainerDomElement.querySelectorAll('.item');

//seleziono tutti gli elementi con classe thumbnail_image
const thumbnailList= thumbnailContainerDomElement.querySelectorAll('.thumbnail_image')

//aggiungo una classe alla prima immagine della lista
let imagePositionList = 0;
itemList[imagePositionList].classList.add('active');
thumbnailList[imagePositionList].classList.remove('opacity_active');
thumbnailList[imagePositionList].classList.add('blue_border');

//quando l'utente clicca sulla freccia l'immagine visualizzata cambia
    //prendo l'icona della freccia dal dom
    //aggiungo un eventlistener
    //ogni volta che avviene il click la classe 'active' deve passare un div a quello successivo

//addeventlistener freccia NEXT
const arrowNextDomElement= document.querySelector('.next');

arrowNextDomElement.addEventListener('click', function(){
    if (imagePositionList === 4) {
        itemList[imagePositionList].classList.remove('active');
        thumbnailList[imagePositionList].classList.add('opacity_active');
        thumbnailList[imagePositionList].classList.remove('blue_border');                            
        imagePositionList = 0
        itemList[imagePositionList].classList.add('active');
        thumbnailList[imagePositionList].classList.remove('opacity_active');
        thumbnailList[imagePositionList].classList.add('blue_border');
    } else {
        itemList[imagePositionList].classList.remove('active');
        thumbnailList[imagePositionList].classList.add('opacity_active');
        thumbnailList[imagePositionList].classList.remove('blue_border');
        imagePositionList= imagePositionList + 1
        itemList[imagePositionList].classList.add('active');
        thumbnailList[imagePositionList].classList.remove('opacity_active');
        thumbnailList[imagePositionList].classList.add('blue_border');
    }
})


//addeventlistener freccia BEFORE
const arrowBeforeDomElement= document.querySelector('.before');

arrowBeforeDomElement.addEventListener('click', function(){
    
    if (imagePositionList === 0) {
        itemList[imagePositionList].classList.remove('active');
        thumbnailList[imagePositionList].classList.add('opacity_active');
        thumbnailList[imagePositionList].classList.remove('blue_border');
        imagePositionList = imagesList.length - 1
        itemList[imagePositionList].classList.add('active');
        thumbnailList[imagePositionList].classList.remove('opacity_active');
        thumbnailList[imagePositionList].classList.add('blue_border');
    } else {
        itemList[imagePositionList].classList.remove('active');
        thumbnailList[imagePositionList].classList.add('opacity_active');
        thumbnailList[imagePositionList].classList.remove('blue_border');
        imagePositionList= imagePositionList - 1
        itemList[imagePositionList].classList.add('active');
        thumbnailList[imagePositionList].classList.remove('opacity_active');
        thumbnailList[imagePositionList].classList.add('blue_border');
    }
})








