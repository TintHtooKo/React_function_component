import React from 'react'

function User({data,remove}){
    const removeHandler = () =>{
        remove(data.uuid);
    }
 
    return(
        <>
            <div className="row mt-5">
                <div className='col-2'>
                    <img src={data.image} style={{width:"50px",height:"50px"}}/>
                </div>
                <div className='col-5'>
                    <strong>Ph : {data.phone} </strong><br/>
                    <strong>Cell : {data.cell}</strong>
                </div>
                <div className='col-3'>
                    <h5 className='mt-2'>{data.name}</h5>
                </div>
                <div className='col-2'>
                    <button className='btn btn-danger' onClick={removeHandler}><i className='fa fa-trash'></i></button>
                </div>
            </div>
            <hr/>
        </>
    );
}

export default User;