import { useContext } from "react";
import OptionQuickNotes from "../../components/OptionQuickNotes/OptionQuickNotes";
import {
  Div,
  ItemList,
  ListTrashNotes,
  NoteDel,
  NoteIcon,
  NoteTitle,
  NoteUndo,
  TopRecoilIcon,
  TrashContainer,
} from "./TrashNotes.style";
import { NotesContext } from "../../context/NotesContext";

export default function Inbox() {
  const { state, dispatch } = useContext(NotesContext);

  const handleUndo = (id: string) => {
    dispatch({ type: "RESTORE_NOTE", payload: id });
  };

  const handleDeleteForever = (id: string) => {
    dispatch({ type: "DELETE_FOREVER", payload: id });
  };

  return (
    <TrashContainer>
      <TopRecoilIcon>
        <OptionQuickNotes />
      </TopRecoilIcon>

      <h1>Lixeira</h1>

      <ListTrashNotes>
        {state.trash.map((e, index) => (
          <ItemList key={index}>
            <Div>
              <NoteIcon />
              <NoteTitle>{e.title}</NoteTitle>
            </Div>
            <Div>
              <NoteUndo onClick={() => handleUndo(e.id)} />
              <NoteDel onClick={() => handleDeleteForever(e.id)} />
            </Div>
          </ItemList>
        ))}
      </ListTrashNotes>
    </TrashContainer>
  );
}
