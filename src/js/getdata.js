// import * as parfum from '../parfume-data/parfume.json';

// const productListDiv = document.getElementById('productList');

// products.forEach(product => {
//   const productInfo = document.createElement('p');
//   productInfo.textContent = `Code: ${product.code}, Name: ${product.name}`;
//   productListDiv.appendChild(productInfo);
// });
// import('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js');

function renderProd(item, index) {
  return `<li class="swiper-slide">${index}</li>`;
}
function renderButton(index) {
  return `<button class="glide__bullet" data-glide-dir="=${index}></button>`;
}

// fetch('https://makckachka.github.io/parfume-project-layout/parfume.json')
fetch("../parfume.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(
        `Network response was not ok, status: ${response.status}`
      );
    }
    return response.json();
  })
  // .then(data => {
  //   const sorted = data.sort((a, b) => {
  //     const nameA = a.name.toUpperCase();
  //     const nameB = b.name.toUpperCase();
  //     if (nameA < nameB) {
  //       return -1;
  //     }
  //     if (nameA > nameB) {
  //       return 1;
  //     }
  //     return 0;
  //   });
  //   return sorted;
  // })
  .then((data) => {
    const slideList = document.getElementById("slideList");
    // const listBullets = document.getElementById('listBullets');
    // console.log(data);

    let index = 0;

    if (slideList) {
      data.forEach((product, index) => {
        const productInfo = renderProd(product, index);
        // console.log(productInfo);
        console.log(index, product);
        slideList.innerHTML += `${productInfo}`;
        // const button = renderButton(index);

        // listBullets.innerHTML += `<button class="glide__bullet mainbg" data-glide-dir="${index}"></button>`;
        // // console.log(button);
        // index++;
      });
    } else {
      return data;
    }
  })

  .then((data) => {
    const productListDiv = document.getElementById("productList");
    if (productListDiv) {
      data.forEach((product) => {
        const productInfo = renderProd(product);
        // productListDiv.appendChild(productInfo);
        productListDiv.innerHTML += productInfo;
      });
    }
    return data;
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

// function renderPopularItems(data) {
//   productList.innerHTML = '';
//   for (let i = 0; i < maxIterations; i++) {
//     const item = data[i];
//     const masterClassHTML = renderPopular(item);
//     listDiv.innerHTML += masterClassHTML;
//     hideLoader();
//   }
// }
