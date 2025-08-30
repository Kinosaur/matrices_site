export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Matrix Operations (Minimal Docs)</h1>
      <p>
        Goal: short, procedural explanations of core matrix operations (addition,
        subtraction, multiplication, determinant, inverse) with small worked
        examples. No interactive calculator yet.
      </p>
      <p>
        Start with{' '}
        <a href="/docs/addition" className="text-accent underline">Matrix Addition</a>{' '}
        and{' '}
        <a href="/docs/multiplication" className="text-accent underline">Matrix Multiplication</a>.
        More pages will appear as they are written.
      </p>
      <h2>Principles</h2>
      <ul>
        <li>Keep pages short (&lt; 250 words + example).</li>
        <li>Highlight domain restrictions (dimension match, square requirement).</li>
        <li>Show at least one complete worked example per operation.</li>
        <li>No giant copy-pasted encyclopedia text.</li>
      </ul>
    </div>
  );
}