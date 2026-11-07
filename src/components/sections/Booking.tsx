import { useState } from "react";
import { booking } from "../../data/booking";
import { buildBookingMessage, buildWhatsAppUrl } from "../../lib/whatsapp";

type Answers = Record<string, string>;

export function Booking() {
  const [objectiveId, setObjectiveId] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Answers>({});

  const objective = booking.objectives.find((item) => item.id === objectiveId);

  const whatsappUrl = objective
    ? buildWhatsAppUrl(
        buildBookingMessage({
          greeting: booking.greeting,
          objective: objective.message,
          answers: booking.questions
            .filter((question) => answers[question.id])
            .map((question) => ({
              label: question.messageLabel,
              value: answers[question.id],
            })),
          closing: booking.closing,
        }),
      )
    : undefined;

  function toggleAnswer(questionId: string, value: string) {
    setAnswers((current) => {
      const next = { ...current };
      if (next[questionId] === value) {
        delete next[questionId];
      } else {
        next[questionId] = value;
      }
      return next;
    });
  }

  return (
    <section
      id={booking.id}
      aria-labelledby="booking-title"
      className="scroll-mt-20 border-t border-white/[0.06] px-6 py-24 md:px-10 md:py-32 lg:px-16"
    >
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12 lg:gap-12">
        <header className="lg:col-span-5">
          <p className="mb-6 font-sans text-[11px] uppercase tracking-[0.3em] text-champagne">
            {"— "}
            {booking.kicker}
          </p>
          <h2
            id="booking-title"
            className="font-display text-5xl font-normal leading-[0.95] tracking-tight text-ivory text-balance md:text-6xl xl:text-7xl"
          >
            {booking.title.before}{" "}
            <em className="italic text-champagne">{booking.title.emphasis}</em>
          </h2>
          <p className="mt-8 max-w-md font-sans text-base font-light leading-relaxed text-muted md:text-lg">
            {booking.description}
          </p>
        </header>

        <div className="lg:col-span-6 lg:col-start-7">
          <fieldset>
            <legend className="mb-6 font-sans text-[10px] uppercase tracking-[0.25em] text-muted">
              {booking.objectivesLabel}
            </legend>
            <ul className="border-b border-white/[0.08]">
              {booking.objectives.map((item, index) => {
                const selected = item.id === objectiveId;
                return (
                  <li key={item.id} className="border-t border-white/[0.08]">
                    <button
                      type="button"
                      aria-pressed={selected}
                      onClick={() => setObjectiveId(selected ? null : item.id)}
                      className="group flex w-full items-baseline gap-6 py-6 text-left transition-colors duration-300 ease-luxury md:py-7"
                    >
                      <span
                        className={`font-display text-lg transition-colors duration-300 ease-luxury ${
                          selected ? "text-champagne" : "text-champagne/50"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="flex flex-1 flex-col gap-1">
                        <span
                          className={`font-display text-2xl leading-tight transition-colors duration-300 ease-luxury md:text-3xl ${
                            selected
                              ? "italic text-champagne"
                              : "text-ivory group-hover:text-champagne"
                          }`}
                        >
                          {item.title}
                        </span>
                        <span className="font-sans text-xs uppercase tracking-[0.15em] text-muted">
                          {item.detail}
                        </span>
                      </span>
                      <span
                        aria-hidden="true"
                        className={`h-px self-center transition-all duration-500 ease-luxury ${
                          selected ? "w-10 bg-champagne" : "w-4 bg-white/20 group-hover:w-8"
                        }`}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </fieldset>

          {objective && (
            <div className="mt-14 animate-[fadeIn_500ms_cubic-bezier(0.22,1,0.36,1)]">
              <p className="mb-8 font-sans text-[10px] uppercase tracking-[0.25em] text-muted">
                {booking.questionsLabel}
              </p>
              <div className="flex flex-col gap-8">
                {booking.questions.map((question) => (
                  <fieldset key={question.id} className="flex flex-col gap-3 md:flex-row md:items-baseline md:gap-8">
                    <legend className="mb-3 font-display text-xl text-ivory md:float-left md:mb-0 md:w-56 md:shrink-0">
                      {question.question}
                    </legend>
                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                      {question.options.map((option) => {
                        const selected = answers[question.id] === option.value;
                        return (
                          <button
                            key={option.value}
                            type="button"
                            aria-pressed={selected}
                            onClick={() => toggleAnswer(question.id, option.value)}
                            className={`py-1 font-sans text-sm tracking-wide underline-offset-[8px] transition-colors duration-300 ease-luxury ${
                              selected
                                ? "text-champagne underline decoration-champagne"
                                : "text-muted hover:text-ivory"
                            }`}
                          >
                            {option.label}
                          </button>
                        );
                      })}
                    </div>
                  </fieldset>
                ))}
              </div>
            </div>
          )}

          <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            {whatsappUrl ? (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-champagne px-8 py-4 font-sans text-sm font-medium tracking-wide text-obsidian transition-colors duration-300 ease-luxury hover:bg-ivory"
              >
                {booking.sendLabel}
                <span aria-hidden="true">{"↗"}</span>
              </a>
            ) : (
              <span
                aria-disabled="true"
                className="inline-flex cursor-not-allowed items-center justify-center gap-3 rounded-full border border-white/10 px-8 py-4 font-sans text-sm tracking-wide text-muted"
              >
                {booking.sendLabel}
                <span aria-hidden="true">{"↗"}</span>
              </span>
            )}
            <p className="font-sans text-xs leading-relaxed text-muted" aria-live="polite">
              {objective ? booking.questionsHint : booking.emptyHint}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
