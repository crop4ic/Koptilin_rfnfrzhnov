let darkButton = document.querySelector(".darkBtn");
let rightMenu = document.querySelectorAll(".hrefs");

darkButton.addEventListener("click", () => {
  document.body.classList.toggle("darkThemes");
  rightMenu.forEach((item) => {
    item.classList.toggle("newColor");
  });
});

const arrayPhones = [
  {
    name: "Samsung Galaxy S24 FE",
    price: 62500,
    descripchen:
      "Субфлагманский смартфон, предлагающий передовые функции искусственного интеллекта Galaxy AI, яркий AMOLED-экран и тройную камеру по более доступной цене по сравнению с основной флагманской серией",
    img: "images/samsung.png",
  },
  {
    name: "Xiaomi Redmi 14T",
    price: 60000,
    descripchen:
      "Продвинутый субфлагманский смартфон, созданный в партнерстве с Leica, который предлагает тройную камеру с отличными ночными возможностями и яркий AMOLED-экран с частотой обновления 144 Гц",
    img: "images/xiaomi.png",
  },
  {
    name: "Realme C21Y",
    price: 20000,
    descripchen:
      "Ультрабюджетный смартфон базового уровня, главным достоинством которого является емкий аккумулятор на 5000 мАч с поддержкой обратной зарядки. Устройство оснащено 6,5-дюймовым IPS-экраном.",
    img: "images/realme.png",
  },
  {
    name: "Apple iPhone 17 ",
    price: 90999,
    descripchen:
      "Встречайте iPhone 17. Благодаря сглаженным краям, более тонким рамкам и прочным материалам, таким как Ceramic Shield 2 на передней панели, он выглядит великолепным. Дисплей Super Retina XDR.",
    img: "images/Apple_iPhone_17.png",
  },
  {
    name: "Tecno SPARK 30 Pro",
    price: 14200,
    descripchen:
      "Смартфон Tecno SPARK 30 Pro 128 ГБ черного цвета получил безрамочный дизайн, благодаря чему экран вмещает больше данных по сравнению с плоским дисплеем. Содеожит 128гб  внутренней памяти",
    img: "images/Tecno_SPARK_30_Pro.png",
  },
  {
    name: "POCO X8 Pro Max ",
    price: 57000,
    descripchen:
      "Смартфон POCO X8 Pro Max 512 ГБ представлен в черном цвете. Корпус устройства выполнен из стекла и металла. Соответствие стандартам IP68/IP69K гарантирует устойчивость к перепадам температуры.",
    img: "images/POCO_X8_Pro_Max.png",
  },
  {
    name: "Xiaomi REDMI Note 15 Pro ",
    price: 26200,
    descripchen:
      "Смартфон Xiaomi REDMI Note 15 Pro 256 ГБ выполнен в пластиковом корпусе черного и не только цвета. Благодаря соответствию стандарту IP65 он не боится пыли, влаги, брызг воды и механических повреждений.",
    img: "images/Xiaomi_REDMI_Note_15_Pro.png",
  },
  {
    name: "Xiaomi 17T ",
    price: 60000,
    descripchen:
      "Черный смартфон Xiaomi 17T оснащен 6.59-дюймовым экраном с поддержкой 68 млрд цветов. POLED-матрица точно отображает темные и светлые сцены. Устойчив к пыли, влаги и брызгам",
    img: "images/Xiaomi_17T.png",
  },
  {
    name: "HONOR 600 Pro ",
    price: 25000,
    descripchen:
      "Смартфон HONOR 600 Pro имеет AMOLED-дисплей с разрешением 2728х1264 пикс. и частотой обновления 120 Гц. Он передает картинку с высокой детализацией и плавной анимацией.",
    img: "images/HONOR_600_Pro.png",
  },
  {
    name: "realme Note 60x",
    price: 8500,
    descripchen:
      "Смартфон realme Note 60x поддерживает технологию распознавания воды на экране, которая позволяет управлять устройством даже мокрыми руками. Оперативная память объемом 3 ГБ.",
    img: "images/realme_Note_60x.png",
  },
  {
    name: "HONOR X9d",
    price: 37000,
    descripchen:
      "6.79'' смартфон HONOR X9d 256 ГБ поставляется в черном корпусе. Оперативная память составляет 12 ГБ, это позволит одновременно слушать музыку, обрабатывать фотографии и переписываться в мессенджерах.",
    img: "images/Honor_X9d.png",
  },
  {
    name: "realme C75 ",
    price: 17000,
    descripchen:
      "Смартфон realme C75 с объемом встроенной памяти 128 ГБ имеет тыловую камеру с 2 модулями и поддержкой режима уличной съемки для автоматического выбора параметров в зависимости от окружающих условий.",
    img: "images/realme_C75.png",
  },
];

