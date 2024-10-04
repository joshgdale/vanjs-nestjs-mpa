const Root = () => {
  const shouldRender = van.state(false);

  Promise.all([
    import('https://esm.run/date-fns').then((m) => {
      window.dateFns = m;
    }),
  ]).then(() => {
    shouldRender.val = true;
  });

  return van.derive(() => (shouldRender.val ? Shell() : div()));
};
