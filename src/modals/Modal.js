import React from 'react';
import './modal.css'
import '../components/Lists'


const Modal = ({active, setActive}) => {
    return(
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className='modal__content' onClick={e => e.stopPropagation()}>
                <div>
                    <label className='label title'></label>
                    <hr className='line'/>
                </div>
                <form>
                    <label className='label info'>Иванов</label>
                    <label className='label info'>Иван</label>
                    <label className='label info'>Иванович</label>
                    <p></p>
                    <label className='label info'>Подписка</label>
                </form>
                <div className='button'>
                    <button className='btn style' onClick={() => setActive(false)}>Закрыть окно</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
