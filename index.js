```javascript
// pages/about.js
import Link from 'next/link';

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <Link href="/">
        <a>Go back to Home</a>
      </Link>
    </div>
  );
}
```