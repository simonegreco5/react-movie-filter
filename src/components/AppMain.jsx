// sezione import
import { useState } from "react"
import filmList from "../assets/array.js"

export default function AppMain() {

    const [films, setFilms] = useState(filmList)

    return (
        <main>
            <div className="container">

                {/* filtraggio - bottone con dropdown */}
                

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