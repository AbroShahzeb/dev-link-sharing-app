import React, { useState } from "react";
import { Upload } from "antd";
import { IconUploadImage } from "../assets/svgComponents/IconUploadImage";
import { useSelector } from "react-redux";

export const CustomImageUploader = ({ onImageChange, className = "" }) => {
  const [image, setImage] = useState(
    useSelector((state) => state.user.picture)
  );

  const handleImageUpload = ({ file }) => {
    const imageURL = URL.createObjectURL(file);

    setImage(imageURL); // Store the uploaded image
    if (onImageChange) {
      onImageChange(file); // Callback if needed
    }
  };

  return (
    <div className={`flex flex-col gap-4 items-center ${className}`}>
      <div
        className={`relative w-[193px] h-[193px] rounded-lg flex justify-center items-center ${
          image ? "bg-black/50" : "bg-primary-lightest"
        }`}
      >
        {image ? (
          <>
            <img
              src={image}
              alt="Uploaded"
              className="w-full h-full object-cover rounded-[12px]"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-[12px] flex flex-col items-center justify-center text-white">
              <Upload
                accept="image/*"
                showUploadList={false}
                customRequest={({ file }) => handleImageUpload({ file })}
              >
                <div classsName="flex flex-col items-center gap-2">
                  <div className="text-white flex justify-center">
                    <IconUploadImage />
                  </div>
                  <p className="text-white heading-sm cursor-pointer">
                    Change Image
                  </p>
                </div>
              </Upload>
            </div>
          </>
        ) : (
          <Upload
            accept="image/*"
            showUploadList={false}
            customRequest={({ file }) => handleImageUpload({ file })}
          >
            <div className="flex flex-col items-center gap-2">
              <div className="text-primary">
                <IconUploadImage />
              </div>
              <p className="text-primary heading-sm cursor-pointer">
                + Upload Image
              </p>
            </div>
          </Upload>
        )}
      </div>

      {/* <p className="text-gray-600 text-lg">
        {image ? uploadedText : placeholder}
      </p> */}

      {/* {image && (
        <Button
          type="text"
          onClick={handleRemoveImage}
          className="text-red-600"
        >
          Remove Image
        </Button>
      )} */}
    </div>
  );
};
