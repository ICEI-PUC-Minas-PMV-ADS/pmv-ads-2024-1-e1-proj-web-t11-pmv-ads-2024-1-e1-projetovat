document.addEventListener("DOMContentLoaded", function () {
    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    const searchInput = document.getElementById("search-input");
    const searchHistoryList = document.getElementById("search-history");
    const searchSuggestions = document.getElementById("search-suggestions");

    document.getElementById("clear-history-button").addEventListener("click", function () {
        clearSearchHistory();
    });

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {

            clearSearchSuggestions();

            const suggestions = getSuggestions(searchTerm);

            showSearchSuggestions(suggestions);
        } else {

            clearSearchSuggestions();
        }
    });

    document.getElementById("search-button").addEventListener("click", function () {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            addToSearchHistory(searchTerm);
            window.location.reload();
        }
    });

    function addToSearchHistory(term) {
        const listItem = document.createElement("li");
        listItem.textContent = term;
        searchHistoryList.appendChild(listItem);
        const searchTerms = JSON.parse(localStorage.getItem("searchTerms")) || [];
        searchTerms.push(term);
        localStorage.setItem("searchTerms", JSON.stringify(searchTerms));
    }


    function loadSearchHistory() {
        const searchTerms = JSON.parse(localStorage.getItem("searchTerms")) || [];
        searchTerms.forEach(function (term) {
            addToSearchHistory(term);
        });
    }


    function clearSearchHistory() {
        searchHistoryList.innerHTML = "";
        localStorage.removeItem("searchTerms");
    }


    function getSuggestions(term) {

        return [];
    }

    function showSearchSuggestions(suggestions) {
        if (suggestions.length > 0) {
            searchSuggestions.style.display = "block";
            suggestions.forEach(function (suggestion) {
                const listItem = document.createElement("li");
                listItem.textContent = suggestion;
                searchSuggestions.appendChild(listItem);
            });
        }
    }

    function clearSearchSuggestions() {
        searchSuggestions.innerHTML = "";
        searchSuggestions.style.display = "none";
    }


    loadSearchHistory();
});


document.getElementById("search-button").addEventListener("click", function (event) {
    event.preventDefault();
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
        addToSearchHistory(searchTerm);
        window.location.href = window.location.href;
    }
});

function fecharPopup() {
    document.getElementById("popup").style.display = "none";
}


document.getElementById('user-avatar').addEventListener('click', function () {
    document.getElementById('dropdown').classList.toggle('show');
});

window.onclick = function (event) {
    if (!event.target.matches('#user-avatar')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};