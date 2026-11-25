import { Route, Routes } from "react-router";
import { ProductList } from "./components/ProductList";
import { PRODUCTS_LIST } from "./assets/products";
import { UseEffectExercises } from "./exercises/use-effect/UseEffectExercises";
import { RouterExercises } from "./exercises/react-router/RouterExercises";
import { FormsExercises } from "./exercises/forms/FormsExercises";
import { CounterExample } from "./exercises/use-state/CounterExample";
import { MainLayout } from "./layouts/MainLayout";
import { HomePage } from "./pages/HomePage/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
// TODO (fase 1): importa el resto de páginas de ./pages cuando las vayas usando
// import { ProductsPage } from "./pages/ProductsPage/ProductsPage";
// import { ProductDetailPage } from "./pages/ProductDetailPage/ProductDetailPage";
// import { UsersPage } from "./pages/UsersPage/UsersPage";
// import { UserDetailPage } from "./pages/UserDetailPage/UserDetailPage";
// import { NewUserPage } from "./pages/NewUserPage/NewUserPage";

/*
  PROYECTO · MI TIENDA  (enunciado completo en docs/PROYECTO.md)

  Este fichero tiene TODAS las rutas de la aplicación:
    - Las de la TIENDA → las escribes tú (fase 1).
    - Las de los EJERCICIOS → ya están hechas, no hace falta tocarlas.

  Rutas de la tienda (todas dentro de <MainLayout />):
    /                         → <HomePage />
    /productos                → <ProductsPage />          (acepta ?q=)
    /productos/:productId     → <ProductDetailPage />
    /usuarios                 → <UsersPage />             (acepta ?q=)
    /usuarios/nuevo           → <NewUserPage />
    /usuarios/:userId         → <UserDetailPage />
    cualquier otra            → <NotFoundPage />

  Pistas:
  - Ruta "layout": <Route element={<MainLayout />}> SIN path, con las páginas dentro.
    MainLayout pinta la cabecera y un <Outlet /> donde aparece la página hija.
  - La página de inicio del layout es <Route index ... />.
  - ¿Choca "/usuarios/nuevo" con "/usuarios/:userId"? Pruébalo. React Router
    elige la ruta más específica, así que el orden da igual.
*/

export const App = () => {
  return (
    <Routes>
      {/* ───────── TIENDA ───────── */}
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        {/* TODO (fase 1): productos, detalle de producto, usuarios, nuevo usuario y detalle de usuario */}
      </Route>

      {/* ───────── EJERCICIOS (ya hechos) ───────── */}
      <Route
        path="/ejercicios/use-effect"
        element={
          <>
            <ProductList products={PRODUCTS_LIST} />
            <UseEffectExercises />
          </>
        }
      />
      <Route path="/ejercicios/use-state" element={<CounterExample />} />
      <Route path="/ejercicios/formularios" element={<FormsExercises />} />
      {/* El "/*" deja que RouterExercises tenga sus propias rutas dentro */}
      <Route path="/router/*" element={<RouterExercises />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
