import Link from "next/link";
import Contact from "../page";

export default function Phone() {
  return (
    <div>
      <Contact />
      <h3>Phone Page</h3>
      <Link href="/contact">Back</Link>
    </div>
  );
}
