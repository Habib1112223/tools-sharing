import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import img from '../../assets/image/sign up.jpg';
import useTitle from '../../hooks/useTitle';
import Swal from 'sweetalert2';
import { useState } from 'react';

const Register = () => {
      const { createUser, updateUser, signInWithGoogle } = useContext(AuthContext);
      const [passwordError, setPasswordError] = useState('');
      const [error, setError] = useState("");
      const navigate = useNavigate()
      useTitle("Register")
      
      const handleRegister = (e) => {
            e.preventDefault()
            console.log(e.currentTarget);
            const form = new FormData(e.currentTarget)

            const name = form.get('name');
            const photo = form.get('photo');
            const email = form.get('email');
            const password = form.get('password');
            console.log(name, photo, email, password);

            setPasswordError("")
            setError("")

            if (password.length < 6) {
                  setPasswordError("Password should be at least 6 characters.");
                  return
            } else if (!/[A-Z]/.test(password)) {
                  setPasswordError('Your password should have at least one upper case characters.');
                  return
            } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
                  setPasswordError('Your password should have at least one special character.');
            }


            // create user
            createUser(email, password)
                  .then(result => {
                        console.log(email, password)

                        console.log(result.user);
                        const userProfile = {
                              displayName: name,
                              photoURL: photo
                        }
                        updateUser(userProfile)
                              .then(result => {
                                    console.log("Profile updated")
                                    navigate('/', { replace: true })
                                    Swal.fire("Successfully Account Created")
                              })
                              .catch(error => set(error.message))

                  })
                  .catch(error => {
                        console.error(error)
                        setError(error.message)
                  })

      }

      const handleSignInWithGoogle = () => {
            signInWithGoogle()
                  .then((result) => {
                        const user = result.user;
                        navigate('/', { replace: true })
                        Swal.fire("Successfully ")

                  })
                  .catch(error => setError(error.message))
      }

      return (
            <div>
                  <div className="min-h-screen flex justify-center items-center p-6">
                        <div className="lg:w-6/12 p-6 shadow-lg rounded-xl">
                              <div className="text-center ">
                                    <img className='lg:ml-32 h-[350px] w-[350px]' src={img} alt="login_image" />
                                    <h1 className="text-5xl font-bold">Sign Up</h1>

                              </div>
                              <div className="card flex-shrink-0 w-full bg-base-100">
                                    <form onSubmit={handleRegister} className="card-body ">
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Name</span>
                                                </label>
                                                <input
                                                      type="text"
                                                      required
                                                      name='name'
                                                      placeholder="Enter Your Name" className="input input-bordered border-amber-600" />
                                             
                                          </div>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Email</span>
                                                </label>
                                                <input
                                                      type="email"
                                                      required
                                                      name='email'
                                                      placeholder="Enter Your Email"
                                                      className="input input-bordered border-amber-600" />
                                          
                                          </div>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Photo URL</span>
                                                </label>
                                                <input
                                                      type="text"
                                                      name='photo'
                                                      required
                                                      placeholder="Enter Your Photo URL"
                                                      className="input input-bordered border-amber-600" />
                                                
                                          </div>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Password</span>
                                                </label>
                                                <input
                                                      type="password"
                                                      name='password'
                                                      required
                                                      placeholder="password"
                                                      className="input input-bordered border-amber-600" />
                                                <label className="label">
                                                      <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                                </label>
                                                <p className='text-red-500'>{passwordError}</p>
                                          </div>
                                         
                                          <div className="form-control mt-6">
                                                <button type="submit" className="btn btn-primary">Sign Up</button>
                                          </div>
                                    </form>
                                    {
                                          error && <p className="text-red-700">{error}</p>
                                    }

                                    <p className="text-center">Already have an account?<Link className="text-purple-600 font-bold" to="/login">Login</Link></p>

                                    <div className="text-center">
                                          <button onClick={handleSignInWithGoogle} className="btn btn-outline text-amber-400 hover:bg-amber-500 font-bold px-10 py-1 m-4">google</button>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Register;
