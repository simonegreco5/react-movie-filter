// sezione import
import { useEffect, useState } from "react"
import filmList from "../assets/array.js"

export default function AppMain() {

    const initialFilm = {
        title: '',
        genere: ''
    }

    const [films, setFilms] = useState(filmList)
    const [filtro, setFiltro] = useState("")
    const [search, setSearch] = useState("")
    const [newFilm, setNewFilm] = useState(initialFilm)

    useEffect(() => {

        let filteredFilm = filmList

        if (filtro){
            filteredFilm = filmList.filter((film) => film.genere.toLowerCase() === filtro.toLowerCase());
            // setFilms(filteredFilm);
        } 

        if (search) {
            console.log('utente ha cercato:', search)
            filteredFilm = filteredFilm.filter((film) => film.title.toLowerCase().includes(search.toLowerCase()))
            // setFilms(filteredFilm)
        } 
        
        setFilms(filteredFilm) // centralizziamo setFilms(filteredFilm)

    }, [filtro, search])

    function submitFilm(e){
        e.preventDefault()

        const newItem = {
            id: Date.now(),
            title: newFilm.title,
            genere: newFilm.genere
        }

        setFilms([newItem, ...films])
    }

    function handleFormFilm(e){
        // altrimenti potevamo scrivere direttamente all'interno dei due input titolo e genere
        // onChange={(e) => setNewFilm(...newFilm, title: e.target.value)} 
        // onChange={(e) => setNewFilm(...newFilm, genere: e.target.value)}

        setNewFilm(
            {
              ...newFilm, 
              [e.target.name] : e.target.value  
            }
        )
    }


    return (
        <main>
            <div className="container">

                {/* aggiunta nuovo film */}
                <form className="row g-3 mt-5 mb-3" onSubmit={submitFilm}>

                    <div className="col-md-6">
                      <label htmlFor="inputTitle" className="form-label text-white">Titolo</label>
                      <input name="title" value={newFilm.title} onChange={handleFormFilm} type="text" className="form-control" id="inputTitle" placeholder=" write title here" />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="inputGender" className="form-label text-white">Genere</label>
                      <input name="genere" value={newFilm.genere} onChange={handleFormFilm} type="text" className="form-control" id="inputGender" placeholder="write gender here" />
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-danger">Aggiungi Film</button>
                    </div>

                </form>

                {/* filtraggio - con text */}
                <div className="mb-2">
                    <label htmlFor="Title" className="text-white">Cerca titolo</label>
                    <input className="ms-2 mb-2 rounded-1" type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="cerca per titolo" />
                </div>

                {/* filtraggio - bottone con dropdown o imput con search */}
                <select onChange={(e) => setFiltro(e.target.value)} className="form-select">
                    <option value="">Tutti</option>
                    <option value="Fantascienza">Fantascienza</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Romantico">Romantico</option>
                    <option value="Azione">Azione</option>
                </select>

                {/* tabella film */}
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Film</th>
                            <th scope="col">Genere</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            films.map((item) => (
                                <tr key={item.id}>
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