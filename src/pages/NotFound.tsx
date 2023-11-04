
function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-2xl text-gray-700 mt-4">Oops! The page you're looking for doesn't exist.</p>
      </div>
    </div>
  );
}

export default NotFound;
