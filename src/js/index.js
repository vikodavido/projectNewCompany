let site = null;


document.addEventListener("DOMContentLoaded", function (event) {
	if (!document.getElementsByTagName("body")) { console.log('js error') }


  site = (function () {

		const win = window,
			  dom = document,
			  body = document.body
        
              
			 

     
		const fn = {
   
            handlerActivedHunburgerMenu() {
                
                let allMenu = document.querySelector('.all-menu-none');
                let menuAdded = document.querySelector('.menu-added');
                
                if(menuAdded !== null) {
                
                    menuAdded.onclick = function() {
                    
                        menuAdded.classList.toggle('menu-close');
                   
                
                    if (menuAdded.classList.contains('menu-close')) {
                        allMenu.classList.remove('all-menu-none');
                        allMenu.classList.add('all-menu');
                        menuAdded.classList.add('menu-close');
                        menuAdded.classList.remove('menu-added');   
                    } else {
                        allMenu.classList.add('all-menu-none'); 
                        allMenu.classList.remove('all-menu');
                        menuAdded.classList.remove('menu-close');
                        menuAdded.classList.add('menu-added');   
                    }
                  }
                }
            },

            initRaedSlide() {
                $(".init-slide").slick({
                    slidesToShow: 3,
                    arrows: true,
                    dots: false,
                    prevArrow: $(".past"),
                    nextArrow: $(".next"),
                    responsive: [
                      {
                        breakpoint: 768,
                        settings: {
                            dots: true,
                            arrows: false,
                            slidesToShow: 1
                        }
                      }
                    ]
                });
            },
     
      

            domReady() {
                fn.handlerActivedHunburgerMenu();

                if ($(".read-also").length) 
                    fn.initRaedSlide();

                if ($(".testimonials").length) 
                    fn.initRaedSlide();

			}
		}

		dom.addEventListener("DOMContentLoaded", fn.domReady());

		return fn;

	})();


});
