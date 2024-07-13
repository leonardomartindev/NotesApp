import React, { createContext, useReducer, useEffect } from "react";
import { NotesAction, NotesState } from "../types/Index";

interface NotesProviderProps {
  children: React.ReactNode;
}

interface NotesContextType {
  state: NotesState;
  dispatch: React.Dispatch<NotesAction>;
}

export const NotesContext = createContext<NotesContextType>({
  state: {
    notes: [],
    archivedNotes: [],
    favoriteNotes: [],
    trash: [],
  },
  dispatch: () => {},
});

const notesReducer = (state: NotesState, action: NotesAction): NotesState => {
  switch (action.type) {
    case "ADD_NOTE": {
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    }
    case "UPDATE_NOTE": {
      const updatedNotes = state.notes.map((note) =>
        note.id === action.payload.id ? action.payload : note
      );

      const updatedFavoriteNotes = state.favoriteNotes.map((note) =>
        note.id === action.payload.id ? action.payload : note
      );

      return {
        ...state,
        notes: updatedNotes,
        favoriteNotes: updatedFavoriteNotes,
      };
    }
    case "FAVORITE_NOTE": {
      const noteToFavorite = state.notes.find((note) => note.id === action.payload);
      if (noteToFavorite) {
        return {
          ...state,
          notes: state.notes.filter((note) => note.id !== action.payload),
          favoriteNotes: [
            ...state.favoriteNotes,
            { ...noteToFavorite, favorite: true },
          ],
        };
      }
      return state;
    }
    case "UNFAVORITE_NOTE": {
      const noteToUnfavorite = state.favoriteNotes.find((note) => note.id === action.payload);
      if (noteToUnfavorite) {
        return {
          ...state,
          favoriteNotes: state.favoriteNotes.filter((note) => note.id !== action.payload),
          notes: [
            ...state.notes,
            { ...noteToUnfavorite, favorite: false },
          ],
        };
      }
      return state;
    }
    case "ARCHIVE_NOTE": {
      const noteToArchive = state.notes.find((note) => note.id === action.payload);
      if (noteToArchive) {
        return {
          ...state,
          notes: state.notes.filter((note) => note.id !== action.payload),
          archivedNotes: [
            ...state.archivedNotes,
            { ...noteToArchive, archived: true },
          ],
        };
      }
      return state;
    }
    case "UNARCHIVE_NOTE": {
      const noteToUnarchive = state.archivedNotes.find((note) => note.id === action.payload);
      if (noteToUnarchive) {
        return {
          ...state,
          archivedNotes: state.archivedNotes.filter((note) => note.id !== action.payload),
          notes: [
            ...state.notes,
            { ...noteToUnarchive, archived: false },
          ],
        };
      }
      return state;
    }
    case "DELETE_NOTE": {
      const noteToDelete =
        state.notes.find((note) => note.id === action.payload) ||
        state.archivedNotes.find((note) => note.id === action.payload);
      if (noteToDelete) {
        return {
          ...state,
          notes: state.notes.filter((note) => note.id !== action.payload),
          archivedNotes: state.archivedNotes.filter(
            (note) => note.id !== action.payload
          ),
          trash: [
            ...state.trash,
            { ...noteToDelete, deleted: true, deletedAt: new Date() },
          ],
        };
      }
      return state;
    }
    case "RESTORE_NOTE": {
      const noteToRestore = state.trash.find((note) => note.id === action.payload);
      if (noteToRestore) {
        return {
          ...state,
          trash: state.trash.filter((note) => note.id !== action.payload),
          notes: [
            ...state.notes,
            { ...noteToRestore, deleted: false, deletedAt: undefined },
          ],
        };
      }
      return state;
    }
    case "DELETE_FOREVER": {
      return {
        ...state,
        trash: state.trash.filter((note) => note.id !== action.payload),
      };
    }
    case "EMPTY_TRASH": {
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      return {
        ...state,
        trash: state.trash.filter(
          (note) => note.deletedAt && note.deletedAt > thirtyDaysAgo
        ),
      };
    }
    default:
      return state;
  }
};

export const NotesProvider: React.FC<NotesProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(notesReducer, {
    notes: [],
    archivedNotes: [],
    favoriteNotes: [],
    trash: [],
  }, (initialState) => {
    const savedState = localStorage.getItem("notesState");
    return savedState ? JSON.parse(savedState) : initialState;
  });

  useEffect(() => {
    localStorage.setItem("notesState", JSON.stringify(state));
  }, [state]);

  return (
    <NotesContext.Provider value={{ state, dispatch }}>
      {children}
    </NotesContext.Provider>
  );
};
