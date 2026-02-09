'use client'

export const NailHome = () => {
  return (
    <div>
        {/* Action Buttons */}
        <div className="p-4 bg-pink-100 rounded-2xl shadow-inner-soft flex justify-around items-center mb-6">
          <button className="text-sm  rounded-full px-5 py-2 shadow-md">新增收入</button>
          <button className="text-sm  text-pink-500 ring-2 ring-pink-400 rounded-full px-5 py-2 shadow-lg">新增支出</button>
          <button className="text-sm  rounded-full px-5 py-2 shadow-md">新增支出</button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Today's Income */}
          <div className="bg-pink-100 p-4 rounded-2xl shadow-soft">
            <p className="text-sm text-gray-600">今日收入:</p>
            <p className="text-3xl font-bold text-gray-800 mt-1">¥320</p>
            <div className="mt-3 flex justify-end">
              <div className="w-12 h-6 bg-pink-200 rounded-full p-1 flex items-center">
                <div className="w-4 h-4 bg-pink-400 rounded-full shadow-md"></div>
              </div>
            </div>
          </div>

          {/* Customer Management */}
          <div className="bg-orange-50 p-4 rounded-2xl shadow-soft">
            <p className="text-sm text-gray-600 mb-2">客户管理</p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="flex items-center"><div className="w-2 h-2 rounded-full bg-yellow-400 mr-2"></div>今日预约</span>
                <span></span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center"><div className="w-2 h-2 rounded-full bg-pink-400 mr-2"></div>2人</span>
                <span></span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center"><div className="w-2 h-2 rounded-full bg-red-400 mr-2"></div>待跟进</span>
                <span></span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center"><div className="w-2 h-2 rounded-full bg-gray-400 mr-2"></div>3人</span>
                <span></span>
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Expense */}
        <div className="mt-4 bg-orange-50 p-4 rounded-2xl shadow-soft">
          <p className="text-sm text-gray-600">本月支出:</p>
          <p className="text-3xl font-bold text-gray-800 mt-1">¥150</p>
          <div className="mt-3 flex justify-end">
            <div className="w-12 h-6 bg-orange-200 rounded-full p-1 flex items-center justify-end">
              <div className="w-4 h-4  rounded-full shadow-md"></div>
            </div>
          </div>
        </div>

    </div>
  )
}