const containerCard = document.querySelector(".cardCatalog");
const searchInp = document.querySelector(".inputCard");

const busketContainer = document.querySelector(".busketModal");

let myCard = [];

function render(array) {
  containerCard.innerHTML = "";
  array.forEach((el, index) => {
    containerCard.insertAdjacentHTML(
      "beforeend",
      `<div class="cardElements">
                       <img src=${el.img} class="imgCard">
                       <h2 class="nameCard">${el.name}</h2>
                       <h3 class="priceCard" data-indexs="${index}">${el.price}₽</h3>
                       <p class="opisaniePhones">${el.descripchen}</p>
                       <button class="btnCard" data-index="${index}">Купить</button>
                         </div>
                       </div>`,
    );
  });
  const allButtons = document.querySelectorAll(".btnCard");
  const priceTotal = document.querySelector(".priceCard");

  allButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const indexTarget = Number(button.getAttribute("data-index"));
      const blockModal = arrayPhones[indexTarget];
      myCard.push(blockModal);
      renderCardBusket();
    });
  });
}

function renderCardBusket() {
  busketContainer.innerHTML = "";

  if (myCard.length === 0) {
    busketContainer.innerHTML = `<p class="colorP">В корзине пусто....</p>`;
    return;
  }
  myCard.forEach((item, index) => {
    const cardModalHTML = `
            <div class="busketCardModal">
        <img src=${item.img} class="imgBusketCard">
        <h2 class="nameCardModal">${item.name}</h2>
        <h3 class="priceCard">${item.price}₽</h3>
        <button class="deleteCard" data-index="${index}">Удалить</button>
        </div>
        `;
    busketContainer.insertAdjacentHTML("beforeend", cardModalHTML);
  });
  const allDeleteBtn = document.querySelectorAll(".deleteCard");

  allDeleteBtn.forEach((but) => {
    but.addEventListener("click", () => {
      const delIndex = Number(but.getAttribute("data-index"));
      myCard.splice(delIndex, 1);
      renderCardBusket();
    });
  });

  const butBusketAll = document.querySelector(".deleteCardAll");
  butBusketAll.addEventListener("click", () => {
    myCard.splice(myCard);
    renderCardBusket();
  });
}

render(arrayPhones);
renderCardBusket();

searchInp.addEventListener("input", () => {
  const searchValue = searchInp.value.trim().toLowerCase();
  const filtered = arrayPhones.filter((card) =>
    card.name.toLowerCase().includes(searchValue),
  );
  render(filtered);
});

const containerReview = document.querySelector(".leftMenu");

