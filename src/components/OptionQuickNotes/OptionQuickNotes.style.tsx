import OptionQuickNotes from "../../components/OptionQuickNotes/OptionQuickNotes";
import {
  OptionCloseNote,
  OptionDelNote,
  OptionFavoriteNote,
  PageContainer,
  PageOptions,
  PageTop,
} from "../../Pages/Pages.style";

export default function Inbox() {
  return (
    <PageContainer>
      <PageTop>
    <div></div>
        <PageOptions>
          <OptionDelNote />
          <OptionFavoriteNote />
          <OptionCloseNote />
          <OptionQuickNotes/>
        </PageOptions>
      </PageTop>
    </PageContainer>
  );
}
