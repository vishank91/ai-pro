import React, { useState } from 'react'
import TextToText from '../../Components/User/Generation/TextToText'
import TextToImage from '../../Components/User/Generation/TextToImage'
import ImageToImage from '../../Components/User/Generation/ImageToImage'
import TextToVideo from '../../Components/User/Generation/TextToVideo'
import TextToSpeech from '../../Components/User/Generation/TextToSpeech'

export default function ProfilePage() {
    let [option, setOptions] = useState("Text To Text")


    return (
        <>
            <section id="pricing" className="sp position-relative inline-style-054">
                <div className="container my-3">
                    <div className="row">
                        <div className="col-md-3">
                            <ul className="list-group bg-dark">
                                <li className={`list-group-item ${option === "Text To Text" ? 'bg-primary' : 'bg-dark'} text-light`} onClick={() => setOptions("Text To Text")}>Text To Text</li>
                                <li className={`list-group-item ${option === "Text To Image" ? 'bg-primary' : 'bg-dark'} text-light`} onClick={() => setOptions("Text To Image")}>Text To Image</li>
                                <li className={`list-group-item ${option === "Image To Image" ? 'bg-primary' : 'bg-dark'} text-light`} onClick={() => setOptions("Image To Image")}>Image To Image</li>
                                <li className={`list-group-item ${option === "Text To Video" ? 'bg-primary' : 'bg-dark'} text-light`} onClick={() => setOptions("Text To Video")}>Text To Video</li>
                                <li className={`list-group-item ${option === "Text To Speech" ? 'bg-primary' : 'bg-dark'} text-light`} onClick={() => setOptions("Text To Speech")}>Text To Speech</li>
                            </ul>
                        </div>
                        <div className="col-md-9">
                            {option === "Text To Text" ? <TextToText /> : null}
                            {option === "Text To Image" ? <TextToImage /> : null}
                            {option === "Image To Image" ? <ImageToImage /> : null}
                            {option === "Text To Video" ? <TextToVideo /> : null}
                            {option === "Text To Speech" ? <TextToSpeech /> : null}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
