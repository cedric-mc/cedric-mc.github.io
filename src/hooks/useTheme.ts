export function themeBasedOnTime() {
    const hour = new Date().getHours();
    return hour >= 6 && hour < 18 ? "light" : "dark";
}
