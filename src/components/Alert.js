const Alert = (props) => {
    return (
        <section className="fixed left-1/2 -translate-x-1/2 -translate-y-1/2 py-5 px-10 hidden items-center justify-center gap-10 bg-white rounded-[20px] shadow-xl">
            <div className="w-12 h-12 flex items-center justify-center">
                <p>{props.symbol}</p>
            </div>
            <p className="text-3xl font-normal">{props.message}</p>
        </section>
    )
}

export default Alert