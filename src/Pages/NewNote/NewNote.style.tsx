import styled from "styled-components";

export const ContainerNewNote = styled.form`
  width: 100%;
  padding: 2rem 1rem;
`;

export const Selectors = styled.div`
    display: flex;
    gap: 1rem;
`


export const Titulo = styled.input`
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
`;
export const Description = styled.input`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 2rem;
  outline: none;
  opacity: 0.5;
  padding-bottom: 2rem;

  &::placeholder {
    color: ${({ theme }) => theme.text};
  }
`;

export const Content = styled.textarea`
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
`;

