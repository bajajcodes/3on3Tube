function SupremeContainerBody({ extraPowers, Component }) {
  return (
    <section className={`p-sm supremeContainerBody ${extraPowers}`}>
      {Component}
    </section>
  );
}

export { SupremeContainerBody };
