import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";
import { IoFilter } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaSadCry } from "react-icons/fa";

export const QuickNotesContainer = styled.div<{ visible: string }>`
  background-color: ${({ theme }) => theme.secondary};
  width: 20vw;
  flex-direction: column;
  gap: 3rem;
  padding: 2rem 4rem 2rem 2rem;
  display: ${({ visible }) => (visible === "true" ? "flex" : "none")};
  user-select: none;

`;
export const TopOptions = styled.div`
  display: flex;
  gap: 1.5rem;
  font-size: 2.5rem;
`;

export const SearchNotesContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.body};
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  border-radius: 6px;
  width: 100%;
`;
export const SearchIcon = styled(IoIosSearch)`
  cursor: pointer;
`;
export const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
`;

export const NotesFilterIcon = styled(IoFilter)`
  background-color: ${({ theme }) => theme.body};
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 200ms ease;

  &:hover {
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.body};
  }
`;

export const CardNotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
export const CardNote = styled.div`
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  min-width: 100%;
  padding:  1rem;
`;
export const CardNoteTitle = styled.h3`
  font-size: 2rem;
`;
export const CardNoteLine = styled.div`
  width: 80%;
  height: 0.2px;
  opacity: 0.3;
  background-color: ${({ theme }) => theme.text};
  margin: auto;
`;



export const CardNoteContent = styled.p`
  font-size: 1.8rem;
  opacity: 0.7;
  word-wrap: break-word; /* Garante a quebra de linha */
`;
export const CardNoteTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 1.4rem;
  font-weight: bold;
  padding-top: 2rem;
`;
export const CardNoteTag = styled.div`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.body};
  border-radius: 8px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const FilterMenu = styled.div`
  position: absolute;
  right: 2rem;
  top: 7rem;
  background: ${({ theme }) => theme.body};
  border: solid 1px ${({ theme }) => theme.secondaryText};
  border-radius: 6px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  z-index: 5;
  min-width: 120px;
`;

export const FilterMenuUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  gap: 1rem;
  font-size: 2rem;
`;
export const FilterMenuLi = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.secondaryText};
    color: ${({ theme }) => theme.body};
    border-radius: 4px;
  }
`;

export const ShowAllLi = styled.li`
  font-weight: 800;

  &:hover {
    background-color: ${({ theme }) => theme.secondaryText};
    color: ${({ theme }) => theme.body};
    border-radius: 4px;
    font-weight: normal;

  }
`

export const NotFoundTagsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
`;
export const NotFoundTagsIcon = styled(FaSadCry)`
  font-size: 10rem;
`;
