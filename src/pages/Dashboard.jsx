import React, { useState } from "react";
import ApexCharts from "react-apexcharts";
import SideBar from "../components/SideBar";

function Dashboard() {
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);

  const lineChartOptions = {
    series: [
      {
        name: "TEAM A",
        type: "area",
        data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33],
      },
      {
        name: "TEAM B",
        type: "line",
        data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43],
      },
    ],
    options: {
      chart: { height: 350, type: "line", zoom: { enabled: false } },
      stroke: { curve: "smooth" },
      fill: { type: "solid", opacity: [0.35, 1] },
      labels: [
        "Dec 01",
        "Dec 02",
        "Dec 03",
        "Dec 04",
        "Dec 05",
        "Dec 06",
        "Dec 07",
        "Dec 08",
        "Dec 09",
        "Dec 10",
        "Dec 11",
      ],
      markers: { size: 0 },
      yaxis: [
        { title: { text: "Series A" } },
        { opposite: true, title: { text: "Series B" } },
      ],
      tooltip: {
        shared: true,
        intersect: false,
        y: { formatter: (y) => (y ? `${y.toFixed(0)} points` : y) },
      },
    },
  };

  const pieChartOptions = {
    series: [44, 55, 67, 83],
    options: {
      chart: { height: 350, type: "radialBar" },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: { fontSize: "22px" },
            value: { fontSize: "16px" },
            total: {
              show: true,
              label: "Total",
              formatter: () => 249,
            },
          },
        },
      },
      labels: ["Apples", "Oranges", "Bananas", "Berries"],
    },
  };

  const dashboardItems = [
    { color: "blue", percentage: "30%", value: "4,510", label: "Item Sales" },
    {
      color: "yellow",
      percentage: "15%",
      value: "2,230",
      label: "Customer Feedback",
    },
    {
      color: "pink",
      percentage: "40%",
      value: "6,300",
      label: "Revenue Growth",
    },
    { color: "green", percentage: "10%", value: "900", label: "Net Profit" },
  ];

  return (
    <div className="px-2 bg-gray-100 flex">
      <SideBar />
      <div
        className={`grid grid-cols-2 divide-x h-screen bg-gray-100 ${
          isSideMenuOpen ? "overflow-hidden" : ""
        }`}
      >
        <div className="p-4 flex flex-col">
          <div
            className="grid grid-cols-2 gap-6 mb-8"
            style={{ width: "1100px" }}
          >
            {dashboardItems.map(
              ({ color, percentage, value, label }, index) => (
                <a
                  key={index}
                  className={`transform hover:scale-105 transition duration-300 shadow-xl rounded-lg bg-white p-5 flex flex-col`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-7 w-7 text-${color}-400`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                    <div
                      className={`bg-${color}-500 rounded-full h-6 px-2 flex items-center justify-center text-white font-semibold text-sm`}
                    >
                      {percentage}
                    </div>
                  </div>
                  <div className="ml-2 flex-1">
                    <div>
                      <div className="mt-3 text-3xl font-bold leading-8">
                        {value}
                      </div>
                      <div className="mt-1 text-base text-gray-600">
                        {label}
                      </div>
                    </div>
                  </div>
                </a>
              )
            )}
            <div class="flex ...">
              <div className="bg-white p-4 shadow-lg rounded-lg">
                <ApexCharts
                  options={lineChartOptions.options}
                  series={lineChartOptions.series}
                  type="line"
                  height={350}
                  width={735}
                />
              </div>
              <div className="bg-white p-4 shadow-lg rounded-lg ml-5">
                <ApexCharts
                  options={pieChartOptions.options}
                  series={pieChartOptions.series}
                  type="radialBar"
                  height={350}
                  width={350}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="col-span-12 mt-5">
        <div className="grid gap-2 grid-cols-1 lg:grid-cols-1">
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h1 className="font-bold text-base">Table</h1>
            <div className="mt-4">
              <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto">
                  <div className="py-2 align-middle inline-block min-w-full">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg bg-white">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                          <tr>
                            <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                              <div className="flex cursor-pointer">
                                <span className="mr-2">PRODUCT NAME</span>
                              </div>
                            </th>
                            <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                              <div className="flex cursor-pointer">
                                <span className="mr-2">Stock</span>
                              </div>
                            </th>
                            <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                              <div className="flex cursor-pointer">
                                <span className="mr-2">STATUS</span>
                              </div>
                            </th>
                            <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                              <div className="flex cursor-pointer">
                                <span className="mr-2">ACTION</span>
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                              <p>Apple MacBook Pro 13</p>
                              <p className="text-xs text-gray-400">
                                PC & Laptop
                              </p>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                              <p>77</p>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                              <div className="flex text-green-500">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-5 h-5 mr-1"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                <p>Active</p>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                              <div className="flex space-x-4">
                                <a
                                  href="#"
                                  className="text-blue-500 hover:text-blue-600"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 mr-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                    />
                                  </svg>
                                  <p>Edit</p>
                                </a>
                                <a
                                  href="#"
                                  className="text-red-500 hover:text-red-600"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 mr-1 ml-3"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                    />
                                  </svg>
                                  <p>Delete</p>
                                </a>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
