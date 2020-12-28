import { CardContentProps } from "./components";
import faker from "faker";

export const example: CardContentProps[] = [
  {
    color: "maximumPurple",
    title: "MaximiumPurple",
    text: faker.lorem.paragraphs(2),
  },
  {
    color: "bluetiful",
    title: "Buetiful",
    text: faker.lorem.paragraphs(2),
  },
  {
    color: "darkPurple",
    title: "DarkPurple",
    text: faker.lorem.paragraphs(1),
  },
  {
    color: "chinaPink",
    title: "ChinaPink",
    text: faker.lorem.paragraphs(3),
  },
  {
    color: "richBlack",
    title: "RichBlack",
    text: faker.lorem.paragraphs(2),
  },
  {
    color: "candyPink",
    title: "CandyPink",
    text: faker.lorem.paragraphs(1),
  },
  {
    color: "mediumSlateBlue",
    title: "MediumSlateBlue",
    text: faker.lorem.paragraphs(2),
  },
];
