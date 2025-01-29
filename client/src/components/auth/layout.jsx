import { Link, Outlet } from "react-router-dom";

function AuthLayout() {
    return (
        <div className="flex min-h-screen w-full">
            <div className="hidden lg:flex items-center bg-[linear-gradient(143.49deg,_rgba(0,52,133,0.8)_0%,_rgba(16,81,107,0.8)_45.5%,_rgba(0,51,77,0.8)_91.47%)] w-1/2 px-12 text-white">
                <div className="max-w-md space-y-6 text-primary-foreground m-16">
                    <p className="font-poppins text-[20px] font-semibold leading-[40px] text-left decoration-skip-ink-none">
                        Sign in to
                    </p>
                    <p className="font-poppins text-[40px] font-bold leading-[40px] text-left decoration-skip-ink-none">
                        Aquameter
                    </p>
                    <p className="font-poppins text-[10px] font-semibold text-left decoration-skip-ink-none m-0">
                    If you don't have an account register
                    </p>
                    <p className="font-poppins text-[10px] font-semibold  text-left decoration-skip-ink-none">
                        You can <Link to="/auth/register">Register Here !</Link>
                    </p>
                 
                </div>
            </div>
            <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
                <Outlet />
            </div>
        </div>
    );
}

export default AuthLayout;
