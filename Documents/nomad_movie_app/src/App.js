import React from "react";
import axios from "axios";
import Movie from "./movie";
import "./movie.css";

class App extends React.Component {

    state = {
        isLoading: true,
        movies: []
    }

    render() {
        const {isLoading, movies} = this.state;
        return (
            <section class="container">
                {
                    isLoading
                        ? <div className="loader">
                            <span className="loader_text">loading</span>
                        </div>
                        : <div className="Movies">
                            {
                                movies.map(movie => {
                                    return <Movie
                                        key={movie.id}
                                        id={movie.id}
                                        year={movie.year}
                                        title={movie.title}
                                        summary={movie.summary}
                                        image={movie.medium_cover_image}
                                        genres={movie.genres}
                                        />
                                })
                            }

                        </div>
                }

            </section>
        )
    }

    getMovies = async () => {
        const {
            data: {
                data: {
                    movies
                }
            }
        } = await axios.get(
            "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by_=rating"
        );
        this.setState({movies, isLoading: false})

    }

    componentDidMount() {
        this.getMovies();

    }

}

export default App;

//https://yts-proxy.now.sh/list_movies.json