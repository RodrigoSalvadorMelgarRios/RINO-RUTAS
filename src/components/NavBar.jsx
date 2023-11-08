
import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const NavBar = () => {
  return (
    <Nav>
      <div className="logo">Inicio</div>
      <div className="links">
        <Link to='/'>Inicio</Link>
        <Link to='/productos'>Productos</Link>
        <Link to='/pokemon'>Pokemon</Link>
        <Link to='/rick'>Rick and Morty</Link>
        <Link to='/movies'>Movies</Link>
      </div>
    </Nav>
  )
}


const Nav = styled.nav`
background-color: #eeeeee;
 position: sticky;
 top: 0;
 padding: 5px 20px ;
 border: 1px solid #000;
 display: flex;
 justify-content: space-between;

a{
  text-decoration: none;
  color: #000;
}

.logo{
  color: #000;
  font-size: 24px;
  font-weight: 700;
}

.links{
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

`;