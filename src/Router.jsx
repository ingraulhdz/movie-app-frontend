import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home'
import Favs from './components/Favs'
import Categories from './components/Categories'
import CategoryPage from './components/CategoryPage';


const Router = () => {
    return (
        <>            
        <Header />
<main className='container'>
     <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favs" element={<Favs />} />
            <Route path="/categories" element={<Categories />} />
             <Route path="/category/:id" element={<CategoryPage />} /> 
        </Routes>        

</main>
         
         <Footer />
         
        </>
      
    );
};
export default Router;
