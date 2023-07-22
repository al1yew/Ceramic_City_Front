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

    // $(document).on("keyup", ".searchinput", function (e) {
    //     if ($(this).val().length <= 0) {
    //         $(".searchmenu").fadeOut(150);
    //         $(".searchicon ion-icon").attr("name", "search-outline");
    //     }
    // });

    //koroche search interaktivnost nujno produmat, mojet search
    //gosterilsin, a searchitems gosterillmesin poka nicheqo ne napisano

    //#endregion headersearch

    //#region header scroll

    $(document).on("scroll", function () {
        if ($(window).scrollTop() > $(window).height() / 2) {
            $(".header .all").addClass("thinheader");
        } else {
            $(".header .all").removeClass("thinheader");
        }
    });

    //#endregion header scroll

    //#region main page banner slide

    $(".mainfirstslider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        autoplaySpeed: 3000,
        infinite: true,
        fade: true,
        arrows: false,
    });

    //#endregion main page banner slide

    //#region

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

    //#endregion
});
