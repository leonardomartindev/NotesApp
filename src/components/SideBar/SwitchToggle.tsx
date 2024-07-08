import { useContext } from "react";
import { InputSwitch, LabelSwitch, SpanSwitch } from "./SideBar.style";
import { ThemeContext } from "../../context/ThemeContext";

export default function SwitchToggle() {
  const { toggleValor, checkTheme, theme } = useContext(ThemeContext);

  const check = () => {
    checkTheme();
    toggleValor();
  };

  return (
    <LabelSwitch>
      <InputSwitch type="checkbox" onChange={check} checked={theme === 'dark'} />
      <SpanSwitch />
    </LabelSwitch>
  );
}
