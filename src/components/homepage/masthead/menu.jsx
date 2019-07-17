import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const MenuContent = ({ items, active }) => (
    <React.Fragment>
      {items.map( item => (
          <Menu.Item as={Link}
                     to={item.href}
                     name={item.name}
                     key={item.name}
                     active={item.name === active} />
      ))}
      <Menu.Item position="right">
        <Link to="https://www.github.com/weng-lab/logosj-package">
          <span style={{ verticalAlign: "middle" }}><Icon className="github" style={{ fontSize: "1.5em" }} />&nbsp;GitHub</span>
        </Link>
      </Menu.Item>
    </React.Fragment>
);

const MainMenu = ({ items, active, fixed }) => (
    <Menu pointing secondary inverted>
      <MenuContent items={items} active={active} />
    </Menu>
);
export default MainMenu;
