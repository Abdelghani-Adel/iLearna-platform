import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";
import { UseFormSetValue, FieldValues, Path } from "react-hook-form";

interface FileInputProps<T extends FieldValues> {
  label: string;
  name: Path<T>; // Ensures name matches a key of form values
  setValue: UseFormSetValue<T>; // Correct typing for setValue
  accept?: string;
  helperText?: string;
  error?: string;
}

const FileInput = <T extends FieldValues>({
  label,
  name,
  setValue,
  accept = "*",
  helperText,
  error,
}: FileInputProps<T>) => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const fileList = e.target.files;
      setFileName(fileList[0].name); // Display uploaded file name
      setValue(name, fileList as any); // Update react-hook-form state
    }
  };

  return (
    <div>
      <label className="block mb-1 text-gray-700">{label}</label>
      <div className="relative border rounded-md p-2 cursor-pointer">
        <input
          type="file"
          accept={accept}
          onChange={handleChange}
          className="w-full opacity-0 absolute inset-0 cursor-pointer"
        />
        <div className="flex items-center justify-center text-blue-500 cursor-pointer">
          <FiUpload className="mr-2" />
          <span>{fileName || "Upload File"}</span>
        </div>
      </div>

      {helperText && <p className="text-xs mt-1 text-gray-500">{helperText}</p>}

      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default FileInput;
