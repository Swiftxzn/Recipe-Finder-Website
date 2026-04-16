import tiktok from "../assets/images/icon-tiktok.svg";
import instagram from "../assets/images/icon-instagram.svg";
import bluesky from "../assets/images/icon-bluesky.svg";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-white-800 bg-[var(--fundo-color)] py-6 text-center text-sm px-24">
      <div className="flex justify-between">
        <div className="flex gap-4 text-[var(--primary-color)]">
          &copy; {new Date().getFullYear()} Feito Por Bruno Para trabalho
        </div>

        <div className="flex gap-4 justify-end">
          <Link to="https://www.instagram.com/swiftxzn/" target="_blank">
            <img src={instagram} alt="Instagram" />
          </Link>
          <Link to="https://www.bluesky.com/" target="_blank">
            <img src={bluesky} alt="Bluesky" />
          </Link>
          <Link to="https://www.tiktok.com/" target="_blank">
            <img src={tiktok} alt="TikTok" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
