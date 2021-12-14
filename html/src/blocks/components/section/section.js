import $ from 'jquery';
import fullpage from 'fullpage.js';
import gsap from 'gsap';

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
                step1();
                break;
            case "second":
                step = 2;
                step2();
                break;
            case "third":
                step = 3;
                step3();
                break;
            case "fourth":
                step = 4;
                step4();
                break;
            case "fiveth":
                step = 5;
                step5();
                break;
            case "sixth":
                step = 6;
                step6();
                break;
            case "seventh":
                step = 7;
                step7();
                break;
            case "eight":
                step = 8;
                step8();
                break;
            case "nine":
                step = 9;
                step9();
                break;
            default:
                step = 1;
                step1();
         }
    },
    afterLoad: () => {
        // video.play();
    }
});