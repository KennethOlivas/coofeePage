

export const GridProduct = () => {
    return (
        <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
            <div className=" relative ">
                <div className=" absolute top-0 left-0 py-2 px-4 bg-white bg-opacity-50 ">
                    <p className="text-xs leading-3 text-gray-800">New</p>
                </div>
                <div className=" relative group">
                    <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                    <img className=" w-full" src="https://i.ibb.co/HqmJYgW/gs-Kd-Pc-Iye-Gg.png" alt="A girl Posing Img" />
                    <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                        <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add to bag</button>
                        <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick View</button>
                    </div>
                </div>
                <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">Wilfred Alana Dress</p>
                <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">$1550</p>
                <p className=" font-normal text-base leading-4 text-gray-600 mt-4">2 colours</p>
            </div>
        </div>
    );
}