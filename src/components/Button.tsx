/**
 * A Button component that supports both button and link functionality.
 * It allows customization of text, click behavior, link redirection, and color theme.
 *
 * @param {Object} props - The properties for the Button component.
 * @param {string} props.text - The text to display on the button.
 * @param {() => void} [props.onClick] - Optional click handler for the button.
 * @param {string} [props.href] - Optional URL for the button to act as a link.
 * @param {"dark" | "light"} [props.color="dark"] - The color theme of the button. Defaults to "dark".
 *
 * @returns {JSX.Element} A styled button or link element with hover effects and optional shadow.
 */
import { inconsolata } from "@/lib/fonts";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  href?: string;
  color?: "dark" | "light";
};

export default function Button({ text, onClick, href, color = "dark" }: ButtonProps) {
  const buttonClasses = `
    ${inconsolata.className}
    ${color === "dark"
      ? "bg-peach-light"
      : "bg-purple-light"
    }
    text-gray-dark
    relative inline-block
    px-6 py-2
    uppercase font-bold tracking-wide
    rounded-full
    transition-transform duration-200
    hover:translate-x-[5px] hover:translate-y-[5px]
  `;

  return (
    // Shadow effect
    <div
      className={`
        relative inline-block
        before:content-[''] before:absolute
        before:top-[6px] before:left-[6px]
        before:w-full before:h-full
        before:rounded-full
        before:border-1 
        ${color === "dark"
          ? "before:border-purple-medium"
          : "before:border-purple-light"
        }
      `}
    >
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses}
        >
          {text}
        </a>
      ) : (
        <button onClick={onClick} className={buttonClasses}>
          {text}
        </button>
      )}
    </div>
  );
}