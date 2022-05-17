function SupremeContainerBody({ extraPowers, Component }) {
  return (
    <section className={`supremeContainerBody ${extraPowers}`}>
      {Component}
    </section>
  );
}

export { SupremeContainerBody };
