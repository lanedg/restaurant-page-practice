import "./styles.css";

import { HomePageBuilder } from "./home";

import { MenuBuilder } from "./menu";

import { ContactBuilder } from "./contact";
/*
const content = document.getElementById("content");
const homePageBuilder = new HomePageBuilder(content);
homePageBuilder.buildHomePage();
*/
class RestaurantPageManager {
  #content;
  #homePageBuilder;
  #MenuBuilder;
  #ContactBuilder;

  constructor(contentContainer) {
    this.#content = contentContainer;
    this.#homePageBuilder = new HomePageBuilder(this.#content);
    this.#MenuBuilder = new MenuBuilder(this.#content);
    this.#ContactBuilder = new ContactBuilder(this.#content);
  }

  buildHomePage() {
    this.#content.innerHTML = "";
    this.#homePageBuilder.buildHomePage();
  }

  buildMenu() {
    this.#content.innerHTML = "";
    this.#MenuBuilder.buildMenu();
  }

  buildContact() {
    this.#content.innerHTML = "";
    this.#ContactBuilder.buildContactPage();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const pageManager = new RestaurantPageManager(
    document.getElementById("content")
  );
  pageManager.buildHomePage();

  const homeBtn = document.getElementById("home-button");

  homeBtn.addEventListener("click", () => {
    pageManager.buildHomePage();
  });

  const menuBtn = document.getElementById("menu-button");

  menuBtn.addEventListener("click", () => {
    pageManager.buildMenu();
  });

  const contactBtn = document.getElementById("contact-button");
  contactBtn.addEventListener("click", () => {
    pageManager.buildContact();
  });
});
