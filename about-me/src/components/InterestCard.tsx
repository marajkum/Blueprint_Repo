import type { Interest } from "../data/interests";

interface Props {
  interest: Interest;
}

export default function InterestCard({ interest }: Props) {
  return (
    <article className="card">
      <h3>{interest.title}</h3>
      <p>{interest.description}</p>
      <ul className="tags">
        {interest.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </article>
  );
}