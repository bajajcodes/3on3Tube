import { extraPowers } from "./extraPowers.js";

function SupremeContainerHeader({ type = "", Component }) {
  return (
    <section className={`p-sm supremeContainerHeader ${extraPowers(type)}`}>
      {Component}
    </section>
  );
}

export { SupremeContainerHeader };
