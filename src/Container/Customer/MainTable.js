import React from 'react';

function MainTable (props) {
  const data = {
  
    "Length": {
      retail: props.productsByproductId.length?props.productsByproductId.length.toFixed(2) : "0",
      inner: props.productsByproductId.innerLength?props.productsByproductId.innerLength.toFixed(2) : "0",
      master: props.productsByproductId.masterLength?props.productsByproductId.masterLength.toFixed(2) : "0",
    },
    "Depth": {
      retail: props.productsByproductId.width?props.productsByproductId.width.toFixed(2) : "0",
      inner: props.productsByproductId.innerWidth?props.productsByproductId.innerWidth.toFixed(2) : "0",
      master: props.productsByproductId.masterWidth?props.productsByproductId.masterWidth.toFixed(2) : "0",
    },
    "Height": {
      retail: props.productsByproductId.height?props.productsByproductId.height.toFixed(2) : "0",
      inner: props.productsByproductId.innerHeight?props.productsByproductId.innerHeight.toFixed(2) : "0",
      master: props.productsByproductId.masterHeight?props.productsByproductId.masterHeight.toFixed(2) : "0",
    },
    "Volume": {
      retail: props.productsByproductId.volume?props.productsByproductId.volume.toFixed(2) : "0",
      inner: props.productsByproductId.innerVolume?props.productsByproductId.innerVolume.toFixed(2) : "0",
      master: props.productsByproductId.masterVolume?props.productsByproductId.masterVolume.toFixed(2) : "0",
    },
    "Weight": {
      retail: props.productsByproductId.weight?props.productsByproductId.weight.toFixed(2) : "0",
      inner: props.productsByproductId.innerWeight?props.productsByproductId.innerWeight.toFixed(2) : "0",
      master: props.productsByproductId.masterWeight?props.productsByproductId.masterWeight.toFixed(2) : "0",
    },
    // "Arcticle No": {
    //   retail: props.productsByproductId.weight || "",
    //   inner: props.productsByproductId.hsn || "",
    //   master: ""
    // },
    
    "Category": {
      retail: props.productsByproductId.categoryName || "No Data",
      inner: props.productsByproductId.categoryName || "No Data",
      master: props.productsByproductId.categoryName || "No Data"
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
