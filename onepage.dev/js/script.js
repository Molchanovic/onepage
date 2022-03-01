// ! Бургер

if (document.querySelector('.burger-menu')) {

	// Главное меню (бургер)
	document.querySelector('.burger-menu').addEventListener('click', ev => {
		document.querySelector('.burger-menu').classList.toggle('burger-menu_active');
		document.querySelector('.header').classList.toggle('header_active');
	})
}

if (document.querySelector('.quantity-goods')) {
	function formQuantity(clasname) {
		if (document.querySelector('.' + clasname)) {
			//!Записать в отдельный файл
			let quentyGoods = document.querySelectorAll('.' + clasname);
			quentyGoods.forEach(el => {
				let numCount = el.querySelector('.quantity-goods__count');
				let plusBtn = el.querySelector('.quantity-goods-plus');
				let minusBtn = el.querySelector('.quantity-goods-minus');
				let numberBig = el.querySelector('.quantity-goods__number');
				let min = +numCount.min;
				let step = +numCount.step;
				plusBtn.addEventListener('click', () => {
					numCount.value = +numCount.value + step;
					if (+numCount.value < min) numCount.value = min;
					numberBig.innerHTML = numCount.value;
				});
				minusBtn.addEventListener('click', () => {
					numCount.value = +numCount.value - step;
					if (+numCount.value < min) numCount.value = min;
					numberBig.innerHTML = numCount.value;
				});
				numCount.addEventListener('change', () => {
					if (+numCount.value < min) numCount.value = min;
					numberBig.innerHTML = numCount.value;
				});
			});
		}
	}
	formQuantity('quantity-goods');
};

if (document.querySelector('.main-block__calc')) {
	
	let countAda = document.querySelector('.main-block__ada');
	let countNfts = document.querySelector('.main-block__nfts');
	let countBtn = document.querySelector('.main-block__calc-btn');
	let copyBtn = document.querySelector('.main-block__calc-copy');
	let textBlock = document.querySelector('.main-block__text-block');
	let countBlock = document.querySelector('.main-block__calc-counter');


	countBtn.addEventListener ('click', function () {
		let numberNft = document.querySelector('.quantity-goods__number').textContent;
		countBtn.classList.add('main-block__calc-btn_disable');
		copyBtn.classList.add('main-block__calc-copy_active');
		countBlock.classList.add('main-block__calc-counter_disable');
		textBlock.classList.add('main-block__text-block_active');
		console.log (numberNft)
		countNfts.innerHTML = numberNft;
		countAda.innerHTML = numberNft * 100;
	});

	copyBtn.addEventListener ('click', function () {
		let textLink = document.querySelector('.main-block__text-link').innerText;
		
	});



	let copyEmailBtn = document.querySelector('.main-block__calc-copy');  
copyEmailBtn.addEventListener('click', function(event) {  
  // Выборка ссылки с электронной почтой 
  let emailLink = document.querySelector('.main-block__text-link');  
  let range = document.createRange();  
  range.selectNode(emailLink);  
  window.getSelection().addRange(range);  
    
  try {  
    // Теперь, когда мы выбрали текст ссылки, выполним команду копирования
    var successful = document.execCommand('copy');  
    var msg = successful ? 'successful' : 'unsuccessful';  
    console.log('Copy email command was ' + msg);  
  } catch(err) {  
    console.log('Oops, unable to copy');  
  }  
    
  // Снятие выделения - ВНИМАНИЕ: вы должны использовать
  // removeRange(range) когда это возможно
  window.getSelection().removeAllRanges();  
});



}










//===Модули===============================
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}


const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e){
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}



function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener("click" , function (e){
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}

function popupClose(popupActive, doUnLock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if(doUnLock) {
			bodyUnLock();
		}
	}
}



function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
	if (lockPaddingValue.length > 0){
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	 body.style.paddingRight = lockPaddingValue;
	 body.classList.add('lock');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnLock() {
	setTimeout(function (){
		if (lockPadding.length > 0){
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function (){
		unlock = true;
	}, timeout);
}

document.addEventListener('keydown', function (e){
	if (e.which === 27) {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});



(function(){
	if (!Element.prototype.closest) {
		Element.prototype.closest = function (css){
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function(){
	if (!Element.prototype.matches){
		Element.prototype.matches = Element.prototype.matchesSelector ||
		Element.prototype.webkitMatchesSelector ||
		Element.prototype.mozMatchesSelector ||
		Element.prototype.msMatchesSelector;
	}
})(); //Модальное окно  //!Сниппет "!modal" html
//@//@include('../../../_module/JS/_tooltip.js', {}) //Тултип  //!Сниппет "!tooltip" html
//@//@include('../../../_module/JS/_validator-form.js', {}) //Валидатор форм  //!Сниппет "!forma" html
//@//@include('../../../_module/JS/_accordion.js', {}) //Валидатор форм  //!Сниппет "!accordion" html
// @//@include('../../../_module/JS/_quantity.js', {}) //Валидатор форм  //!Сниппет "!accordion" html

if (document.querySelector('.tel')) {
	//@//@include('../../../_module/JS/_maskPhone.js', {}) //Маска номера телефона (библиотека)
	//maskPhone('.tel');//Вызов функции маски номера телефона
}

