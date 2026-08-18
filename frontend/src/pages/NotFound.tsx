import { Link } from 'react-router-dom';
import Button from '@/ui/Button';

const NotFound = () => (
  <div className="grid min-h-[60vh] place-items-center py-16">
    <div className="max-w-xl rounded-3xl border border-surface/80 bg-surface p-10 text-center shadow-card">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
        404
      </p>
      <h1 className="mt-4 text-3xl font-semibold text-text sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-4 text-sm leading-7 text-muted">
        The page you are looking for does not exist. Use the button below to return to
        the homepage.
      </p>
      <div className="mt-8">
        <Link to="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    </div>
  </div>
);

export default NotFound;
