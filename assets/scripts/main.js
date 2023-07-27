const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
).matches;
const storedDarkMode = localStorage.getItem("dark_theme") === "true";
const isDarkTheme = storedDarkMode || prefersDarkMode;

function updateDarkModeUI(isDark) {
    if (isDark) {
        $("body").addClass("darkmode");
        $(".moon").hide();
        $(".sun").show();
        localStorage.setItem("dark_theme", true);
    } else {
        $("body").removeClass("darkmode");
        $(".sun").hide();
        $(".moon").show();
        localStorage.setItem("dark_theme", false);
    }
}

updateDarkModeUI(isDarkTheme);

$(function () {
    $(".preloader").addClass("d-none");

    //#region dark mode and light mode

    $(document).on("click", ".modechanger", function () {
        let newTheme;
        if ($(this).hasClass("sun")) {
            newTheme = false;
        } else {
            newTheme = true;
        }
        localStorage.setItem("dark_theme", newTheme);
        updateDarkModeUI(newTheme);
    });

    //#endregion dark mode and light mode

    //#region headersearch

    $(document).on("click", function (e) {
        const isParentClass = $(e.target).parents(".search").length > 0;

        if (isParentClass) {
            $(".searchmenu").fadeIn(150);
            $(".searchicon ion-icon").attr("name", "close-outline");
            $(".searchicon").addClass("closesearchheader");
            $(".searchinput").focus();
        } else if (!isParentClass || $(".searchinput").val() == "") {
            $(".searchmenu").fadeOut(150);
            $(".searchinput").val("");

            $(".searchicon ion-icon").attr("name", "search-outline");
            $(".searchicon").removeClass("closesearchheader");
        }
    });

    $(document).on("click", ".closesearchheader", function (e) {
        e.stopPropagation();
        $(".searchicon ion-icon").attr("name", "search-outline");
        $(".searchinput").val("");
        $(".searchmenu").fadeOut(150);
        $(this).removeClass("closesearchheader");
    });

    $(document).on("input", ".searchinput", function (e) {
        $(".closeicon").show();
        $(".searchbutton").hide();

        if ($(this).val().length == 0) {
            $(".closeicon").hide();
            $(".searchbutton").show();
        }
    });

    $(document).on("click", ".closeicon", function (e) {
        $(".searchinput").val("");
        $(".closeicon").hide();
        $(".searchbutton").show();
    });

    //#endregion headersearch

    //#region header scroll

    $(document).on("scroll", function () {
        if ($(window).scrollTop() > 100) {
            $(".header .all").addClass("thinheader");
            $(".header").addClass("changecolorheader");
        } else {
            $(".header .all").removeClass("thinheader");
            $(".header").removeClass("changecolorheader");
        }
    });

    //#endregion header scroll

    //#region sidebar functionality

    $(document).on("click", ".foropeningsidebar", function () {
        $(".sidebar").addClass("opensidebar");
    });

    $(document).on("click", ".closesidebar", function () {
        $(".sidebar").removeClass("opensidebar");
        $(".sidebarcategories").find(".allcategories").hide();
    });

    $(document).on("click", ".clicktoopenallcategories", function () {
        $(".sidebarcategories").find(".allcategories").slideToggle(200);
    });

    $(document).on("click", function (e) {
        const isParentClass = $(e.target).parents(".sidebar").length > 0;
        const isHamburgerMenu =
            $(e.target).parents(".foropeningsidebar").length > 0;

        if (!isParentClass && !isHamburgerMenu) {
            $(".sidebar").removeClass("opensidebar");
            $(".podkategorii").fadeOut(120);
        }
    });

    $(document).on("click", function (e) {
        const isParentClass =
            $(e.target).parents(".sidebarcategories").length > 0;

        if (!isParentClass) {
            $(".sidebarcategories .allcategories").slideUp(200);
        }
    });

    $(document).on("click", ".sidebarcategory", function (e) {
        if ($(document).width() < 992) {
            e.preventDefault();
            $(".podkategorii").hide();
            $(this).find(".podkategorii").fadeIn(150);
        }
    });

    $(document).on("click", ".sidebarcategoryahref", function (e) {
        if ($(document).width() < 992) {
            e.preventDefault();
        }
    });

    //#endregion sidebar functionality

    //#region main page banner slide

    $(".mainfirst .compslider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        autoplaySpeed: 2500,
        infinite: true,
        fade: true,
        arrows: true,
        prevArrow: $(".mainfirstprev"),
        nextArrow: $(".mainfirstnext"),
    });

    $(".mainfirst .telslider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        autoplaySpeed: 2500,
        infinite: true,
        fade: true,
        arrows: false,
    });

    //#endregion main page banner slide

    //#region main page third slider

    $(".mainthirdslider").slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        prevArrow: $(".mainthirdprev"),
        nextArrow: $(".mainthirdnext"),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: false,
                    infinite: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                    infinite: true,
                },
            },
        ],
    });

    //#endregion main page third slider

    //#region main page fifth slider

    $(".mainfifth .contentkeeper .left").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        autoplaySpeed: 2500,
        infinite: true,
        fade: true,
        arrows: true,
        prevArrow: $(".mainfifthprev"),
        nextArrow: $(".mainfifthnext"),
    });

    //#endregion main page fifth slider

    //#region main page sixth slider

    $(".mainsixthslider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false, //true
        // autoplaySpeed: 4000,
        infinite: true,
        fade: true,
        arrows: true,
        prevArrow: $(".mainsixthprev"),
        nextArrow: $(".mainsixthnext"),
    });

    //#endregion main page sixth slider

    //#region main page collections span on phone

    $(document).on("click", function (e) {
        const isParentClass =
            $(e.target).parents(".hoverfordetails").length > 0;

        if ($(window).width() < 992) {
            if (isParentClass) {
                $(".userselection").addClass("slidedown");

                let src = $(e.target).find("img").attr("src");
                let link = $(e.target).find("a").attr("href");
                let prodName = $(e.target).find(".top").text().trim();
                let price = $(e.target).find(".price").text().trim();

                $(".userselection").attr("href", link);
                $(".userselection").find("img").attr("src", src);
                $(".userselection").find(".top").text(prodName);
                $(".userselection").find(".price").text(price);
            } else {
                $(".userselection").removeClass("slidedown");
                $(".userselection").find(".top").text("");
                $(".userselection").find(".price").text("");
            }
        }
    });

    //#endregion main page collections span on phone

    //--------------------- shop page

    //#region shop page filters animations

    $(document).on("click", ".clicktoopenfilterul", function () {
        $(this).parent().find(".podfilterul").slideToggle(200);

        if ($(this).parent().find(".plus").hasClass("d-none")) {
            $(this).parent().find(".plus").removeClass("d-none");
            $(this).parent().find(".minus").addClass("d-none");
        } else {
            $(this).parent().find(".minus").removeClass("d-none");
            $(this).parent().find(".plus").addClass("d-none");
        }
    });

    $(document).on("click", function (e) {
        let isParentClass = $(e.target).parents(".filterli").length > 0;

        if (!isParentClass) {
            $(".podfilterul").slideUp(200);
            $(".minus").addClass("d-none");
            $(".plus").removeClass("d-none");
        }
    });

    $(document).on("click", ".podfilterli", function () {
        let ikonka = $(this).find(".checkikonka");
        let input = $(this).find("input");

        if (ikonka.hasClass("d-none") && !input.prop("checked")) {
            input.prop("checked", true);
            ikonka.removeClass("d-none");
        } else {
            input.prop("checked", false);
            ikonka.addClass("d-none");
        }

        //xotel s label, no ne polucilos shto to, dvajdi zovet funkciyu
    });

    //#endregion shop page filters animations

    //#region shop page filter-sidebar functionality

    $(document).on("click", ".openfilter", function () {
        $(".telfiltermenu").toggleClass("togglefiltermenu");
    });

    $(document).on("click", ".closefilter", function () {
        $(".telfiltermenu").removeClass("togglefiltermenu");
    });

    $(document).on("click", function (e) {
        let isParentClass = $(e.target).parents(".telfiltermenu").length > 0;
        let isFilterButton = $(e.target).is(".openfilter");

        if (!isParentClass && !isFilterButton) {
            $(".telfiltermenu").removeClass("togglefiltermenu");
        }
    });

    //#endregion shop page filter-sidebar functionality
});
