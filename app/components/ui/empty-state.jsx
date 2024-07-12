const EmptyState = () => {
  return (
    <div className="py-20 my-16 lg:24 block max-w-screen-md mx-auto w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center">
      <span className="block text-2xl font-semibold text-gray-900 mb-2">
        Product not found
      </span>
      <span className="italic">Please check again later</span>
    </div>
  );
};

export default EmptyState;
