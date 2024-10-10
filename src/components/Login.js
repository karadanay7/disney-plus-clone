


const Login  = (props) => {
    return (
        
        <div className="flex flex-col items-center justify-center min-h-screen  bg-cover px-10 py-20"style={{ backgroundImage: `url(/images/login-background.jpg)` }} >
            
            <div className="justify-center items-center  w-full ">
          <div className="flex flex-col flex-wrap max-w-[650px] justify-center items-center mx-auto transition-opacity ease-out duration-500 gap-4">
          <img src="/images/cta-logo-one.svg" alt="Logo" className="max-w-[650px]  w-full " />
          <button className="bg-blue-600 tracking-wide font-bold text-lg w-full p-4 rounded hover:bg-blue-500">GET ALL THERE</button>
          <p className="text-sm opacity-90 text-center tracking-wider pb-10"> Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.</p>
            <img src="/images/cta-logo-two.png" alt="Logo" className="max-w-[650px]  w-full " />
          </div>
          </div>
           
        </div>
    )

}



export default Login;