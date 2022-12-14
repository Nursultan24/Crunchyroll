import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {FaNimblr} from "react-icons/fa"
import {useForm} from "react-hook-form";
import {loginAccount} from "../../redux/reducers/user";
import axios from "axios";
import {useDispatch} from "react-redux";

const Register = () => {

    const [show, setShow] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const {
        register,
        reset,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm({mode:"onBlur"})

    const onSubmit = (data) => {
        axios.post('http://localhost:8080/register', data)
            .then((resolve) => {
                dispatch(loginAccount({
                    ...resolve.data.user,
                    token: resolve.data.accessToken
                }));
                navigate('/');
                localStorage.setItem('user', JSON.stringify({
                    ...resolve.data.user,
                    token: resolve.data.accessToken
                }))
            }).catch((err) => alert(err))
    };

    return (
        <section>
            <ul className="auth__header">
                <Link to={'/'}>
                    <div className="auth__logo">
                        <FaNimblr/>
                        crunchyroll
                    </div>
                </Link>
            </ul>
            <div className="auth">


                <div className="auth__block">

                    <h2 className='auth__title'>Регистрация</h2>
                    <form onSubmit={handleSubmit(onSubmit)} noValidate className=" register__form reg__block">

                        <div className="auth__form-block">
                            <input {...register('email',{
                                required: {
                                    message: 'Email обязательно к заполнению',
                                    value: true
                                },
                                minLength: {
                                    message: 'Минимум 10 символа',
                                    value: 10
                                },
                                pattern: {
                                    message: 'Напишите правильно свой email',
                                    value:  /^[^ ]+@[^ ]+\.[a-z]{2,5}$/
                                }
                            })} type="email" className="auth__form-input" placeholder="Email"/>
                            <p className='register__form-error'>
                                {errors.email && errors.email?.message}
                            </p>
                        </div>
                        <div className="auth__form-block">
                            <input {...register('password', {
                                required: {
                                    message: "Пароль обязателен к заполнению",
                                    value: true
                                },
                                pattern: {
                                    value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g,
                                    message: 'Пароль должен содержать не менее 8 символов, заглавную букву, число!'
                                }
                            })} type={show ? 'text' : 'password'} className="auth__form-input" placeholder="Пароль"/>
                            <p className='register__form-error'>
                                {errors.password && errors.password?.message}
                            </p>
                        </div>

                        <label className='register__form-label register__form-label_checkbox'>
                            <input checked={show} onChange={(e) => setShow(!show)}  className='register__form-input register__form-input_checkbox' type="checkbox"/>
                            <span className='register__form-show'>Показать пароль</span>
                        </label>

                    <div className="auth__form-block">
                        <button className="auth__form-btn" type={"submit"}>
                            Зарегистрироваться
                        </button>
                    </div>
                    <p className="auth__reg">
                        Есть аккаунт?
                        <Link className="auth__reg-link" to={'/auth'}>
                            ВОЙТИ
                        </Link>
                    </p>
                    </form>

                </div>
            </div>
            <div className="container">
                <div className="auth__bottom">
                    <p className='auth__bottom-text'>© Ellation, LLC</p>
                    <p className='auth__bottom-text'>РУССКИЙ</p>
                </div>
            </div>



        </section>
    );
};


export default Register;