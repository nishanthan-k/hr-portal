import React, { useState } from "react";
import { Dropdown, Input } from "semantic-ui-react";
import empData from "../../assets/data/employeesData.json";
import "./EmployeeFilter.scss";

const filterBy = [
  { key: "role", text: "By Role", value: "role" },
  { key: "fullName", text: "By Name", value: "fullName" },
  { key: "empID", text: "By empID", value: "empID" },
];

const sortBy = [
  { key: "doj", text: "By DOJ", value: "doj" },
  { key: "exp", text: "By Exp", value: "exp" },
];

const EmployeeFilter = (props) => {
  const [filterOption, setFilterOption] = useState("role");
  const [sortOption, setSortOption] = useState("exp");
  const [input, setInput] = useState("");

  const searchHandler = (e) => {
    const inputValue = e.target.value;
    setInput(inputValue);
    filterAndSortData(inputValue, filterOption, sortOption);
  };

  const filterHandler = (event, { value }) => {
    setFilterOption(value);
    filterAndSortData(input, value, sortOption);
  };

  const sortHandler = (event, { value }) => {
    setSortOption(value);
    filterAndSortData(input, filterOption, value);
  };

  const filterAndSortData = (searchInput, filter, sort) => {
    let filteredData = empData.employees.slice();

    if (searchInput) {
      filteredData = filteredData.filter((emp) =>
        emp[filter].toLowerCase().includes(searchInput.toLowerCase())
      );
    }

    if (sort === "exp") {
      console.log("sort");
      filteredData.sort((a, b) => b.exp - a.exp);
    } else {
      console.log("sort");
      filteredData.sort((a, b) => new Date(a.doj) - new Date(b.doj));
    }

    props.setFilteredEmp(filteredData);
  };

  return (
    <div className="filter-bar">
      <Input
        action={
          <Dropdown
            button
            basic
            floating
            placeholder="Filter By"
            options={filterBy}
            value={filterOption}
            onChange={filterHandler}
          />
        }
        icon="search"
        iconPosition="left"
        value={input}
        onChange={(e) => searchHandler(e)}
        placeholder="Search here"
      />
      <div className="dropdown-container">
        <Dropdown
          button
          basic
          floating
          placeholder="Sort By"
          options={sortBy}
          value={sortOption}
          onChange={sortHandler}
        />
      </div>
    </div>
  );
};

export default EmployeeFilter;
