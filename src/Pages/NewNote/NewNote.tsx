import { useContext, useState } from "react";
import CreatableSelect from "react-select/creatable";

import {
  OptionCloseNote,
  OptionCloseQuickNotes,
  OptionDelNote,
  OptionFavoriteNote,
  OptionOpenQuickNotes,
  PageLine,
  PageOptions,
  PageTop,
  TitleContainer,
} from "../Pages.style";
import { SideBarContext } from "../../context/AssideVisibledContext";
import {
  ContainerNewNote,
  Content,
  Description,
  Selectors,
  Titulo,
} from "./NewNote.style";
import { TagsContext } from "../../context/TagsContext";
import { ThemeContext } from "../../context/ThemeContext";
import { CategoriesContext } from "../../context/CategoryContext"; // Import CategoriesContext
import { NotesContext } from "../../context/NotesContext";

type OptionType = { value: string; label: string };

export default function NewNote() {
  const { tags, addTag } = useContext(TagsContext);
  const { categories, addCategory } = useContext(CategoriesContext); // Use CategoriesContext
  const [selectedTags, setSelectedTags] = useState<OptionType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<OptionType | null>(
    null
  ); 
  
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

  const { changeQuickNotesBar, quickNotesBarVisibled } =
    useContext(SideBarContext);

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const { theme } = useContext(ThemeContext); // Acessando o tema atual

  const SubmitForm = (e: React.MouseEvent) =>{ 
    e.preventDefault()
    // console.log("CATEGORIAS:", selectedCategory.value)
    // console.log("TAGS:", selectedTags.map(e => e.value))
    // console.log("TITLE:", title)
    // console.log("DESCRIPTION:", description)
    // console.log("CONTENT:", content)
  }

  const { dispatch } = useContext(NotesContext);

  const handleNewNote = (e: React.MouseEvent) => {
    e.preventDefault()
    const newNote = {
      id: `${Date.now()}`, // ID único baseado na timestamp atual
      title: title ? title : "Titulo",
      description: description ? description : "Sem descrição",
      content: `${content.slice(0, 70)}...`,
      tags: selectedTags.map(e => e.value),
      category: selectedCategory ? selectedCategory.value : "",
      createdAt: new Date(),
      updatedAt: new Date(),
      favorite: false,
      archived: false,
      deleted: false,
    };
    dispatch({ type: "ADD_NOTE", payload: newNote });
    setTitle("")
    setDescription("")
    setContent("")
    setSelectedTags([])
    setSelectedCategory(null)
  };

  return (
    <ContainerNewNote>
      <button onClick={SubmitForm}>ENVIAR 1</button>
      <button onClick={handleNewNote}>ENVIAR</button>
      <PageTop>
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
                display:"flex",
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
        <PageOptions>
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
        <Titulo
          placeholder="Titulo"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
        <Description
          placeholder="Descrição da nota"
          value={description}
          onChange={(e) => setDescription(e.currentTarget.value)}
        />
      </TitleContainer>
      <PageLine />
      <Content
        placeholder="Escreva aqui sua nota!"
        value={content}
        onChange={(e) => setContent(e.currentTarget.value)}
      />
    </ContainerNewNote>
  );
}
