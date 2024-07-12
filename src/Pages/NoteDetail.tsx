import { useContext, useState, useEffect } from "react";
import { NotesContext } from "../context/NotesContext";
import { useParams } from "react-router-dom";
import {
  OptionArchiveNote,
  OptionDelNote,
  OptionEditQuickNotes,
  OptionFavoriteNote,
  OptionLockQuickNotes,
  OptionUnArchiveNote,
  OptionUnFavoriteNote,
  PageContainer,
  PageDescription,
  PageLine,
  PageOptions,
  PageTitle,
  PageTop,
  TitleContainer,
} from "./Pages.style";
import { TagsContext } from "../context/TagsContext";
import { CategoriesContext } from "../context/CategoryContext";
import CreatableSelect from "react-select/creatable";
import { ThemeContext } from "../context/ThemeContext";
import { Selectors } from "./NewNote/NewNote.style";
import NotFoundNotes from "./NoteFoundNotesPage/NotFoundNotes";
import OptionQuickNotes from "../components/OptionQuickNotes/OptionQuickNotes";
import AutoResizeTextarea from "../components/AutoResizeTextarea";

type OptionType = { value: string; label: string };

export default function NoteDetail() {
  const { state, dispatch } = useContext(NotesContext);
  const { id } = useParams();
  const note =
    state.notes.find((note) => note.id === id) ||
    state.favoriteNotes.find((note) => note.id === id) ||
    state.archivedNotes.find((note) => note.id === id);

  const [newTitle, setNewTitle] = useState<string>(note ? note.title : "");
  const [newDescription, setNewDescription] = useState<string>(
    note ? note.description : ""
  );
  const [newContent, setNewContent] = useState<string>(note ? note.content : "");
  const [noteEditable, setNoteEditable] = useState<boolean>(true);
  const [editing, setEditing] = useState<boolean>(false);

  const { tags, addTag } = useContext(TagsContext);
  const { categories, addCategory } = useContext(CategoriesContext);
  const [selectedTags, setSelectedTags] = useState<OptionType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<OptionType | null>(null);

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (note) {
      setNewTitle(note.title);
      setNewDescription(note.description);
      setNewContent(note.content);
      setSelectedTags(note.tags.map((tag) => ({ value: tag, label: tag })));
      setSelectedCategory(note.category ? { value: note.category, label: note.category } : null);
      // Set noteEditable based on whether the note is archived or not
      setNoteEditable(!state.archivedNotes.some((archivedNote) => archivedNote.id === note.id));
    }
  }, [note, state.archivedNotes]);

  useEffect(() => {
    if (editing) {
      if (
        note &&
        (newTitle !== note.title ||
          newDescription !== note.description ||
          newContent !== note.content ||
          JSON.stringify(selectedTags.map((e) => e.value)) !== JSON.stringify(note.tags) ||
          (selectedCategory ? selectedCategory.value : "") !== note.category)
      ) {
        handleEditNote();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editing, newTitle, newDescription, newContent, selectedTags, selectedCategory]);

  const handleEditNote = () => {
    if (note) {
      const updatedNote = {
        ...note,
        title: newTitle,
        description: newDescription,
        content: newContent,
        tags: selectedTags.map((e) => e.value),
        category: selectedCategory ? selectedCategory.value : "",
        updatedAt: new Date(),
      };
      dispatch({ type: "UPDATE_NOTE", payload: updatedNote });
    }
  };

  const handleTagChange = (newValue: readonly OptionType[]) => {
    const mutableTags = newValue.map((option) => ({ ...option }));
    setSelectedTags(mutableTags);

    newValue.forEach((tag) => {
      if (!tags.includes(tag.value)) {
        addTag(tag.value);
      }
    });
  };

  const handleCategoryChange = (newValue: OptionType | null) => {
    setSelectedCategory(newValue);

    if (newValue && !categories.includes(newValue.value)) {
      addCategory(newValue.value);
    }
  };

  const toggleNoteEditable = () => {
    // Only toggle noteEditable if the note is not archived
    if (!state.archivedNotes.some((archivedNote) => archivedNote.id === note?.id)) {
      setNoteEditable((prev) => !prev);
      setEditing((prev) => !prev);
    }
  };

  const handleDeleteNote = () => {
    if (note) {
      dispatch({ type: "DELETE_NOTE", payload: note.id });
    }
  };

  const handleFavoriteNote = () => {
    if (note) {
      dispatch({ type: "FAVORITE_NOTE", payload: note.id });
    }
  };

  const handleUnfavoriteNote = () => {
    if (note) {
      dispatch({ type: "UNFAVORITE_NOTE", payload: note.id });
    }
  };

  const handleArchiveNote = () => {
    if (note) {
      dispatch({ type: "ARCHIVE_NOTE", payload: note.id });
    }
  };

  const handleUnarchiveNote = () => {
    if (note) {
      dispatch({ type: "UNARCHIVE_NOTE", payload: note.id });
    }
  };


  return (
    <>
      {note ? (
        <PageContainer>
          <PageTop>
            <Selectors>
              <CreatableSelect
                placeholder="Tags:"
                id="tags"
                isMulti={true}
                isDisabled={!noteEditable}
                onChange={handleTagChange}
                options={tags.map((tag) => ({ value: tag, label: tag }))}
                value={selectedTags}
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    background: theme === "light" ? "#FFFFFF" : "#2C2A2B",
                    width: "auto",
                    color: state.isFocused ? "grey" : "red",
                    display: "flex",
                    flexWrap: "wrap",
                  }),
                  input: (baseStyles) => ({
                    ...baseStyles,
                    color: theme === "light" ? "#121212" : "#D6D6D6",
                  }),
                  dropdownIndicator: (baseStyles) => ({
                    ...baseStyles,
                    color: theme === "light" ? "#121212" : "#D6D6D6",
                  }),
                  placeholder: (baseStyles) => ({
                    ...baseStyles,
                    color: theme === "light" ? "#121212" : "#D6D6D6",
                    opacity: ".6",
                  }),
                  menuList: (baseStyles) => ({
                    ...baseStyles,
                    color: theme === "light" ? "#121212" : "#121212",
                  }),
                  menu: (baseStyles) => ({
                    ...baseStyles,
                    width: "auto",
                  }),
                  valueContainer: (baseStyles) => ({
                    ...baseStyles,
                    padding: "0 6rem 0 1rem",
                  }),
                }}
              />
              <CreatableSelect
                placeholder="Categorias:"
                isDisabled={!noteEditable}
                isClearable
                id="categories"
                isMulti={false}
                onChange={handleCategoryChange}
                options={categories.map((category) => ({
                  value: category,
                  label: category,
                }))}
                value={selectedCategory}
                styles={{
                  control: (baseStyles) => ({
                    ...baseStyles,
                    background: theme === "light" ? "#e4e4e4" : "#121212",
                    width: "auto",
                    color: theme === "light" ? "#D6D6D6" : "#121212",
                  }),
                  input: (baseStyles) => ({
                    ...baseStyles,
                    color: theme === "light" ? "#121212" : "#D6D6D6",
                  }),
                  placeholder: (baseStyles) => ({
                    ...baseStyles,
                    color: theme === "light" ? "#121212" : "#D6D6D6",
                    opacity: ".6",
                  }),
                  menuList: (baseStyles) => ({
                    ...baseStyles,
                    color: theme === "light" ? "#121212" : "#121212",
                  }),
                  menu: (baseStyles) => ({
                    ...baseStyles,
                    width: "auto",
                  }),
                  valueContainer: (baseStyles) => ({
                    ...baseStyles,
                    color: theme === "light" ? "#121212" : "#D6D6D6",
                  }),
                  singleValue: (baseStyles) => ({
                    ...baseStyles,
                    color: theme === "light" ? "#121212" : "#D6D6D6",
                    fontSize: "1.6rem",
                    fontWeight: "500",
                  }),
                  dropdownIndicator: (baseStyles) => ({
                    ...baseStyles,
                    color: theme === "light" ? "#121212" : "#D6D6D6",
                  }),
                  clearIndicator: (baseStyles) => ({
                    ...baseStyles,
                    color: theme === "light" ? "#121212" : "#D6D6D6",
                  }),
                  indicatorSeparator: (baseStyles) => ({
                    ...baseStyles,
                    color: theme === "light" ? "#121212" : "#D6D6D6",
                  }),
                }}
              />
            </Selectors>

            <PageOptions>
              {noteEditable ? (
                <OptionLockQuickNotes onClick={toggleNoteEditable} />
              ) : (
                <OptionEditQuickNotes onClick={toggleNoteEditable} />
              )}
              <OptionDelNote onClick={handleDeleteNote} />
              {!state.archivedNotes.some((archivedNote) => archivedNote.id === note.id) &&
                (state.favoriteNotes.some((favNote) => favNote.id === note.id) ? (
                  <OptionUnFavoriteNote onClick={handleUnfavoriteNote} />
                ) : (
                  <OptionFavoriteNote onClick={handleFavoriteNote} />
                ))}

              {state.archivedNotes.some((archivedNote) => archivedNote.id === note.id) ? (
                <OptionUnArchiveNote onClick={handleUnarchiveNote} />
              ) : (
                <OptionArchiveNote onClick={handleArchiveNote} />
              )}

              <OptionQuickNotes />
            </PageOptions>
          </PageTop>
          <TitleContainer>
            <PageTitle
              onChange={(e) => setNewTitle(e.currentTarget.value)}
              value={newTitle}
              disabled={!noteEditable}
            />
            <PageDescription
              onChange={(e) => setNewDescription(e.currentTarget.value)}
              value={newDescription}
              disabled={!noteEditable}
              placeholder="Descrição da nota aqui"
            />
          </TitleContainer>
          <PageLine />
          <AutoResizeTextarea
            content={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            editable={noteEditable}
          />

        </PageContainer>
      ) : (
        <NotFoundNotes />
      )}
    </>
  );
}
