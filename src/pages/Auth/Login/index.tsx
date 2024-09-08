import { Button, Input, InputGroup } from 'gaku/components'
import { loginAction } from 'gaku/services/actions'
import { AppDispatch, RootState } from 'gaku/services/store'
import { ActionResponse } from 'gaku/types'
import { browserMind, useForm } from 'gaku/utils'
import { FormEvent, useCallback, useEffect } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Login = () =>
{
    const [form, setForm] = useForm({
        username: '',
        password: ''
    })

    const navigate = useNavigate()
    const dispatch: AppDispatch = useDispatch()
    const { errors } = useSelector((state: RootState) => state.login)

    console.log('[Gaku] Errors:', errors)

    const redirectIfAuthenticated = useCallback(() => navigate('/panel/songs'), [history])

    const isAuthenticated = useCallback(() =>
    {
        const refreshToken = browserMind.remember('refresh_token')
        if(refreshToken) redirectIfAuthenticated()
    }, [redirectIfAuthenticated])

    const loginHandler = (e: FormEvent) =>
    {
        e.preventDefault()
        const res: ActionResponse = { succeed: redirectIfAuthenticated }
        dispatch(loginAction(form, res))
    }

    useEffect(() =>
    {
        isAuthenticated()
    }, [isAuthenticated])

    return (
        <HelmetProvider>
            <Helmet>
                <title>Login - Gaku Panel</title>
            </Helmet>
            <div className="bg-red-50/20">
                <div className="min-h-screen 2xl:w-7/12 xl:w-10/12 w-full 2xl:px-0 px-6 mx-auto lg:py-24 py-10 flex justify-end">
                    <main className="lg:w-5/12 w-full order-1 lg:order-2">
                        <form
                            className="bg-white min-h-[300px] px-14 py-16 rounded-xl drop-shadow-[0_5px_25px_rgba(0,0,0,0.1)]"
                            onSubmit={loginHandler}
                        >
                            <h2 className="text-3xl font-semibold text-[#555555]">Login</h2>
                            <p className="mt-4 mb-8 text-[#999999] font-light text-sm">
                                Please login to manage data.
                            </p>
                            <InputGroup className="mb-5">
                                <Input
                                    type="text"
                                    placeholder="Username"
                                    onChange={event => setForm('username', event.target.value)}
                                    name="username"
                                    id="username"
                                    // errorMessage={errors.username && errors.username.msg}
                                />
                            </InputGroup>
                            <InputGroup className="mb-9">
                                <Input
                                    type="password"
                                    placeholder="Password"
                                    onChange={event => setForm('password', event.target.value)}
                                    name="password"
                                    id="password"
                                    // errorMessage={errors.password && errors.password.msg}
                                />
                            </InputGroup>
                            <Button className="w-full" type="submit">Login</Button>
                        </form>
                    </main>
                </div>
            </div>
        </HelmetProvider>
    )
}

export default Login