const arrayClientsReview = [
  {
    id: 1,
    avatar: "memsAvater/vstavlennoe-izobrazhenie(2).png",
    name: "Олег",
    text: "Отличный магазин, большой выбор смартфонов разных брендов. Всё можно покрутить в руках перед покупкой.",
    star: "⭐⭐⭐☆☆",
  },
  {
    id: 3,
    avatar: "memsAvater/vstavlennoe-izobrazhenie(3).png",
    name: "Дмитрий",
    text: "Грамотный персонал в зале. Помогли сравнить характеристики двух моделей и выбрать оптимальный вариант.",
    star: "⭐⭐☆☆☆",
  },
  {
    id: 4,
    avatar: "memsAvater/vstavlennoe-izobrazhenie(11).png",
    name: "Елена",
    text: "Стильный интерьер, чистые витрины. Все актуальные новинки смартфонов уже выставлены на стендах.",
    star: "⭐⭐☆☆☆",
  },
  {
    id: 5,
    avatar: "memsAvater/vstavlennoe-izobrazhenie(4).png",
    name: "Алексей",
    text: "Ассортимент отличный, но защитных чехлов на редкие китайские модели телефонов хотелось бы побольше.",
    star: "⭐⭐⭐⭐☆",
  },
  {
    id: 6,
    avatar: "memsAvater/vstavlennoe-izobrazhenie(11).png",
    name: "Мария",
    text: "Убедилась в оригинальности прямо у витрины, проверила все серийники. Запечатанный, абсолютно новый аппарат.",
    star: "⭐☆☆☆☆",
  },
  {
    id: 7,
    avatar: "memsAvater/vstavlennoe-izobrazhenie(5).png",
    name: "Иван",
    text: "Обычный надежный магазин электроники. Цены адекватные, все популярные бренды в наличии.",
    star: "⭐⭐⭐⭐⭐",
  },
  {
    id: 8,
    avatar: "memsAvater/vstavlennoe-izobrazhenie(11).png",
    name: "Ольга",
    text: "Порадовало, что консультанты не навязывают дорогие допы. Спокойно выбрала телефон, который и хотела.",
    star: "⭐⭐⭐☆☆",
  },
  {
    id: 9,
    avatar: "memsAvater/vstavlennoe-izobrazhenie(6).png",
    name: "Сергей",
    text: "Пришел за одним флагманом, но менеджер показал альтернативу подешевле с теми же функциями. Спасибо за честность!",
    star: "⭐⭐☆☆☆",
  },
  {
    id: 10,
    avatar: "memsAvater/vstavlennoe-izobrazhenie(11).png",
    name: "Наталья",
    text: "Цвета корпусов вживую на витрине выглядят совсем иначе, чем в интернете. Хорошо, что пришла выбирать лично.",
    star: "⭐⭐⭐⭐☆",
  },
  {
    id: 11,
    avatar: "memsAvater/vstavlennoe-izobrazhenie(7).png",
    name: "Артем",
    text: "Взял здесь игровой смартфон. Экран выдает шикарную герцовку, пикселей вообще не видно, играть — одно удовольствие.",
    star: "⭐⭐⭐☆☆",
  },
  {
    id: 12,
    avatar: "memsAvater/vstavlennoe-izobrazhenie(11).png",
    name: "Татьяна",
    text: "Вежливые сотрудники, быстро выписали гарантийный талон на телефон и сразу аккуратно наклеили стекло.",
    star: "⭐⭐⭐☆☆",
  },
  {
    id: 13,
    avatar: "memsAvater/vstavlennoe-izobrazhenie(8).png",
    name: "Михаил",
    text: "Телефоны на демонстрационных стендах полностью заряжены, можно зайти и детально протестировать меню.",
    star: "⭐☆☆☆☆",
  },
  {
    id: 14,
    avatar: "memsAvater/vstavlennoe-izobrazhenie(11).png",
    name: "Екатерина",
    text: "Наконец-то нашла место, где все топовые новинки Apple и Samsung можно сравнить вживую в одном зале.",
    star: "⭐⭐⭐⭐☆",
  },
  {
    id: 15,
    avatar: "memsAvater/vstavlennoe-izobrazhenie(9).png",
    name: "Владимир",
    text: "Эргономика у выбранной модели идеальная. Продавцу спасибо за терпение, я долго сомневался перед покупкой.",
    star: "⭐⭐⭐⭐☆",
  },
  {
    id: 16,
    avatar: "memsAvater/vstavlennoe-izobrazhenie(11).png",
    name: "Юлия",
    text: "Менеджер подробно объяснил разницу в процессорах и подсказал, какой телефон дольше не устареет.",
    star: "⭐⭐⭐⭐☆",
  },
  {
    id: 18,
    avatar: "memsAvater/vstavlennoe-izobrazhenie(11).png",
    name: "Светлана",
    text: "Экран у купленного телефона очень яркий, на солнце все видно. Видеозапись со стабилизацией — супер.",
    star: "⭐⭐⭐⭐⭐",
  },
  {
    id: 19,
    avatar: "memsAvater/vstavlennoe-izobrazhenie(10).png",
    name: "Игорь",
    text: "Хороший выбор модификаций встроенной памяти. Персонал ненавязчивый, дают время подумать.",
    star: "⭐⭐☆☆☆",
  },
];

arrayClientsReview.forEach((client) => {
  containerReview.insertAdjacentHTML(
    "beforeend",
    `
    <div class="comment">
    <img src=${client.avatar} class="imgComment">
    <h2 class="nameClient">${client.name}</h2>
    <p class="textComment">${client.text}</p>
    <div class="starComment">${client.star}</div>
    </div>`,
  );
});

const busketView = document.querySelector(".buscketBtn");
const modalD = document.querySelector(".modalWindow");
const noneBsk = document.querySelector(".noneBuscket");

busketView.addEventListener("click", () => {
  modalD.classList.toggle("modal");
  modalD.classList.toggle("back");
  busketContainer.classList.add("blockModal");
});

const registerLink = document.querySelector('a[href*="indexRegister"]');
const currentUser = readCurrentUser();

function readCurrentUser() {
  try {
    return JSON.parse(localStorage.getItem("currentUser"));
  } catch {
    return null;
  }
}

if (registerLink && currentUser && currentUser.name) {
  registerLink.removeAttribute("href");
  registerLink.innerHTML =
    '<span class="userName">' +
    currentUser.name +
    "</span>" +
    ' <button type="button" class="logoutBtn">Выйти</button>';

  registerLink
    .querySelector(".logoutBtn")
    .addEventListener("click", function () {
      localStorage.removeItem("currentUser");
      location.reload();
    });
}
