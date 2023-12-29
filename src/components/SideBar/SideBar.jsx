import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon, Menu } from 'semantic-ui-react';
import "./SideBar.scss"

const SideBar = (props) => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname.slice(1));

  const handleItemClick = (name) => {
    if (name !== activeItem) {
      setActiveItem(name === activeItem ? '' : name);
    }
  };

  return (
    <div className='sidebar'>

      {/* <Link to="/dashboard" > */ }
      {/* <div onClick={() => navigate("/dashboard") } className={ `menu-item ${activeItem === 'dashboard' ? 'active' : ''}` } >
          <Icon size='big' name='chart bar outline' />
          Dashboard
        </div> */}
      {/* </Link> */ }

      <Menu.Item
        className={ `menu-item ${activeItem === 'dashboard' ? 'active' : ''}` }
        as={ Link }
        name='dashboard'
        to='/dashboard'
        onClick={ () => handleItemClick('dashboard') }
      >
        <Icon size='big' name='chart bar outline' />
        Dashboard
      </Menu.Item>

      <Menu.Item
        className={ `menu-item ${activeItem === 'projects' ? 'active' : ''}` }
        as={ Link }
        name='projects'
        to='/projects'
        onClick={ () => handleItemClick('projects') }
      >
        <Icon size='big' name='laptop' />
        Projects
      </Menu.Item>

      <Menu.Item
        className={ `menu-item ${activeItem === 'leave' ? 'active' : ''}` }
        as={ Link }
        name='leave'
        to='/leave'
        onClick={ () => handleItemClick('leave') }
      >
        <Icon size='big' name='calendar check' />
        Leave
      </Menu.Item>

      <Menu.Item
        className={ `menu-item ${activeItem === 'account' ? 'active' : ''}` }
        as={ Link }
        name='account'
        to='/account'
        onClick={ () => handleItemClick('account') }
      >
        <Icon size='big' name='user circle' />
        Account
      </Menu.Item>

      {props.showSideBar && <Menu.Item
        className={ `menu-item ${activeItem === 'logout' ? 'active' : ''}` }
        as={ Link }
        name='logout'
        to='/'
        onClick={ () => handleItemClick('logout') }
      >
        <Icon size='big' name='sign-out alternate' />
        Logout
      </Menu.Item>}
    </div>
  );
};

export default SideBar;
