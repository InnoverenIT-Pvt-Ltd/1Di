import React from 'react';

function MainTable (props) {
  const data = {
  
    "Length": {
      retail: props.suppliesByproductId.length?props.suppliesByproductId.length.toFixed(2) : "0",
      inner: props.suppliesByproductId.innerLength?props.suppliesByproductId.innerLength.toFixed(2) : "0",
      master: props.suppliesByproductId.masterLength?props.suppliesByproductId.masterLength.toFixed(2) : "0",
    },
    "Depth": {
      retail: props.suppliesByproductId.width?props.suppliesByproductId.width.toFixed(2) : "0",
      inner: props.suppliesByproductId.innerWidth?props.suppliesByproductId.innerWidth.toFixed(2) : "0",
      master: props.suppliesByproductId.masterWidth?props.suppliesByproductId.masterWidth.toFixed(2) : "0",
    },
    "Height": {
      retail: props.suppliesByproductId.height?props.suppliesByproductId.height.toFixed(2) : "0",
      inner: props.suppliesByproductId.innerHeight?props.suppliesByproductId.innerHeight.toFixed(2) : "0",
      master: props.suppliesByproductId.masterHeight?props.suppliesByproductId.masterHeight.toFixed(2) : "0",
    },
    "Volume": {
      retail: props.suppliesByproductId.volume?props.suppliesByproductId.volume.toFixed(2) : "0",
      inner: props.suppliesByproductId.innerVolume?props.suppliesByproductId.innerVolume.toFixed(2) : "0",
      master: props.suppliesByproductId.masterVolume?props.suppliesByproductId.masterVolume.toFixed(2) : "0",
    },
    "Weight": {
      retail: props.suppliesByproductId.weight?props.suppliesByproductId.weight.toFixed(2) : "0",
      inner: props.suppliesByproductId.innerWeight?props.suppliesByproductId.innerWeight.toFixed(2) : "0",
      master: props.suppliesByproductId.masterWeight?props.suppliesByproductId.masterWeight.toFixed(2) : "0",
    },
    // "Arcticle No": {
    //   retail: props.suppliesByproductId.weight || "",
    //   inner: props.suppliesByproductId.hsn || "",
    //   master: ""
    // },
    
    "Category": {
      retail: props.suppliesByproductId.categoryName || "No Data",
      inner: props.suppliesByproductId.categoryName || "No Data",
      master: props.suppliesByproductId.categoryName || "No Data"
    }
  };

  return (
    <table className="min-w-[70%] border-collapse border border-gray-200">
      <thead>
        <tr className="bg-gray-50">
          <th className="p-2 text-left font-medium text-gray-600 border border-gray-200"></th>
          <th className="p-2 text-left font-medium text-gray-600 border border-gray-200">Retail</th>
          <th className="p-2 text-left font-medium text-gray-600 border border-gray-200">Inner</th>
          <th className="p-2 text-left font-medium text-gray-600 border border-gray-200">Master</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(data).map((key) => (
          <tr key={key} className="bg-gray-50 odd:bg-white">
            <th className="p-2 text-left font-medium text-gray-600 border border-gray-200">{key}</th>
            <td className="p-2 border border-gray-200">{data[key].retail}</td>
            <td className="p-2 border border-gray-200">{data[key].inner}</td>
            <td className="p-2 border border-gray-200">{data[key].master}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MainTable;
