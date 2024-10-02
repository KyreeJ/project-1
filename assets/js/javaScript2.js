// const imageContainer = document.querySelector('.img-container');


// imageContainer.addEventListener('click', function (event) {
//   const element = event.target;

//   if (element.matches('img')) {
//     const state = element.getAttribute('data-state');
//     if (state === 'still') {
//       element.setAttribute('data-state', 'animate');
//       element.setAttribute('src', element.dataset.animate);
//     } else {
//       element.dataset.state = 'still';
//       element.setAttribute('src', element.dataset.still);
//     }
//   }
// });

// const carousel = document.querySelector('.carouselbox');

// const next = carousel.querySelector('.next');
// const prev = carousel.querySelector('.prev');
// let index = 0;
// let currentImage;

// const images = [
//   'https://media1.tenor.com/m/a0cKvgooEbUAAAAd/abell46s-reface.gif',
//   'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmQ5NndsdXp4ZHV0bXI4Zmp4ZHhhMWk3czFuMGRhd3c1eDhxNHY3ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NQrc3ZS2HZP2M/giphy.gif',
//   'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmQ5NndsdXp4ZHV0bXI4Zmp4ZHhhMWk3czFuMGRhd3c1eDhxNHY3ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NQrc3ZS2HZP2M/giphy.gif',
// ]
// carousel.style.backgroundImage = "url('https://media4.giphy.com/media/H7DZfT7tMtbpe/200.webp?cid=790b7611dju4s2omp0xjkxne93qu1nz1fdwbc8zuqxnhfe2p&amp;ep=v1_gifs_search&amp;rid=200.webp&amp;ct=g')",

// function navigatepage(direction) {
//   index = index + direction;
//   if (index < 0) {
//     index = images.length - 1;
//   } else if (index > images.length - 1) {
//     index = 0;
//   }
//   currentImage = images[index];
//   carousel.style.backgroundImage = `url('${currentImage}')`;
// }


// carousel.addEventListener('click', function () {
//   window.location.href = images[index];
// })


// next.addEventListener('click', function (event) {

//   event.stopPropagation();

//   navigatepage(1);
// })

// prev.addEventListener('click', function (event) {
 
//   event.stopPropagation();

//   navigatepage(-1);
// })

// navigatepage(0)
