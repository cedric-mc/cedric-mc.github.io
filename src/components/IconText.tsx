interface IconTextProps {
    icon: string | JSX.Element;
    text: string;
}

export function IconText({ icon, text }: IconTextProps) {
    return (
        <span>
            {typeof icon === "string" ? (
                <img alt={icon + ' ' + text} src={icon} className="d-inline-block align-text-top spinner"/>
            ) : (
                icon
            )}{' '}
            {text}
        </span>
    )
}