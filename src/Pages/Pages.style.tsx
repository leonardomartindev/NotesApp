import styled, { css } from "styled-components";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdOutlineClose,
  MdDelete,
  MdOutlineStarBorder,
} from "react-icons/md";
import { IoMdLock, IoMdUnlock  } from "react-icons/io";


export const PageContainer = styled.form`
    width: 100%;
    padding: 2rem 1rem;
    box-sizing: border-box;
`;
export const PageTop = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const PageTags = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
`;
export const PageTag = styled.div`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.body};
  border-radius: 8px;
`;
export const PageOptions = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 2.6rem;
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
export const OptionCloseNote = styled(MdOutlineClose)`
  ${optionStyle}
`;
export const OptionCloseQuickNotes = styled(MdKeyboardDoubleArrowRight)`
  ${optionStyle}
`;
export const OptionOpenQuickNotes = styled(MdKeyboardDoubleArrowLeft)`
  ${optionStyle}
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

`
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
`
export const PageDescription = styled.input`
  opacity: .5;
  margin-top: -12px;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 2rem;
  outline: none;
  opacity: 0.5;
  padding-bottom: 2rem;
`
export const PageLine = styled.div`
  width: 100%;
  margin: auto;
  height: 2px;
  background-color: ${({ theme }) => theme.secondary};
`
export const PageContent = styled.textarea`
  resize: none;
  width: 100%;
  background-color: transparent;
  outline: none;
  border: none;
  margin-top: 2rem;
  font-family: "Open Sans", sans-serif;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.text};
  overflow-y: hidden;
  height: 100vh;
`