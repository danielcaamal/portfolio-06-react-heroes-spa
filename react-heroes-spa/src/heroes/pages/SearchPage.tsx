import { FormEvent } from 'react';
import { HeroCard } from '../components/HeroCard';
import { useForm } from '../hooks/useForm';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { getHeroesByName } from '../helpers';


export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { formState, onInputChange } = useForm({ searchText: '' });
    const { searchText } = formState;

    const { q = '' } = queryString.parse(location.search);

    const heroes = getHeroesByName(q as string);
    const noHeroesFound = q !== '' && heroes.length === 0;

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchText.trim().length === 0) return;

        const url = `?q=${searchText}`;
        navigate(url, { replace: true });
    }

    return (
        <>
            <h1>Search Page</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <input
                            id="search-page-input"
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            value={searchText}
                            onChange={onInputChange}
                        />
                        <button
                            id="search-page-button"
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                            >Search...
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    { noHeroesFound && 
                        <div className="alert alert-danger animate__animated animate__fadeIn">
                            No results found with <b>{q}</b>
                        </div>
                    }
                    <div className='row d-flex justify-content-center animate__animated animate__fadeIn'>
                        {
                            heroes.map(hero => (
                                <HeroCard key={hero.id} hero={hero}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}