export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-4xl font-bold tracking-tight md:text-6xl">Contact</h1>
      <p className="mt-8 text-lg text-neutral-600">
        Get in touch for projects and collaborations.
      </p>
      <div className="mt-8 space-y-4 text-lg">
        <a href="mailto:hello@example.com" className="block underline">
          hello@example.com
        </a>
      </div>
    </section>
  );
}