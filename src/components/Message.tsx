import React from 'react';

interface Props {
    urlImage: string | null
}

export const Message = ({ urlImage }: Props) => {
    return (
        <>
            {
                urlImage && <span className='url-cloudinary-sumbit'>
                    Your Image uploaded successfully! ✅ 
                    <br/>
                    <br/>
                    <a className='viewImage' target='_blank' href={urlImage}> View Image</a>
                </span>
            }
        </>
    )
}