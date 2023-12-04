import Image from "next/image";

export function DropdownsWhy() {
  return (
    <section className="dropdown-wrap">
      <h2>Why us?</h2>
      <section className="dropdown-items-wrap">
        <section className="items-all">
          <section className="item-dropdown">Predictability</section>
          <section className="item-dropdown">Pay for results</section>
          <section className="item-dropdown">Safety and security</section>
          <section className="item-dropdown">Steady growth</section>
          <section className="item-dropdown">Success, driven by math</section>
          <section className="item-dropdown">Magic! (not quite)</section>
          <section className="item-dropdown">Focused</section>
        </section>
        <section className="item-display"></section>
      </section>
    </section>
  );
}
export function DropdownsHelp() {
  return <></>;
}
