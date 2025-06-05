import { useState } from 'react';
import { Scale, Crown, Building, FileText, Briefcase, Gavel, ArrowUp, Mail, Phone, Globe } from 'lucide-react';

function App() {
    const [customerCount, setCustomerCount] = useState(99);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white text-gray-900 relative overflow-hidden">
            {/* Subtle background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-radial from-amber-100/30 via-amber-50/20 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-radial from-blue-50/40 via-transparent to-transparent rounded-full blur-2xl"></div>
            </div>

            {/* Header Navigation */}
            <header className="relative z-50 px-6 lg:px-8 py-6 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                        <div className="relative p-2 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl shadow-lg">
                            <Crown className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-gray-900">Crown Chambers</h1>
                            <p className="text-xs text-amber-600 font-medium">Legal Excellence</p>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        <a href="#" className="text-amber-600 font-semibold text-sm tracking-wide hover:text-amber-700 transition-colors">HOME</a>
                        <a href="#" className="text-gray-600 hover:text-amber-600 font-medium text-sm tracking-wide transition-colors">SERVICES</a>
                        <a href="#" className="text-gray-600 hover:text-amber-600 font-medium text-sm tracking-wide transition-colors">PORTAL</a>
                        <a href="#" className="text-gray-600 hover:text-amber-600 font-medium text-sm tracking-wide transition-colors">CONTACT</a>
                        <a href="#" className="text-gray-600 hover:text-amber-600 font-medium text-sm tracking-wide transition-colors">ABOUT</a>
                    </nav>

                    {/* Auth Buttons */}
                    <div className="flex items-center space-x-3">
                        <button className="px-6 py-2 cursor-pointer bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold text-sm rounded-md hover:from-amber-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                            Login
                        </button>
                        <button className="px-4 py-2 cursor-pointer rounded-md ring ring-inset text-gray-700 hover:text-amber-600 font-medium text-sm transition-colors">
                            Register
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="relative z-10 px-6 lg:px-8 py-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 gap-8 relative lg:gap-16 items-center min-h-[60vh]">

                        {/* Left Content */}
                        <div className="col-span-12 z-50 lg:col-span-6 space-y-8">
                            <div className="space-y-6">
                                <div>
                                    <h1 className="text-5xl lg:text-6xl font-bold mb-3 leading-tight">
                                        <span className="text-gray-900">CROWN</span><br />
                                        <span className="bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">CHAMBERS</span>
                                    </h1>
                                    <p className="text-amber-600 text-sm font-semibold tracking-widest mb-6">PREMIER LEGAL SERVICES</p>
                                </div>

                                <div className="space-y-4">
                                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                                        Excellence in<br />
                                        Legal Services
                                    </h2>

                                    <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                                        Transform your legal challenges into opportunities with our comprehensive and reliable legal expertise. We provide trusted counsel that builds confidence in complex legal matters while ensuring client satisfaction and success.
                                    </p>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-sm rounded-full hover:from-amber-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer tracking-wide">
                                    GET STARTED
                                </button>
                                <button className="px-8 py-4 cursor-pointer border-2 border-amber-500 text-amber-600 font-bold text-sm rounded-full hover:bg-amber-500 hover:text-white transition-all duration-300 tracking-wide">
                                    VIEW SERVICES
                                </button>
                            </div>

                            {/* Contact Icons */}
                            <div className="flex space-x-4 pt-4">
                                <div className="w-12 h-12 bg-white ring ring-gray-200 border ring-offset-2 border-gray-500 rounded-full flex items-center justify-center hover:shadow-xl transition-shadow cursor-pointer group">
                                    <Mail className="w-5 h-5 text-gray-600 group-hover:text-amber-600 transition-colors" />
                                </div>
                                <div className="w-12 h-12 bg-white ring ring-gray-200 border ring-offset-2 border-gray-500 rounded-full flex items-center justify-center hover:shadow-xl transition-shadow cursor-pointer group">
                                    <Phone className="w-5 h-5 text-gray-600 group-hover:text-amber-600 transition-colors" />
                                </div>
                                <div className="w-12 h-12 bg-white ring ring-gray-200 border ring-offset-2 border-gray-500 rounded-full flex items-center justify-center hover:shadow-xl transition-shadow cursor-pointer group">
                                    <Globe className="w-5 h-5 text-gray-600 group-hover:text-amber-600 transition-colors" />
                                </div>
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="col-span-12 z-50 md:z-auto lg:col-span-6 space-y-8">
                            {/* Statistics Card */}
                            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100">
                                <div className="text-center space-y-4">
                                    <div className="flex items-center justify-center space-x-2">
                                        <div className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">
                                            {customerCount}+
                                        </div>
                                        <ArrowUp className="w-8 h-8 text-green-500" />
                                    </div>
                                    <div className="space-y-2 flex flex-col items-center">
                                        <h3 className="text-xl font-bold text-gray-800">Satisfied Clients</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed max-w-md mx-auto">
                                            Trusted legal partnerships across diverse practice areas, delivering consistent quality and building lasting relationships with our clients.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Portal Access */}
                            <div className="text-center space-y-4">
                                <button className="px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-bold rounded-2xl hover:from-gray-900 hover:to-black transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer tracking-widest">
                                    CLIENT PORTAL
                                </button>
                                <p className="text-gray-500 text-sm font-medium tracking-widest">
                                    SECURE ACCESS
                                </p>
                            </div>
                        </div>

                        {/* Center Decorative Element */}
                        <div className="absolute bottom-0 col-span-12 overflow-hidden inset-0 flex justify-center items-center pointer-events-none opacity-30 md:opacity-100">
                            <img className="h-full object-cover" src="./lady_justice_full.png" alt="Lady Justice" />
                        </div>

                        {/* Gradient from white to transparent from bottom of the component*/}
                        <div className="absolute z-40 h-[100px] md:h-[300px] bottom-0 left-0 right-0 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                    </div>

                    {/* Services Section */}
                    <div className="mt-24 pt-16 border-t border-gray-200">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Legal Services</h2>
                            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                                Comprehensive legal solutions tailored to meet your specific needs across various practice areas.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            {/* Service Cards */}
                            <div className="group text-center cursor-pointer">
                                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-amber-100 to-amber-200 rounded-full neur-card flex items-center justify-center mb-4 group-hover:from-amber-200 group-hover:to-amber-300 transition-all duration-300 group-hover:shadow-xl">
                                    <FileText className="w-8 h-8 text-amber-600" />
                                </div>
                                <h3 className="font-bold text-amber-600 text-sm mb-1 tracking-wide">AFFIDAVITS</h3>
                                <p className="font-semibold text-gray-800 text-xs mb-2">SERVICES</p>
                                <p className="text-xs text-gray-600 leading-tight">
                                    Professional affidavit preparation and notarization services
                                </p>
                            </div>

                            <div className="group text-center cursor-pointer">
                                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-100 to-blue-200 rounded-full neur-card flex items-center justify-center mb-4 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300 group-hover:shadow-xl">
                                    <Crown className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="font-bold text-blue-600 text-sm mb-1 tracking-wide">CORPORATE</h3>
                                <p className="font-semibold text-gray-800 text-xs mb-2">LAW</p>
                                <p className="text-xs text-gray-600 leading-tight">
                                    Corporate governance and compliance legal services
                                </p>
                            </div>

                            <div className="group text-center cursor-pointer">
                                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-100 to-green-200 rounded-full neur-card flex items-center justify-center mb-4 group-hover:from-green-200 group-hover:to-green-300 transition-all duration-300 group-hover:shadow-xl">
                                    <Briefcase className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="font-bold text-green-600 text-sm mb-1 tracking-wide">CONTRACTS</h3>
                                <p className="font-semibold text-gray-800 text-xs mb-2">DRAFTING</p>
                                <p className="text-xs text-gray-600 leading-tight">
                                    Employment and commercial contract preparation
                                </p>
                            </div>

                            <div className="group text-center cursor-pointer">
                                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-100 to-purple-200 rounded-full neur-card flex items-center justify-center mb-4 group-hover:from-purple-200 group-hover:to-purple-300 transition-all duration-300 group-hover:shadow-xl">
                                    <Gavel className="w-8 h-8 text-purple-600" />
                                </div>
                                <h3 className="font-bold text-purple-600 text-sm mb-1 tracking-wide">POWER OF</h3>
                                <p className="font-semibold text-gray-800 text-xs mb-2">ATTORNEY</p>
                                <p className="text-xs text-gray-600 leading-tight">
                                    Legal authorization and representation services
                                </p>
                            </div>

                            <div className="group text-center cursor-pointer">
                                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-red-100 to-red-200 rounded-full neur-card flex items-center justify-center mb-4 group-hover:from-red-200 group-hover:to-red-300 transition-all duration-300 group-hover:shadow-xl">
                                    <Scale className="w-8 h-8 text-red-600" />
                                </div>
                                <h3 className="font-bold text-red-600 text-sm mb-1 tracking-wide">BUSINESS</h3>
                                <p className="font-semibold text-gray-800 text-xs mb-2">REGISTRATION</p>
                                <p className="text-xs text-gray-600 leading-tight">
                                    Company formation and registration services
                                </p>
                            </div>

                            <div className="group text-center cursor-pointer">
                                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-full neur-card flex items-center justify-center mb-4 group-hover:from-indigo-200 group-hover:to-indigo-300 transition-all duration-300 group-hover:shadow-xl">
                                    <Building className="w-8 h-8 text-indigo-600" />
                                </div>
                                <h3 className="font-bold text-indigo-600 text-sm mb-1 tracking-wide">PROPERTY</h3>
                                <p className="font-semibold text-gray-800 text-xs mb-2">LAW</p>
                                <p className="text-xs text-gray-600 leading-tight">
                                    Real estate and property transaction legal support
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 bg-white/95 backdrop-blur-lg z-50 pt-20">
                    <nav className="flex flex-col space-y-6 px-8">
                        <a href="#" className="text-amber-600 text-lg font-semibold tracking-wide">HOME</a>
                        <a href="#" className="text-gray-700 text-lg font-medium tracking-wide">SERVICES</a>
                        <a href="#" className="text-gray-700 text-lg font-medium tracking-wide">PORTAL</a>
                        <a href="#" className="text-gray-700 text-lg font-medium tracking-wide">CONTACT</a>
                        <a href="#" className="text-gray-700 text-lg font-medium tracking-wide">ABOUT</a>
                    </nav>
                </div>
            )}
        </div>
    );
}

export default App;