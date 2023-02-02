

//Buttons
const btnBag = document.querySelector('#showBag');
const btnAddItem = document.querySelector('#addItem');
const btnRemoveItem = document.querySelector('#deleteItem');
const btnRotateItem = document.querySelector('#rotateItem');
const btnCloseRotateItem = document.querySelector('#closeRotateItem');
const btnBuyItem = document.querySelector('#buyItem');

//Class
const emptyBag = document.querySelector('.item-null');
const bagItens = document.querySelector('.itens-buy');
const itensAdded = document.querySelector('.box-item-buy');
const iconNotification = document.querySelector('.notification');
const textNotification = document.querySelector('.text-notification');
const imgStaticItem = document.querySelector('.img-item-sell');
const imgRotateItem = document.querySelector('.img-item-sell-3d');
const purchaseMade = document.querySelector('.success');
const hideMain = document.querySelector('main');

//Id
const amountItem = document.querySelector('#amountItem');
const priceItem = document.querySelector('#priceItem');

//Var
let amount = 0;
let price = 4000;

//FUNCTIONS
bag = () => {
    let status = 0;
    // status = 0 (show)
    // status = 1 (hide)
    btnBag.addEventListener('click', () => {
        if (status == 0) {
            bagItens.classList.remove('hide');
            status = 1;
        }
        else {
            bagItens.classList.add('hide');
            status = 0;
        }
    })
}

add = () => {
    iconNotification.classList.remove('hide');
    itensAdded.classList.remove('hide');
    emptyBag.classList.add('hide');
    amount++;
    textNotification.innerHTML = amount;
    amountItem.innerHTML = amount;
    priceItem.innerHTML = price * amount;
}

remove = () => {
    iconNotification.classList.add('hide');
    itensAdded.classList.add('hide');
    emptyBag.classList.remove('hide');
    amount = 0;
    amountItem.innerHTML = '';
    priceItem.innerHTML = '';
}

addItem = () => {
    btnAddItem.addEventListener('click', () => {
        add();
    })
}

removeItem = () => {
    btnRemoveItem.addEventListener('click', () => {
        remove();
    })
}

buyItem = () => {
    btnBuyItem.addEventListener('click', () => {
        hideMain.classList.add('hide');
        purchaseMade.classList.remove('hide');
        remove();
    })
}

show360 = () => {
    btnRotateItem.classList.add('hide');
    btnCloseRotateItem.classList.remove('hide');
    imgStaticItem.classList.add('hide');
    imgRotateItem.classList.remove('hide');
}

hide360 = () => {
  btnRotateItem.classList.remove('hide');
  btnCloseRotateItem.classList.add('hide');
  imgStaticItem.classList.remove('hide');
  imgRotateItem.classList.add('hide');
}

rotateItem = () => {
  btnRotateItem.addEventListener('click', () => {
      show360();
  })
  btnCloseRotateItem.addEventListener('click', () => {
      hide360();
  })
}

// execute
bag();
addItem();
buyItem();
removeItem();
rotateItem();
