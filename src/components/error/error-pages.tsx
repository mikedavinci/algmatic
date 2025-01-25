import { ErrorPage } from './error-page';

export function NotFoundPage() {
  return (
    <ErrorPage
      code={404}
      title="Page Not Found"
      message="Sorry, we couldn't find the page you're looking for."
    />
  );
}

export function BadRequestPage() {
  return (
    <ErrorPage
      code={400}
      title="Bad Request"
      message="Sorry, your request couldn't be processed. Please try again."
    />
  );
}

export function ServerErrorPage() {
  return (
    <ErrorPage
      code={500}
      title="Server Error"
      message="Sorry, something went wrong on our end. Please try again later."
    />
  );
}
