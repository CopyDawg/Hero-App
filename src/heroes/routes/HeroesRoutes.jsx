import { Navigate, Route, Routes } from 'react-router-dom';
import { DC, Hero, Marvel, Search } from '../pages';
import { Navbar } from '../../ui';

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar/>

            <div className='container' >
                <Routes>
                    <Route path='marvel' element={ <Marvel/> } />
                    <Route path='dc' element={ <DC/> } />

                    <Route path='search' element={ <Search/> } />
                    <Route path='hero/:id' element={ <Hero/> } />

                    <Route path='/' element={ <Navigate to="marvel"/> } />
                </Routes>
            </div>
        </>
    )
}
