import React from 'react';
import { Link } from 'react-router-dom';

const ConnectorApp = () => {
  const projects = [
    {
      name: "Toros",
      description: "Exponential gains with leveraged tokens"
    },
    {
      name: "Flat Money",
      description: "Pure yield with no banking risk"
    },
    {
      name: "m Stable",
      description: "Stack wealth efficiently"
    }
  ];

const infoLinks = [
    { name: "Docs", href: "/wallet" },
    { name: "Stats", href: "/wallet" },
    { name: "Blog", href: "/wallet" },
    { name: "Uses TradingView", href: "/wallet" },
    { name: "Terms Of Use", href: "/wallet" },
    { name: "Brand Assets", href: "/wallet" }
  ];

  const govLinks = [
    { name: "Proposals", href: "/wallet" },
    { name: "Voting", href: "/wallet" },
    { name: "Voting Power", href: "/wallet" },
    { name: "Legacy DHT", href: "/wallet" }
  ];

  const devLinks = [
    { name: "GitHub", href: "/wallet" },
    { name: "Audit", href: "/wallet" },
    { name: "Bug Bounty", href: "/wallet" },
    { name: "@dhedge/v2-sdk", href: "/wallet" }
  ];

  const socialLinks = [
    { icon: "💬", name: "Discord", href: "/wallet" },
    { icon: "💬", name: "Telegram", href: "/wallet" },
    { icon: "💬", name: "Twitter", href: "/wallet" },
    { icon: "💬", name: "Medium", href: "/wallet" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Projects by dHEDGE
          </h1>
          <Link 
            to="/wallet"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            Connect Wallet
          </Link>
        </div>

        {/* Projects List */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-12">
          {projects.map((project, index) => (
            <React.Fragment key={project.name}>
              <div className="py-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {project.name}
                </h2>
                <p className="text-gray-600 text-lg">
                  {project.description}
                </p>
                <Link 
                  to="/wallet"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mt-3 transition-colors duration-200"
                >
                  Explore {project.name} →
                </Link>
              </div>
              {index < projects.length - 1 && (
                <hr className="border-gray-200" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Links Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-4 bg-gray-50 border-b border-gray-200">
            <div className="p-4 font-semibold text-gray-900">INFO</div>
            <div className="p-4 font-semibold text-gray-900">GOV</div>
            <div className="p-4 font-semibold text-gray-900">DEV</div>
            <div className="p-4 font-semibold text-gray-900">CONNECT</div>
          </div>

          {/* Table Content */}
          <div className="grid grid-cols-4">
            {/* INFO Column */}
            <div className="p-4 border-r border-gray-200">
              <div className="space-y-3">
                {infoLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block text-blue-600 hover:text-blue-700 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* GOV Column */}
            <div className="p-4 border-r border-gray-200">
              <div className="space-y-3">
                {govLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block text-blue-600 hover:text-blue-700 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* DEV Column */}
            <div className="p-4 border-r border-gray-200">
              <div className="space-y-3">
                {devLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-600 hover:text-blue-700 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* CONNECT Column */}
            <div className="p-4">
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, index) => (
                  <Link
                    key={social.name}
                    to={social.href}
                    className="flex items-center justify-center p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
                    title={social.name}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </Link>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Link 
                  to="/wallet"
                  className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                >
                  Connect Wallet
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* SDK Link */}
        <div className="text-center mt-8">
         
        </div>

      </div>
    </div>
  );
};

export default ConnectorApp;