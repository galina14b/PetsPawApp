import { Routes, Route } from "react-router-dom";
import { lazy } from "react";


const Layout = lazy(() => import("./Layout/Layout"));
const HomePage = lazy(() => import("pages/HomePage/HomePage"));

const VotingPage = lazy(() => import("pages/VotingPage/VotingPage"));
const BreedsPage = lazy(() => import("pages/BreedsPage/BreedsPage"));
const BreedInfoPage = lazy(() => import("pages/BreedInfoPage/BreedInfoPage"));
const GalleryPage = lazy(() => import("pages/GalleryPage/GalleryPage"));

const SearchPage = lazy(() => import("pages/SearchPage/SearchPage"));
const FavouritePage = lazy(() => import("pages/FavoritesPage/FavoritesPage"));
const LikesPage = lazy(() => import("pages/LikesPage/LikesPage"));
const DislikesPage = lazy(() => import("pages/DislikesPage/DislikesPage"));

const ErrorPage = lazy(() => import("./ErrorPage/ErrorPage"));



export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="voting" element={<VotingPage />} />
          <Route path="breeds" element={<BreedsPage />} />
          <Route path="gallery" element={<GalleryPage />} />

          <Route path="/breeds/breed/:breedID" element={<BreedInfoPage />} />
          <Route path="breeds/search/:value" element={<SearchPage />} />
          
          <Route path="/breeds/favourite" element={<FavouritePage/>}/>
          <Route path="/breeds/dislikes" element={<DislikesPage/>}/>
          <Route path="/breeds/likes" element={<LikesPage />} />
          
          <Route path="*" element={<ErrorPage/>} />
        </Route>
        <Route />
      </Routes>
    </div>
  );
};
