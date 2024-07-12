import { useContext } from "react";
import { OptionCloseQuickNotes, OptionOpenQuickNotes } from "../../Pages/Pages.style";
import { SideBarContext } from "../../context/AssideVisibledContext";

export default function OptionQuickNotes() {

    const { changeQuickNotesBar, quickNotesBarVisibled } = useContext(SideBarContext);


  return (
    <>
    {quickNotesBarVisibled === "flex" ? (
        <OptionCloseQuickNotes onClick={changeQuickNotesBar} />
    ) : (
        <OptionOpenQuickNotes onClick={changeQuickNotesBar} />
    )}
    </>
  )
}
