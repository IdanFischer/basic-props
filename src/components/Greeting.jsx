export default function Greeting({ firstName, lastName, emoji }) {
    return <h2>{emoji || "⚪️"} {firstName} {lastName}!</h2>
}
