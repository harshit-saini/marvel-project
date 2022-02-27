import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from "./components/Loading"

// lazy loading
const Home = lazy(() => import("./pages/Home"));
const Comics = lazy(() => import("./pages/Comics"));
const Creators = lazy(() => import("./pages/Creators"));
const CodeSplitCheck = lazy(() => import("./components/CodeSplitCheck"));


const App = () => {
  return (
    <>
      <Suspense fallback={<Loading text="Loading Page" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/creators" element={<Creators />} />
          <Route path="/split-check" element={<CodeSplitCheck />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App;
