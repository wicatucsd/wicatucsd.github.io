type CustomLinkProps = {
    text: string;
    href: string;
    color?: 'dark' | 'light' | 'secondary'; // Made color optional
}

export default function CustomLink({ text, href, color = 'dark' }: CustomLinkProps) { // Set default to 'dark'
    const getColorClasses = () => {
        switch (color) {
            case 'dark':
                return 'text-gray-dark hover:text-primary-medium font-bold';
            case 'light':
                return 'text-gray-light hover:text-primary-light font-bold';
            case 'secondary':
                return 'text-secondary-medium hover:text-secondary-light font-bold';
            default:
                return '';
        }
    };
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={getColorClasses()}
        >
            {text}
        </a>
    );
}