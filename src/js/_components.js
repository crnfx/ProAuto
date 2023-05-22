if (document.querySelector('.hero__swiper')) {
  const heroSwiper = new Swiper(".hero__swiper", {
    slidesPerView: 1,
    spaceBetween: -3,
    speed: 2000,
    autoplay: {
      delay: 2000
    },
    allowTouchMove: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

if (document.querySelector('.partners__swiper')) {
  const partnersSwiper = new Swiper(".partners__swiper", {
    slidesPerView: 5,
    spaceBetween: 20,
    allowTouchMove: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}


if (document.querySelector('.accordion-container-main')) {
  // new Accordion(['.accordion-container', '.accordion-container-main'], {
  //   duration: 200,
  // });

  const productAccordions = Array.from(document.querySelectorAll('.accordion-container'));
  new Accordion([productAccordions, '.accordion-container-main'])
}

if (document.querySelector('.filters__price--slider')) {
  const rangeSlider = document.querySelector('.filters__price--slider');

  noUiSlider.create(rangeSlider, {
    start: [1000, 150000],
    connect: true,
    step: 1,
    range: {
      'min': [1000],
      'max': [150000]
    }
  });

  const inputLow = document.querySelector('.input-from')
  const inputHigh = document.querySelector('.input-till')
  const inputs = [inputLow, inputHigh];


  rangeSlider.noUiSlider.on('update', function(value, handle) {
    inputs[handle].value = Math.round(value[handle]);
  });

  const setRangeSlider = (i, value) => {
		let arr = [null, null];
		arr[i] = value;

		console.log(arr);

		rangeSlider.noUiSlider.set(arr);
	};

	inputs.forEach((el, index) => {
		el.addEventListener('change', (e) => {
			console.log(index);
			setRangeSlider(index, e.currentTarget.value);
		});
	});
}