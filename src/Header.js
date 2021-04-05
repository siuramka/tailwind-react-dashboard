const Header = () => {
    return (
        <header className="bg-white border-b flex items-center justify-center h-14">
            <div className="flex flex-grow items-center justify-between px-3 ml-8 mr-8">
                <h1 className="text-lg font-semibold">Home</h1>
                <button className="text-blue-700 underline">Log in</button>
            </div>
        </header>
    )
}
export default Header;