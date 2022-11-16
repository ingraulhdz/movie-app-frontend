import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/img/logo.svg";
import search from '../assets/img/search.svg';
import arrow_drop from '../assets/img/arrow_drop.svg'
import fav from '../assets/img/fav.svg'
import { fetchCategories } from "../reducks/categories/operations";
import { getCategories } from "../reducks/categories/selectors";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

  const categories = useSelector(getCategories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);


  return (
    <section id="header">
    <header className="header">
      <Link to='/'>
      <img src={logo} className="logo"/>
      </Link>
  

    <nav>
        <ul>
            <li className="input-icon">
                <img src={search} />
                <input type="text"/>
            </li>
            <li>
                <Link to="/categories">Categories <img src={arrow_drop} className="nav-icon"/></Link>
                <div className="dropdown">
                    <ul>
                      {categories.map((category) => (
<li><Link to={'/category/'+category.id}> {category.name} </Link></li>
                      ))}                       

                    </ul>
                </div>
            </li>
            <li><Link to="/favs">Favorites <img src={fav} className="nav-icon"/></Link></li>

        </ul>
    </nav>

</header>
</section>

  );
};

export default Header;
