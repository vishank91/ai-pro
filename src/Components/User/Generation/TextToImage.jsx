import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getTextToImage, createTextToImage } from "../../../Redux/ActionCreators/TextToImageActionCreators"
export default function TextToImage() {
    let [imageData, setImageData] = useState([])
    let [data, setData] = useState({
        prompt: "",
        ratio: "16:9"
    })
    let [wait, setWait] = useState(false)

    let TextToImageStateData = useSelector(state => state.TextToImageStateData)
    let dispatch = useDispatch()

    function getInputData(e) {
        let { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    function postData(e) {
        e.preventDefault()
        setWait(true)
        dispatch(createTextToImage({ ...data, user: localStorage.getItem("userid") }))
        setWait(false)
    }

    useEffect(() => {
        (() => {
            dispatch(getTextToImage())
            if (TextToImageStateData.length) {
                setImageData(TextToImageStateData)
            }
        })()
    }, [TextToImageStateData.length])
    return (
        <>
            <div className='mb-3'>
                <form onSubmit={postData}>
                    <div className="row">
                        <div className="col-xl-6">
                            <input type="text" name="prompt" onChange={getInputData} className='oinp' placeholder='Enter Prompt' />
                        </div>
                        <div className="col-xl-3">
                            <select name="ratio" onChange={getInputData} className='oinp'>
                                <option>16:9</option>
                                <option>9:16</option>
                                <option>1:1</option>
                            </select>
                        </div>
                        <div className="col-xl-3">
                            {wait ?
                                <p>Please Wait</p> :
                                <button className='btn btn-primary w-100' type='submit'>Submit</button>}
                        </div>
                    </div>
                </form>
            </div>
            <div className='row'>
                {imageData.map((item, index) => {
                    return <div className='col-md-4 col-sm-6' key={index}>
                        <img src={`${import.meta.env.VITE_APP_IMAGE_SERVER}/${item.image}`} height={300} width={"100%"} />
                        <p className='card p-2'>{item.prompt}</p>
                    </div>
                })}
            </div>
        </>
    )
}
