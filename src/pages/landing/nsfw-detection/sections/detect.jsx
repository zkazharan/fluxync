import { useState } from "react";
import { Spinner, Typography } from "@material-tailwind/react";

export function Detect() {
  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [fetchError, setFetchError] = useState(null);

  const apiUrl = import.meta.env.VITE_API_HOST + "/" + import.meta.env.VITE_API_VERSION;

  const handleFileChange = (e) => {
    if (loading) return;

    setResult(null);
    setFetchError(null);

    const selectedFile = e.target.files[0];
    const validTypes = ['image/png', 'image/jpeg'];
    const maxSize = 3 * 1024 * 1024;

    if (selectedFile) {
      if (!validTypes.includes(selectedFile.type)) {
        setFileError('Invalid file type. Please upload an PNG, JPG, or JPEG.');
        setFile(null);
        return;
      }

      if (selectedFile.size > maxSize) {
        setFileError('File size exceeds 3MB.');
        setFile(null);
        return;
      }

      setFileError('');
      setFile(selectedFile);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);

    setResult(null);
    setFetchError(null);

    if (!file) {
      setFileError('Please upload a valid file.');
      setLoading(false);
      return;
    }
  
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      const base64String = reader.result.split(',')[1];
  
      try {
        const response = await fetch(`${apiUrl}/primary/services/nsfw-detector/demo`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ image: base64String }),
        });
  
        if (!response.ok) {
          setFetchError('Server error occurred. Please try again later.');
          setLoading(false);
          return;
        }
  
        const result = await response.json();

        setResult(result.data);
        setLoading(false);
        return;
      } catch (error) {
        setFetchError('Server error occurred. Please try again later.');
        setLoading(false);
        return;

      }
    };
  
    reader.onerror = (error) => {
      setFetchError('Error reading file: ', error);
      setLoading(false);
      return;
    };
  };

  return (
    <div className="w-full bg-[url('/img/bg-basic.png')] bg-auto bg-center bg-repeat flex flex-col items-center gap-16 py-24">
      <Typography variant="h2" color="white" className="tracking-wide">How Does Fluxync NSFW Detection Work?</Typography>
      <div className="w-[1000px] bg-white p-6 rounded-2xl flex gap-4">
        <div className="basis-1/2 flex flex-col gap-2">
          <div className="flex items-center justify-center w-full">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
              <div className="flex flex-col items-center justify-center p-6">
                <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                </svg>
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500">PNG, JPG or JPEG (MAX. 3MB)</p>
                {file && (
                  <p className="text-gray-700 text-sm mt-6 break-all">
                    Uploaded file: {file.name} ({(file.size / 1024).toFixed(2)} KB)
                  </p>
                )}
              </div>
              {!loading && <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} />}
            </label>
          </div>
          {fileError && <p className="text-red-500 text-sm text-center mt-2">{fileError}</p>}
          {file && (
            <button
              disabled={loading}
              onClick={handleSubmit}
              className="bg-[#211C64] text-white px-4 py-2 rounded-lg mt-4"
            >
              Detect
            </button>
          )}
        </div>
        <div className="basis-1/2 flex flex-col gap-4">
          <h1 className="text-lg">
            The result will be here:
          </h1>
          {
            loading && (
              <div className="flex justify-center mt-2">
                <Spinner color="indigo" className="w-12 h-12" />
              </div>
            )
          }
          {result && !loading && <p className="text-sm"><pre>{JSON.stringify(result, null, 2)}</pre></p>}
          {fetchError && !loading && <p className="text-red-500 text-sm">{fetchError}</p>}
        </div>
      </div>
    </div>
  );
}