
/*
 * . Modal показать/скрыть 
 * ----------------------------------------------------------------- 
 */	

/*
Guide:

Your html:
```
<a href="#"  class="btn-link js-modal-open" data-target="modal-specialist-info" data-js-callback="Appointment__showSpecInfo">
```

Your js:
```
window.Appointment__showSpecInfo = Appointment__showSpecInfo;

function Appointment__showSpecInfo(target) { }
```

*/

 	function modals(argument) {	

		// var overlay = $('.overlay');
		var overlay = $('#overlay');


		// Отменить действие по умолчанию (для тэгов a)
		$(document).on('click', '.js-modal-open, .js-modal-close', function(event){
			event.preventDefault();

		});


		// Открыть м.о.
		// TODO: дописать условие - вызывать callback только если он есть)
 		$(document).on('click', '.js-modal-open', function(event){

			// console.log('this');			
			// console.log(this); // + Вывыодит второй параметр, тот элемент кот-й делегирует

			// do callback
			var callback = $(this).attr('data-js-callback'); // имя св-ва .Appointment__showSpecInfo

			let func = window[callback];
// !!! This string call error if don't pass parameter			
			func(event.target);  
			// func(this);

			// callback();		
	  
			var target_id = $(this).attr('data-target'); 
			
			overlay.fadeIn(600);
			
			// $('#'+target_id+'').slideDown(600);
			$('#'+target_id+'').fadeIn(800);

				// alert(target_id);	
				// console.log('target_id: ' + target_id);		
				// console.log('overlay: ' + overlay);	

 		});


		// Закрыть м.о. по крестику
		$(document).on('click', '.js-modal-close', function(event){
	  
			target_id = jQuery(this).attr('data-target'); 
			overlay.fadeOut(600);
			//jQuery('#'+target_id+':visible').slideUp(600);	
			jQuery(this).closest('.js-modal').fadeOut(800); // .slideUp(600);
			
		});			
		
		
		// Закрыть м.о. по клику на overlay
		// jQuery(document).mouseup(function (e){ // событие клика по веб-документу

		overlay.on( 'click', function(e){ 
		
			var modal = overlay.find('.js-modal'); // тут указываем ID элемента
			if (!modal.is(e.target) && modal.has(e.target).length === 0) { // если клик был не по нашему блоку // и не по его дочерним элементам
			
				//div.hide(); // скрываем его 					
				overlay.fadeOut(600);	
				modal.fadeOut(800);				
			}
			
		}); 
		

 	}
