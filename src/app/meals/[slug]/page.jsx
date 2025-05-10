export default function DynamicPage({ params }) {
  return (
    <div>
      <h1>Dynamic Page</h1>
      <p>Welcome to the dynamic page! {slug}</p>
    </div>
  );
}
