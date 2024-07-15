import styled, { css } from "styled-components";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdDelete,
  MdOutlineStarBorder,
  MdOutlineStar,
  MdOutlineArchive,
  MdOutlineUnarchive,
} from "react-icons/md";
import { IoMdLock, IoMdUnlock } from "react-icons/io";

const breakpoints = {
  sm: "480px",
  md: "768px",
  lg: "1024px",
  xl: "1200px",
};

export const PageContainer = styled.form`
  width: 100%;
  padding: 2rem 1rem;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.md}) {
    padding: 1rem;
  }
`;

export const PageTop = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${breakpoints.md}) {
    align-items: center;
  }
`;

export const PageTags = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;

  @media (max-width: ${breakpoints.sm}) {
    font-size: 1.2rem;
  }
`;

export const PageTag = styled.div`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.body};
  border-radius: 8px;

  @media (max-width: ${breakpoints.sm}) {
    padding: 0.3rem 0.5rem;
  }
`;

export const PageOptions = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 2.6rem;

  @media (max-width: ${breakpoints.md}) {
    font-size: 2.2rem;
  }
`;

const optionStyle = css`
  cursor: pointer;
`;

export const OptionDelNote = styled(MdDelete)`
  ${optionStyle}
`;
export const OptionFavoriteNote = styled(MdOutlineStarBorder)`
  ${optionStyle}
`;
export const OptionUnFavoriteNote = styled(MdOutlineStar)`
  ${optionStyle}
`;
export const OptionArchiveNote = styled(MdOutlineArchive)`
  ${optionStyle}
`;
export const OptionUnArchiveNote = styled(MdOutlineUnarchive)`
  ${optionStyle}
`;
export const OptionCloseQuickNotes = styled(MdKeyboardDoubleArrowRight)`
${optionStyle}
@media (max-width: 1000px) {
    display: none;
  }
`;
export const OptionOpenQuickNotes = styled(MdKeyboardDoubleArrowLeft)`
  ${optionStyle}
  @media (max-width: 1000px) {
    display: none;
  }
`;
export const OptionEditQuickNotes = styled(IoMdLock)`
  ${optionStyle}
`;
export const OptionLockQuickNotes = styled(IoMdUnlock)`
  ${optionStyle}
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PageTitle = styled.input`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 4rem;
  padding: 2rem 0;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.text};
    font-weight: bold;
  }

  @media (max-width: ${breakpoints.md}) {
    font-size: 3rem;
  }
`;

export const PageDescription = styled.input`
  margin-top: -12px;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 2rem;
  outline: none;
  opacity: 0.5;
  padding-bottom: 2rem;

  @media (max-width: ${breakpoints.md}) {
    font-size: 1.5rem;
  }
`;

export const PageLine = styled.div`
  width: 100%;
  margin: auto;
  height: 2px;
  background-color: ${({ theme }) => theme.secondary};
`;

export const PageContent = styled.textarea`
  resize: none; // Desabilita o redimensionamento manual pelo usuário
  width: 100%;
  background-color: transparent;
  outline: none;
  border: none;
  margin-top: 2rem;
  font-family: "Open Sans", sans-serif;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.text};
  overflow-y: hidden; // Esconde a barra de rolagem vertical
  min-height: 100vh; // Define uma altura mínima
  box-sizing: border-box; // Inclui padding e border no cálculo da altura total

  @media (max-width: ${breakpoints.md}) {
    font-size: 1.5rem;
  }
`;

export const Selectors = styled.div`
  display: flex;
  gap: 1rem;
`;

import { IoGrid, IoList } from "react-icons/io5";
import { FaPen, FaStar, FaTrash, FaStickyNote } from "react-icons/fa";

export const MainContainer = styled.div<{ $isvisible: string }>`
  display: flex;
  justify-content: space-between;
  min-height: 100vh;

  @media (max-width: ${breakpoints.md}) {
    flex-direction: column;
  }
`;
export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;

export const ChangeViewContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: flex-end;
  user-select: none;
`;

export const GridView = styled(IoGrid)`
  cursor: pointer;
`;

export const ListView = styled(IoList)`
  cursor: pointer;
  font-size: 2rem;
`;

export const ChangeViewDescription = styled.p`
  cursor: pointer;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.text};
`;

export const CardsContainer = styled.div<{ $view: string }>`
  display: grid;
  grid-template-columns: ${({ $view }) =>
    $view === "true" ? "repeat(auto-fill, minmax(300px, 1fr))" : "1fr"};
  gap: ${({ $view }) => ($view === "true" ? "1.5rem" : "0")};
  padding: 2rem 0;

  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: ${({ $view }) =>
      $view === "true" ? "repeat(auto-fill, minmax(200px, 1fr))" : "1fr"};
  }
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.contrast};
  color: ${({ theme }) => theme.text};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
`;

export const Title = styled.h3``;

export const EditIcon = styled(FaPen)``;

export const TagsContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0 2rem;
  flex-wrap: wrap;
`;

export const Tag = styled.p`
  border-radius: 0.6rem;
  display: flex;
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.body};
  padding: 0.5rem 1rem;
`;

export const TagsViewContainer = styled(TagsContainer)`
  padding: 0 1rem;
`;

export const TagView = styled(Tag)``;

export const Content = styled.p`
  opacity: 0.5;
  padding: 0 2rem;
  flex: 1; // Allow content to stretch
`;

export const Footer = styled.div`
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.body};
  position: relative;
  display: flex;
  padding: 1rem;
  justify-content: flex-end;
  font-size: 2rem;
  gap: 1rem;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const DeleteIcon = styled(FaTrash)``;

export const StarIcon = styled(FaStar)``;

export const ListViewContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  border-radius: 6px;
  margin: 0.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: all 300ms ease;
  &:hover {
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.body};
  }
`;

export const TopListContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0 1rem;
`;

export const NoteIcon = styled(FaStickyNote)`
  font-size: 2rem;
`;

export const ContentListViewContainer = styled.div<{ $expand: string }>`
  background-color: ${({ theme }) => theme.contrast};
  color: ${({ theme }) => theme.text};
  width: 100%;
  height: ${({ $expand }) => ($expand === "true" ? "auto" : "0")};
  max-height: ${({ $expand }) => ($expand === "true" ? "300px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  @media (max-width: ${breakpoints.md}) {
    max-height: ${({ $expand }) => ($expand === "true" ? "200px" : "0")};
  }
`;

export const ContentListView = styled.p`
  padding: 0 1rem;
`;

import { TbLayoutSidebar } from "react-icons/tb";

export const RecoilSideBar = styled(TbLayoutSidebar)<{ $isvisible: string }>`
  font-size: 3.5rem;
  z-index: 1;
  width: 6rem;
  cursor: pointer;
  position: relative;
  top: 1.8rem;
  left: 1rem;
  display: ${({ $isvisible }) => ($isvisible === "true" ? "block" : "none")};
  margin-right: 1rem;

  @media (max-width: ${breakpoints.md}) {
    font-size: 3rem;
    top: 1rem;
    left: 0.5rem;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;

  @media (max-width: ${breakpoints.md}) {
    flex-direction: column;
    gap: 1rem;
  }
`;
