export default function GlobalError({ error }: { error: Error }) {
  console.error(error);
  return (
    <div style={{ padding: 32 }}>
      <h1>Something went wrong</h1>
      <p>Sorry — an unexpected error occurred.</p>
      <pre style={{ whiteSpace: "pre-wrap", color: "#b00" }}>
        {error?.message}
      </pre>
    </div>
  );
}