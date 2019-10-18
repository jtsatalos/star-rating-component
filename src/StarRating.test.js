import React from "react";
import StarRating from "./StarRating";

import { render, fireEvent } from "@testing-library/react";
import { exportAllDeclaration } from "@babel/types";

it("renders 5 stars by default", () => {
  const { getByTestId } = render(<StarRating />);
  const elementss = getByTestId("elementss");
  expect(elementss.querySelectorAll("[data-index]").length).toBe(5);
});

it("renders a specified number of stars", () => {
  const { getByTestId } = render(<StarRating starCount={7} />);
  const elementss = getByTestId("elementss");
  expect(elementss.querySelectorAll("[data-index]").length).toBe(7);
});

it("renders empty stars with color #bbb by default", () => {
  const { getByTestId } = render(<StarRating />);
  // by default there are no filled colors so it is just
  // checking if the color input is #bbb to see the default
  const elementss = getByTestId("elementss");
  var stringify = elementss.innerHTML + "";

  expect(stringify.includes("#bbb")).toBeTruthy();
});

it("renders empty stars with the color of the emptyColor value", () => {
  const { getByTestId } = render(<StarRating emptyColor={"#FF0000"} />);
  // by default there are no filled colors so it is just
  // checking if the color input is the one entered
  const elementss = getByTestId("elementss");

  var stringify = elementss.innerHTML + "";

  expect(stringify.includes("#FF0000")).toBeTruthy();
});
it("renders filled stars as yellow by default", () => {
  const { getByTestId } = render(<StarRating value={5} />);
  // Here I make it so that all the stars are filled and then I
  // check if the color input is #yellow to see the default
  const elementss = getByTestId("elementss");
  var stringify = elementss.innerHTML + "";
  expect(stringify.includes("yellow")).toBeTruthy();
});

it("renders filled stars with the color of the filledColor value", () => {
  const { getByTestId } = render(<StarRating value={5} filledColor={"red"} />);
  const elementss = getByTestId("elementss");
  // Here I make it so that all the stars are filled and then I
  // check if the color input is #yellow to see if it includes the new value
  var stringify = elementss.innerHTML + "";

  expect(stringify.includes("red")).toBeTruthy();
});

it("renders a star using the 1x size by default", () => {
  const { getByTestId } = render(<StarRating />);
  // will only show one output for size vaue so this checks if it is 1x

  const elementss = getByTestId("elementss");
  var stringify = elementss.innerHTML + "";

  expect(stringify.includes("1x")).toBeTruthy();
});

it("renders a star using the size value", () => {
  const { getByTestId } = render(<StarRating size={"3x"} />);
  // will only show one output for size vaue so this checks if it is 3x

  const elementss = getByTestId("elementss");
  var stringify = elementss.innerHTML + "";

  expect(stringify.includes("3x")).toBeTruthy();
});

it("renders 0 filled stars when value is 0", () => {
  // already did a check if the default turns it to #b bb so can use this to check
  // default value is 0 but will input to be sure
  const { getByTestId } = render(<StarRating value={0} />);

  const elementss = getByTestId("elementss");
  var stringify = elementss.innerHTML + "";

  expect(stringify.includes("#bbb")).toBeTruthy();
});

it("renders filled stars equal to value when value is greater than 0", () => {
  const { getByTestId } = render(<StarRating value={2} />);

  const elementss = getByTestId("elementss");
  var stringify = elementss.innerHTML + "";

  // here I count the occurences of yellow (filled) to see if it matches the number
  // I put in for the value
  var count = (stringify.match(/yellow/g) || []).length;
  expect(count).toBe(2);
});

it("updates when clicking on an empty star", () => {
  // const { getByTestId } = render(<StarRating onClick={3} />);
  // const elementss = getByTestId("elementss");
  // var stringify = elementss.innerHTML + "";
  // // here I count the occurences of yellow (filled) to see if it matches the number
  // // I put in for the value
  // fireEvent.change(onClick, { onClick: 3 });
  // var count = (stringify.match(/yellow/g) || []).length;
  // expect(count).toBe(3);
  // couldn't figure this one out
});

it("sets the value to 0 when clicking on a filled star", () => {
  // couldn't figure this one out
});
