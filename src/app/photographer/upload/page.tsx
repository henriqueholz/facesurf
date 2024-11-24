export default function Upload() {
  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">Upload Photos</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <input type="file" multiple className="hidden" id="photo-upload" />
            <label htmlFor="photo-upload" className="cursor-pointer">
              <div className="text-gray-500">
                <p className="text-lg mb-2">Drag and drop your photos here</p>
                <p className="text-sm">or click to select files</p>
              </div>
            </label>
          </div>
          <div className="mt-6">
            <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">
              Upload Photos
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
