import { interests } from "../data/interests";
import InterestCard from "./InterestCard";

export default function InterestsSection() {
  return (
    <section>
      <h2>Interests</h2>
      <div className="grid">
        {interests.map((i) => (
          <InterestCard key={i.id} interest={i} />
        ))}
      </div>
    </section>
  );
}