import { ShowData } from './const';

export const Show = () => {
    return (
        <div className="grid grid-cols-2 gap-4  h-[164px] mt-4">
            {
                ShowData.map((item, index) => {
                    return (
                        <div key={index} className="bg-pink-100 p-4 rounded-2xl shadow-soft">
                            <p className="text-sm text-gray-600">{item.title}:</p>
                            <p className="text-3xl font-bold text-gray-800 mt-1">{item.amount}</p>
                            <div className="mt-3 flex justify-end">
                                <div className="w-12 h-6 bg-pink-200 rounded-full p-1 flex items-center">
                                    <div className="w-4 h-4 bg-pink-400 rounded-full shadow-md"></div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}