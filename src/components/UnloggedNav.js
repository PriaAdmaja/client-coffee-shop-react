const UnloggedNav = () => {
    return (
        <ul class="hidden lg:flex items-center justify-center font-medium list-none gap-10 px-1">
            <li><a href="/login/index.html">Login</a></li>
            <li class="flex items-center justify-center w-[150px] h-11 rounded-full bg-primary"><a href="/sign-up/index.html">Sign Up</a></li>
        </ul>
    );
}


export default UnloggedNav