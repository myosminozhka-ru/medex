import $ from 'jquery';
import fullpage from 'fullpage.js';
import Typewriter from 'typewriter-effect/dist/core';



const third_shield = new Typewriter('.third__shield-in', {
    strings: ['Mosoblkino "has been organizing film distribution.'],
    autoStart: false,
    delay: 30
});

const fiveth_shield = new Typewriter('.fiveth__shield-in', {
    strings: ['Mosoblkino "has been organizing film distribution.'],
    autoStart: false,
    delay: 30
});

const seventh_shield = new Typewriter('.seventh__shield-in', {
    strings: ['Mosoblkino "has been organizing film distribution.'],
    autoStart: false,
    delay: 30
});

const nineth_title = new Typewriter('.nine__title', {
    strings: ['Feedback form'],
    autoStart: false,
    delay: 30
});



function animateTyping(writer, text, selector) {
    $(selector).html('');
    writer.typeString(text).start();
}

// const video = $('.animation video').get(0);
// console.log(video);
const scroller = new fullpage('#sections', {
    anchors: ['first', 'second', 'third', 'fourth', 'fiveth', 'sixth', 'seventh', 'eight', 'nine'],
    // licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    scrollingSpeed: 1500,
    // autoScrolling: false,
    controlArrows: true,
    afterRender: ( section, origin, destination, direction) => {
		$('.counter__current').text(section.index + 1)
	},
    onLeave: (origin, destination) => {
        if (!$('.animation__in').length) return;
        $('.counter__current').text(destination.index + 1)
        
        switch (destination.anchor)
        {
            case "first":
                step = 1;
                if (!isMobile) {
                    step1();
                } else {
                    step1Mobile();
                }
                break;
            case "second":
                step = 2;
                if (!isMobile) {
                    step2();
                } else {
                    step2Mobile();
                }
                break;
            case "third":
                step = 3;
                if (!isMobile) {
                    step3();
                } else {
                    step3Mobile();
                }
                setTimeout(() => {
                    animateTyping(third_shield, $('.third__shield').data('text'), '.third__shield-in .Typewriter__wrapper');
                }, 3000);
                // third_shield
                //     .typeString($('.third__shield').data('text'))
                //     .start();
                break;
            case "fourth":
                step = 4;
                if (!isMobile) {
                    step4();
                } else {
                    step6Mobile();
                }
                break;
            case "fiveth":
                step = 5;
                if (!isMobile) {
                    step5();
                } else {
                    step4Mobile();
                }
                setTimeout(() => {
                    animateTyping(fiveth_shield, $('.fiveth__shield').data('text'), '.fiveth__shield-in .Typewriter__wrapper');
                }, 3000);
                break;
            case "sixth":
                step = 6;
                if (!isMobile) {
                    step6();
                } else {
                    step6Mobile();
                }
                break;
            case "seventh":
                step = 7;
                if (!isMobile) {
                    step7();
                } else {
                    step5Mobile();
                }
                setTimeout(() => {
                    animateTyping(seventh_shield, $('.seventh__shield').data('text'), '.seventh__shield-in .Typewriter__wrapper');
                }, 3000);
                break;
            case "eight":
                step = 8;
                if (!isMobile) {
                    step8();
                } else {
                    step6Mobile();
                }
                break;
            case "nine":
                step = 9;
                if (!isMobile) {
                    step9();
                } else {
                    step6Mobile();
                }
                setTimeout(() => {
                    animateTyping(nineth_title, $('.nine__title').data('text'), '.nine__title .Typewriter__wrapper');
                }, 2000);
                break;
            default:
                step = 1;
                step1();
         }
         console.log(destination.anchor);
        if (destination.anchor == 'first') {
            $('.mobile-arrows__item.mobile-arrows__item--up').fadeOut();
        } else {
            $('.mobile-arrows__item.mobile-arrows__item--up').fadeIn();
        }

        if (destination.anchor === 'nine') {
            $('.mobile-arrows__item.mobile-arrows__item--down').fadeOut();
        } else {
            $('.mobile-arrows__item.mobile-arrows__item--down').fadeIn();
        }
    },
    afterLoad: () => {
        // video.play();
    }
});