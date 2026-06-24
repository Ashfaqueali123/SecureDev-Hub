import React, { useState } from 'react';
import { CheckCircle, AlertTriangle, ShieldCheck } from 'lucide-react';

const Dashboard = () => {
  const [tasks] = useState([
    { id: 1, name: "SQL Injection Prevention", status: "Verified", severity: "Critical" },
    { id: 2, name: "CSRF Token Implementation", status: "Pending", severity: "High" },
    { id: 3, name: "SSL/TLS Configuration", status: "Verified", severity: "Medium" }
  ]);

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">System Status</h2>
          <p className="text-gray-400 text-sm md:text-base">Current compliance with security standards.</p>
        </div>
        <div className="bg-cardBg p-4 rounded-xl border border-gray-800 flex items-center gap-4 w-full md:w-auto">
          <div className="text-right">
            <span className="text-3xl md:text-4xl font-bold text-green-500">82%</span>
            <p className="text-[10px] uppercase tracking-widest text-gray-500">Secure Score</p>
          </div>
          <ShieldCheck className="text-green-500 w-10 h-10" />
        </div>
      </div>

      {/* Table Container with Horizontal Scroll */}
      <div className="bg-cardBg rounded-xl border border-gray-800 overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[600px]">
            <thead className="bg-[#252525] text-gray-400 text-xs uppercase tracking-wider">
              <tr>
                <th className="p-5 font-bold">Security Goal</th>
                <th className="p-5 font-bold">Severity</th>
                <th className="p-5 font-bold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {tasks.map(task => (
                <tr key={task.id} className="hover:bg-[#222] transition">
                  <td className="p-5 font-medium text-white">{task.name}</td>
                  <td className="p-5">
                    <span className={`px-2 py-1 rounded-md text-[10px] font-bold ${
                      task.severity === 'Critical' ? 'bg-red-900/30 text-accentRed border border-accentRed/50' : 'bg-orange-900/30 text-orange-400 border border-orange-400/50'
                    }`}>
                      {task.severity}
                    </span>
                  </td>
                  <td className="p-5">
                    <span className={`flex items-center gap-2 text-sm ${task.status === 'Verified' ? 'text-green-500' : 'text-yellow-500'}`}>
                      {task.status === 'Verified' ? <CheckCircle size={14}/> : <AlertTriangle size={14}/>}
                      {task.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;