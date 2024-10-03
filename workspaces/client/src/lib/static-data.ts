import { CurrencyEnum, TransferTypeEnum } from "../types/type";

export const transfers = [
  {
    id: 1,
    icon: "/images/svg/transfer.svg",
    user: {
      name: "Maxim Kenley",
      hidden: false,
      transfer: {
        type: TransferTypeEnum.DEFAULT,
        currency: CurrencyEnum.USD,
        amount: -5.1,
      },
    },
    style: "z-[3]",
  },
  {
    id: 2,
    icon: "/images/svg/transfer.svg",
    user: {
      name: "John Kenley",
      hidden: true,
      transfer: {
        type: TransferTypeEnum.EXCHANGE,
        currency: CurrencyEnum.USD,
        amount: 1009,
      },
    },
    style: "z-[2] opacity-60 -mt-6",
  },
  {
    id: 3,
    icon: "/images/svg/transfer.svg",
    user: {
      name: "Maxim Kenley",
      hidden: false,
      transfer: {
        type: TransferTypeEnum.DEFAULT,
        currency: CurrencyEnum.USD,
        amount: -3.99,
      },
    },
    style: "z-[1] opacity-20 -mt-8",
  },
];

export const showCurrency = [
    {
        id: 1,
        title: 'Dollar',
        icon: '/images/svg/dollar.svg',
    },
    {
        id: 2,
        title: 'Euro',
        icon: '/images/svg/euro.svg',
    },
    {
        id: 3,
        title: 'Bitcoin',
        icon: '/images/svg/bitcoin.svg',
    },
    {
        id: 4,
        title: 'Ethereum',
        icon: '/images/svg/ethereum.svg',
    },
]

export const servicesClient = [
    {
        id: 1,
        icon: '/images/svg/services-work.svg',
        title: 'Миттєва оплата праці',
        desc: 'Отримуйте зарплату миттєво на ваш рахунок у NOX. Забудьте про затримки – гроші будуть доступні одразу після перерахування роботодавцем.'
    },
    {
        id: 2,
        icon: '/images/svg/services-security-card.svg',
        title: 'Захист карток 24/7',
        desc: 'Повна безпека ваших карток з цілодобовим моніторингом підозрілих операцій та миттєвим блокуванням у разі втрати. Ваші засоби завжди під надійним захистом.'
    },
    {
        id: 3,
        icon: '/images/svg/services-wallet-transfer.svg',
        title: 'Миттєві перекази та обмін валют',
        desc: 'Отримуйте зарплату миттєво на ваш рахунок у NOX. Забудьте про затримки – гроші будуть доступні одразу після перерахування роботодавцем.'
    },
]

export const businessClient = [
    {
        id: 1,
        icon: '/images/svg/services-credit.svg',
        title: 'Корпоративні кредитні лінії',
        desc: 'Гнучкі кредитні рішення для бізнесу: фінансування проектів або поточних витрат із вигідними умовами для малого та середнього бізнесу.'
    },
    {
        id: 2,
        icon: '/images/svg/services-accounting.svg',
        title: 'Онлайн-бухгалтерія',
        desc: 'Автоматизируйте учет, отчетность и уплату налогов с помощью удобной бухгалтерской платформы NOX.'
    },
    {
        id: 3,
        icon: '/images/svg/services-fast-transfer.svg',
        title: 'Швидкий обмін валют',
        desc: 'Обмін валют для міжнародних транзакцій із мінімальними комісіями та актуальними курсами — ідеальне рішення для бізнесу із закордонними партнерами.'
    },
]

export const faq = [
  {
    id: 1,
    title: 'Як мені відкрити рахунок у NOX?',
    desc: 'Відкрити рахунок у банку NOX дуже просто. Ви можете зробити це онлайн через наш сайт або мобільний додаток, заповнивши коротку заявку. Також можна відвідати найближче відділення банку для оформлення рахунку на місці.'
  },
  {
    id: 2,
    title: 'Які документи мені потрібно надати для подання заявки на кредит?',
    desc: 'Для подання заявки на кредит вам потрібно надати посвідчення особи (паспорт), документи, що підтверджують ваш дохід (наприклад, довідка з роботи або податкова декларація), а також, за потреби, додаткові документи, що підтверджують фінансове становище.'
  },
  {
    id: 3,
    title: 'Як я можу отримати доступ до своїх рахунків онлайн?',
    desc: 'Ви можете отримати доступ до своїх рахунків через нашу мобільну програму або інтернет-банкінг на сайті NOX. Для входу в систему вам знадобиться ваш логін та пароль, а також двофакторна автентифікація для додаткової безпеки.'
  },
  {
    id: 4,
    title: 'Чи захищені мої транзакції та особиста інформація?',
    desc: 'Так, усі транзакції та особисті дані захищені за допомогою багаторівневої системи безпеки. Ми використовуємо шифрування даних, моніторинг підозрілих операцій та двофакторну автентифікацію, щоб гарантувати безпеку ваших засобів та інформації.'
  },
]

export const reviews = [
  {
    id: 1,
    author: 'Sata T',
    desc: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Sit morbi congue dignissim; nullam aliquet arcu interdum mauris. Natoque consectetur augue bibendum; donec nunc arcu nam hendrerit potenti. ',
  },
  {
    id: 2,
    author: 'John D',
    desc: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Sit morbi congue dignissim; nullam aliquet arcu interdum mauris. Natoque consectetur augue bibendum; donec nunc arcu nam hendrerit potenti. ',
  },
  {
    id: 3,
    author: 'Emily G',
    desc: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Sit morbi congue dignissim; nullam aliquet arcu interdum mauris. Natoque consectetur augue bibendum; donec nunc arcu nam hendrerit potenti. ',
  },
  {
    id: 4,
    author: 'Maskim K',
    desc: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Sit morbi congue dignissim; nullam aliquet arcu interdum mauris. Natoque consectetur augue bibendum; donec nunc arcu nam hendrerit potenti. ',
  },
]

export const navigation = [
  {
    id: 1,
    title: "Главная",
    link: "/",
  },
  {
    id: 2,
    title: "О нас",
    link: "/about",
  },
  {
    id: 3,
    title: "Услуги",
    link: "/offers",
  },
  {
    id: 4,
    title: "Бизнесс",
    link: "/business",
  },
];