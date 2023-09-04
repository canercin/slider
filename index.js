// noinspection JSCheckFunctionSignatures
let api = [{
    "id": 1, "url": "https://via.placeholder.com/600/92c952"
}, {
    "id": 2, "url": "https://via.placeholder.com/600/771796"
}, {
    "id": 3, "url": "https://via.placeholder.com/600/24f355"
}, {
    "id": 4, "url": "https://via.placeholder.com/600/d32776"
}, {
    "id": 5, "url": "https://via.placeholder.com/600/f66b97"
}, {
    "id": 6, "url": "https://via.placeholder.com/600/56a8c2"
}, {
    "id": 7, "url": "https://via.placeholder.com/600/b0f7cc"
}, {
    "id": 8, "url": "https://via.placeholder.com/600/54176f"
}, {
    "id": 9, "url": "https://via.placeholder.com/600/51aa97"
}, {
    "id": 10, "url": "https://via.placeholder.com/600/810b14"
}] // API

index = 0;

// Tıklandığında işlem yapılması için event listener ekleniyor.
document.querySelector(".fa-circle-chevron-left").addEventListener("click", () => {
    if (index === 0) {
        index = api.length - 1;
    } else {
        index--;
    }
    renderSlide(index);
})

// Tıklandığında işlem yapılması için event listener ekleniyor.
document.querySelector(".fa-circle-chevron-right").addEventListener("click", () => {
    if (index === api.length - 1) {
        index = 0;
    } else {
        index++;
    }
    renderSlide(index);
})

// Üzerine gelindiğinde interval ile otomatik devamın kesilmesi sağlanıyor.
document.querySelectorAll(".fa-solid").forEach((element) => {
    element.addEventListener("mouseenter", () => {
        clearInterval(interval);
    })
});
// Üzerinden ayrılındağında interval ile otomatik devamın sağlanması sağlanıyor.
document.querySelectorAll(".fa-solid").forEach((element) => {
    element.addEventListener("mouseleave", () => {
        setInterval(() => {
            document.querySelector(".fa-circle-chevron-right").click();
        }, 2000);
    })
});

/**
 * @param {number} index current index
 * @description render of slide
 */
function renderSlide(index) {
    document.getElementsByTagName('img')[0].src = api[index].url;
    document.getElementsByTagName("h5")[0].innerText = "Image " + api[index].id;
}

// Sürekliliğin sağlanması için interval ekleniyor.
let interval = setInterval(() => {
    document.querySelector(".fa-circle-chevron-right").click();
}, 2000);

// Sayfa yüklendiğinde ilk slide'ın render edilmesi sağlanıyor.
// noinspection JSVoidFunctionReturnValueUsed
document.addEventListener('DOMContentLoaded', renderSlide(index));