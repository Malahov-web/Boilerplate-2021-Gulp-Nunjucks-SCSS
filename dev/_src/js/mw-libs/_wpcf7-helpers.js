/*
 * . Дополнение к Contact Form 7
 * ----------------------------------------------------------------- 
 */


/*
 * 1. wpcf7ResponseOutputClose - закрытие подсказок валидации по клику (.wpcf7-response-output)
 * 2. wpcf7AddHiddenFields - добавление д-х в скрытые поля cf7 (TODO: писать специфический код)
 * 3. wpcf7MoveIconsToFieldWrap - перемещение иконок внутрь обертки поля который создает плагин  (.wpcf7-form-control-wrap)
*/

function wpcf7ResponseOutputClose() {

    jQuery('.wpcf7-response-output').click(function () {
        jQuery(this).fadeOut(400);

    });

    jQuery('.wpcf7-form-control').click(function () {
        // скрываем сообщение об обязательном заполнении
        jQuery(this).parent('.wpcf7-form-control-wrap').find('.wpcf7-not-valid-tip').fadeOut(300);
        // удаляем класс .wpcf7-not-valid поля
        jQuery(this).removeClass('wpcf7-not-valid');

    });

}


function wpcf7AddHiddenFields() {

    jQuery('.services .button-help').click(function () {


        // var serviceName = jQuery(this).val();
        var serviceName = jQuery(this).closest('.services__item-outer')
            .find('.services__item-flip-front .services__item-title')
            .text();
        // console.log('serviceName:' + serviceName);

        jQuery('#modal-order').find('[name=service_name]').val(serviceName);

    });



}


/*
 * 3. Перемещает иконки внутрь обертки поля который создает плагин  ().wpcf7-form-control-wrap)
*/
function wpcf7MoveIconsToFieldWrap() {

    // jQuery(document).ready(function($) {
    // alert('Обрабатываем формы!');

    // wpcf7MoveIconsToFieldWrap

    $('.wpcf7-form .field-inner').each(function (index, value) {

        // console.log('div' + index + ':' + $(this).attr('id')); 
        let svgEl = $(this).find('svg');
        let controlWrapEl = $(this).find('.wpcf7-form-control-wrap');
        svgEl.appendTo(controlWrapEl);

    });

    // });

}
