console.log("working");

import "./styles.css";

import { HomePageBuilder } from "./home";

import { MenuBuilder } from "./menu";
/*
const content = document.getElementById("content");
const homePageBuilder = new HomePageBuilder(content);
homePageBuilder.buildHomePage();
*/
class RestaurantPageManager {
  #content;
  #homePageBuilder;
  #MenuBuilder;

  constructor(contentContainer) {
    this.#content = contentContainer;
    this.#homePageBuilder = new HomePageBuilder(this.#content);
    this.#MenuBuilder = new MenuBuilder(this.#content);
  }

  buildHomePage() {
    this.#content.innerHTML = "";
    this.#homePageBuilder.buildHomePage();
  }

  buildMenu() {
    this.#content.innerHTML = "";
    this.#MenuBuilder.buildMenu();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const pageManager = new RestaurantPageManager(
    document.getElementById("content")
  );
  pageManager.buildHomePage();
  console.log("home page built");

  const homeBtn = document.getElementById("home-button");
  console.log("homeBtn:");
  console.log(homeBtn);
  homeBtn.addEventListener("click", () => {
    pageManager.buildHomePage();
    console.log("home page built");
  });

  const menuBtn = document.getElementById("menu-button");
  console.log(menuBtn);
  menuBtn.addEventListener("click", () => {
    pageManager.buildMenu();
    console.log("menu built");
  });
});
