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
            {
              imageList[0]
                ? <ImageSelected  {...{ onImageRemove, onImageUpdate, ...rest }} img={imageList[0].dataURL!} />
                : <BoxDragAndDrop {...{ onImageUpload, dragProps, isDragging }} />
            }
          </>
        )}
      </ImageUploading>
    </>
  )
}

