import React, { useState } from 'react';
import ApexCharts from 'react-apexcharts';
import SideBar from '../components/SideBar';

function Dashboard() {
    const [isSideMenuOpen, setSideMenuOpen] = useState(false);
    const [isNotificationsMenuOpen, setNotificationsMenuOpen] = useState(false);
    const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
    const [subMenuOpen, setSubMenuOpen] = useState(false);

    const handleSubMenuToggle = () => setSubMenuOpen(!subMenuOpen);

    const lineChartOptions = {
        series: [{
            name: 'TEAM A',
            type: 'area',
            data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33]
        }, {
            name: 'TEAM B',
            type: 'line',
            data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43]
        }],
        options: {
            chart: { height: 350, type: 'line', zoom: { enabled: false } },
            stroke: { curve: 'smooth' },
            fill: { type: 'solid', opacity: [0.35, 1] },
            labels: ['Dec 01', 'Dec 02', 'Dec 03', 'Dec 04', 'Dec 05', 'Dec 06', 'Dec 07', 'Dec 08', 'Dec 09', 'Dec 10', 'Dec 11'],
            markers: { size: 0 },
            yaxis: [{ title: { text: 'Series A' } }, { opposite: true, title: { text: 'Series B' } }],
            tooltip: { shared: true, intersect: false, y: { formatter: (y) => y ? `${y.toFixed(0)} points` : y } }
        }
    };

    const pieChartOptions = {
        series: [44, 55, 67, 83],
        options: {
            chart: { height: 350, type: 'radialBar' },
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        name: { fontSize: '22px' },
                        value: { fontSize: '16px' },
                        total: {
                            show: true, label: 'Total',
                            formatter: () => 249
                        }
                    }
                }
            },
            labels: ['Apples', 'Oranges', 'Bananas', 'Berries']
        }
    };

    return (
        <div className="px-2 py-10 bg-gray-100 flex">
            <SideBar/>
            <div className="py-24 sm:py-32 w-full">
                <div className={`flex h-screen bg-gray-800 ${isSideMenuOpen ? 'overflow-hidden' : ''}`}>
                    <aside className={`z-20 hidden w-60 overflow-y-auto bg-gray-800 md:block`}>
                        {/* Sidebar content with user info and navigation */}
                        <div className="text-white p-5">
                            <p className="text-2xl font-semibold text-green-500">Dashboard</p>
                            <div className="mt-5">
                                <a href="#" onClick={() => setSideMenuOpen(false)} className="block p-2 text-white">Home</a>
                                <a href="#" onClick={handleSubMenuToggle} className="block p-2 text-white">Menu</a>
                                {subMenuOpen && (
                                    <div className="bg-gray-700 p-2">
                                        <a href="#" className="block p-2 text-white">Submenu 1</a>
                                        <a href="#" className="block p-2 text-white">Submenu 2</a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </aside>

                    <div className="flex flex-col flex-1 w-full">
                        <header className="z-40 py-4 bg-gray-800">
                            <button onClick={() => setSideMenuOpen(!isSideMenuOpen)} className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple" aria-label="Menu">
                                {/* Icon for menu */}
                            </button>
                        </header>

                        <main>
                            <div className="p-5">
                                <ApexCharts options={lineChartOptions.options} series={lineChartOptions.series} type="line" height={350} />
                                <ApexCharts options={pieChartOptions.options} series={pieChartOptions.series} type="radialBar" height={350} />
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
