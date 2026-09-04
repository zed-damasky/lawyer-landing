import type { Lawyer } from "@/typesAndInterfaces/lawyer";
/*
  todo: парсер и отдельные json на каждого?
*/

export const lawyers: Lawyer[] = [
  {
    id: "ponkin",
    name: "Понкин  Сергей Анатольевич",
    photo: "/images/lawyers/ponkin.webp",
    imageProfile: "/images/lawyers/profileImage/male_opt.svg",
    workplace:
      "Адвокат Башкирской республиканской коллегии адвокатов (Ишимбайский городской филиал)",
    regNumber: "03/2248",
    practices: [
      "Гражданские и уголовные дела",
      "Трудовое и пенсионное право",
      "Арбитражные и корпоративные споры",
      "Административное право, дела о ДТП",
      "Банкротство граждан и организаций",
    ],
  },
  {
    id: "iambulatova",
    name: "Ямбулатова  Ниля Марсовна",
    photo: "/images/lawyers/iambulatova.webp",
    imageProfile: "/images/lawyers/profileImage/female_opt.svg",
    workplace:
      "Адвокат Башкирской республиканской коллегии адвокатов (Ишимбайский городской филиал)",
    regNumber: "03/1555",
    practices: [
      "Гражданские и уголовные дела",
      "Семейные споры",
      "Жилищное право",
      "Земельное право",
      "Наследственные споры",
      "Споры с государственными органами"
    ],
  },
];
