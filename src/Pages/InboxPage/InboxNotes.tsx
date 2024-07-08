import {
  OptionCloseNote,
  OptionCloseQuickNotes,
  OptionDelNote,
  OptionFavoriteNote,
  PageContainer,
  PageOptions,
  PageTag,
  PageTags,
  PageTop,
} from "../Pages.style";

export default function Inbox() {
  return (
    <PageContainer>
      <PageTop>
        <PageTags>
          <PageTag>pendente</PageTag>
          <PageTag>urgente</PageTag>
        </PageTags>
        <PageOptions>
          <OptionDelNote />
          <OptionFavoriteNote />
          <OptionCloseNote />
          <OptionCloseQuickNotes />
        </PageOptions>
      </PageTop>
    </PageContainer>
  );
}
