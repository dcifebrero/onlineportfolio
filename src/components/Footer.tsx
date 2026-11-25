import Image from "next/image";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <span>
          © {new Date().getFullYear()} {site.name} · Your business, flowing smarter.
        </span>
        <Image src="/logo-wordmark-light.png" alt="PhewFlow" width={217} height={30} />
      </div>
    </footer>
  );
}
