import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import Inbox from "./Pages/InboxNotes";
import AllNotes from "./Pages/AllNotes";
import FavoritesNotes from "./Pages/FavoritesNotes";
import ArchivedNotes from "./Pages/ArchivedNotes";
import TrashNotes from "./Pages/TrashPage/TrashNotes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SideBarProvider } from "./context/AssideVisibledContext";
import { TagsProvider } from "./context/TagsContext";
import { CategoriesProvider } from "./context/CategoryContext";
import NoteDetail from "./Pages/NoteDetail";
import { NotesProvider } from "./context/NotesContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Inbox /> },
      { path: "todas", element: <AllNotes /> },
      { path: "favoritas", element: <FavoritesNotes /> },
      { path: "arquivadas", element: <ArchivedNotes /> },
      { path: "lixeira", element: <TrashNotes /> },
      { path: "note/:id", element: <NoteDetail /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CategoriesProvider>
      <NotesProvider>
        <TagsProvider>
          <ThemeProvider>
            <SideBarProvider>
              <RouterProvider router={router} />
            </SideBarProvider>
          </ThemeProvider>
        </TagsProvider>
      </NotesProvider>
    </CategoriesProvider>
  </React.StrictMode>
);
