import React from 'react';

function MainTable (props) {
  const data = {
  
    "Length": {
      retail: props.productsByproductId.length || "0",
      inner: props.productsByproductId.innerLength || "0",
      master: props.productsByproductId.masterLength || "0",
    },
    "Depth": {
      retail: props.productsByproductId.width || "0",
      inner: props.productsByproductId.innerWidth || "0",
      master: props.productsByproductId.masterWidth || "0",
    },
    "Hight": {
      retail: props.productsByproductId.height || "0",
      inner: props.productsByproductId.innerHeight || "0",
      master: props.productsByproductId.masterHeight || "0",
    },
    "Volume": {
      retail: props.productsByproductId.volume || "0",
      inner: props.productsByproductId.innerVolume || "0",
      master: props.productsByproductId.masterVolume || "0",
    },
    "Weight": {
      retail: props.productsByproductId.weight || "0",
      inner: props.productsByproductId.innerWeight || "0",
      master: props.productsByproductId.masterWeight || "0",
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
