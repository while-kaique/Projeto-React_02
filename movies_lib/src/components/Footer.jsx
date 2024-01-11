import {FaLinkedin, FaGithub} from 'react-icons/fa'
import './Footer.css'

function Footer () {
    return (
    <footer className='footer'>
        <ul className='social_list'>
            <li><a href="https://github.com/while-kaique">
                <FaGithub />
            </a></li>
            <li><a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/kaique-breno-246a13227/">
                <FaLinkedin />
            </a></li>
        </ul>
        <p className='copy_right'><span>Costs</span> &copy; 2021</p>
    </footer>
    )
}

export default Footer