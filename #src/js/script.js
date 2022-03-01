



window.onload = function () { //ожидание полной загрузки страницы
	// let isMobile = {
	// 	Android: function () { return navigator.userAgent.match(/Android/i); },
	// 	BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
	// 	iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
	// 	Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
	// 	Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
	// 	any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
	// };               
      


	


	//Главное меню (бургер)
	// document.querySelector('.menu__btn').addEventListener('click', ev => {//Выбираем дом элимента и вешаем событие клик
	// 	document.querySelector('.menu__list').classList.toggle('menu__list_open');//добавляем класс если его нет и наоборот
	// 	document.querySelector('.menu__btn').classList.toggle('menu__btn_open');//добавляем класс если его нет и наоборот
	// 	ev.stopPropagation();
	// 	document.addEventListener('click', e => {
	// 		if (e.target != document.querySelector('.menu__list')) {
	// 			document.querySelector('.menu__list').classList.remove('menu__list_open');
	// 			document.querySelector('.menu__btn').classList.remove('menu__btn_open');
	// 		}
	// 	})
	// })
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
@@include('../../../_module/JS/_modal.js', {}) //Модальное окно  //!Сниппет "!modal" html
//@//@include('../../../_module/JS/_tooltip.js', {}) //Тултип  //!Сниппет "!tooltip" html
//@//@include('../../../_module/JS/_validator-form.js', {}) //Валидатор форм  //!Сниппет "!forma" html
//@//@include('../../../_module/JS/_accordion.js', {}) //Валидатор форм  //!Сниппет "!accordion" html
// @//@include('../../../_module/JS/_quantity.js', {}) //Валидатор форм  //!Сниппет "!accordion" html

if (document.querySelector('.tel')) {
	//@//@include('../../../_module/JS/_maskPhone.js', {}) //Маска номера телефона (библиотека)
	//maskPhone('.tel');//Вызов функции маски номера телефона
}

