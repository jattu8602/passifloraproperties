export default function Loading() {
  return (
    <div className="fixed inset-0 w-screen h-screen flex items-center justify-center bg-white">
      <div className="flex gap-5 items-center">
        <div
          className="w-5 h-5 bg-gray-800 rounded-full animate-bounce"
          style={{ animationDelay: '-0.32s', animationDuration: '1.4s' }}
        />
        <div
          className="w-5 h-5 bg-gray-800 rounded-full animate-bounce"
          style={{ animationDelay: '-0.16s', animationDuration: '1.4s' }}
        />
        <div
          className="w-5 h-5 bg-gray-800 rounded-full animate-bounce"
          style={{ animationDuration: '1.4s' }}
        />
      </div>
    </div>
  )
}
