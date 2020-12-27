import React from "react";
import { StyleSheet, View } from "react-native";
import { ParallaxScrollView } from "../../../src/components";
import { Palette, Spacing } from "../../../src/styles";
import faker from "faker";
import { Card, CardContentProps } from "../components";

const example: CardContentProps[] = [
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

const CardList = () => {
  return (
    <ParallaxScrollView
      style={{ marginVertical: Spacing.xxl, backgroundColor: "white" }}
      //config={{ onlyOnce: true }}
    >
      {example.map((props, index) => (
        <Card key={index} index={index} {...props} />
      ))}
    </ParallaxScrollView>
  );
};

export default CardList;
