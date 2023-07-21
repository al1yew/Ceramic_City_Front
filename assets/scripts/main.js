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
        } else if (!isParentClass || $(".searchinput").val() == "") {
            $(".searchmenu").fadeOut(150);
            $(".searchinput").val("");

            $(".searchicon ion-icon").attr("name", "search-outline");
            $(".searchicon").removeClass("closesearchheader");
        }

        console.log("salam");
    });

    $(document).on("click", ".closesearchheader", function () {
        console.log("salam");
        $(".closesearchheader ion-icon").attr("name", "search-outline");
        $(".searchinput").val("");
        $(".searchmenu").fadeOut(150);
        $(this).removeClass("closesearchheader");
    });

    //#endregion headersearch
});
