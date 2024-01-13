import { Link } from 'react-router-dom';

export default function Page404() {
  return (
    <main>
      <h1>Page is not found</h1>
      <Link to={'/'}>return to Main page</Link>
    </main>
  );
}
