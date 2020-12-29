import { CardProps } from "./components";
import faker from "faker";
import { assets } from "./index";

export const example: CardProps[] = [
  {
    id: "1",
    color: "maximumPurple",
    title: "MaximiumPurple",
    text: faker.lorem.paragraphs(2),
  },
  {
    id: "2",
    color: "bluetiful",
    title: "Buetiful",
    text: faker.lorem.paragraphs(1),
    image: {
      source: assets[1],
      height: 496,
      width: 763,
    },
  },
  {
    id: "3",
    color: "darkPurple",
    title: "DarkPurple",
    text: faker.lorem.paragraphs(1),
    image: {
      source: assets[2],
      height: 809,
      width: 1094,
    },
  },
  {
    id: "4",
    color: "chinaPink",
    title: "ChinaPink",
    text: faker.lorem.paragraphs(3),
  },
  {
    id: "5",
    color: "richBlack",
    title: "RichBlack",
    text: faker.lorem.paragraphs(2),
  },
  {
    id: "6",
    color: "candyPink",
    title: "CandyPink",
    text: faker.lorem.paragraphs(1),
    image: {
      source: assets[0],
      height: 688,
      width: 1173,
    },
  },
  {
    id: "",
    color: "mediumSlateBlue",
    title: "MediumSlateBlue",
    text: faker.lorem.paragraphs(2),
  },
];
