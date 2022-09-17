import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange }) => {
    return(
        <div>
            <p className='f3'>
                {'This Magic Eye will detect faces in your pictures'}
            </p>
            <div className="center">
                <div className="form center pa4 br3 shadow-5">
                    <input type='text' className='f4 pa2 w-70 center' onChange={onInputChange}/>
                    <button className='w-30 grow f4 link ph1 pv2 dib white bg-light-purple'>Detect</button>
                </div>
            </div>
        </div>

    )
}

export default ImageLinkForm;