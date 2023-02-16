/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "../../api";
import { Input, message } from "antd";
import { Language } from "../../lang/Languages";
import { useSelector } from "react-redux";

// import {MainApi} from "../../config";

function Register({ setStep, setK }) {
    const password = useRef()
    const [values, setValues] = useState({
        // name: "",
        password: "",
        phone:"",
        region: ""
    })
    let navigate = useNavigate()
    let token = localStorage.getItem('token')
    const handleSubmit = (e) => {
        e.preventDefault()
        if (values?.name !== "" || values?.password !== "") {
            axios.post(`user/add`, values).then(e => {
                setStep("code")
                setK(e?.data?.data?.key)
            }
            )
                .catch(err => console.error(err))
        } else {
            message.warn("Fill the form completely")
        }
    }
    const { phone, region, pass, l, andijon, toshkent, fargona, jizzah, xorazm, namangan, navoiy, qashqadaryo, qoraq, samarqand, sirdaryo, surxondaryo, toshkentvil } = Language

    const { lang } = useSelector((state) => state.lang);

    useEffect(() => {
        if (!!token) navigate('/admin/cards')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token])

    return (
        <>
            <div className='accountbg'></div>
            <div className='home-btn d-none d-sm-block'>
                <a href='/' className='text-white'>
                    <i className='fa-solid fa-house'></i>
                </a>
            </div>
            <div className='wrapper-page'>
                <div className='card card-pages shadow-none'>
                    <div className='card-avto-body'>
                        <div className='text-center m-t-0 m-b-15'>
                            <a href='' className='logo logo-admin'>
                                <h1>RAUTO</h1>
                            </a>
                        </div>
                        <h5 className='font-18 text-center'></h5>
                        <form
                            className='form-horizontal m-t-30 el_form'
                            onSubmit={e => handleSubmit(e)}
                        >

                            <div className='form-group'>
                                <div className='col-12'>
                                </div>
                            </div>
                            <div className='form-group'>
                                <div className='col-12'>
                                    <label>{pass[lang]}</label>
                                    {/* <input
                                        ref={password}
                                        className='form-control password_input'
                                        type='password'
                                        required
                                        name='password'
                                        placeholder={pass[lang]}
                                        onChange={event => setValues({...values, password: event.target.value})}
                                    /> */}
                                    <Input.Password
                                       ref={password}
                                       className='form-control password_input'
                                       type='password'
                                       required
                                       name='password'
                                       placeholder={pass[lang]}
                                       onChange={event => setValues({...values, password: event.target.value})}
                                    />
                                </div>
                            </div>
                            <div className='form-group'>
                                <div className='col-12'>
                                    <label>{phone[lang]}</label>
                                    {/* <input
                                        ref={password}
                                        className='form-control'
                                        type='number'
                                        required
                                        name='phone'
                                        value={values.phone}
                                        placeholder={phone[lang]}
                                        onChange={event => setValues({ ...values, phone: event.target.value })}
                                    /> */}
                                    <Input prefix="+998"
                                        ref={phone}
                                        className='form-control email_input'
                                        type='number'
                                        required
                                        name='number'
                                        placeholder={phone[lang]}
                                        value={values?.phone}
                                        onChange={event => setValues({
                                            ...values,
                                            phone: event.target.value
                                        })}
                                    />
                                </div>
                            </div>
                            <div className='form-group'>
                                <div className='col-12'>
                                    <label>{region[lang]}</label>

                                    <select className='form-control' onChange={(e) => {
                                        setValues({ ...values, region: e.target.value })
                                        console.log(values)
                                    }}>
                                        <option key={'an'}>
                                            {andijon[lang]}
                                        </option>
                                        <option key={'ta'}>
                                            {toshkent[lang]}
                                        </option>
                                        <option key={'ta'}>

                                            {fargona[lang]}
                                        </option>
                                        <option key={'ta'}>
                                            {jizzah[lang]}
                                        </option>
                                        <option key={'ta'}>

                                            {xorazm[lang]}
                                        </option>
                                        <option key={'ta'}>
                                            {namangan[lang]}

                                        </option>
                                        <option key={'ta'}>
                                            {navoiy[lang]}

                                        </option>
                                        <option key={'ta'}>
                                            {qashqadaryo[lang]}

                                        </option>
                                        <option key={'sa'}>
                                            {qoraq[lang]}
                                        </option>
                                        <option key={'sa'}>
                                            {samarqand[lang]}
                                        </option>
                                        <option key={'sa'}>
                                            {sirdaryo[lang]}
                                        </option>
                                        <option key={'sa'}>
                                            {surxondaryo[lang]}
                                        </option>
                                        <option key={'sa'}>
                                            {toshkentvil[lang]}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className='form-group text-center m-t-20'>
                                <div className='col-12'>
                                    <button
                                        className='btn btn-primary btn-block btn-lg waves-effect waves-light'
                                        type='submit'
                                    >
                                        {l[lang]}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
