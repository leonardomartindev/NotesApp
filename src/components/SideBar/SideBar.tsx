import React, { useContext, useMemo, useState } from "react";

import {
  Li,
  Navigation,
  NewNoteButton,
  PlusIcon,
  RecoilSidebarIcon,
  SideBarContainer,
  TopSideBar,
  Ul,
  StyledLink,
  Line,
  TagsContainer,
  TagsTitle,
  TagInput,
  TagForm,
  TagBtn,
  TagsList,
  Tag,
  DeleteTag,
  CategoryContainer,
  CategoryTitle,
  Category,
  DelCategoryIcon,
  CategoriesList,
  ModalSettings,
  OptionsModal,
  OptionModal,
  CategoryInput,
  AddNewCategoryIcon,
  ElementsSideBarContainer,
  NoteContainer,
  NoteIcon,
  NoteTitle,
} from "./SideBar.style";
import { ThemeContext } from "../../context/ThemeContext";
import { SideBarContext } from "../../context/AssideVisibledContext";
import { TagsContext } from "../../context/TagsContext";
import { CategoriesContext } from "../../context/CategoryContext";
import { NotesContext } from "../../context/NotesContext"; // Importação do contexto de Notas
import { RiInboxFill, RiFileList2Fill } from "react-icons/ri";
import { FaStar, FaTrash, FaMoon } from "react-icons/fa";
import { IoArchiveSharp } from "react-icons/io5";
import SwitchToggle from "./SwitchToggle";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { FaFolderPlus } from "react-icons/fa";
import { FaFolderMinus } from "react-icons/fa6";

