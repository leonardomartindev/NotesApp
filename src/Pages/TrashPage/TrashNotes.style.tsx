import styled from "styled-components";
import { FaTrash, FaUndoAlt, FaStickyNote } from "react-icons/fa";

export const TrashContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;
export const ListTrashNotes = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  padding-right: 2rem;
  font-size: 1.8rem;
  font-weight: bold;
`;
export const ItemList = styled.li`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  padding: 0;
  margin: 0;
`;
export const NoteIcon = styled(FaStickyNote)`
  font-size: 2rem;
`;
export const NoteTitle = styled.p``;
export const NoteUndo = styled(FaUndoAlt)`
  font-size: 2rem;
  cursor: pointer;
`;
export const NoteDel = styled(FaTrash)`
  font-size: 2rem;
  cursor: pointer;

`;
export const Div = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const TopRecoilIcon = styled.div`
    font-size: 3rem;
    position: absolute;
    right: 1rem;
    top: 1rem;
`
