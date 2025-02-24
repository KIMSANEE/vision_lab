function navigate(page) {
    let content = document.getElementById("content");
    switch (page) {
        case "home":
            window.location.href = "index.html";
            break;
        case "members":
            window.location.href = "members.html";
            break;
        case "research":
            window.location.href = "research.html";
            break;
        case "publication":
            window.location.href = "publication.html";
            break;
        case "photos":
            window.location.href = "photos.html";
            break;
    }
}
document.addEventListener("DOMContentLoaded", function () {
    let searchIcon = document.querySelector(".search-icon");
    let dropdown = document.querySelector(".search-dropdown");

    searchIcon.addEventListener("click", function (event) {
        event.stopPropagation(); // 상위 요소로 이벤트 전파 방지
        dropdown.style.display = "block"; // 검색창 보이기
    });

    document.addEventListener("click", function (event) {
        // 드롭다운 내부 클릭 시 유지, 외부 클릭 시 닫기
        if (!dropdown.contains(event.target) && event.target !== searchIcon) {
            dropdown.style.display = "none";
        }
    });
});