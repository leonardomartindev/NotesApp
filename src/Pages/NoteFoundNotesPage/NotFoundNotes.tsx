import {
  ContainerBottom,
  Illustration,
  NotFoundContainer,
  Redirect,
  RedirectContainer,
  RedirectIcon,
  Title,
} from "./NoteFoundNote.style";

export default function NotFoundNotes() {
  return (
    <NotFoundContainer>
      <Illustration />
      <RedirectContainer>
        <Title>Nenhuma nota por aqui, que tal criar uma?</Title>
        <ContainerBottom>
          <Redirect>Criar nova nota</Redirect>
          <RedirectIcon />
        </ContainerBottom>
      </RedirectContainer>
    </NotFoundContainer>
  );
}
