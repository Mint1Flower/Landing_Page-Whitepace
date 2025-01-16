// function updateLinkTag() {
//     const initialize_slider = document.getElementById("initialize-glide-slider");
//     const screenWidth = window.innerWidth;

//     // Если ширина экрана больше 768, удаляем script initialize
//     if (screenWidth > 768) {
//         if (initialize_slider) {
//             document.body.removeChild(initialize_slider);
//             console.log("Удалили script initialize");
//         }

//     } 
//     else {
//         // Если ширина экрана <= 768, добавляем <script>, если еще нет
//         if (!initialize_slider) {
//             const new_initialize_slider = document.createElement('script');
//             new_initialize_slider.id = 'initialize-glide-slider';
//             new_initialize_slider.src = 'src/js/initialize.js'; 

//             document.body.appendChild(new_initialize_slider);
//             console.log("Добавили script");        
//         }

//     }
// }

// // Инициализация при загрузке страницы
// window.addEventListener('load', updateLinkTag);

// // Обновляем при изменении размера экрана
// window.addEventListener('resize', updateLinkTag);

// // Вызываем функцию сразу, чтобы учесть текущую ширину экрана
// updateLinkTag();
