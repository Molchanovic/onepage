



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













//===Модули===============================
@@include('../../../_module/JS/_modal.js', {}) //Модальное окно  //!Сниппет "!modal" html
//@//@include('../../../_module/JS/_tooltip.js', {}) //Тултип  //!Сниппет "!tooltip" html
//@//@include('../../../_module/JS/_validator-form.js', {}) //Валидатор форм  //!Сниппет "!forma" html
//@//@include('../../../_module/JS/_accordion.js', {}) //Валидатор форм  //!Сниппет "!accordion" html

if (document.querySelector('.tel')) {
	//@//@include('../../../_module/JS/_maskPhone.js', {}) //Маска номера телефона (библиотека)
	//maskPhone('.tel');//Вызов функции маски номера телефона
}

