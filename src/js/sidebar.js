const product_list = document.querySelector("#products");
const solutions_list = document.querySelector("#solutions");
const resources_list = document.querySelector("#resources");
const pricing_list = document.querySelector("#pricings");
const header__btn_gamburger = document.querySelector(".header__btn-gamburger");
const sidebar_gamburger = document.querySelector(".sidebar-gamburger");

product_list.addEventListener("click", ()=>  {
    let list_elements = product_list.querySelectorAll(".header__menu");
    for(list_element of list_elements) {
        list_element.classList.toggle("active");
    }
});

solutions_list.addEventListener("click", ()=>  {
    const list_elements = solutions_list.querySelectorAll(".header__menu");
    for(list_element of list_elements) {
        list_element.classList.toggle("active");
    }
});

resources_list.addEventListener("click", ()=>  {
    const list_elements = resources_list.querySelectorAll(".header__menu");
    for(list_element of list_elements) {
        list_element.classList.toggle("active");
    }
});

pricing_list.addEventListener("click", ()=>  {
    const list_elements = pricing_list.querySelectorAll(".header__menu");
    for(list_element of list_elements) {
        list_element.classList.toggle("active");
    }
});

// logic gamburger btn

header__btn_gamburger.addEventListener("click", ()=> {
    sidebar_gamburger.classList.toggle("sidebar-active");
    header__btn_gamburger.classList.toggle("sidebar-active-btn");

})
