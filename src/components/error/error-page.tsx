import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface ErrorPageProps {
  code?: number;
  title?: string;
  message?: string;
}

export function ErrorPage({
  code = 404,
  title = 'Page Not Found',
  message = "Sorry, we couldn't find the page you're looking for.",
}: ErrorPageProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <div className="max-w-max mx-auto text-center">
        <div className="sm:flex items-center justify-center">
          <p className="text-4xl font-bold text-primary sm:text-5xl">{code}</p>
          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-muted-foreground/30 sm:pl-6">
              <h1 className="text-4xl font-bold text-foreground tracking-tight sm:text-5xl">
                {title}
              </h1>
              <p className="mt-2 text-base text-muted-foreground">{message}</p>
            </div>
            <div className="mt-8 flex space-x-3 justify-center">
              <Button
                onClick={() => navigate('/')}
                className="inline-flex items-center px-4 py-2"
              >
                Go back home
              </Button>
              {/* <Button
                variant="outline"
                onClick={() => navigate(-1)}
                className="inline-flex items-center px-4 py-2"
              >
                Go back
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
