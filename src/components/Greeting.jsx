export default function Greeting({ name, lastName, emoji }) {
  return <h2>{emoji || "⚪️"} {name} {lastName}!</h2>
}
