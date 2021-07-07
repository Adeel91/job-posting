import React from "react";
import { Dropdown } from "react-bootstrap";

function CountryDropdown({ countries, setSelectedCountry, onSetCountryCode }) {
  return (
    <Dropdown.Menu>
      <Dropdown.Item
        onClick={() => onSetCountryCode("")}
        key={-1}
        onSelect={() => setSelectedCountry(null)}
      >
        --All--
      </Dropdown.Item>

      {Object.keys(countries).length > 0 &&
        countries.map((item, key) => {
          return (
            <Dropdown.Item
              onClick={() => onSetCountryCode(item.code)}
              key={key}
              onSelect={() => setSelectedCountry(item.name)}
            >
              {item.name}
            </Dropdown.Item>
          );
        })}
    </Dropdown.Menu>
  );
}

export default CountryDropdown;
