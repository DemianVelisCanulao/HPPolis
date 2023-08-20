

export default function Gift(){
    const openGift = () => {
        var cloudElement = document.getElementById('form-confirm');
        var confeti = document.getElementById('confeti');
        var arrow = document.querySelector('.icon');
        var pinchaAqui = document.getElementById('pincha-aqui');
        cloudElement?.classList.toggle("hidden-form");      
        confeti?.classList.toggle("hidden-form"); 
        arrow?.classList.toggle("hidden-form"); 
        pinchaAqui?.classList.toggle("hidden-form"); 
    }
    return(
        <div className="birthday-gift">
            <div className="gift">
                <input id='click' onClick={openGift} type='checkbox'/>
                <label className='click' htmlFor='click'></label>
                <div className="wishes">
                    
                </div>
                <div className="sparkles">
                    <div className="spark1"></div>
                    <div className="spark2"></div>
                    <div className="spark3"></div>
                    <div className="spark4"></div>
                    <div className="spark5"></div>
                    <div className="spark6"></div>
                </div>
            </div>
        </div>
    )
}