console.log("working");

import "./styles.css";

import { HomePageBuilder } from "./home";
/*
const content = document.getElementById("content");
const homePageBuilder = new HomePageBuilder(content);
homePageBuilder.buildHomePage();
*/
class RestaurantPageManager {
  #content;
  #homePageBuilder;

  constructor(contentContainer) {
    this.#content = contentContainer;
    this.#homePageBuilder = new HomePageBuilder(this.#content);
  }

  buildHomePage() {
    this.#homePageBuilder.buildHomePage();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const pageManager = new RestaurantPageManager(
    document.getElementById("content")
  );
  pageManager.buildHomePage();
  console.log("home page built");
  const homeBtn = document.getElementById("home-button");
});
