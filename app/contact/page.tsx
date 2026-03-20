import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <h1>Contact Page</h1>

      <h2>Contact Us on</h2>
      <ul>
        <li><Link href="/contact/phone">Phone</Link></li>
        <li><Link href="/contact/email">Email</Link></li>
        <li><Link href="/contact/instagram">Instagram</Link></li>
      </ul>
    </div>
  );
}
