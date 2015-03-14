$(document).ready(function(){
  //smooth scrolling
  $(function() {
  $("nav a").click(function() {
      var target = $(this.hash);
      if (target.length) {
        $('html,body').animate({ scrollTop: target.offset().top-77 }, 1000);
        return false;
      }
  });

  $('.slides').slick({
    dots: false,
    infinite: false,
    speed: 300,
    arrows: true

  });
}); 

//mobile nav bar
$('#menu').slicknav({
  label: '',
  duration: 500
});

//modal
  $(function() {
    $('.open-modal').on('click', function(e) {
      e.preventDefault();
      var image = $(this).attr('href');
      $('html').addClass('no-scroll');
      $('body').append('<div class="modal"><img src="' + image + '">');
    });
    
      $('body').on('click', '.modal', function() {
      $('html').removeClass('no-scroll');
      $('.modal').remove();
    });
  });
  
//position indicator
    var $home = $("#home");
    var homepos = $home.offset().top;

    var $art = $("#art");
    var artpos = $art.offset().top;
    
    var $dance = $("#dance");
    var dancepos = $dance.offset().top;
    
    var $work = $("#work");
    var workpos = $work.offset().top;
    
    var $about = $("#about");
    var aboutpos = $about.offset().top;

    var $homenav = $("#l1");
    var $artnav = $("#l2");
    var $dancenav = $("#l3");
    var $worknav = $("#l4");
    var $aboutnav = $("#l5");

    var $activeClass = $homenav;

 $(window).scroll(function(){   
    var scrollPos = $(document).scrollTop() + 80;
    var winHeight = $(window).height();
    var docHeight = $(document).height();
    if(($(document).scrollTop()+winHeight) == docHeight) {
      $activeClass.removeClass("active-nav");
      $activeClass = $aboutnav;
      $activeClass.addClass("active-nav");
    }
    else if(scrollPos < artpos){
      $activeClass.removeClass("active-nav");
      $activeClass = $homenav;
      $activeClass.addClass("active-nav");
    }
    else if((scrollPos > artpos) && (scrollPos < dancepos)){
      $activeClass.removeClass("active-nav");
      $activeClass = $artnav;
      $activeClass.addClass("active-nav");
    }
    else if((scrollPos > dancepos) && (scrollPos < workpos)){
      $activeClass.removeClass("active-nav");
      $activeClass = $dancenav;
      $activeClass.addClass("active-nav");
    }
    else if((scrollPos > workpos) && (scrollPos < aboutpos)){
      $activeClass.removeClass("active-nav");
      $activeClass = $worknav;
      $activeClass.addClass("active-nav");
    }
    else if(scrollPos > aboutpos){
      $activeClass.removeClass("active-nav");
      $activeClass = $aboutnav;
      $activeClass.addClass("active-nav");
    }
    else {
      $activeClass.addClass("active-nav")
    }
});

});



//resizing navbar
$(document).on("scroll",function(){
    if($(document).scrollTop()>100){
        $("header").removeClass("large").addClass("small");
    } else{
        $("header").removeClass("small").addClass("large");
    }
});



//carousel
$(function() {
    function changeSlide( newSlide ) {
        currSlide = newSlide;
        
        if ( currSlide > maxSlide ) currSlide = 0;
        else if ( currSlide < 0 ) currSlide = maxSlide;
        
        // animate the slide reel
        $slides.animate({ left : currSlide * -$(window).width() }, 400, 'swing', function() {
            if ( currSlide == 0 ) $leftnav.hide();
            else $leftnav.show();
            
            if ( currSlide == maxSlide ) $rightnav.hide();
            else $rightnav.show();
        });        
    }
    
    function nextSlide() {
        changeSlide( currSlide + 1 );
    }
    
    var currSlide = 0,
    $carousel = $('#carousel'),
    $slides = $carousel.find('#slides'),
    maxSlide = $slides.children().length - 1,
    $leftnav = $carousel.find('#left-button'),
    $rightnav = $carousel.find('#right-button');
    
    // left arrow
    $leftnav.click(function(ev) {
        ev.preventDefault();     
        changeSlide( currSlide - 1 );
    });
    
    // right arrow
    $rightnav.click(function(ev) {
        ev.preventDefault();
        changeSlide( currSlide + 1 );
    });
    
});

