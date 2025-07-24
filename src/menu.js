class MenuBuilder {
  constructor(content) {
    this.content = content;
  }

  buildMenu() {
    this.buildMenuHead();
    this.buildMenuSection();
  }

  buildMenuHead() {
    const menuHeader = document.createElement("h1");
    menuHeader.classList.add("main-header");
    menuHeader.textContent = "Menu";
    this.content.appendChild(menuHeader);
  }

  buildMenuSection() {
    const menuSection = this.buildSection();
    this.buildMenuItem("Pepperoni Pizza", "Your standard pizza.", menuSection);
    this.buildMenuItem(
      "Supreme Pizza",
      "Comes with olives, peppers, pepperoni, sausage, etc.",
      menuSection
    );
    this.buildMenuItem(
      "Meat Lover's Delight",
      "Comes with a double serving of pepperoni, sausage, and ham.",
      menuSection
    );
    this.buildMenuItem(
      "Veggie Pizza",
      "Comes with broccoli, onions, celery, carrots, and bell peppers.",
      menuSection
    );
  }

  buildSection() {
    const menuSection = document.createElement("section");
    menuSection.classList.add("menu");
    this.content.appendChild(menuSection);
    return menuSection;
  }

  buildMenuItem(name, description, menuSection) {
    const itemContainer = document.createElement("div");
    itemContainer.classList.add("menu-item-container");
    menuSection.appendChild(itemContainer);

    const itemName = document.createElement("h3");
    itemName.classList.add("menu-item-name");
    itemName.textContent = name;
    itemContainer.appendChild(itemName);

    const itemDescription = document.createElement("p");
    itemDescription.classList.add("menu-item-description");
    itemDescription.textContent = description;
    itemContainer.appendChild(itemDescription);

    const itemPicture = document.createElement("div");
    itemPicture.classList.add("menu-item-picture");
    itemContainer.appendChild(itemPicture);
  }
}

export { MenuBuilder };
