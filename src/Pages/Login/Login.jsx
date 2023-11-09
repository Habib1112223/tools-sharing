import { useContext } from 'react';
import img from '../../assets/image/login-2.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { AuthContext } from '../../Providers/AuthProvider';
import { useState } from 'react';
import Swal from 'sweetalert2';


const Login = () => {
      const navigate = useNavigate()
      const { signIn, signInWithGoogle } = useContext(AuthContext);
      const [error, setError] = useState('');
      const location = useLocation();

      const from = location.state?.from?.pathname || '/';

      const handleLogin = e => {
            e.preventDefault();
            setError('')
            console.log(e.currentTarget);
            const form = new FormData(e.currentTarget)
            const email = form.get('email');
            const password = form.get('password');

            setError("")
            setError("")

            if (password.length < 6) {
                  setError("Password should be at least 6 characters.");
                  return
            } else if (!/[A-Z]/.test(password)) {
                  setError('Your password should have at least one upper case characters.');
                  return
            } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
                  setError('Your password should have at least one special character.');
            }

            signIn(email, password)
            .then(result => {
                  console.log(result)
                  Swal.fire('Successfully Login')
                  navigate(from, { replace: true })
            })
            .catch(error => {
                  setError(error.message)
            })
}

      const handleSignInWithGoogle = () => {
            signInWithGoogle()
                  .then((result) => {
                        const user = result.user;
                        console.log(user);
                        navigate(from, { replace: true })
                        Swal.fire("Successfully")
                  })
                  .catch(error => setError(error.message))
      }

      return (
            <div>
                  <div className="min-h-screen flex justify-center items-center p-6">
                        <div className="lg:w-6/12 p-6 shadow-lg rounded-xl">
                              <div className="text-center ">
                                    <img className='lg:ml-32 h-[350px] w-[350px]' src={img} alt="login_image" />
                                    <h1 className="text-5xl font-bold">Please Login</h1>

                              </div>
                              <div className="card flex-shrink-0 w-full bg-base-100">
                                    <form onSubmit={handleLogin} className="card-body ">
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Email</span>
                                                </label>
                                                <input
                                                      type="email"
                                                      required
                                                      name='email'
                                                      placeholder="email"
                                                      className="input input-bordered border-amber-600" />
                                                
                                          </div>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Password</span>
                                                </label>
                                                <input
                                                      type="password"
                                                      required
                                                      name='password'
                                                      placeholder="password"
                                                      className="input input-bordered border-amber-600" />
                                                <label className="label">
                                                      <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                                </label>
                                                {
                                                      error && <p className="text-red-700">{error}</p>
                                                }
                                          </div>
                                          <div className="form-control mt-6">
                                                <button type="submit" className="btn btn-primary">Login</button>
                                          </div>
                                    </form>
                                    <p className="text-center">Do not have an account?<Link className="text-purple-600 font-bold" to="/register">Sign Up</Link></p>
                                    <div className="text-center">
                                          <button onClick={handleSignInWithGoogle} className="btn btn-outline text-amber-400 hover:bg-amber-500 font-bold px-10 py-1 m-4">google</button>
                                    </div>

                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Login;