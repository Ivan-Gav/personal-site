interface Env {
  RESEND_API_KEY: string;
  MAIL_TO: string;
}

const FROM = 'contact@gavrilin.online';
const SUBJECT = 'New message from gavrilin.online';

const LIMITS = {
  name: 100,
  email: 254,
  message: 5000,
  lang: 8,
} as const;

const EMAIL_RE = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;

const ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => ESCAPES[char]);

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  let form: FormData;

  try {
    form = await request.formData();
  } catch {
    return new Response('Malformed form data', { status: 400 });
  }

  const field = (key: string, limit: number) =>
    String(form.get(key) ?? '')
      .trim()
      .slice(0, limit);

  if (field('company', 100)) {
    return new Response(null, { status: 204 });
  }

  const name = field('name', LIMITS.name);
  const email = field('email', LIMITS.email);
  const message = field('message', LIMITS.message);
  const lang = field('lang', LIMITS.lang);

  if (
    name.length < 2 ||
    message.length < 10 ||
    (email && !EMAIL_RE.test(email))
  ) {
    return new Response('Invalid form data', { status: 400 });
  }

  const html = [
    '<h1>You got a new message.</h1>',
    ...(
      [
        ['Name', name],
        ['Email', email],
        ['Lang', lang],
        ['Message', message],
      ] as const
    )
      .filter(([, value]) => value)
      .map(
        ([label, value]) =>
          `<p><strong>${label}:</strong> ${escapeHtml(value)}</p>`
      ),
  ].join('');

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: FROM,
      to: env.MAIL_TO,
      ...(email ? { reply_to: email } : {}),
      subject: SUBJECT,
      html,
    }),
  });

  if (!response.ok) {
    console.error(
      'Resend rejected the message',
      response.status,
      await response.text()
    );
    return new Response('Could not send the message', { status: 502 });
  }

  return new Response(null, { status: 204 });
};
