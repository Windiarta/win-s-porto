// Visible "this card opens a page" cue (R-08: the arrow is a navigation
// direction cue, not decoration). aria-hidden because the overlay card-link
// already carries the accessible label.
const CardCta = ({ label }: { label: string }) => (
  <span className="card-cta" aria-hidden="true">
    {label}
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

export default CardCta;
