import { CardProps } from "./components";
import faker from "faker";

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
    text: faker.lorem.paragraphs(2),
  },
  {
    id: "3",
    color: "darkPurple",
    title: "DarkPurple",
    text: faker.lorem.paragraphs(1),
  },
  {
    id: "3",
    color: "chinaPink",
    title: "ChinaPink",
    text: faker.lorem.paragraphs(3),
  },
  {
    id: "4",
    color: "richBlack",
    title: "RichBlack",
    text: faker.lorem.paragraphs(2),
  },
  {
    id: "5",
    color: "candyPink",
    title: "CandyPink",
    text: faker.lorem.paragraphs(1),
  },
  {
    id: "6",
    color: "mediumSlateBlue",
    title: "MediumSlateBlue",
    text: faker.lorem.paragraphs(2),
  },
];
