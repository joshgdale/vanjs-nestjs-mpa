const Shell = () =>
  div(
    { class: 'h-screen w-screen bg-zinc-100 flex justify-center items-center' },
    div(
      { class: 'bg-white p-8 shadow w-full max-w-xl' },
      h1({ class: 'text-2xl font-semibold' }, 'Sign in to your account'),
      form(
        { method: 'post', action: '/login', class: 'mt-8' },
        label(
          { class: 'flex flex-col' },
          'Username',
          input({ type: 'text', class: 'border-2 border-cyan-700 p-2' }),
        ),
        label(
          { class: 'mt-4 flex flex-col' },
          'Password',
          input({ type: 'password', class: 'border-2 border-cyan-700 p-2' }),
        ),
        button({ type: 'submit' }, 'Submit!'),
      ),
    ),
  );
