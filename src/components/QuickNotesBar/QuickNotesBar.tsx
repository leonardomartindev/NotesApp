import {
  CardNote,
  CardNoteContent,
  CardNoteLine,
  CardNoteTag,
  CardNoteTags,
  CardNoteTitle,
  CardNotesContainer,
  FilterMenu,
  FilterMenuLi,
  FilterMenuUl,
  NotFoundTagsContainer,
  NotFoundTagsIcon,
  NotesFilterIcon,
  QuickNotesContainer,
  SearchIcon,
  SearchInput,
  SearchNotesContainer,
  ShowAllLi,
  TopOptions,
} from "./QuickNotesBar.style";
import { NotesContext } from "../../context/NotesContext";
import { useContext, useState, useEffect, useRef } from "react";
import { StyledLink } from "../SideBar/SideBar.style";
import { TagsContext } from "../../context/TagsContext";

interface QuickNotesBarProps {
  $visible: string;
}

export const QuickNotesBar: React.FC<QuickNotesBarProps> = ({ $visible }) => {
  const { state } = useContext(NotesContext);
  const { tags } = useContext(TagsContext);
  const [searchText, setSearchText] = useState<string>("");
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState<boolean>(false);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const filterMenuRef = useRef<HTMLDivElement>(null);

  // Combina todas as notas, exceto as excluídas
  const allNotes = [
    ...state.notes,
    ...state.favoriteNotes,
    ...state.archivedNotes,
  ];

  const filteredNotes = allNotes.filter((note) => {
    const matchesTitle = note.title
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const matchesTag = selectedTag ? note.tags.includes(selectedTag) : true;
    return matchesTitle && matchesTag;
  });

  const handleClickOutside = (event: MouseEvent) => {
    if (
      filterMenuRef.current &&
      !filterMenuRef.current.contains(event.target as Node)
    ) {
      setIsFilterMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <QuickNotesContainer $visible={$visible}>
      <TopOptions>
        <SearchNotesContainer>
          <SearchIcon />
          <SearchInput
            type="text"
            placeholder="Pesquisar Notas"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </SearchNotesContainer>
        <NotesFilterIcon
          onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
        />
        {isFilterMenuOpen && (
          <FilterMenu ref={filterMenuRef}>
            <FilterMenuUl>
              <ShowAllLi onClick={() => setSelectedTag(null)}>
                Mostrar Todas
              </ShowAllLi>
              {tags.map((el, index) => (
                <FilterMenuLi key={index} onClick={() => setSelectedTag(el)}>
                  {el}
                </FilterMenuLi>
              ))}
            </FilterMenuUl>
          </FilterMenu>
        )}
      </TopOptions>
      <CardNotesContainer>
        {filteredNotes.length > 0 ? (
          filteredNotes.map((el, index) => (
            <StyledLink key={index} to={`/note/${el.id}`}>
              <CardNote>
                <CardNoteTitle>{el.title.slice(0, 25)}</CardNoteTitle>
                <CardNoteLine />
                <CardNoteContent>{`${el.content.slice(
                  0,
                  70
                )}...`}</CardNoteContent>
                <CardNoteTags>
                  {el.tags.map((tag, tagIndex) => (
                    <CardNoteTag key={tagIndex}>{tag}</CardNoteTag>
                  ))}
                </CardNoteTags>
              </CardNote>
            </StyledLink>
          ))
        ) : (
          <NotFoundTagsContainer>
            <h2>Nenhuma nota encontrada com esse conteúdo.</h2>
            <NotFoundTagsIcon />
          </NotFoundTagsContainer>
        )}
      </CardNotesContainer>
    </QuickNotesContainer>
  );
};