export default function SideBar() {
  const { sideBarVisibled, changeSideBar } = useContext(SideBarContext);
  const { labelSwitch, theme } = useContext(ThemeContext);
  const { tags, addTag, deleteTag } = useContext(TagsContext);
  const { categories, deleteCategory, addCategory } = useContext(CategoriesContext);
  const { state, dispatch } = useContext(NotesContext); // Utilizando o contexto de Notas

  const menuItems = useMemo(
    () => [
      { to: "/", icon: <RiInboxFill />, label: "Inbox" },
      { to: "/todas", icon: <RiFileList2Fill />, label: "Todas Notas" },
      { to: "/favoritas", icon: <FaStar />, label: "Favoritas" },
      { to: "/arquivadas", icon: <IoArchiveSharp />, label: "Arquivadas" },
      { to: "/lixeira", icon: <FaTrash />, label: "Lixeira" },
      { icon: theme === "light" ? <FaMoon /> : <MdOutlineWbSunny /> },
    ],
    [theme]
  );

  const [tagIsOpen, setTagIsOpen] = useState(false);
  const [categoryStates, setCategoryStates] = useState<{
    [key: string]: boolean;
  }>({});
  const [categoriesIsOpen, setCategoriesIsOpen] = useState(false);

  const [contextMenu, setContextMenu] = useState<{
    visible: boolean;
    x: number;
    y: number;
    category: string | null;
  }>({
    visible: false,
    x: 0,
    y: 0,
    category: null,
  });

  const toggleTagOpen = () => {
    setTagIsOpen(!tagIsOpen);
  };

  const toggleCategoryOpen = (category: string) => {
    setCategoryStates((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  const handleRightClick = (event: React.MouseEvent, category: string) => {
    event.preventDefault();
    setContextMenu({
      visible: true,
      x: event.pageX,
      y: event.pageY,
      category,
    });
  };

  const handleCloseContextMenu = () => {
    setContextMenu({ ...contextMenu, visible: false });
  };

  const [newTag, setNewTag] = useState("");

  const handleAddTag = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTag.trim() !== "") {
      if (tags.includes(newTag.trim())) {
        alert("Essa tag já existe!");
      } else {
        addTag(newTag.trim());
        setNewTag("");
      }
    }
  };

  const handleDeleteTag = (tag: string) => {
    deleteTag(tag);
  };

  const handleDeleteCategory = (tag: string) => {
    deleteCategory(tag);
  };

  const [categoryInput, setCategoryInput] = useState(false);

  const showInput = () => {
    setCategoryInput(!categoryInput);
  };

  const [categoryValue, setCategoryValue] = useState("");

  const submitValueInput = (e: React.FormEvent) => {
    e.preventDefault();
    addCategory(categoryValue);
    setCategoryValue("");
    setCategoryInput(!categoryInput);
  };

  const id = Date.now();


const handleNewNote = (e: React.MouseEvent) => {
  e.preventDefault();
  const newNote = {
    id: `${id}`,
    title: "Nova Nota",
    description: "",
    content: "Escreva aqui sua nova nota!",
    tags: [],
    category: "",
    createdAt: new Date(),
    updatedAt: new Date(),
    favorite: false,
    archived: false,
    deleted: false,
  };
  dispatch({ type: "ADD_NOTE", payload: newNote });
};



  return (
    <SideBarContainer
      style={{ display: sideBarVisibled }}
      onClick={handleCloseContextMenu}
    >
      <ElementsSideBarContainer>
        <TopSideBar>
          <NewNoteButton onClick={handleNewNote}>
            <StyledLink to={`/note/${id}`}>
              <PlusIcon />
              <h1>Nova Nota</h1>
            </StyledLink>
          </NewNoteButton>
          <RecoilSidebarIcon onClick={changeSideBar} />
        </TopSideBar>
        <Navigation>
          <Ul>
            {menuItems.map(({ to, icon, label }, index) => (
              <Li key={label || index}>
                {to ? (
                  <StyledLink to={to}>
                    {icon}
                    {label}
                  </StyledLink>
                ) : (
                  <>
                    {icon}
                    <label>{labelSwitch}</label>
                    <SwitchToggle />
                  </>
                )}
              </Li>
            ))}
          </Ul>
        </Navigation>
        <Line />
        <TagsContainer>
          <TagsTitle onClick={toggleTagOpen}>
            <span>{tagIsOpen ? "▼" : "▶"}</span>
            <span>Tags</span>
          </TagsTitle>
          {tagIsOpen && (
            <>
              <TagForm onSubmit={handleAddTag}>
                <TagInput
                  type="text"
                  placeholder="Adicionar Tags"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                />
                <TagBtn type="submit">
                  <FaCheck />
                </TagBtn>
              </TagForm>
              <TagsList>
                {tags.map((tag, index) => (
                  <Tag key={index}>
                    {tag}
                    <DeleteTag onClick={() => handleDeleteTag(tag)} />
                  </Tag>
                ))}
              </TagsList>
            </>
          )}
        </TagsContainer>
        <Line />
        <CategoryContainer>
          <CategoryTitle>
            <div onClick={() => setCategoriesIsOpen(!categoriesIsOpen)}>
              <span>{categoriesIsOpen ? "▼" : "▶"}</span>
              <span>Categorias</span>
            </div>
            <AddNewCategoryIcon onClick={showInput} />
          </CategoryTitle>
          {categoryInput && (
            <form onSubmit={submitValueInput}>
              <CategoryInput
                onChange={(e) => setCategoryValue(e.target.value)}
              />
            </form>
          )}
          {categoriesIsOpen && (
            <CategoriesList>
              {categories.map((category, index) => (

                <Category
                  key={index}
                  onClick={() => toggleCategoryOpen(category)}
                  onContextMenu={(e) => handleRightClick(e, category)}
                >
                  <div>

                  <span>{categoryStates[category] ? "▼" : "▶"}</span>
                  <DelCategoryIcon />
                  {category}
                  </div>
                  {categoryStates[category] && (
                    <div>
                      {state.notes
                        .filter((note) => note.category === category)
                        .map((note) => (
                          <StyledLink key={index} to={`/note/${note.id}`}>
                          <NoteContainer key={note.id}>
                            <NoteIcon />
                            <NoteTitle>{note.title.slice(0, 25)}</NoteTitle>
                          </NoteContainer>
                            </StyledLink>
                        ))}
                    </div>
                  )}
                </Category>
              ))}
            </CategoriesList>
          )}
          {contextMenu.visible && (
            <ModalSettings
              style={{
                top: contextMenu.y,
                left: contextMenu.x,
              }}
            >
              <OptionsModal>
                <OptionModal onClick={showInput}>
                  <FaFolderPlus />
                  Nova Categoria
                </OptionModal>
                <OptionModal
                  onClick={() =>
                    handleDeleteCategory(`${contextMenu.category}`)
                  }
                >
                  <FaFolderMinus />
                  Deletar Categoria
                </OptionModal>
              </OptionsModal>
            </ModalSettings>
          )}
        </CategoryContainer>
      </ElementsSideBarContainer>
    </SideBarContainer>
  );
}
