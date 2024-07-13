import OptionQuickNotes from "../../components/OptionQuickNotes/OptionQuickNotes";
import {
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
          <OptionQuickNotes/>
        </PageOptions>
      </PageTop>
    </PageContainer>
  );
}
