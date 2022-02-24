/*
 * 4. Menu Responsive
 * ----------------------------------------------------------------- 
 */ 


/*
Menu must have attr [data-js="menu-responsive"]
Script add last item and create dropdown menu with class ".dropdown"
when item width more than container and when page resizing

 */



    function menuResponsive() {

            var menu = jQuery('[data-js="menu-responsive"]');
            var menuWidth = menu.width(); // innerWidth
var i = 0;
            var itemsInMenu;
            var itemsInDD;
            var itemsInMenuWidth = 0;


            // 1.
            var dD = createDD();
            var dDWidth = dD.innerWidth();
            var dDList = dD.children('ul');
            var dDListWidth = dDList.innerWidth();


            // 2.
            checkWidth();

            $( window ).on('resize', function() {
// i++;
// console.log('resize ' + i);
                setTimeout(checkWidth, 100 );

            });    


            function checkWidth(argument) {
// i++;
// console.log('checkWidth ' + i);
                checkMenuWidth();

                itemsInMenuWidth = 0;

                // Считаем суммарную ширину
                menu.children('li').each(function() {
                    // console.log(this);
                    itemsInMenuWidth = itemsInMenuWidth + $(this).innerWidth();
                });

                // Вероятно это условие становится всегда истино, 
                // после того как собрали все пункты и начали ресайзить
// // i++;
// console.log('itemsInMenuWidth ');
// console.log(itemsInMenuWidth);

                // var menuItemsNumberNow = menu.s
                // $('#testDiv .test').length
                // var menuItemsNumberNow = menu.length; // 1
                var menuItemsNumberNow = menu.children('li').length; // 1

// i++;
// console.log('menuItemsNumberNow ' + menuItemsNumberNow);

                if ( ( itemsInMenuWidth + dDWidth > menuWidth ) && ( 0 != menuItemsNumberNow ) ) {
                // if ( ( itemsInMenuWidth + dDWidth > menuWidth ) ) {

                    // Если еще остались пукнты в меню, то выполнить
                    moveItemToDD();
                    showDD();

                    checkWidth();
                } 
            } 


            function checkMenuWidth(argument) {

                menuWidth = menu.width();
                dDListWidth = dDList.innerWidth();
            }


            function moveItemToDD (argument) {
                
                dDList.prepend(menu.children('li:last'));
            }


            function createDD (argument) {

                var hasDD =  menu.find('.dropdown');

                menu.append('<div class="dropdown" style=\"\">'
                    + '<div class="dropdown__text"><ion-icon name="chevron-down-outline"></ion-icon>Еще</div>'
                    + '<ul class="dropdown__list js-dropdown_list"></ul></div>');   //append( $( "h2" ) ) .append( "<p>Test</p>" );  
                return  menu.find('.dropdown');
            }


            function showDD (argument) {

                dD.addClass('visible');
            }

    }

// });

