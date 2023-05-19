import Image from 'next/image';
import React from 'react';
//icons
import { ImCancelCircle } from 'react-icons/im'
const Modal=({show,item,onClose})=>{
    if(!show)
    {
        return null;
    }
    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    return(
        <>
            <div className="overlay z-20 ">
                <div className="overlay-inner rounded-md">
                    {/* CLOSE BUTTON */}
                    <button 
                        className="close text-3xl" 
                        onClick={onClose}
                    >
                        <ImCancelCircle />
                    </button>

                    <div className="inner-box">
                        <Image 
                            src={thumbnail} alt="" 
                            width={150}
                            height={200}
                        />
                        <div className="info">
                            <h1>{item.volumeInfo.title}</h1>
                            <h3>{item.volumeInfo.authors}</h3>
                            <h4>{item.volumeInfo.publisher}<span>{item.volumeInfo.publishedDate}</span></h4><br/>
                            <a href={item.volumeInfo.previewLink}><button>More</button></a>
                        </div>
                    </div>
                    <h4 className="description">{item.volumeInfo.description}</h4>
                </div>
            </div>
        </>
    )
}
export default Modal;