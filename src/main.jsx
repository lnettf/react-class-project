import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import { ProductList } from "./components/ProductList";
import { PRODUCTS_LIST } from "./assets/products";
import { UseEffectExercises } from "./exercises/use-effect/UseEffectExercises";
import { RouterExercises } from "./exercises/react-router/RouterExercises";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* BrowserRouter envuelve TODA la app: sin él, Link/useParams/... no funcionan */}
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ProductList products={PRODUCTS_LIST} />
              <UseEffectExercises />
            </>
          }
        />
        {/* El "/*" deja que RouterExercises tenga sus propias rutas dentro */}
        <Route path="/router/*" element={<RouterExercises />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
