import Link from "next/link";
import Contact from "../page";

export default function Email() {
  return (
    <div>
      <Contact />
      <h3>Email Page</h3>
      <Link href="/contact">Back</Link>
    </div>
  );
}
