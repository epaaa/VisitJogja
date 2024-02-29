import ReactLoading from 'react-loading';

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <ReactLoading type={'bubbles'} color={''} height={100} width={100} />
        <p className="text-center mt-4">Loading...</p>
      </div>
    </div>
  );
}