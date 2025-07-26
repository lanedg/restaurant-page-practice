class ContactBuilder {
  constructor(content) {
    this.content = content;
  }

  buildContactPage() {
    this.buildLocations();
    this.buildContacts();
  }

  buildLocations() {
    this.buildLocationHeader();
    const locationSection = this.buildLocationSection();
    this.buildIndividualLocation(
      "Phoenix",
      "4930 East Paradise Dr",
      locationSection
    );
    this.buildIndividualLocation("Tuscon", "9030 West Ave", locationSection);
  }

  buildLocationHeader() {
    const locationHeader = document.createElement("h1");
    locationHeader.classList.add("main-header");
    locationHeader.textContent = "Our Locations";
    this.content.appendChild(locationHeader);
  }

  buildLocationSection() {
    const locationSection = document.createElement("section");
    locationSection.classList.add("locations");
    this.content.appendChild(locationSection);
    return locationSection;
  }

  buildIndividualLocation(name, address, locationSection) {
    const container = document.createElement("div");
    container.classList.add("location-container");
    locationSection.appendChild(container);

    const locationName = document.createElement("h3");
    locationName.classList.add("location-name");
    locationName.textContent = name;
    container.appendChild(locationName);

    const locationAddress = document.createElement("p");
    locationAddress.classList.add("location-address");
    locationAddress.textContent = address;
    container.appendChild(locationAddress);
  }

  buildContacts() {
    this.buildContactHeader();
    this.buildContactInfo();
  }

  buildContactHeader() {
    const contactHeader = document.createElement("h2");
    contactHeader.classList.add("contact-header");
    contactHeader.textContent = "For Business Inquiries, Contact Us Here:";
    this.content.appendChild(contactHeader);
  }

  buildContactInfo() {
    const contactInfo = document.createElement("p");
    const mainLine = document.createTextNode("Main Line: +1 602-000-0000");
    contactInfo.appendChild(mainLine);
    contactInfo.appendChild(document.createElement("br"));
    const businessEmail = document.createTextNode(
      "Business Email: exampleemail@gmail.com"
    );
    contactInfo.appendChild(businessEmail);
    this.content.appendChild(contactInfo);
  }
}

export { ContactBuilder };
