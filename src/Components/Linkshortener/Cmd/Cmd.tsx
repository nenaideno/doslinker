import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import './Cmd.scss';
import barcode from './../../../assets/img/barcode.png'

const Cmd = (props: any) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data: any)=> {
        props.addQuery(data.query)
        props.generateResult(data.query)
    }

    const restartAll = () => {
        props.addQuery('')
        props.actionCompleteSwitcher()
    }

    return <div className="row cmd-item">
        <div className="header-call row align-items-center">
            <span>ВВЕДИТЕ ССЫЛКУ ДЛЯ СОКРАЩЕНИЯ...</span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row align-items-center">
                <div className="col-sm">
                    <span>{'doslinker:\>'} </span><input required={true} autoComplete='off' {...register("query", { required: true })} pattern="[-a-zA-Z0-9@:%_\+.~#?&\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/=]*)?" className="cmd-input" type='text' />
                </div>
            </div>
        </form>
        {props.query && <span>
            {!props.actionComplete ? <div className="row align-items-center">
                <span>ССЫЛКА ОБРАБАТЫВАЕТСЯ...</span>
            </div> : <div className="row align-items-center">
                <div className="row">
                    <span>-----------------------------------------------------------------</span>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <span>Сокращенная ссылка: </span>
                        <a target='_blank' href={props.resultURL} className="cmd-result">{props.resultURL}</a>
                        <button onClick={() => { navigator.clipboard.writeText(props.resultURL); alert('Успешно скопированно!') }} className="cmd-button">{'{Скопировать}'}</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <img className="cmd-barcode" src={barcode} alt="" /><a download='qrcode' href={barcode} className="cmd-link cmd-button">{'{Сохранить}'}</a>
                    </div>
                </div>
                <div className="row">
                    <span>-----------------------------------------------------------------</span>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <button onClick={() => restartAll()} className="cmd-button">{'{Сгенерировать еще}'}</button>
                    </div>
                </div>
            </div>}
        </span>}

    </div>
}

export default Cmd