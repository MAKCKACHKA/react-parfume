const glide = new Glide('.glide', {
  type: 'carousel',
  focusAt: 'center',
  perView: 1,
  breakpoints: {
    768: {
      perView: 1,
    },
  },
});
glide.mount();

// const lide = new Glide('.lide', {
//   type: 'carousel',
//   focusAt: 'center',
//   perView: 3,
//   breakpoints: {},
// });
// lide.mount();
