import React from "react";
export interface Root {
  name: string;
  dial_code: string;
  code: string;
}

const TabelCard: React.FC<Root> = ({ name, dial_code, code }) => {
  return (
    <tr>
    <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6">
     {name}
    </td>
    <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
    {dial_code}
    </td>
    <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
     {code}
    </td>
  
  </tr>
  );
};

export default TabelCard;
