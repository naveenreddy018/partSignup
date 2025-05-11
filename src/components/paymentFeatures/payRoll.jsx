import React from 'react';

const PayrollMenu = () => {
  return (
    <div className="p-3  rounded  " style={{ maxWidth: '250px' }}>
      <h5 className="uppercase text-gray-500 mb-4 font-bold text-sm tracking-wide">PAYROLL</h5>
      
      <div className="flex flex-col " >
        <a href="#" className="no-underline mb-3">
          <span style={{textDecorationLine : "none"}} className="text-gray-600 text-sm font-medium">
            For Startups & SMEs
          </span>
        </a>
        
        <div className="flex items-center">
          <a href="#" className="no-underline">
            <span style={{textDecorationLine : "none"}} className="text-gray-600 text-sm font-medium">
              For Enterprises
            </span>
          </a>
          <span style={{textDecoration : "none"}} className="ml-2 px-2 py-1 bg-green-500 text-white rounded text-xs font-bold">
            NEW
          </span>
        </div>
      </div>
    </div>
  );
};

export default PayrollMenu;