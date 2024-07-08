import { FC, useCallback, useState } from 'react';
import { Info, Trash } from 'phosphor-react';
import { Upload, UploadBody, UploadFooter, UploadIcon, UploadText } from 'keep-react';
import { MdCloudUpload } from "react-icons/md";

interface FileUploadProps {
    onFilesChange: (files: File[]) => void;
}

const FileUpload: FC<FileUploadProps> = ({ onFilesChange }) => {
    const [files, setFiles] = useState<File[]>([]);

    // Function to handle file drop
    const onDrop = useCallback((acceptedFiles: File[]) => {
        setFiles(acceptedFiles);
        onFilesChange(acceptedFiles);
    }, [onFilesChange]);

    // Function to handle file removal
    const removeFile = (file: File) => {
        const updatedFiles = files.filter(f => f !== file);
        setFiles(updatedFiles);
        onFilesChange(updatedFiles);
    };

    return (
        <Upload options={{ onDrop }}  className='border-gray-900'>
            <UploadBody className='border-gray-900'>
                <UploadIcon>
                    <MdCloudUpload size={28} />
                </UploadIcon>
                <UploadText>
                    <p className="text-body-3 font-medium text-metal-900 dark:text-white">
                        Drag & Drop or Choose File to Upload / قم بالسحب والإسقاط أو اختيار ملف للتحميل
                    </p>
                    <p className="text-body-4 font-normal text-metal-400 dark:text-metal-300">
                        DOCX, XLSX, PPTX, PDF, and JPG formats.
                    </p>
                </UploadText>
            </UploadBody>
            <UploadFooter isFileExists={files.length > 0}>
                <p className="my-2 flex items-center gap-1 text-body-4 font-normal text-metal-900 dark:text-metal-300">
                    <Info size={16} />
                    Uploaded Files / الملفات التي يتم تحميلها
                </p>
                <ul className="space-y-1">
                    {files.map((file) => (
                        <li
                            key={file.name}
                            className="flex items-center justify-between border-l-4 border-l-metal-100 bg-metal-25 px-4 py-2.5 text-left text-body-4 font-normal capitalize text-metal-600 dark:border-l-metal-600 dark:bg-metal-900 dark:text-metal-300"
                        >
                            {file.name}
                            <button
                                className="cursor-pointer"
                                onClick={() => removeFile(file)}
                            >
                                <Trash size={16} color="red" />
                            </button>
                        </li>
                    ))}
                </ul>
            </UploadFooter>
        </Upload>
    );
};

export default FileUpload;
