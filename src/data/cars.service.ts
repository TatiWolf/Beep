import {Injectable} from '@angular/core';

export interface ICars {
  image: string,
  type: string,
  country: string,
  imageTitle?: string,
  name: string,
  description: string,
  subTitle?: string,
  important?: {
    title: string,
    subtitle: string
  }[],
  title2?: {
    name: string,
    subtitle: string,
    title2: string,
    subtitle2: string,
    img: string
  },
  block2?: {
    title1: string,
    subtitle1: string[],
    title2: string,
    subtitle2: string,
  },
  block3?: {
    image: string,
    title: string,
    subtitle: {
      text1: string,
      info: string[],
      footer: string
    },
  }
}

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  categories: string[] = ['Новинки', 'Легенды', 'Классика', 'Германия', 'Китай', 'Россия', 'Япония', 'Другие страны']

  cars: ICars[] = [
    {
      image: 'assets/img/img7.jpg',
      imageTitle: 'assets/img/img_2.png',
      type: 'Новинки',
      country: 'Китай',
      name: 'Geely Monjaro',
      description: 'кроссовер из китая',
      subTitle: 'В этом обзоре мы рассмотрим ключевые особенности Geely Monjaro, его преимущества и недостатки, а также его конкурентоспособность на рынке.',
      important: [
        {
          title: 'Основные характеристики ',
          subtitle: '- Бензиновые двигатели объёмом 1.5 и 2.0 литра\n' +
            '- Мощность от 150 до 240 л.с.\n' +
            '- Гибридные версии с повышенной экономичностью\n' +
            '- Полный привод (в некоторых комплектациях)'
        },
        {
          title: 'Ключевые технологии',
          subtitle: '- Система экстренного торможения\n' +
            '- Контроль за полосой движения\n' +
            '- Камеры кругового обзора\n' +
            '- Датчики слепых зон\n' +
            '- Автоматическое переключение дальнего света\n'
        },
        {
          title: 'Особенности экстерьера',
          subtitle: '- Светодиодные фары и задние фонари\n' +
            '- Большие легкосплавные диски\n' +
            '- Хромированные элементы отделки\n' +
            '- Панорамная крыша (в некоторых комплектациях)\n'
        },
      ],
      title2: {
        name: 'О машине',
        subtitle: 'Geely Monjaro — один из новейших кроссоверов от китайского автопроизводителя Geely. Этот автомобиль уже успел привлечь внимание автолюбителей благодаря сочетанию стильного дизайна, передовых технологий и доступной цены. В этом обзоре мы рассмотрим ключевые особенности Geely Monjaro, его преимущества и недостатки, а также его конкурентоспособность на рынке.\n' +
          '\n' +
          'Он оснащён множеством современных технологий, направленных на повышение комфорта и безопасности. Среди них можно выделить адаптивный круиз-контроль, системы помощи при парковке, а также множество других ассистентов водителя.',
        title2: 'Двигатели и производительность',
        subtitle2: 'Geely Monjaro предлагается с несколькими вариантами двигателей, включая как бензиновые, так и гибридные версии. Они обеспечивают хорошую динамику и экономичность, что делает автомобиль подходящим как для городской, так и для загородной езды.',
        img: 'assets/img/cars/car1.jpg'
      },
      block2: {
        title1: 'Интерьер и комфорт',
        subtitle1: [
          '- Кожаные сиденья с подогревом и вентиляцией',
          '  - Информационно-развлекательная система с большим сенсорным экраном',
          '  - Цифровая панель приборов',
          '  - Многофункциональное рулевое колесо',
          '  - Качественная аудиосистема'],
        title2: 'Цена и конкуренты',
        subtitle2: 'Одним из ключевых преимуществ Geely Monjaro является его конкурентоспособная цена. На рынке он соревнуется с такими моделями, как Toyota RAV4, Hyundai Tucson и Kia Sportage. Благодаря привлекательной стоимости и богатому оснащению, Monjaro имеет все шансы завоевать свою долю рынка.',
      },
      block3: {
        image: 'assets/img/cars/car2.jpg',
        title: 'Заключение',
        subtitle: {
          text1: 'Geely Monjaro – это современный китайский кроссовер, который сочетает стиль, передовые технологии и доступную цену. Этот автомобиль предлагает:',
          info: [
            '- Просторный салон с качественной отделкой и современными системами климат-контроля и мультимедиа.',
            '- Передовые системы безопасности и помощи водителю, такие как адаптивный круиз-контроль и система автоматического торможения.',
            '- Эффективные двигатели с низким расходом топлива.'
          ],
          footer: 'Geely Monjaro – отличный выбор для тех, кто ищет современный кроссовер с хорошим соотношением цены и качества.'
        }
      }
    },
    {
      "image": "assets/img/img8.jpg",
      "type": "Классика",
      "country": "Япония",
      "name": "Toyota RAV4",
      "description": "2013-2019",
      "subTitle": "Toyota RAV4 — компактный кроссовер, который завоевал мировую популярность благодаря своей надежности, универсальности и динамичному дизайну. В этой статье мы рассмотрим ключевые особенности Toyota RAV4, его преимущества и недостатки, а также его влияние на автомобильную индустрию за период с 2013 по 2019 год.\n\nRAV4 отличается просторным салоном и высоким уровнем комфорта, что делает его идеальным выбором как для городской, так и для загородной езды. В модельном ряду представлены различные версии с разными типами двигателей, включая гибридные варианты, обеспечивающие экономичность и высокую производительность на дорогах.",
      "important": [
        {
          "title": "Основные характеристики",
          "subtitle": "- Компактные размеры и высокая маневренность\n- Доступность различных версий с бензиновыми и гибридными двигателями\n- Современные системы безопасности и помощи водителю"
        },
        {
          "title": "Ключевые технологии",
          "subtitle": "- Система динамической стабилизации (VSC)\n- Система помощи при старте в гору (HAC)\n- Мультимедийная система с поддержкой Apple CarPlay и Android Auto"
        },
        {
          "title": "Особенности экстерьера",
          "subtitle": "- Динамичный дизайн с акцентами на спортивность\n- Светодиодные фары и задние фонари\n- Легкосплавные диски"
        }
      ],
      "title2": {
        "name": "О модели",
        "subtitle": "Toyota RAV4 — символ надежности и комфорта в мире компактных кроссоверов. Этот автомобиль сочетает в себе японское качество с инновационными технологиями, обеспечивая высокий уровень безопасности и комфорта на дорогах. В этом разделе мы рассмотрим ключевые аспекты модели RAV4, которые делают её привлекательным выбором для автолюбителей.",
        "title2": "Двигатели и производительность",
        "subtitle2": "Toyota RAV4 предлагает выбор между несколькими двигателями, включая бензиновые и гибридные опции. Эти двигатели обеспечивают отличную динамику и экономичность, подходя для различных условий эксплуатации от городских пробок до длительных поездок на автобане.",
        "img": "assets/img/cars/car3.jpg"
      },
      "block2": {
        "title1": "Интерьер и комфорт",
        "subtitle1": [
          "- Просторный салон с высоким качеством отделки и современными материалами\n- Мультимедийная система с большим сенсорным экраном\n- Комфортные сиденья с электрорегулировкой и подогревом"
        ],
        "title2": "Цена и конкуренты",
        "subtitle2": "Toyota RAV4 позиционируется как конкурентный автомобиль в своем сегменте. Среди основных конкурентов можно выделить Honda CR-V, Mazda CX-5 и Nissan Rogue. Высокая надежность и эксплуатационные характеристики делают RAV4 привлекательным выбором для многих автолюбителей."
      },
      "block3": {
        "image": "assets/img/cars/car4.jpg",
        "title": "Заключение",
        "subtitle": {
          "text1": "Toyota RAV4 — это не просто автомобиль, это выбор тех, кто ценит надежность, комфорт и передовые технологии. Он предлагает:",
          "info": [
            "- Превосходное сочетание качества и надежности японского производства\n- Мощные и экономичные двигатели, соответствующие современным экологическим стандартам\n- Инновационные системы помощи водителю и безопасности"
          ],
          "footer": "Toyota RAV4 — идеальный выбор для тех, кто ищет современный, надежный и комфортный кроссовер с ярким характером."
        }
      }
    },
    {
      "image": "assets/img/img9.jpg",
      "type": "Классика",
      "country": "Другие страны",
      "name": "Hyundai Solaris",
      "description": "знакомый седан",
      "subTitle": "Hyundai Solaris — популярный седан, который завоевал доверие автолюбителей своей надежностью и комфортом. В этой статье мы рассмотрим ключевые особенности Hyundai Solaris, его достоинства и недостатки, а также его роль на автомобильном рынке других стран.",
      "important": [
        {
          "title": "Основные характеристики",
          "subtitle": "- Экономичные бензиновые и дизельные двигатели\n- Просторный салон с высоким уровнем комфорта\n- Современные системы безопасности"
        },
        {
          "title": "Ключевые технологии",
          "subtitle": "- Инфотейнмент система с поддержкой смартфонов\n- Система помощи при парковке\n- Электронная система стабилизации"
        },
        {
          "title": "Особенности экстерьера",
          "subtitle": "- Стильный и динамичный дизайн\n- Светодиодные фары и задние фонари\n- Легкосплавные диски"
        }
      ],
      "title2": {
        "name": "О модели",
        "subtitle": "Hyundai Solaris — символ надежности и экономичности среди современных седанов. В этом разделе мы рассмотрим ключевые аспекты модели, которые делают её популярным выбором для многих автолюбителей в других странах.",
        "title2": "Двигатели и производительность",
        "subtitle2": "Hyundai Solaris предлагает выбор между несколькими типами двигателей, включая бензиновые и дизельные варианты. Они обеспечивают хорошую экономичность и достаточную динамику для городских и загородных условий эксплуатации.",
        "img": "assets/img/cars/car5.jpg"
      },
      "block2": {
        "title1": "Интерьер и комфорт",
        "subtitle1": [
          "- Качественные материалы и отделка салона\n- Мультимедийная система с большим экраном\n- Комфортные сиденья с регулировкой"
        ],
        "title2": "Цена и конкуренты",
        "subtitle2": "Hyundai Solaris конкурирует на рынке с такими моделями, как Kia Rio, Ford Fiesta и Volkswagen Polo. Благодаря своей доступной цене и надежности, Solaris остаётся одним из лидеров в своем сегменте."
      },
      "block3": {
        "image": "assets/img/cars/car6.jpg",
        "title": "Заключение",
        "subtitle": {
          "text1": "Hyundai Solaris — это надёжный и комфортный седан, который предлагает:",
          "info": [
            "- Просторный салон с высоким уровнем комфорта и современными технологиями\n- Экономичные и производительные двигатели\n- Современные системы безопасности и помощи водителю"
          ],
          "footer": "Hyundai Solaris — отличный выбор для тех, кто ищет сбалансированный автомобиль с хорошим соотношением цены и качества."
        }
      }
    },
    {
      "image": "assets/img/img10.jpg",
      "type": "Новинки",
      "country": "Другие страны",
      "name": "Volvo XC90",
      "description": "гибридный кроссовер",
      "subTitle": "Volvo XC90 - это передовой гибридный кроссовер, сочетающий в себе мощность и экономичность.",
      "important": [
        {
          "title": "Основные характеристики ",
          "subtitle": "- Гибридная силовая установка\n- Электрический диапазон до 50 км\n- Мощность до 400 л.с.\n- Полный привод"
        },
        {
          "title": "Технологии и особенности",
          "subtitle": "- Система автоматической парковки\n- Адаптивный круиз-контроль с функцией стоп-н-go\n- Инфотеймент-система с поддержкой смартфонов"
        },
        {
          "title": "Экстерьер и интерьер",
          "subtitle": "- Современный стильный дизайн с акцентом на эстетику\n- Использование экологически чистых материалов в отделке салона\n- LED-освещение и динамические поворотные фонари"
        }
      ],
      "title2": {
        "name": "О Volvo XC90",
        "subtitle": "Volvo XC90 - это воплощение передовых технологий и комфорта в сегменте гибридных кроссоверов. Он сочетает в себе высокую производительность и низкий уровень выбросов, делая его идеальным выбором для экологически осознанных водителей.",
        "title2": "Двигатели и производительность",
        "subtitle2": "Volvo XC90 оснащен мощным гибридным двигателем, который обеспечивает динамичное ускорение и эффективное использование топлива при любых условиях дорожного движения.",
        "img": "assets/img/cars/car7.jpg"
      },
      "block2": {
        "title1": "Интерьер и комфорт",
        "subtitle1": [
          "- Кожаные сиденья с массажем и вентиляцией",
          "- Панорамная крыша с электрическим управлением",
          "- Просторный багажник с электрическим подъемником"
        ],
        "title2": "Цена и конкуренты",
        "subtitle2": "Volvo XC90 предлагает высокий уровень комфорта и технологий по конкурентоспособной цене на рынке гибридных кроссоверов. Он состязается с такими моделями, как Audi Q7 и BMW X5, предлагая уникальное сочетание эффективности и стиля."
      },
      "block3": {
        "image": "assets/img/cars/car8.jpg",
        "title": "Заключение",
        "subtitle": {
          "text1": "Volvo XC90 - это идеальный выбор для тех, кто ищет современный и экологически чистый гибридный кроссовер с высоким уровнем комфорта и безопасности.",
          "info": [
            "- Премиальный салон с высококачественными материалами и передовыми технологиями комфорта.",
            "- Многочисленные системы помощи водителю и безопасности обеспечивают комфортное и безопасное вождение.",
            "- Эффективный гибридный двигатель с низкими выбросами делает Volvo XC90 ведущим игроком в сегменте экологически чистых автомобилей."
          ],
          "footer": "Volvo XC90 - это гармония между высоким уровнем производительности, комфорта и экологически чистыми технологиями, готовая удовлетворить запросы самых требовательных водителей."
        }
      }
    },
    {
      "image": "assets/img/img25.jpeg",
      "type": "Легенды",
      "country": "Германия",
      "name": "Mercedes-Benz W124",
      "description": "мечта и легенда 90-х",
      "subTitle": "Mercedes-Benz W124 - символ надежности, комфорта и элегантности, который завоевал мир своим выдающимся качеством.",
      "important": [
        {
          "title": "Основные характеристики ",
          "subtitle": "- Двигатели семейства M103,M104 и М111\n- Коробка передач 4-ступенчатая автоматическая или 5-ступенчатая механическая\n- Заводская система климат-контроля"
        },
        {
          "title": "Технологии и особенности",
          "subtitle": "- Антиблокировочная система тормозов (ABS)\n- Система стабилизации (ESP)\n- Подушки безопасности для водителя и пассажиров"
        },
        {
          "title": "Экстерьер и интерьер",
          "subtitle": "- Классический дизайн кузова с изящными линиями и эмблемой Mercedes на капоте\n- Качественные материалы в интерьере, включая натуральную кожу и дерево"
        }
      ],
      "title2": {
        "name": "О Mercedes-Benz W124",
        "subtitle": "Mercedes-Benz W124 - это не просто автомобиль, это стандарт высокого качества и надежности, который стал мечтой многих автолюбителей по всему миру. Его простота и элегантность делают его вечным символом автомобильной индустрии.",
        "title2": "Двигатели и производительность",
        "subtitle2": "Mercedes-Benz W124 предлагался с различными моторами, от экономичных дизелей до мощных бензиновых двигателей, обеспечивая разнообразие выбора и высокую производительность на любом типе дорог.",
        "img": "assets/img/cars/car9.jpg"
      },
      "block2": {
        "title1": "Интерьер и комфорт",
        "subtitle1": [
          "- Эргономичные сиденья с электроприводом и памятью\n- Кондиционер с регулировкой температуры для каждого пассажира\n- Система мультимедиа с дисплеем высокого разрешения и поддержкой Bluetooth"
        ],
        "title2": "Цена и конкуренты",
        "subtitle2": "Mercedes-Benz W124 остается одним из самых желанных классических автомобилей на рынке коллекционных автомобилей. Его привлекательный дизайн, надежность и историческая ценность делают его прямым конкурентом для таких моделей, как BMW E30 и Audi 100."
      },
      "block3": {
        "image": "assets/img/cars/car10.jpg",
        "title": "Заключение",
        "subtitle": {
          "text1": "Mercedes-Benz W124 - это не просто автомобиль, это символ элегантности, надежности и классической немецкой инженерии. Он предлагает:",
          "info": [
            "- Комфортный и стильный интерьер с высоким уровнем отделки",
            "- Продвинутые технологии безопасности и комфорта, которые были передовыми для своего времени",
            "- Высокую производительность и надежность, которые оставляют незабываемые впечатления от вождения"
          ],
          "footer": "Mercedes-Benz W124 - выбор истинных ценителей классики и качества, готовых инвестировать в легендарную историю немецкой автомобильной индустрии."
        }
      }
    },
    {
      "image": "assets/img/img26.jpeg",
      "type": "Классика",
      "country": "Япония",
      "name": "Toyota Camry",
      "description": "нестареющая классика",
      "subTitle": "Toyota Camry - это символ надежности и комфорта, который завоевал сердца многих автолюбителей по всему миру.",
      "important": [
        {
          "title": "Основные характеристики ",
          "subtitle": "- Доступные бензиновые двигатели с различными объемами\n- Автоматическая и механическая коробки передач\n- Экономичный расход топлива"
        },
        {
          "title": "Технологии и особенности",
          "subtitle": "- Система предотвращения столкновений и помощи при парковке\n- Климат-контроль и мультимедийная система на большом сенсорном экране\n- Электрический регулируемый сиденья с подогревом"
        },
        {
          "title": "Экстерьер и интерьер",
          "subtitle": "- Современный дизайн с акцентами на динамичность и элегантность\n- Качественные материалы в отделке салона\n- LED фары и задние фонари"
        }
      ],
      "title2": {
        "name": "О Toyota Camry",
        "subtitle": "Toyota Camry - это не только автомобиль, но и символ надежности и долговечности. Он сочетает в себе японское качество и передовые технологии, что делает его одним из самых популярных среди семейных седанов.",
        "title2": "Двигатели и производительность",
        "subtitle2": "Toyota Camry предлагает выбор между несколькими бензиновыми двигателями, обеспечивающими хорошую мощность и экономичный расход топлива. Это делает его идеальным выбором для городских и загородных поездок.",
        "img": "assets/img/cars/car11.jpg"
      },
      "block2": {
        "title1": "Интерьер и комфорт",
        "subtitle1": [
          "- Просторный салон с высококачественными материалами отделки",
          "- Комфортные сиденья с поддержкой спины и электрорегулировкой",
          "- Информационно-развлекательная система с поддержкой Apple CarPlay и Android Auto"
        ],
        "title2": "Цена и конкуренты",
        "subtitle2": "Toyota Camry конкурирует на рынке среди седанов с такими моделями, как Honda Accord и Nissan Altima благодаря своему комфорту, надежности и долговечности."
      },
      "block3": {
        "image": "assets/img/cars/car12.jpg",
        "title": "Заключение",
        "subtitle": {
          "text1": "Toyota Camry - идеальный выбор для тех, кто ценит надежность, комфорт и передовые технологии. Он предлагает:",
          "info": [
            "- Продуманный дизайн и высокий уровень сборки",
            "- Многочисленные системы безопасности и помощи водителю",
            "- Экономичные и производительные двигатели"
          ],
          "footer": "Toyota Camry - седан, который гармонично сочетает в себе японское качество и передовые технологии, делая каждую поездку комфортной и безопасной."
        }
      }
    },
  ]


}
