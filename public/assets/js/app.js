! function (e) {
    "use strict";
    var t = function () {
        this.$body = e("body"), this.$wrapper = e("#wrapper"), this.$leftMenuButton = e(".button-menu-mobile"), this.$menuItem = e(".has_sub > a")
    };
    t.prototype.initSlimscroll = function () {
        e(".slimscrollleft").slimscroll({
            height: "auto",
            position: "right",
            size: "10px",
            color: "#9ea5ab"
        })
    }, t.prototype.initLeftMenuCollapse = function () {
        var e = this;
        this.$leftMenuButton.on("click", function (t) {
            t.preventDefault(), e.$body.toggleClass("fixed-left-void"), e.$wrapper.toggleClass("enlarged")
        })
    }, t.prototype.initComponents = function () {
        e('[data-toggle="tooltip"]').tooltip(), e('[data-toggle="popover"]').popover()
    }, t.prototype.initMenu = function () {
        var t = this;

        function n() {
            var t = e(document).height();
            t > e(".body-content").height() && e(".body-content").height(t)
        }
        t.$menuItem.on("click", function () {
            var o = e(this).parent(),
                i = o.find("> ul");
            return t.$body.hasClass("sidebar-collapsed") || (i.is(":visible") ? i.slideUp(300, function () {
                o.removeClass("nav-active"), e(".body-content").css({
                    height: ""
                }), n()
            }) : (e(".has_sub").each(function () {
                var t = e(this);
                t.hasClass("nav-active") && t.find("> ul").slideUp(300, function () {
                    t.removeClass("nav-active")
                })
            }), o.addClass("nav-active"), i.slideDown(300, function () {
                n()
            }))), !1
        })
    }, t.prototype.activateMenuItem = function () {
        e("#sidebar-menu a").each(function () {
            this.href == window.location.href && (e(this).addClass("active"), e(this).parent().addClass("active"), e(this).parent().parent().prev().addClass("active"), e(this).parent().parent().parent().addClass("active"), e(this).parent().parent().prev().click())
        })
    }, t.prototype.Preloader = function () {
        e(window).load(function () {
            e("#status").fadeOut(), e("#preloader").delay(350).fadeOut("slow"), e("body").delay(350).css({
                overflow: "visible"
            })
        })
    }, t.prototype.ToggleSearch = function () {
        e(".toggle-search").on("click", function () {
            var t = e(this).data("target");
            t && e(t).toggleClass("open")
        })
    }, t.prototype.init = function () {
        this.initSlimscroll(), this.initLeftMenuCollapse(), this.initComponents(), this.initMenu(), this.activateMenuItem(), this.Preloader(), this.ToggleSearch()
    }, e.MainApp = new t, e.MainApp.Constructor = t
}(window.jQuery),
function (e) {
    "use strict";
    e.MainApp.init()
}(window.jQuery);

$(document).ready(function(){
    $('.rightSidePanelOpener').on('click', function(){
        $('.rightPanelHolder').addClass('open');
        $('.rightSidePanel').addClass('open');
        $('body').addClass('panelOpen');
    });
    $('.rightSidePanelCloser').on('click', function(){
        $('.rightPanelHolder').removeClass('open');
        $('.rightSidePanel').removeClass('open');
        $('body').removeClass('panelOpen');
    });
    $('.rightSidePanelOpener2').on('click', function(){
        $('.rightPanelHolder2').addClass('open');
        $('.rightSidePanel2').addClass('open');
        $('body').addClass('panelOpen');
    });
    $('.rightSidePanelCloser2').on('click', function(){
        $('.rightPanelHolder2').removeClass('open');
        $('.rightSidePanel2').removeClass('open');
        $('body').removeClass('panelOpen');
    });
});

$(".exploder").click(function(){
  
    $(this).children("span").toggleClass("opened");
    // $(this).children("span").toggleClass("glyphicon-search glyphicon-zoom-out");  

    $(this).closest("tr").next("tr").toggleClass("hide");

    if($(this).closest("tr").next("tr").hasClass("hide")){
        $(this).closest("tr").next("tr").children("td").slideUp();
    }
    else{
        $(this).closest("tr").next("tr").children("td").slideDown(350);
    }
});

