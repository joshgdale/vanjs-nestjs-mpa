const Shell = () =>
  div(
    {
      class: 'absolute inset-0 bg-zinc-100 flex',
    },
    div(
      { class: 'bg-pink-700 p-4' },
      p({ class: 'text-white' }, 'Navigation Menu'),
      div(
        {
          class: 'flex flex-col',
        },
        a({ href: '/' }, 'Dashboard'),
        a({ href: '/alt' }, 'Alt'),
        a({ href: '/login' }, 'Log In'),
      ),
    ),
    div({ class: 'flex-1 flex flex-col p-8' }, Main()),
  );
