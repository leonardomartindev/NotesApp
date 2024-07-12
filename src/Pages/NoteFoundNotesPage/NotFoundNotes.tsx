import {
  Illustration,
  NotFoundContainer,
  RedirectContainer,
  Title,
} from "./NoteFoundNote.style";

export default function NotFoundNotes() {
  return (
    <NotFoundContainer>
      <Illustration />
      <RedirectContainer>
        <Title>Nenhuma nota por aqui, que tal criar uma?</Title>

      </RedirectContainer>
    </NotFoundContainer>
  );
}
