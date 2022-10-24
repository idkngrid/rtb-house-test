import { Routes, Route } from "react-router-dom";

import { Home } from './pages/Home';
import { Info } from './pages/Info';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/orders" element={<Home />} />
            <Route path="/info" element={<Info />} />
        </Routes>
    )
}