!function(t){var a={};function n(i){if(a[i])return a[i].exports;var e=a[i]={i:i,l:!1,exports:{}};return t[i].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=a,n.d=function(t,a,i){n.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:i})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(a,"a",a),a},n.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},n.p="",n(n.s=0)}([function(t,a){jQuery(function(t){"use strict";function a(){t(this).css("display","block");var a=t(this).find(".modal-dialog"),n=(t(window).height()-a.height())/2,i=parseInt(a.css("marginBottom"),10);n<i&&(n=i),a.css("margin-top",n)}t(window).load(function(){var a={width:300,height:300,shape:"rect",bgColor:"00000"};function n(){var n=`47.98.138.195:3000/${a.width}x${a.height}/${a.shape}/${a.bgColor}`;t("img").attr("src",`//${n}`),t("#cLink").text(`//${n}`)}t("#cWidth").keyup(function(i){a.width=t.trim(t("#cWidth").val()),n()}),t("#cHeight").keyup(function(i){a.height=t.trim(t("#cHeight").val()),n()}),t("#cp1").colorpicker().on("colorpickerChange",function(i){a.bgColor=t.trim(i.color.toString().replace(/#/,"")),n()}),t('input:radio[name="shape"]').click(function(){a.shape=t(this).attr("data-val"),n()});var i=new ClipboardJS("#cBtn");if(i.on("success",function(a){t("#cBtn").attr("data-content","copy success"),t("#cBtn").popover()}),i.on("error",function(a){t("#cBtn").attr("data-content","copy fail"),t("#cBtn").popover()}),t(window).height()>t(window).width()){var e=t(".parallax").width()/t(".parallax").height();t(".parallax img").css("height",t(window).height()+"px"),t(".parallax img").css("width",t(".parallax").height()*e+"px")}t("header").height(t(window).height()+80),t("section .cut").each(function(){t(this).hasClass("cut-top")?t(this).css("border-right-width",t(this).parent().width()+"px"):t(this).hasClass("cut-bottom")&&t(this).css("border-left-width",t(this).parent().width()+"px")}),t(".owl-schedule").owlCarousel({singleItem:!0,pagination:!0}),t(".owl-testimonials").owlCarousel({singleItem:!0,pagination:!0}),t(".owl-twitter").owlCarousel({singleItem:!0,pagination:!0}),t("nav").addClass("original").clone().insertAfter("nav").addClass("navbar-fixed-top").css("position","fixed").css("top","0").css("margin-top","0").removeClass("original"),t(".mobile-nav ul").html(t("nav .navbar-nav").html()),t("nav.navbar-fixed-top .navbar-brand img").attr("src",t("nav.navbar-fixed-top .navbar-brand img").data("active-url")),t(".typed").typewriter({speed:60});var o=0;t(".popup-form .dropdown-menu li").each(function(){t(this).css("animation-delay",o+"s"),o+=.15}),t(".popup-form .dropdown-menu li a").click(function(a){a.preventDefault(),t(this).parent().parent().prev("button").html(t(this).html())}),t(".navbar.navbar-fixed-top .navbar-nav").onePageNav({currentClass:"active",changeHash:!1,scrollSpeed:400,filter:":not(.btn)"})}),window.addEventListener("scroll",function(){t(window).scrollTop()>50?(t("nav.original").css("opacity","0"),t("nav.navbar-fixed-top").css("opacity","1")):(t("nav.original").css("opacity","1"),t("nav.navbar-fixed-top").css("opacity","0"))},!1),t(window).resize(function(){t("header").height(t(window).height())}),t(".pricing .box-main").click(function(){t(".pricing .box-main").removeClass("active"),t(".pricing .box-second").removeClass("active"),t(this).addClass("active"),t(this).next(t(".box-second")).addClass("active"),t("#pricing").css("background-image","url("+t(this).data("img")+")"),t("#pricing").css("background-size","cover")}),t("body").on("click","nav .navbar-toggle",function(){event.stopPropagation(),t(".mobile-nav").addClass("active")}),t("body").on("click",".mobile-nav a",function(a){if(t(".mobile-nav").removeClass("active"),this.hash&&(a.preventDefault(),location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname)){a.stopPropagation();var n=t(this.hash);if((n=n.length?n:t("[name="+this.hash.slice(1)+"]")).length)return t("html,body").animate({scrollTop:n.offset().top},1e3),!1}}),t("body").on("click",".mobile-nav a.close-link",function(a){t(".mobile-nav").removeClass("active"),a.preventDefault()}),t("body").on("click","nav.original .navbar-nav a:not([data-toggle])",function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){event.stopPropagation();var a=t(this.hash);if((a=a.length?a:t("[name="+this.hash.slice(1)+"]")).length)return t("html,body").animate({scrollTop:a.offset().top},1e3),!1}}),t(".modal").on("show.bs.modal",a),t(".modal-popup .close-link").click(function(a){a.preventDefault(),t("#modal1").modal("hide")}),t(window).on("resize",function(){t(".modal:visible").each(a)})})}]);