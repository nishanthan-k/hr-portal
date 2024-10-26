import React, { useState } from "react";
import { Dropdown, Input } from "semantic-ui-react";
import "./EmployeeFilter.scss";

const filterBy = [
  { key: "role", text: "By Role", value: "role" },
  { key: "fullName", text: "By Name", value: "fullName" },
  { key: "empId", text: "By EmpId", value: "empId" },
];

const sortBy = [
  { key: "doj", text: "By DOJ", value: "doj" },
  { key: "exp", text: "By Exp", value: "exp" },
];

const EmployeeFilter = (props) => {
  const [filterOption, setFilterOption] = useState(props.defaultFilter);
  const [sortOption, setSortOption] = useState(props.defaultSort);
  const [input, setInput] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [frontDB, setFrontDB] = useState(props.empData);

  // console.log(filterOption, sortOption);

  // useEffect(() => {
  //   axios.get("http://192.168.1.196:8080/employee/listEmployee")
  //     .then(res => {
  //       setFrontDB(res.data.data);
  //     })
  // }, [])

  const searchHandler = (e) => {
    const inputValue = e.target.value;
    setInput(inputValue.toLowerCase());
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
    let filteredData = frontDB;
    let searchId = searchInput;

    if (searchInput.includes("emp")) {
      searchId = searchInput.split("emp");
    }

    if (searchInput) {
      filteredData = filteredData.filter((emp) =>
        filter !== "empId"
          ? emp[filter].toLowerCase().includes(searchInput.toLowerCase())
          : // console.log('filter id')
          searchInput.includes("emp")
          ? (emp.empID).toString().includes((searchInput.split("emp")[1]).toString())
          : (emp.empID).toString().includes((searchId).toString())
      );
    }

    if (filterOption === "empId" && (searchInput === "e" || searchInput === "em" || searchInput === "emp")) {
      filteredData = frontDB;
    }

  if (sort === "exp") {
    filteredData = [...filteredData].sort((a, b) => b.exp - a.exp);
  } else {
    filteredData = [...filteredData].sort((a, b) => new Date(a.doj) - new Date(b.doj));
  }


    props.setFilteredEmp(filteredData);
  };


  return (
    <div className="filter-bar">
      <Input action={<Dropdown button basic floating placeholder="Filter By" options={filterBy} value={filterOption} onChange={filterHandler} />} icon="search" iconPosition="left" value={input} onChange={(e) => searchHandler(e)} placeholder="Search here" />
      <div className="dropdown-container">
        <Dropdown button basic floating placeholder="Sort By" options={sortBy} value={sortOption} onChange={sortHandler} />
      </div>
    </div>
  );
};

export default EmployeeFilter;
