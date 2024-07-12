  
import { useContext, useState } from "react";
import OptionQuickNotes from "../../components/OptionQuickNotes/OptionQuickNotes";
import { TopRecoilIcon } from "../TrashPage/TrashNotes.style";
import {
  ChangeViewContainer,
  ChangeViewDescription,
  GridView,
  EditFavoriteNoteIcon,
  FavoritesContainer,
  FavoritesNotesCard,
  FavoritesNotesContainer,
  FavoritesNoteTag,
  FavoritesNotesTags,
  HeaderCard,
  Line,
  TitleFavoriteNote,
  FavoriteNoteContent,
  Footer,
  DellFavoriteNote,
  MainContainer,
  ListViewContainer,
  ListFavoriteNotes,
  NoteIcon,
  ListView,
  ContentListView,
  ContentListViewContainer,
  TopFavoriteContainerList,
  TagsView,
  TagsViewContainer,
} from "../FavoritePage/FavoritesPage.style";
import { NotesContext } from "../../context/NotesContext";
import { StyledLink } from "../../components/QuickNotesBar/QuickNotesBar.style";

export default function ArchivedNotes() {
  const { state } = useContext(NotesContext);
  const [gridView, setGridView] = useState<boolean>(true);
  const [expandedNoteId, setExpandedNoteId] = useState<string | null>(null);

  const ToggleView = () => {
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

      <FavoritesContainer>
        <ChangeViewContainer onClick={ToggleView}>
          {gridView ? <GridView /> : <ListView />}
          <ChangeViewDescription>Visualização de Grade</ChangeViewDescription>
        </ChangeViewContainer>
        <Line />
        <FavoritesNotesContainer view={gridView}>
          {state.archivedNotes.map((e, i) => (
            <StyledLink key={i} to={`/note/${e.id}`}>
              {gridView ? (
                <FavoritesNotesCard>
                  <HeaderCard>
                    <TitleFavoriteNote>{e.title.slice(0, 25)}</TitleFavoriteNote>
                    <EditFavoriteNoteIcon />
                  </HeaderCard>
                  <FavoritesNotesTags>
                    {e.tags.map((e) => (
                      <FavoritesNoteTag key={e}>{e}</FavoritesNoteTag>
                    ))}
                  </FavoritesNotesTags>
                  <FavoriteNoteContent>{e.content.slice(0, 250)}</FavoriteNoteContent>
                  <Footer>
                    <DellFavoriteNote />
                  </Footer>
                </FavoritesNotesCard>
              ) : (
                <ListViewContainer>
                  <ListFavoriteNotes
                    onMouseEnter={() => handleMouseEnter(e.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <TopFavoriteContainerList>
                      <NoteIcon />
                      <TitleFavoriteNote>{`${e.title.slice(0, 25)}...`}</TitleFavoriteNote>
                    </TopFavoriteContainerList>
                    <ContentListViewContainer expand={expandedNoteId === e.id}>
                      <ContentListView>{e.content}</ContentListView>
                      <TagsViewContainer>

                        {e.tags.map((e) => (
                          <TagsView>{e}</TagsView>
                        ))}
                        </TagsViewContainer>
                    </ContentListViewContainer>
                  </ListFavoriteNotes>
                </ListViewContainer>
              )}
            </StyledLink>
          ))}
        </FavoritesNotesContainer>
      </FavoritesContainer>
    </MainContainer>
  );
}
