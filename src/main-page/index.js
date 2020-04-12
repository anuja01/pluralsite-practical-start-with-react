import React, { Component } from "react";
import Header from "./header";
import FeaturedHouse from "./featured-house";
import HouseFilter from "./house-filter";
import SearchResults from "../search-results";
import HouseDetail from "../house";

class App extends Component {
  state = {};
  componentDidMount() {
    this.fetchHouses();
  }
  fetchHouses = () => {
    fetch("./houses.json")
      .then((rsp) => {
        return rsp.json();
      })
      .then((allHouses) => {
        this.allHouses = allHouses;
        this.determineFeaturedHouse();
        this.determineUniqueCountries();
      });
  };

  determineFeaturedHouse = () => {
    if (this.allHouses) {
      const randomIndex = Math.floor(Math.random() * this.allHouses.length);
      const featuredHouse = this.allHouses[randomIndex];
      this.setState({ featuredHouse }); // why setState => triggers the needed re-rendering
    }
  };

  determineUniqueCountries = () => {
    const countries = this.allHouses
      ? Array.from(new Set(this.allHouses.map((h) => h.country)))
      : [];
    countries.unshift(null);
    this.setState({ countries });
  };

  filterHouses = (country) => {
    this.setState({ activeHouse: null });
    const filteredHouses = this.allHouses.filter((h) => h.country === country);
    console.log("country: ", country);
    console.log("filtered Houses", filteredHouses);
    this.setState({ filteredHouses });
    this.setState({ country });
  };

  setActiveHouse = (house) => {
    console.log("setting active house");
    this.setState({ activeHouse: house });
  };

  render() {
    let activeComponent = null;
    console.log("1", this.state.country);
    console.log("2", this.state.activeHouse);
    console.log("3", this.state.filteredHouses);
    if (this.state.country)
      activeComponent = (
        <SearchResults
          country={this.state.country}
          filteredHouses={this.state.filteredHouses}
          setActiveHouse={this.setActiveHouse}
        />
      );
    if (this.state.activeHouse)
      activeComponent = <HouseDetail house={this.state.activeHouse} />;

    if (!activeComponent)
      activeComponent = <FeaturedHouse house={this.state.featuredHouse} />;

    console.log("activeComponent: ", activeComponent);
    return (
      <div className="container">
        <Header subtitle="Be there, like your home.." />
        <HouseFilter
          countries={this.state.countries}
          filterHouses={this.filterHouses}
        />
        {activeComponent}
      </div>
    );
  }
}

export default App;
