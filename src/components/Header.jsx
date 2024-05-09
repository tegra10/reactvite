import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <>
         <ul>
         <li><Link to='/'>Accueil</Link></li>
         <li><Link to='/About'>À propos</Link></li>
         <li><Link to='/carte'>Vos achats</Link></li>
         <li><Link to='/comment'>Commentaires</Link></li>
         </ul>
        </>
    );
};

export default Header;