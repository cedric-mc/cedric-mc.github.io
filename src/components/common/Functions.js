function iconText(icon, text) {
    /* Si l'icone est un string, on retourne un span contenant l'icone et le texte */
    if (typeof icon === "string") {
        return (
            <span>
                <img alt="" src={icon} className="d-inline-block align-text-top spinner"/>{' '}
                {text}
            </span>
        );
    } else if (typeof icon === "object") {
        return (
            <span>
                {icon}{' '}
                {text}
            </span>
        );
    }
}

export { iconText };
