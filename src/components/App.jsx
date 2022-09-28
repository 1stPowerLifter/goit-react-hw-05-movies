import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import {Home} from "./Home/Home";
import { Movies } from "./Movies/Movies";
import { MovieDetails } from "./MovieDetails/MovieDetails";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            {/* <Route path="cast " element={<Cast />} />
            <Route path="reviews" element={<Reviews />} /> */}
          </Route>
        
        
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
       
      <GlobalStyle />
    </>
  )
}
