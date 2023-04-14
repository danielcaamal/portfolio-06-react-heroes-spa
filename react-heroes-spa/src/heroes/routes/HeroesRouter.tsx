import { Navbar } from '../../common/components/Navbar';
import { DCPage, HeroPage, MarvelPage, SearchPage } from '../pages';
import { Navigate, Route, Routes } from 'react-router-dom';

export const HeroesRouter = () => {
    return (
        <>
            <Navbar />
            <div className='container'>
                <Routes>
                    <Route path="/marvel" element={<MarvelPage />} />
                    <Route path="/dc" element={<DCPage />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/hero/:heroId" element={<HeroPage />} />
                    <Route path="/" element={< Navigate to='/marvel'/>} />
                </Routes>
            </div>
        </>
    )
}