import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import './CountrySelector.css'

/*took the code from https://www.npmjs.com/package/react-flags-select*/
const CountrySelector = () => {
  const [selected, setSelected] = useState("");
  return(
  <ReactFlagsSelect
  className="country"
    selected={selected}
    onSelect={(code) => setSelected(code)}
    placeholder='Country'
    />
  );
};

export default CountrySelector;