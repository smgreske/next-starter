type ToggleSwitchProps = {
  styles: {
    label: string;
  };
  mobileOnly: boolean;
  iconOn: any;
  iconOff: any;
  children: any;
};
// ------------------------------------------------------------------------
export function ToggleSwitch({
  styles,
  mobileOnly,
  iconOn,
  iconOff,
  children,
}: ToggleSwitchProps) {
  return (
    <div>
      <label
        id="label"
        className={
          (styles && styles.label) +
          (mobileOnly && ` md:hidden `) +
          ` cursor-pointer `
        }
      >
        <input id="input" className={" peer hidden "} type="checkbox" />
        <i className={" peer-checked:hidden "}>{iconOff}</i>
        <i className={" peer-checked:contents hidden "}>{iconOn}</i>
      </label>
      <div id="childContainer">{children}</div>
    </div>
  );
}
