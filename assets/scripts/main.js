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
        $(".searchitems").slideDown(120);

        if ($(this).val().length == 0) {
            $(".closeicon").hide();
            $(".searchbutton").show();
            $(".searchitems").slideUp(120);
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

    //#region header language

    $(document).on("click", ".currentlang", function () {
        $(this).parent().find(".labels").fadeToggle(100);
    });

    $(document).on("click", function (e) {
        const isParentClass = $(e.target).parents(".languages").length > 0;

        if (!isParentClass) {
            $(".labels").fadeOut(100);
        }
    });

    //#endregion header language

    //#region sidebar functionality

    //open sidebar
    $(document).on("click", ".foropeningsidebar", function () {
        $(".sidebar").addClass("opensidebar");
    });

    //close sidebar
    $(document).on("click", ".closesidebar", function () {
        $(".sidebar").removeClass("opensidebar");
        $(".sidebarcategories").find(".allcategories").slideUp(200);
    });

    //slide all categories
    $(document).on("click", ".clicktoopenallcategories", function () {
        $(".sidebarcategories").find(".allcategories").slideToggle(200);
    });

    //close the whole sidebar on document click
    $(document).on("click", function (e) {
        const isParentClass = $(e.target).parents(".sidebar").length > 0;
        const isHamburgerMenu =
            $(e.target).parents(".foropeningsidebar").length > 0;

        if (!isParentClass && !isHamburgerMenu) {
            $(".sidebar").removeClass("opensidebar");
            if ($(document).width() < 992) {
                $(".podkategorii").fadeOut(120);
            }
        }
    });

    //slide up categories on click outside of <li>
    $(document).on("click", function (e) {
        const isParentClass =
            $(e.target).parents(".sidebarcategories").length > 0;

        if (!isParentClass) {
            $(".sidebarcategories .allcategories").slideUp(200);
            if ($(document).width() < 992) {
                $(".podkategorii").fadeOut(120);
            }
        }
    });
    //open podkategorii on click on the category, and close other ones
    $(document).on("click", ".sidebarcategory", function (e) {
        if ($(document).width() < 992) {
            $(".sidebarcategory").not(this).find(".podkategorii").fadeOut(100);
            $(this).find(".podkategorii").fadeIn(100);
        }
    });
    //prevent a href on phone, we have to click now.
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
        $(this)
            .parent()
            .siblings(".allfiltervalues")
            .find(".podfilterul")
            .slideUp(200);
        $(this)
            .parent()
            .siblings(".allfiltervalues")
            .find(".minus")
            .addClass("d-none");
        $(this)
            .parent()
            .siblings(".allfiltervalues")
            .find(".plus")
            .removeClass("d-none");

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
        let isParentClass = $(e.target).parents(".allfiltervalues").length > 0;

        if (!isParentClass) {
            $(".podfilterul").slideUp(200);
            $(".minus").addClass("d-none");
            $(".plus").removeClass("d-none");
        }
    });

    $(document).on("click", ".hamsinisech", function () {
        let input = $(this).find("input");
        let ikonka = $(this).find(".checkikonka");

        if (ikonka.hasClass("d-none") && !input.prop("checked")) {
            input.prop("checked", true);
            ikonka.removeClass("d-none");

            $(this).siblings("li").find(".checkikonka").removeClass("d-none");
            $(this).siblings("li").find("input").prop("checked", true);
        } else {
            input.prop("checked", false);
            ikonka.addClass("d-none");

            $(this).siblings("li").find(".checkikonka").addClass("d-none");
            $(this).siblings("li").find("input").prop("checked", false);
        }
    });

    $(document).on("click", ".isoutlet", function () {
        let input = $(this).find("input");
        let ikonka = $(this).find(".checkikonka");

        if (ikonka.hasClass("d-none") && !input.prop("checked")) {
            input.prop("checked", true);
            ikonka.removeClass("d-none");
        } else {
            input.prop("checked", false);
            ikonka.addClass("d-none");
        }
    });

    $(document).on("click", ".podfilterli", function () {
        let ikonka = $(this).find(".checkikonka");
        let input = $(this).find("input");
        let parent = $(this).parent();
        let hamsinisech = parent.find(".hamsinisech");

        if (ikonka.hasClass("d-none") && !input.prop("checked")) {
            input.prop("checked", true);
            ikonka.removeClass("d-none");
        } else {
            input.prop("checked", false);
            ikonka.addClass("d-none");
        }

        if (
            parent.find(".podfilterli").find(".checkikonka").hasClass("d-none")
        ) {
            hamsinisech.find(".checkikonka").addClass("d-none");
            hamsinisech.find("input").prop("checked", false);
        }
    });

    $(document).on("click", ".reload", function () {
        window.location.reload();
    });

    //#endregion shop page filters animations

    //#region shop page sort by select option

    //open
    $(document).on("click", ".sortbyoptions", function (e) {
        $(this).find(".sortby").toggle();
    });

    //set
    $(document).on("click", ".sortbyul li", function () {
        let parent = $(this).parents(".sortbyoptions");
        let spanInside = parent.find(".sorttype");
        let svg = $(this).find("svg");
        let clonedSvgElement = svg.clone();

        spanInside.text($(this).text());
        spanInside.append(clonedSvgElement);

        $(this).addClass("yellowli");
        $(this).siblings("li").removeClass("yellowli");

        let val = $(this).attr("data-val");
        let select = parent.find("select");
        select.val(val);
    });

    //close
    $(document).on("click", function (e) {
        const isParentClass =
            $(e.target).parents(".sortbyoptions").length > 0 ||
            $(e.target).is(".sortbyoptions");

        if (isParentClass) {
            $(this).find(".sortbyul").fadeToggle(200);
        } else {
            $(this).find(".sortbyul").fadeOut(200);
        }
    });

    //#endregion shop page sort by select option

    //#region shop page filter sidebar functionality

    $(document).on("click", ".openfilter", function (e) {
        e.stopPropagation();
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

    //#endregion shop page filter sidebar functionality

    //--------------------- product page

    //#region product page first slider

    $(".productpageimages .slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $(".mainslideproductpageprev"),
        nextArrow: $(".mainslideproductpagenext"),
        dots: false,
        autoplay: false,
        infinite: true,
        fade: true,
    });

    $(document).on("click", ".productseconddots div", function () {
        let no = $(this).attr("data-val");

        $(".productpageimages .slider").slick("slickGoTo", no);
    });

    //#endregion product page first slider

    //#region product page sliders

    $(".productthirdslider").slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        prevArrow: $(".productthirdprev"),
        nextArrow: $(".productthirdnext"),
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

    $(".productfourthslider").slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        prevArrow: $(".productfourthprev"),
        nextArrow: $(".productfourthnext"),
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

    //#endregion product page slider

    //#region product page call us

    $(document).on("click", ".callus", function () {
        $(this).hide();
        $(".phoneno").fadeIn(100);
    });

    //#endregion product page call us

    //--------------------- collection page

    //#region collection page sliders

    $(".collectionfourthslider").slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        prevArrow: $(".collectionfourthprev"),
        nextArrow: $(".collectionfourthnext"),
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

    $(".collectionfifthslider").slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        prevArrow: $(".collectionfifthprev"),
        nextArrow: $(".collectionfifthnext"),
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

    //#endregion collection page slider

    //--------------------- about page

    //#region about page sliders

    $(".aboutthird .all .left").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        autoplaySpeed: 2500,
        infinite: true,
        fade: true,
        arrows: true,
        prevArrow: $(".aboutthirdprev"),
        nextArrow: $(".aboutthirdnext"),
    });

    $(".aboutfourth .all .right").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        autoplaySpeed: 2500,
        infinite: true,
        fade: true,
        arrows: true,
        prevArrow: $(".aboutfourthprev"),
        nextArrow: $(".aboutfourthnext"),
    });

    //#endregion about page sliders
});
