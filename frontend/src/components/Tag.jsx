import React from 'react';

function Tag(props) {
    return (
             <div className='border-2 border-[#D0FBEB] text-[#D0FBEB] font-semibold p-1'>
                    {props.name}
             </div>
    )
}


export default Tag;