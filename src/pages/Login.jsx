import { useContext } from 'react';
import { SazerContext } from '../context/AppContext';
import Analizer from './Analizer';
import SazerMenu from '../components/SazerMenu';

export default function Login() {

  const { 
    handleLogin, 
    username, 
    setUsername, 
    password, 
    setPassword, 
    error, 
    isLoggedIn, 
    isReady 
  } = useContext(SazerContext);

  return (
    <div>
      {isLoggedIn ? (
        isReady ? (
          <SazerMenu />
        ) : (
          <Analizer />
        )
      ) : (
        <div className='flex flex-col justify-center items-center text-white text-center'>
          <h2 className='mt-20 text-4xl font-semibold'>Let’s have better financial chooses
            <br />with SA<span className='text-[#56A171]'>Z</span>ER</h2>
          <form className='w-auto bg-[#0D1117] rounded-2xl px-16 mt-10' onSubmit={handleLogin}>
            <label className='inline-block text-xl mt-8 mb-6'>Login to start</label>
            <div>
              <input
                className='bg-[#282D34] rounded-md text-[#E1E6EC] py-2 pl-5 pr-20 text-left'
                placeholder='email or username'
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <input
                className='bg-[#282D34] rounded-md text-[#E1E6EC] mt-5 py-2 pl-5 pr-20 text-left'
                placeholder='password'
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className='bg-[#2D684B] text-[#A0CFC6] my-10 py-2 px-8 rounded-md' type="submit">Login</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </form>
          <span className='text-[#E1E6EC] mt-20'>Dont you have an account yet? <span className='text-[#54A293]'> Register here</span></span>
        </div>
      )}
    </div>
  );
};

