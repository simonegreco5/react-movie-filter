// sezione import
import { useEffect, useState } from "react"
import filmList from "../assets/array.js"

export default function AppMain() {

    const [films, setFilms] = useState(filmList)
    const [filtro, setFiltro] = useState(" ")

    useEffect(() => {
        if (filtro === " ") {
            setFilms(filmList);
        } else {
            const filteredFilm = filmList.filter((film) => film.genere === filtro );
            setFilms(filteredFilm);
        }
    }, [filtro])

    return (
        <main>
            <div className="container">

                {/* filtraggio - bottone con dropdown o imput con search */}
                <select onChange={(e) => setFiltro(e.target.value)} className="form-select">
                    <option selected>scegli genere film</option>
                    <option value=" ">Tutti</option>
                    <option value="Fantascienza">Fantascienza</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Romantico">Romantico</option>
                    <option value="Azione">Azione</option>
                </select>

                {/* tabella film */}
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Film</th>
                            <th scope="col">Genere</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            films.map((item) => (
                                <tr key={item.id}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.title}</td>
                                    <td>{item.genere}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </main>
    )
}