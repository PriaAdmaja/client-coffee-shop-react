const Alert = () => {
    return (
        <section id="modal" className="fixed left-1/2 -translate-x-1/2 -translate-y-1/2 py-5 px-10 hidden items-center justify-center gap-10 bg-white rounded-[20px] shadow-xl">
            <div id="modal-mark" className="w-12 h-12 flex items-center justify-center">
                <p id="mark-symbol"></p>
            </div>
            <p id="modal-message" className="text-3xl font-normal"></p>
        </section>
    )
}

export default Alert