import OptionQuickNotes from "../../components/OptionQuickNotes/OptionQuickNotes";
import {
  PageContainer,
  PageOptions,
  PageTop,
} from "../Pages.style";

export default function Inbox() {
  return (
    <PageContainer>
      <PageTop>
    <div></div>
        <PageOptions>
          <OptionQuickNotes/>
        </PageOptions>
      </PageTop>
    </PageContainer>
  );
}
