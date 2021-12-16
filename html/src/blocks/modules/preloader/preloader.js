import $ from 'jquery';
import gsap from 'gsap';


$(function() {
    if (window.innerWidth > 1023) {
        let svgWidthOnFullHd = 219 * (window.innerWidth / 1920);
        let svgHeightOnFullHd = 109 * (window.innerWidth / 1920);
        let innerWidth = $('.preloader__in').width();
        let innerHeight = $('.preloader__in').height();
        console.log((innerWidth - svgWidthOnFullHd) / 2, svgWidthOnFullHd)
        console.log((innerHeight - svgHeightOnFullHd) / 2, svgHeightOnFullHd)
        setTimeout(function() {
            gsap.to('.preloader__in', 1, {
                left: () => {
                    return 100 * 100 / 1920 + 'vw'
                },
                top: () => {
                    return 60 * 100 / 1920 + 'vw'
                },
                x: () => {
                    return ((innerWidth - svgWidthOnFullHd) / 2 * - 1)  * 100 / 1920 + 'vw'
                },
                y: () => {
                    return ((innerHeight - svgHeightOnFullHd) / 2 * - 1) * 100 / 1920 + 'vw'
                },
                onComplete: () => {
                    $('.preloader').fadeOut();
                }
            })
        }, 2000)
    }
})