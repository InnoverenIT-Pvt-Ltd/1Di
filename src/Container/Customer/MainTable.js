import React from 'react';
function MainTable (props) {
    
  const data = {
        "Completed puzzle dimension": '24x18 inch / 60x45 cm',
        "Piece count": "500pc",
        "Packaging":"Set-Up Box",
        "Age group": '6+',
        "Package dimension": '12x8x2 inch / 30x20x5 cm',
        "Weight": '0.56lb'
    }
console.log("ddddr",props.witoutPrice)
  return (
    
    <table className="  min-w-[70%] border-collapse border border-gray-200">
      <tbody>
        {/* {Object.keys(props.witoutPrice).map((key) => (
          <tr key={key} className="bg-gray-50 odd:bg-white">
            <th className="p-2 text-left font-medium text-gray-600 border border-gray-200">{key}</th>
            <td className="p-2 border border-gray-200">{data[key]}</td>
          </tr>
        ))} */}
         <tr  className="bg-gray-50 odd:bg-white">
            <th className="p-2 text-left font-medium text-gray-600 border border-gray-200">Completed puzzle dimension</th>
            <td className="p-2 border border-gray-200">
              {/* {props.witoutPrice.hsn} */}
              24x18 inch / 60x45 cm
            </td>
          </tr>
          <tr  className="bg-gray-50 odd:bg-white">
            <th className="p-2 text-left font-medium text-gray-600 border border-gray-200">Piece count</th>
            <td className="p-2 border border-gray-200">
              {/* {props.witoutPrice.hsn} */}
              500pc
            </td>
          </tr>
          <tr  className="bg-gray-50 odd:bg-white">
            <th className="p-2 text-left font-medium text-gray-600 border border-gray-200">Age group</th>
            <td className="p-2 border border-gray-200">
              {/* {props.witoutPrice.hsn}  */} 6+
              </td>
          </tr>
          <tr  className="bg-gray-50 odd:bg-white">
            <th className="p-2 text-left font-medium text-gray-600 border border-gray-200">Package dimension</th>
            <td className="p-2 border border-gray-200">{props.witoutPrice.hsn}</td>
          </tr>
<tr  className="bg-gray-50 odd:bg-white">
            <th className="p-2 text-left font-medium text-gray-600 border border-gray-200">Hsn</th>
            <td className="p-2 border border-gray-200">{props.witoutPrice.hsn}</td>
          </tr>
          <tr  className="bg-gray-50 odd:bg-white">
            <th className="p-2 text-left font-medium text-gray-600 border border-gray-200">Weight</th>
            <td className="p-2 border border-gray-200">{props.witoutPrice.netWeight}</td>
          </tr>
          <tr  className="bg-gray-50 odd:bg-white">
            <th className="p-2 text-left font-medium text-gray-600 border border-gray-200">Attribute</th>
            <td className="p-2 border border-gray-200">{props.witoutPrice.attributeName} {props.witoutPrice.subAttributeName}</td>
          </tr>
          <tr  className="bg-gray-50 odd:bg-white">
            <th className="p-2 text-left font-medium text-gray-600 border border-gray-200">Category</th>
            <td className="p-2 border border-gray-200">{props.witoutPrice.categoryName} {props.witoutPrice.subCategoryName}</td>
          </tr>
      </tbody>
    </table>
    
  );
};

export default MainTable;