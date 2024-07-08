import { useContext, useState, useEffect } from "react";
import { NotesContext } from "../context/NotesContext";
import { useParams } from "react-router-dom";
import {
  OptionCloseNote,
  OptionCloseQuickNotes,
  OptionDelNote,
  OptionEditQuickNotes,
  OptionFavoriteNote,
  OptionLockQuickNotes,
  OptionOpenQuickNotes,
  PageContainer,
  PageContent,
  PageDescription,
  PageLine,
  PageOptions,
  PageTag,
  PageTags,
  PageTitle,
  PageTop,
  TitleContainer,
} from "./Pages.style";
import { SideBarContext } from "../context/AssideVisibledContext";
import { TagsContext } from "../context/TagsContext";
import { CategoriesContext } from "../context/CategoryContext";
import CreatableSelect from "react-select/creatable";
import { ThemeContext } from "../context/ThemeContext";
import { Selectors } from "./NewNote/NewNote.style";

type OptionType = { value: string; label: string };

export default function NoteDetail() {
  const { state, dispatch } = useContext(NotesContext);
  const { id } = useParams();
  const note = state.notes.find((note) => note.id === id);
  const { changeQuickNotesBar, quickNotesBarVisibled } = useContext(SideBarContext);

  const [newTitle, setNewTitle] = useState<string>(note ? note.title : "");
  const [newDescription, setNewDescription] = useState<string>(note ? note.description : "");
  const [newContent, setNewContent] = useState<string>(note ? note.content : "");
  const [noteEditable, setNoteEditable] = useState(false);

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
    }
  }, [note]);

  useEffect(() => {
    handleEditNote();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newTitle, newDescription, newContent, selectedTags, selectedCategory]);

  const handleEditNote = () => {
    if (note) {
      const updatedNote = {
        ...note,
        title: newTitle,
        description: newDescription,
        content: newContent,
        tags: selectedTags.map(e => e.value),
        category: selectedCategory ? selectedCategory.value : "",
        updatedAt: new Date(),
      };
      dispatch({ type: "UPDATE_NOTE", payload: updatedNote });
    }
  };

  const handleTagChange = (newValue: readonly OptionType[]) => {
    const mutableTags = newValue.map((option) => ({ ...option }));
    const newTags = newValue.map((option: OptionType) => option.value);
    setSelectedTags(mutableTags);

    if (newValue) {
      newTags.forEach((tag) => {
        if (!tags.includes(tag)) {
          addTag(tag);
        }
      });
    }
  };

  const handleCategoryChange = (newValue: OptionType | null) => {
    setSelectedCategory(newValue);
    if (newValue && !categories.includes(newValue.value)) {
      addCategory(newValue.value);
    }
  };

  const toggleNoteEditable = () => {
    setNoteEditable(!noteEditable);
  };

  return (
    <>
      {note ? (
        <PageContainer>
          <PageTop>
            {noteEditable && (
              <Selectors>
                <CreatableSelect
                  placeholder="Tags:"
                  id="tags"
                  isMulti={true}
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
            )}

            {note.tags && (
              <PageTags>
                {note.tags.map((el, index) => (
                  <PageTag key={index}>{el}</PageTag>
                ))}
              </PageTags>
            )}

            <PageOptions>
              {noteEditable ? (
                <OptionLockQuickNotes onClick={toggleNoteEditable} />
              ) : (
                <OptionEditQuickNotes onClick={toggleNoteEditable} />
              )}
              <OptionDelNote />
              <OptionFavoriteNote />
              <OptionCloseNote />
              {quickNotesBarVisibled === "flex" ? (
                <OptionCloseQuickNotes onClick={changeQuickNotesBar} />
              ) : (
                <OptionOpenQuickNotes onClick={changeQuickNotesBar} />
              )}
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
            />
          </TitleContainer>
          <PageLine />
          <PageContent
            onChange={(e) => setNewContent(e.currentTarget.value)}
            value={newContent}
            disabled={!noteEditable}
          />
        </PageContainer>
      ) : (
        <p>Nota não encontrada</p>
      )}
    </>
  );
}
