const List = ()=>{
    return(
      <div className="flex flex-col w-full">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center">
                <thead className="border-b bg-gray-800">
                  <tr>
                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                      Nome
                    </th>
                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                      Quantidade
                    </th>
                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                      Data
                    </th>
                    <th scope="col" className="text-sm font-medium text-white px-6 py-4"> 
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Gustavo Lopes
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      $0kg
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      21/05/2022
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      ...
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
        
    )
}

export default List