import "./Header.css";

const Header = () => {
  return (
    <div className='app-header'>
      <div className='app-header-wrapper'>
        <img
          src=' https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
          alt='Instagram original logo'
        />
        <button className='text-button'>Logout</button>
        <div className='app-header-buttons'>
          <button className='primary-button'>Log in</button>
        </div>
        <button className='text-button'>Sign up</button>
      </div>
    </div>
  );
};

export default Header;
