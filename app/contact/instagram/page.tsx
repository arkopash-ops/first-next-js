import Link from "next/link";
import Contact from "../page";

export default function Instagram() {
  return (
    <div>
      <Contact />
      <h3>Instagram Page</h3>
      <Link href="/contact">Back</Link>
    </div>
  );
}
