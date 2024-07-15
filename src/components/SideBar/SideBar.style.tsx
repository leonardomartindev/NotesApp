import styled from "styled-components";
import { TbLayoutSidebar } from "react-icons/tb";
import { Link } from "react-router-dom";
import { FaFolder, FaStickyNote, FaFolderPlus, FaPlus } from "react-icons/fa";

export const SideBarContainer = styled.aside`
  min-width: 300px;
  background-color: ${({ theme }) => theme.secondary};
  padding-left: 1.5rem;
  left: 0;
  z-index: 2;
  box-sizing: border-box;
  transition: all 0.3s ease;
  height: auto;

  @media (max-width: 800px){
    min-width: 100vw;
  }
`;

export const ElementsSideBarContainer = styled.div`
  position: sticky;
  top: 0;
  
`


export const TopSideBar = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
`;

export const RecoilSidebarIcon = styled(TbLayoutSidebar)`
  font-size: 4rem;
  cursor: pointer;
`;

export const NewNoteButton = styled.button`
  display: flex;
  gap: 1rem;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  font-family: "Open Sans", sans-serif;
  align-items: center;
  border-radius: 0.6rem;
  width: 100%;
  border: none;
  font-size: 0.8rem;
  padding-left: 1.5rem;
  cursor: pointer;
`;

export const PlusIcon = styled(FaPlus)`
  font-size: 2rem;
`;

export const Navigation = styled.nav`
  margin-top: 2rem;
`;

export const Ul = styled.ul`
  padding: 0 1.3rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding-bottom: 1rem;
`;

export const Li = styled.li`
  list-style: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const LabelSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 5rem;
  height: 2.4rem;
`;
export const InputSwitch = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + span:before {
    transform: translateX(25px);
  }
`;
export const SpanSwitch = styled.span`
  position: absolute;
  cursor: pointer;
  border-radius: 30px;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: ${({ theme }) => theme.text};

  &::before {
    position: absolute;
    transition: transform ease 200ms;

    border-radius: 50%;
    content: "";
    height: 1.8rem;
    width: 1.8rem;
    left: 0.4rem;
    bottom: 0.3rem;
    background-color: ${({ theme }) => theme.secondary};

    @media (max-width: 1000px) {
      left: 0;
    }
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1.4px;
  background-color: ${({ theme }) => theme.text};
  position: absolute;
  left: 0;
  opacity: 0.3;
`;

export const TagsContainer = styled.div`
  padding-left: 2rem;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 1.5rem;
  padding-bottom: 1rem;
`;
export const TagsTitle = styled.div`
  user-select: none;
  cursor: pointer;
  display: flex;
  gap: 1rem;
  font-size: 2rem;
`;

export const TagForm = styled.form`
  border-radius: 0.6rem;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.text};
  height: 3.6rem;
`;
export const TagInput = styled.input`
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  outline: none;
  padding-left: 1rem;
  color: ${({ theme }) => theme.body};

  &::placeholder {
    color: ${({ theme }) => theme.body};
  }
`;

export const TagBtn = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.body};
  &:hover {
    background-color: #54fa7d;
    border-radius: 0.6rem;
  }
`;

export const TagsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

import { IoIosClose } from "react-icons/io";

export const DeleteTag = styled(IoIosClose)`
  font-size: 3.5rem;
  cursor: pointer;

  &:hover {
    background-color: #fa5454;
  }
`;

export const Tag = styled.div`
  display: flex;
  height: 3rem;
  justify-content: space-between;
  align-items: center;
  padding-left: 1rem;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.body};
  border-radius: 4px;
`;

export const CategoryContainer = styled(TagsContainer)`
  margin-top: 2rem;
`;

export const AddNewCategoryIcon = styled(FaFolderPlus)`
  display: none;
`

export const CategoryTitle = styled(TagsTitle)`


  div {
    display: flex;
    gap: 1rem;
  }

  &:hover {
    ${AddNewCategoryIcon} {
      display: block;
    }
  }
`;



export const CategoriesList = styled.div`
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const Category = styled.div`
  user-select: none;
  cursor: pointer;
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    gap: 1rem;
  }
`;


export const NoteContainer = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
  height: 3rem;
  margin: 1rem 0;
  transition: all 100ms ease;
  margin-left: 1.8rem;

  &:hover {
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.body};
  }
`
export const NoteIcon = styled(FaStickyNote)``
export const NoteTitle = styled.p``

export const DelCategoryIcon = styled(FaFolder)``;

export const ModalSettings = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.body};
  border: solid 0.1px ${({ theme }) => theme.secondaryText};
  border-radius: 6px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  z-index: 5;
  min-width: 190px;
`;

export const OptionsModal = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  gap: 1rem;
`;
export const OptionModal = styled.li`
  cursor: pointer;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.secondaryText};
    color: ${({ theme }) => theme.body};
    border-radius: 4px;
  }
`;

export const CategoryInput = styled.input`
  border: none;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  font-size: 1.6rem;
  padding: 0.5rem;

  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.text};
  }
`;

