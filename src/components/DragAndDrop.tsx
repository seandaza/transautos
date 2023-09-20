import React from 'react';
import ImageUploading from "react-images-uploading";
import { useUploadImage } from '../hooks';

import { ImageSelected, BoxDragAndDrop, Message } from './';


export const DragAndDrop = () => {

  const { urlImage, handleChange, images, ...rest } = useUploadImage();

  return (
    <>
      <Message urlImage={urlImage} />
      <ImageUploading multiple={true} value={images} onChange={handleChange} >
        {({
          imageList,
          onImageUpload,
          dragProps,
          isDragging,
          onImageRemove,
          onImageUpdate,
        }) => (
          <>
            {imageList.map((image, index) => (
              <ImageSelected
                key={index}
                img={image.dataURL}
                onImageRemove={() => onImageRemove(index)}
                onImageUpdate={(dataURL) => onImageUpdate(index, dataURL)}
                {...rest}
              />
            ))}
            {imageList.length < 2 && (
              <BoxDragAndDrop {...{ onImageUpload, dragProps, isDragging }} />
            )}
          </>
        )}
      </ImageUploading>
    </>
  )
}
