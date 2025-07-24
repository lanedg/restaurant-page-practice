class HomePageBuilder {
  constructor(content) {
    this.contentDiv = content;
  }

  buildHomePage() {
    this.buildHeader();
    this.buildStorySection();
  }

  buildHeader() {
    const homeHeader = document.createElement("h1");
    homeHeader.classList.add("main-header");
    homeHeader.textContent = "Paradise Pizza";
    this.contentDiv.appendChild(homeHeader);
  }

  buildStorySection() {
    const storySection = this.buildSection();
    this.buildStorySectionHeader(storySection);
    this.buildStorySectionText(storySection);
  }

  buildSection() {
    const storySection = document.createElement("section");
    storySection.classList.add("story");
    this.contentDiv.appendChild(storySection);
    return storySection;
  }

  buildStorySectionHeader(storySection) {
    const storyHeader = document.createElement("h2");
    storyHeader.classList.add("story-header");
    storyHeader.textContent = "Hot and Ready Pizza at a Low Price";
    storySection.appendChild(storyHeader);
  }

  buildStorySectionText(storySection) {
    const storyText = document.createElement("p");
    storyText.classList.add("story-text");
    storyText.textContent =
      "Founded 30 years ago with a dream to offer affordable pizza that will knock your socks off.";
    storySection.appendChild(storyText);
  }
}

export { HomePageBuilder };
