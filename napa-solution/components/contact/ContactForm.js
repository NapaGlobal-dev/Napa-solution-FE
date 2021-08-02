import React from 'react';
import { convertArrToObject } from '../../util/converArrayToObject';

const ContactForm = (props) => {
    const data = convertArrToObject(props.data.property);
    return (
        <>
            <div className='textC'>
                <div className='titleC'>お問い合わせ</div>
                <div className='subtitleC'>
                    ご質問がございましたらお気軽にお問合せ下さい。 お電話03-4530-0001にてご連絡頂くか、 下記のフォームにご記入の上、送信下さい。
                </div>
            </div>

            <div
                style={{
                    display:'flex',
                    justifyContent:'center',
                    marginTop:45
                }}
            >
                <div className='containerD'>
                    <div className='tableD'> 
                        <div className='titleD'>会社名</div>
                        <div>
                            <input type='text' className='textBoxD'/>
                        </div>
                        <div className='titleD'>会社名カナ</div>
                        <div>
                            <input type='text' className='textBoxD'/>
                        </div>
                        <div className='titleD'>会社名</div>
                        <div>
                            <input type='text' className='textBoxD'/>
                        </div>
                        <div className='titleD'>会社名</div>
                        <div>
                            <input type='text' className='textBoxD'/>
                        </div>
                        <div className='titleD'>会社名</div>
                        <div>
                            <input type='text' className='textBoxD'/>
                        </div>
                        <div className='titleD'>*お問い合わせ内容</div>
                        <div>
                            <textarea name="お問い合わせ内容" className='textareaD' />
                        </div>
                    </div>
                    <div className='buttonE'>
                        送信する
                        <svg 
                            height='7px'
                            fill='none'
                            strokeWidth='2'
                            stroke='#6C3AF5'
                            strokeDasharray='69px 138px'
                            viewBox="0 0 64 7"
                            style={{position:'absolute', right:-16}}
                        >
                            <path d="M0 6h61.5l-5.2-5.2"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactForm