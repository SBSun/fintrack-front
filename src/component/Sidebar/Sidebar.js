import './Sidebar.css';

export default function Sidebar({ menus, activeIndex, onMenuClick }) {
  return (
    <div className='sidebar'>
      <ul>
        {menus.map((menu, index) => (
          <li
            key={index}
            className={activeIndex === index ? 'active' : ''}
            onClick={() => onMenuClick(index)}
          >
            {menu}
          </li>
        ))}
      </ul>
    </div>
  );
}
