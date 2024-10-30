import { useState } from 'react';
import SideBar from './SideBar';
import MainSection from './MainSection';
import NewsSection from './NewsSection';
import ChartSection from './ChartSection';

export default function Login () {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'camilo' && password === 'camilo') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Wrong Credentials');
    }
  };

  const [isReady, setIsReady] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        isReady ? (
          <main className="bg-[#0D1117] grid grid-cols-5 grid-rows-5 gap-10 pt-10">
            <div className="row-span-5">
              <SideBar />
            </div>
            <div className="col-span-2 row-span-5">
              <MainSection />
            </div>
            <div className="col-span-2 row-span-3 col-start-4">
              <NewsSection />
            </div>
            <div className="col-span-2 row-span-2 col-start-4 row-start-4">
              <ChartSection />
            </div>
          </main>
        ) : (
          <div className='flex flex-col justify-center items-center text-white text-center'>
            <h1 className='text-4xl mt-28 font-semibold text-[#E1E6EC]'>SA<span className='text-[#56A171]'>Z</span>ER</h1>
            <h2 className='mt-5 text-3xl '>Type in the company you want to analyze</h2>
            <form className='w-auto bg-[#0D1117] rounded-2xl px-16 mt-10'>
              <div className='py-10 flex flex-col items-center justify-center gap-10'>
                <input
                  className='bg-[#282D34] rounded-md text-[#E1E6EC] py-2 px-12 text-center'
                  placeholder='amazon inc.'
                  type="text"
                  // onChange={}
                />
              
                <button onClick={() => setIsReady(true)} className='bg-[#2D684B] text-[#A0CFC6] py-2 px-8 rounded-md' type="submit">Analyze</button>
              </div>
            </form>
            <span className='text-[#E1E6EC] mt-20'>Why this tool can help you with your financial decisions?</span>
          </div>
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

   