/*!
    SlickNav Responsive Mobile Menu v1.0.0
    (c) 2014 Josh Cope
    licensed under MIT
*/
(function(e,t,n){function o(t,n){this.element=t;this.settings=e.extend({},r,n);this._defaults=r;this._name=i;this.init()}var r={label:"MENU",duplicate:true,duration:200,easingOpen:"swing",easingClose:"swing",closedSymbol:"&#9658;",openedSymbol:"&#9660;",prependTo:"body",parentTag:"a",closeOnClick:false,allowParentLinks:false,nestedParentLinks:true,showChildren:false,init:function(){},open:function(){},close:function(){}},i="slicknav",s="slicknav";o.prototype.init=function(){var n=this;var r=e(this.element);var i=this.settings;if(i.duplicate){n.mobileNav=r.clone();n.mobileNav.removeAttr("id");n.mobileNav.find("*").each(function(t,n){e(n).removeAttr("id")})}else n.mobileNav=r;var o=s+"_icon";if(i.label===""){o+=" "+s+"_no-text"}if(i.parentTag=="a"){i.parentTag='a href="#"'}n.mobileNav.attr("class",s+"_nav");var u=e('<div class="'+s+'_menu"></div>');n.btn=e("<"+i.parentTag+' aria-haspopup="true" tabindex="0" class="'+s+"_btn "+s+'_collapsed"><span class="'+s+'_menutxt">'+i.label+'</span><span class="'+o+'"><span class="'+s+'_icon-bar"></span><span class="'+s+'_icon-bar"></span><span class="'+s+'_icon-bar"></span></span></a>');e(u).append(n.btn);e(i.prependTo).prepend(u);u.append(n.mobileNav);var a=n.mobileNav.find("li");e(a).each(function(){var t=e(this);var r={};r.children=t.children("ul").attr("role","menu");t.data("menu",r);if(r.children.length>0){var o=t.contents();var u=false;var a=[];e(o).each(function(){if(!e(this).is("ul")){a.push(this)}else{return false}if(e(this).is("a")){u=true}});var f=e("<"+i.parentTag+' role="menuitem" aria-haspopup="true" tabindex="-1" class="'+s+'_item"/>');if(!i.allowParentLinks||i.nestedParentLinks||!u){var l=e(a).wrapAll(f).parent();l.addClass(s+"_row")}else e(a).wrapAll('<span class="'+s+"_parent-link "+s+'_row"/>').parent();t.addClass(s+"_collapsed");t.addClass(s+"_parent");var c=e('<span class="'+s+'_arrow">'+i.closedSymbol+"</span>");if(i.allowParentLinks&&!i.nestedParentLinks&&u)c=c.wrap(f).parent();e(a).last().after(c)}else if(t.children().length===0){t.addClass(s+"_txtnode")}t.children("a").attr("role","menuitem").click(function(t){if(i.closeOnClick&&!e(t.target).parent().closest("li").hasClass(s+"_parent"))e(n.btn).click()});if(i.closeOnClick&&i.allowParentLinks){t.children("a").children("a").click(function(t){e(n.btn).click()});t.find("."+s+"_parent-link a:not(."+s+"_item)").click(function(t){e(n.btn).click()})}});e(a).each(function(){var t=e(this).data("menu");if(!i.showChildren){n._visibilityToggle(t.children,null,false,null,true)}});n._visibilityToggle(n.mobileNav,null,false,"init",true);n.mobileNav.attr("role","menu");e(t).mousedown(function(){n._outlines(false)});e(t).keyup(function(){n._outlines(true)});e(n.btn).click(function(e){e.preventDefault();n._menuToggle()});n.mobileNav.on("click","."+s+"_item",function(t){t.preventDefault();n._itemClick(e(this))});e(n.btn).keydown(function(e){var t=e||event;if(t.keyCode==13){e.preventDefault();n._menuToggle()}});n.mobileNav.on("keydown","."+s+"_item",function(t){var r=t||event;if(r.keyCode==13){t.preventDefault();n._itemClick(e(t.target))}});if(i.allowParentLinks&&i.nestedParentLinks){e("."+s+"_item a").click(function(e){e.stopImmediatePropagation()})}};o.prototype._menuToggle=function(e){var t=this;var n=t.btn;var r=t.mobileNav;if(n.hasClass(s+"_collapsed")){n.removeClass(s+"_collapsed");n.addClass(s+"_open")}else{n.removeClass(s+"_open");n.addClass(s+"_collapsed")}n.addClass(s+"_animating");t._visibilityToggle(r,n.parent(),true,n)};o.prototype._itemClick=function(e){var t=this;var n=t.settings;var r=e.data("menu");if(!r){r={};r.arrow=e.children("."+s+"_arrow");r.ul=e.next("ul");r.parent=e.parent();if(r.parent.hasClass(s+"_parent-link")){r.parent=e.parent().parent();r.ul=e.parent().next("ul")}e.data("menu",r)}if(r.parent.hasClass(s+"_collapsed")){r.arrow.html(n.openedSymbol);r.parent.removeClass(s+"_collapsed");r.parent.addClass(s+"_open");r.parent.addClass(s+"_animating");t._visibilityToggle(r.ul,r.parent,true,e)}else{r.arrow.html(n.closedSymbol);r.parent.addClass(s+"_collapsed");r.parent.removeClass(s+"_open");r.parent.addClass(s+"_animating");t._visibilityToggle(r.ul,r.parent,true,e)}};o.prototype._visibilityToggle=function(t,n,r,i,o){var u=this;var a=u.settings;var f=u._getActionItems(t);var l=0;if(r)l=a.duration;if(t.hasClass(s+"_hidden")){t.removeClass(s+"_hidden");t.slideDown(l,a.easingOpen,function(){e(i).removeClass(s+"_animating");e(n).removeClass(s+"_animating");if(!o){a.open(i)}});t.attr("aria-hidden","false");f.attr("tabindex","0");u._setVisAttr(t,false)}else{t.addClass(s+"_hidden");t.slideUp(l,this.settings.easingClose,function(){t.attr("aria-hidden","true");f.attr("tabindex","-1");u._setVisAttr(t,true);t.hide();e(i).removeClass(s+"_animating");e(n).removeClass(s+"_animating");if(!o)a.close(i);else if(i=="init")a.init()})}};o.prototype._setVisAttr=function(t,n){var r=this;var i=t.children("li").children("ul").not("."+s+"_hidden");if(!n){i.each(function(){var t=e(this);t.attr("aria-hidden","false");var i=r._getActionItems(t);i.attr("tabindex","0");r._setVisAttr(t,n)})}else{i.each(function(){var t=e(this);t.attr("aria-hidden","true");var i=r._getActionItems(t);i.attr("tabindex","-1");r._setVisAttr(t,n)})}};o.prototype._getActionItems=function(e){var t=e.data("menu");if(!t){t={};var n=e.children("li");var r=n.find("a");t.links=r.add(n.find("."+s+"_item"));e.data("menu",t)}return t.links};o.prototype._outlines=function(t){if(!t){e("."+s+"_item, ."+s+"_btn").css("outline","none")}else{e("."+s+"_item, ."+s+"_btn").css("outline","")}};o.prototype.toggle=function(){var e=this;e._menuToggle()};o.prototype.open=function(){var e=this;if(e.btn.hasClass(s+"_collapsed")){e._menuToggle()}};o.prototype.close=function(){var e=this;if(e.btn.hasClass(s+"_open")){e._menuToggle()}};e.fn[i]=function(t){var n=arguments;if(t===undefined||typeof t==="object"){return this.each(function(){if(!e.data(this,"plugin_"+i)){e.data(this,"plugin_"+i,new o(this,t))}})}else if(typeof t==="string"&&t[0]!=="_"&&t!=="init"){var r;this.each(function(){var s=e.data(this,"plugin_"+i);if(s instanceof o&&typeof s[t]==="function"){r=s[t].apply(s,Array.prototype.slice.call(n,1))}});return r!==undefined?r:this}}})(jQuery,document,window);