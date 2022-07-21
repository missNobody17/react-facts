import reactLogo from '../assets/react.svg'
import './Navbar.css'

export function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar--logo'>
                <img src={reactLogo} className="navbar--logo_image" alt="React logo" />
                <p className='navbar--logo_text'>ReactFacts</p>
            </div>
            <div>
                <p className='navbar--text'>React Course - Project 1</p>
            </div>
        </div>
    )
}