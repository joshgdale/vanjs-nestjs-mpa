const Main = () =>
  div(
    p('👋Hello from Dashboard.js'),
    ul(li('🗺️World'), li(a({ href: 'https://vanjs.org/' }, '🍦VanJS'))),
    form(
      { onsubmit: handleForm, method: 'post' },
      Input(),
      Textarea({ val: 'foo' }),
    ),
  );

const Input = () => {
  return label(
    'Name',
    input({
      name: 'name',
    }),
  );
};

const Textarea = (props) => {
  return label(
    'Name',
    textarea({
      rows: 5,
      name: 'name',
      value: props?.val ?? '',
    }),
  );
};

function handleForm(form) {
  form.preventDefault();

  const data = Object.fromEntries(new FormData(form.target));

  console.log('form data', data);
}
