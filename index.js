const changeMode = (param) => {
    var products = document.getElementsByClassName("products");
    for (let i = 0; i < products.length; i++) {
        products[i].classList.remove("active");
    }

    var proButtons = document.getElementsByClassName("favBtn");
    for (var i = 0; i < proButtons.length; i++) {
        proButtons[i].classList.remove("underline");
    }

    document.getElementById(param).classList.add('active');

    event.currentTarget.classList.add("underline");
}

const hoverContent = (param) => {
    let contents = document.getElementsByClassName('content');
    for (let i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
    }

    let underlines = document.getElementsByClassName('span');
    for (let i = 0; i < underlines.length; i++) {
        underlines[i].classList.remove('spanUnderline');
    }

    document.getElementById(param).style.display = 'flex';
    event.currentTarget.classList.add('spanUnderline');
}

const hiddenContent = () => {
    let contents = document.getElementsByClassName('content');
    for (let i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
    }
    let underlines = document.getElementsByClassName('spanUnderline');
    for (let i = 0; i < underlines.length; i++) {
        underlines[i].classList.remove('spanUnderline');
    }
}

const swiper = new Swiper(".mySwiper", {
    // Optional parameters
    slidesPerView: 2.3,
    grabCursor: true,
    // spaceBetween: 20,
    loop: true,
    keyboard: {
        enabled: true
    },

    // If we need navigation
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    // Responsive breakpoints
    breakpoints: {
        1440: {
            slidesPerView: 2.5
        },
        1024: {
            slidesPerView: 3.5,
            spaceBetween: 20,
            centeredSlides:true
        },
        768: {
            centeredSlides: false,
            slidesPerView: 3.4,
            spaceBetween: 19
        },
        376: {
            slidesPerView: 3.6
        },
        374: {
            slidesPerView: 4.3,
            centeredSlides: false
        }
       
    }
});


const collectionSwiper = new Swiper(".imgCollection", {
    // Optional parameters
    centeredSlides: false,
    slidesPerView: 4.3,
    spaceBetween: 21,
    grabCursor: true,
    freeMode: false,
    loop: true,
    // mousewheel: true,
    keyboard: {
        enabled: true
    },
    breakpoints: {
        1024: {
            slidesPerView: 4.28,
            spaceBetween:0
        },
        640: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        376: {
            slidesPerView: 4.17,
            spaceBetween: 16,
            centeredSlides:true
        },
        375: {
            slidesPerView: 5.28,
            spaceBetween: 16,
            centeredSlides:true
        }
    }
});

const swipers = new Swiper(".swiper-slider", {

    centeredSlides: true,
    slidesPerView: 1.4,
    spaceBetween: 49,
    grabCursor: true,
    freeMode: false,
    loop: true,
    mousewheel: false,
    keyboard: {
        enabled: true
    },

    navigation: {
        nextEl: ".prevBtn",
        prevEl: ".nextBtn"
    },

    breakpoints: {
        768: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 1.4,
            spaceBetween: 49,
        },
        375: {
            slidesPerView: 4.2,
            centeredSlides: true
        }
    }
});

const eatHealthyGetActiveSwiper = new Swiper(".swiper-children", {
    // Optional parameters
    // centeredSlides: true,
    slidesPerView: 3.31,
    spaceBetween: 41,
    grabCursor: true,
    loop: true,
    mousewheel: false,
    keyboard: {
        enabled: true
    },

    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev"
    },

    breakpoints: {
        498: {
            slidesPerView: 3.2,
            centeredSlides: true

        },
        376: {
            slidesPerView: 3.9,
            // spaceBetween:20,
            centeredSlides: true
        },
        320: {
            slidesPerView: 4.5,
            spaceBetween: 18,
            centeredSlides: true
        }
    }
});

var flag = false;
const setAction = () => {
    if (flag == false) {
        document.getElementById('guideLinks').style.display = 'flex';
        flag = true;
        console.log(flag, '1');
    } else if (flag == true) {
        document.getElementById('guideLinks').style.display = 'none';
        flag = false;
        console.log(flag, '2');
    }
}

$(document).ready(function () {
    toggleLink();
    toggleDiv();
});
var iconFlagAbout = true;
var iconFlagCus = true;
var iconFlagRes = true;

var toggleLink = function (param1, param2) {
    $("#" + param2).toggle();
    if(param1 == 'aboutEverYou' && iconFlagAbout == true) {
        $("#" + param1).css('display', 'flex');
        iconFlagAbout = false;
    }else if(param1 == 'aboutEverYou' && iconFlagAbout == false) {
        $("#" + param1).css('display', 'none');
        iconFlagAbout = true;
    }else if(param1 == 'customerCare' && iconFlagCus == true) {
        $("#" + param1).css('display', 'flex');
        iconFlagCus = false;
    }else if(param1 == 'customerCare' && iconFlagCus == false) {
        $("#" + param1).css('display', 'none');
        iconFlagCus = true;
    }else if(param1 == 'resources' && iconFlagRes == true) {8
        $("#" + param1).css('display', 'flex');
        iconFlagRes = false;
    }else if(param1 == 'resources' && iconFlagRes == false) {
        $("#" + param1).css('display', 'none');
        iconFlagRes = true;
    }
    // $("#" + param1).slideToggle();
    console.log(param1, param2);
}

var toggleDiv = (param1, param2) => {
    console.log(param1,param2);
    $("#" + param1).slideToggle("fast"); 
    $("#" + param2).toggle();

} 

const mainSliderSection = new Swiper(".mySwiperContainer", {

    centeredSlides: true,
    slidesPerView: 1,
    // effect: "fade",
    grabCursor: true,
    loop: true,
    // navigation: {
    //     nextEl: ".nextBtn",
    //     prevEl: ".prevBtn"
    // },
});


  
const swiperSlideTop = new Swiper(".swiperSlideTop", {

    centeredSlides: true,
    slidesPerView: 4,
    spaceBetween: 49,
    grabCursor: true,
    freeMode: false,
    loop: true,
    mousewheel: false,
    keyboard: {
        enabled: true
    },

    // navigation: {
    //     nextEl: ".nextBtn",
    //     prevEl: ".prevBtn"
    // },

    breakpoints: {
        768: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
            centeredSlides:false
        },
        1441: {
            slidesPerView:3,
            centeredSlides:true
        },
        375: {
            slidesPerView: 4.2,
            centeredSlides: true
        }
    }
});