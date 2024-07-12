import styled from "styled-components";
import { IoGrid, IoList } from "react-icons/io5";
import { FaPen, FaStar, FaTrash, FaStickyNote } from "react-icons/fa";

export const MainContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
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

export const CardsContainer = styled.div<{ view: boolean }>`
  display: grid;
  grid-template-columns: ${({ view }) => view ? "repeat(auto-fill, minmax(300px, 1fr))" : "1fr"};
  gap: ${({ view }) => (view ? "1.5rem" : "0")};
  padding: 2rem 0;
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

export const ContentListViewContainer = styled.div<{ expand: boolean }>`
  background-color: ${({ theme }) => theme.contrast};
  color: ${({ theme }) => theme.text};
  width: 100%;
  height: ${({ expand }) => (expand ? "auto" : "0")};
  max-height: ${({ expand }) => (expand ? "300px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const ContentListView = styled.p`
  padding: 0 1rem;
`;
