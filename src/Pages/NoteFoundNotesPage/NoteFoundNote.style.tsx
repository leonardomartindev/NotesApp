import styled from "styled-components";
import { PiNoteFill } from "react-icons/pi";
import { IoMdOpen } from "react-icons/io";

export const NotFoundContainer = styled.div`
    display: flex;
    margin: auto;
    gap: 2rem;
`
export const Illustration = styled(PiNoteFill)`
    font-size: 16rem;
`

export const Title = styled.h1`
    width: auto;
    max-width: 540px;
`
export const RedirectContainer = styled.div``
export const RedirectIcon = styled(IoMdOpen)``
export const Redirect = styled.p`
    cursor: pointer;

 &:hover{ 
       text-decoration:underline;
    }
`

export const ContainerBottom = styled.div`
    display: flex;
    gap: .5rem;
    align-items: center;
    font-size: 2.5rem;
    margin-top: -3rem;

   
`