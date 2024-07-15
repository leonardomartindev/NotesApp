import { useContext, useState, useCallback } from "react";
import OptionQuickNotes from "../components/OptionQuickNotes/OptionQuickNotes";
import { TopRecoilIcon } from "./TrashPage/TrashNotes.style";
import {
  ChangeViewContainer,
  ChangeViewDescription,
  GridView,
  EditIcon,
  ItemsContainer,
  Card,
  CardsContainer,
  Header,
  Title,
  TagsContainer,
  Content,
  Footer,
  DeleteIcon,
  MainContainer,
  ListViewContainer,
  ListItem,
  NoteIcon,
  ListView,
  ContentListView,
  ContentListViewContainer,
  TopListContainer,
  TagView,
  TagsViewContainer,
  Line,
} from "./PagesTemplate";
import { NotesContext } from "../context/NotesContext";
import { StyledLink } from "../components/QuickNotesBar/QuickNotesBar.style";
import NotFoundNotes from "./NoteFoundNotesPage/NotFoundNotes";

export default function Inbox() {
  const { state, dispatch } = useContext(NotesContext);
  const [gridView, setGridView] = useState(true);
  const [expandedNoteId, setExpandedNoteId] = useState<string | null>(null);

  const toggleView = useCallback(() => {
    setGridView((prev) => !prev);
  }, []);

  const handleMouseEnter = useCallback((id: string) => {
    setExpandedNoteId(id);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setExpandedNoteId(null);
  }, []);

  const filteredNotes = state.notes.filter(
    (note) => note.category.length === 0
  );

  
  const handleDeleteNote = (id: string) => {
    dispatch({ type: "DELETE_NOTE", payload: id });
  };

  return (
    <MainContainer>
      <TopRecoilIcon>
        <OptionQuickNotes />
      </TopRecoilIcon>
      <h1>Inbox</h1>
      {filteredNotes.length > 0 ? (
        <ItemsContainer>
          <ChangeViewContainer onClick={toggleView}>
            {gridView ? <GridView /> : <ListView />}
            <ChangeViewDescription>
              Visualização de Grade
            </ChangeViewDescription>
          </ChangeViewContainer>
          <Line />

          <CardsContainer $view={gridView.toString()}>
            {filteredNotes.map((note) => (
              <>
                {gridView ? (
                  <Card>
                    <StyledLink key={note.id} to={`/note/${note.id}`}>
                    <Header>
                      <Title>{note.title.slice(0, 25)}</Title>
                      <EditIcon />
                    </Header>
                    <TagsContainer>
                      {note.tags.map((tag) => (
                        <TagView key={tag}>{tag}</TagView>
                      ))}
                    </TagsContainer>
                    <Content>{`${note.content.slice(0, 250)}...`}</Content>
                      </StyledLink>
                    <Footer>
                      <DeleteIcon onClick={() => handleDeleteNote(note.id)} />
                    </Footer>
                  </Card>
                ) : (
                  <StyledLink key={note.id} to={`/note/${note.id}`}>

                  <ListViewContainer>
                    <ListItem
                      onMouseEnter={() => handleMouseEnter(note.id)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <TopListContainer>
                        <NoteIcon />
                        <Title>{note.title}</Title>
                      </TopListContainer>
                      <ContentListViewContainer
                        $expand={(expandedNoteId === note.id).toString()}
                      >
                        <ContentListView>{note.content}</ContentListView>
                        <TagsViewContainer>
                          {note.tags.map((tag) => (
                            <TagView key={tag}>{tag}</TagView>
                          ))}
                        </TagsViewContainer>
                      </ContentListViewContainer>
                    </ListItem>
                  </ListViewContainer>
                  </StyledLink>
                )}
              </>
            ))}
          </CardsContainer>
        </ItemsContainer>
      ) : (
        <NotFoundNotes />
      )}
    </MainContainer>
  );
}
