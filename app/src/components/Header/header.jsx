import './header.css'
function Header({ inputValue, onInputChange, onButtonClick }) {
  return (
    <div className='headerContainer'>
      <input
        type="text"
        value={inputValue}
        onChange={onInputChange}
        placeholder="Type something..."
      />
      <button onClick={onButtonClick}>Submit</button>
    </div>
  );
}

export default Header;
