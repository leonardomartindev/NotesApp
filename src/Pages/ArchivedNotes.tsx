import { useContext, useState } from "react";
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

export default function ArchivedNotes() {
  const { state } = useContext(NotesContext);
  const [gridView, setGridView] = useState<boolean>(true);
  const [expandedNoteId, setExpandedNoteId] = useState<string | null>(null);

  const toggleView = () => {
    setGridView(!gridView);
  };

  const handleMouseEnter = (id: string) => {
    setExpandedNoteId(id);
  };

  const handleMouseLeave = () => {
    setExpandedNoteId(null);
  };

  return (
    <MainContainer>
      <TopRecoilIcon>
        <OptionQuickNotes />
      </TopRecoilIcon>
      <h1>Notas Arquivadas</h1>
      {state.archivedNotes.length > 0 ? (
        <ItemsContainer>
          <ChangeViewContainer onClick={toggleView}>
            {gridView ? <GridView /> : <ListView />}
            <ChangeViewDescription>
              Visualização de Grade
            </ChangeViewDescription>
          </ChangeViewContainer>
          <Line />
          <CardsContainer $view={gridView.toString()}>
          {state.archivedNotes.map((note, index) => (
              <StyledLink key={index} to={`/note/${note.id}`}>
                {gridView ? (
                  <Card>
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
                    <Footer>
                      <DeleteIcon />
                    </Footer>
                  </Card>
                ) : (
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
                )}
              </StyledLink>
            ))}
          </CardsContainer>
        </ItemsContainer>
      ) : (
        <NotFoundNotes />
      )}
    </MainContainer>
  );
}
