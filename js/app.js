
//inserisco i div,con all'interno le immagini, nell'html tramite js
    //creo l'array con all'interno i path delle img
    //selezionare dal DOM l'elemento contenitore nel quale inserire i div
    //creo un ciclo for il quale inserira tutti i div con un template literal
    //tutte le img avranno display none tranne la prima (che sara visibile)

const imagesList= ["./img/01.webp","./img/02.webp","./img/03.webp","./img/04.webp","./img/05.webp"];

const imagesContainerDomElement= document.querySelector('.images');

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

//seleziono tutti gli elementi con classe item (diventa come un array)
const itemList= imagesContainerDomElement.querySelectorAll('.item');

//aggiungo una classe alla prima immagine della lista
let imagePositionList = 0;
itemList[imagePositionList].classList.add('active');

//quando l'utente clicca sulla freccia l'immagine visualizzata cambia
    //prendo l'icona della freccia dal dom
    //aggiungo un eventlistener
    //ogni volta che avviene il click la classe 'active' deve passare un div a quello successivo

const arrowNextDomElement= document.querySelector('.next');

arrowNextDomElement.addEventListener('click', function(){
    if (imagePositionList === 4) {
        itemList[imagePositionList].classList.remove('active');
        imagePositionList = 0
        itemList[imagePositionList].classList.add('active');
    } else {
        itemList[imagePositionList].classList.remove('active');
        imagePositionList= imagePositionList + 1
        itemList[imagePositionList].classList.add('active');
    }
})

const arrowBeforeDomElement= document.querySelector('.before');

arrowBeforeDomElement.addEventListener('click', function(){
    
    if (imagePositionList === 0) {
        itemList[imagePositionList].classList.remove('active');
        imagePositionList = imagesList.length - 1
        itemList[imagePositionList].classList.add('active');
    } else {
        itemList[imagePositionList].classList.remove('active');
        imagePositionList= imagePositionList - 1
        itemList[imagePositionList].classList.add('active');
    }
})