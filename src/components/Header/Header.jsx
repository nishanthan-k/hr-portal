import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";
import { HrContext } from "../../contexts/HrContext/HrContext";
import empData from "../../assets/data/employeesData.json";
import SideBar from "../SideBar/SideBar";
import "./Header.scss";

const Header = () => {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(true);
  const [showSideBar, setShowSideBar] = useState(false);
  const [hrName, setHrName] = useState();
  // const [currentUser, setCurrentUser] = useState();
  const { hrId } = useContext(HrContext);

  console.log("called Header");

  useEffect(() => {
    // axios.post("http://192.168.1.196:8080/hr/showHrDetails", {
    //   hrId: hrId
    // })
    //   .then(res => setHrName(res.data.data.firstName))
    let hrDetails = empData.filter((emp) => emp.empID === hrId);
    // setCurrentUser(hrDetails);
    hrDetails = hrDetails[0];
    console.log("hrDetails", hrDetails);
    setHrName(hrDetails.firstName);
  }, [hrId]);

  const handleLogout = () => {
    history.push("/");
    setLoggedIn(false);
  };

  const toggleSideBar = () => setShowSideBar(!showSideBar);

  // let user = empData.employees.filter(emp => emp.userName === currentUser[0].username)

  return (
    <div className="header-container">
      <div className="header-content">
        <img className="hr-logo" src={require("../../assets/images/hr-icon.jpg")} alt="HR Logo" />
        <h2>Welcome {hrName}</h2>
        {/* {currentUser[0].username ? (
          // <h2>Welcome { user[0].firstName.toUpperCase() }</h2>
          <h2>Welcome {hrName}</h2>
        ) : (
          <h2>Welcome User</h2>
        )} */}
      </div>
      <div className="header-functions">
        {loggedIn ? (
          <div className="header-buttons">
            <div className="logout-btn">
              <Button content="Logout" onClick={handleLogout} />
            </div>
            {!showSideBar && (
              <div className="toggle-bar" onClick={toggleSideBar}>
                <Icon name="bars" size="big" className="toggle-icon" />
              </div>
            )}
          </div>
        ) : (
          <div>
            <Button content="Login" />
          </div>
        )}
        <div className={showSideBar ? "header-sidebar show" : "header-sidebar hide"}>
          <div className="close-icon">
            <Icon name="close" size="big" onClick={toggleSideBar} />
          </div>
          <SideBar showSideBar={showSideBar} />
        </div>
      </div>
    </div>
  );
};

export default Header;
