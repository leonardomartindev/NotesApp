import styled from "styled-components";
import { TbLayoutSidebar } from "react-icons/tb";


export const MainContainer = styled.div<{ isvisible: string}>`
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
  
`;


export const RecoilSideBar = styled(TbLayoutSidebar)<{ isvisible: string }>`
  font-size: 3.5rem;
  z-index: 1;
  width: 6rem;
  cursor: pointer;
  position: relative;
  top: 1.8rem;
  left: 1rem;
  display: ${({ isvisible }) => (isvisible === "true" ? "block" : "none")};
  margin-right: 1rem;
`;

export const ContentContainer = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
`

