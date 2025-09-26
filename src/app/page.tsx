"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Geometric Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-100/30 to-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-purple-100/30 to-teal-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-full blur-2xl"></div>
      </div>

      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50">
        Skip to main content
      </a>

      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-blue-500 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-xl font-bold text-gray-900">ERC-FIX</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#what" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Standard
            </a>
            <a href="#how" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Implementation
            </a>
            <a href="#why" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Benefits
            </a>
            <a href="#developers" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Resources
            </a>
          </div>
          <a href="https://github.com/erc-fix" className="border border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-50 transition-colors font-medium">
            GitHub ↗
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="main-content" className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 leading-tight">
            ERC-FIX: the tiny standard that lets{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-600">
              FIX systems
            </span>{" "}
            read Ethereum securities
          </h1>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-orange-100 to-blue-100 text-gray-700 text-xs font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
            FIX → Canonical Tree → CBOR → Merkle Root
          </div>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Tokenized bonds shouldn&apos;t be mystery ERC-20s. ERC-FIX adds a canonical FIX instrument string to the token—so banks, brokers, and asset managers can parse terms instantly and plug into existing FIX workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="#spec" className="bg-gradient-to-r from-orange-500 to-blue-600 text-white px-8 py-4 rounded-md text-lg font-semibold hover:from-orange-600 hover:to-blue-700 transition-all">
              Read the Spec
            </a>
            <a href="https://fixdescriptor.vercel.app/" className="border border-gray-300 text-gray-700 px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-50 transition-colors">
              Try the Demo ↗
            </a>
            <a href="https://github.com/swapnilraj/fix-descriptor" className="border border-gray-300 text-gray-700 px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-50 transition-colors">
              Get the Library ↗
            </a>
          </div>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <span>Open-source</span>
            <span>•</span>
            <span>EVM-compatible</span>
            <span>•</span>
            <span>FIX-native</span>
            <span>•</span>
            <span>Audited</span>
          </div>
        </div>
      </section>

      {/* Why it matters Section */}
      <section id="why" className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why it matters</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-200 to-orange-300 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Native FIX legibility</h3>
              <p className="text-gray-600">Token → FIX → parse → map, in one pass</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-200 to-blue-300 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Interoperability</h3>
              <p className="text-gray-600">Same token slots into FIX-integrated systems without bespoke adapters</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-200 to-purple-300 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Auditability</h3>
              <p className="text-gray-600">On-token payload + registry digest give clean, revocable link</p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-md bg-gradient-to-br from-orange-400 to-orange-600"></div>
                  <span className="text-sm font-semibold text-gray-900">De-facto market language</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">FIX powers trading and instrument data across venues, OMS/EMS, custodians, and risk systems.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-400 to-blue-600"></div>
                  <span className="text-sm font-semibold text-gray-900">Keep existing workflows</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">Describe once in FIX; verify anywhere with a proof. No bespoke adapters.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm sm:col-span-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-md bg-gradient-to-br from-purple-400 to-teal-500"></div>
                  <span className="text-sm font-semibold text-gray-900">Verifiable on-chain</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">ERC‑FIX adds a deterministic commitment so identity and terms can be proven on-chain.</p>
              </div>
            </div>
          </div>
          
          {/* Micro FAQ */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-8">Micro-FAQ</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-gray-300 pl-4">
                <h4 className="font-semibold text-gray-900 mb-1">Does this replace compliance?</h4>
                <p className="text-gray-600">No. ERC-FIX handles instrument identity and terms. Compliance remains separate.</p>
              </div>
              <div className="border-l-4 border-gray-300 pl-4">
                <h4 className="font-semibold text-gray-900 mb-1">Why FIX?</h4>
                <p className="text-gray-600">FIX is the established standard for credit trading. ERC-FIX speaks that language.</p>
              </div>
              <div className="border-l-4 border-gray-300 pl-4">
                <h4 className="font-semibold text-gray-900 mb-1">Sidecar vs native?</h4>
                <p className="text-gray-600">Phase 1: sidecar for existing tokens. Phase 2: native interface for new issuances.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standards Body Section */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Independent Standards Body</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            ERC-FIX is developed by an independent, non-profit association of leading actors from the financial, 
            technological, and legal sectors to create common standards for FIX-legible tokenized securities.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-200 to-orange-300 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Audited Smart Contracts</h3>
              <p className="text-gray-600">Security-first approach with comprehensive smart contract audits</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry Governance</h3>
              <p className="text-gray-600">Governed by financial institutions, technology providers, and legal experts</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-200 to-purple-300 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Regulatory Alignment</h3>
              <p className="text-gray-600">Designed to meet existing financial regulations and compliance requirements</p>
            </div>
          </div>
        </div>
      </section>

      {/* What ERC-FIX is Section */}
      <section id="what" className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What ERC-FIX is</h2>
          <p className="text-sm text-gray-500 text-center mb-10">Policy‑agnostic: defines how to encode, not what to include.</p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Token Interface Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-200 to-orange-300 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Token Interface</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">•</span>
                  <span><code className="bg-gray-100 px-2 py-1 rounded text-sm">fixSchema()</code> → e.g. &quot;FIX.4.4&quot;</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">•</span>
                  <span><code className="bg-gray-100 px-2 py-1 rounded text-sm">fixMessage()</code> → canonical SOH-delimited FIX instrument block</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">•</span>
                  <span><code className="bg-gray-100 px-2 py-1 rounded text-sm">fixDigest()</code> → keccak256(fixMessage)</span>
                </li>
              </ul>
            </div>
            
            {/* Simple Registry Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Simple Registry</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">•</span>
                  <span>Issuer address self-asserts token metadata</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">•</span>
                  <span><code className="bg-gray-100 px-2 py-1 rounded text-sm">register()</code>, <code className="bg-gray-100 px-2 py-1 rounded text-sm">revoke()</code>, <code className="bg-gray-100 px-2 py-1 rounded text-sm">recordOf()</code></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">•</span>
                  <span><code className="bg-gray-100 px-2 py-1 rounded text-sm">verifyDigest()</code> for integrity check</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Code Preview */}
          <div className="bg-gray-900 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-white font-semibold">Solidity Interface</h4>
              <button 
                className="text-gray-400 hover:text-white transition-colors"
                onClick={() => navigator.clipboard.writeText(`interface IERC20FixMeta {
    function fixSchema() external view returns (string memory);
    function fixMessage() external view returns (string memory);
    function fixDigest() external view returns (bytes32);
    // optional helpers: isin(), maturityDate(), couponRate(), cfi()
}`)}
                aria-label="Copy Solidity interface to clipboard"
              >
                Copy
              </button>
            </div>
            <pre className="text-gray-300 text-sm overflow-x-auto">
              <code>{`interface IERC20FixMeta {
    function fixSchema() external view returns (string memory);
    function fixMessage() external view returns (string memory);
    function fixDigest() external view returns (bytes32);
    // optional helpers: isin(), maturityDate(), couponRate(), cfi()
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section id="how" className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">How it works</h2>
          <p className="text-sm text-gray-500 text-center mb-10">Deterministic outputs • Efficient verification • Interop and clear audit trails</p>
          
          {/* 3-step timeline */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">1</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Mint</h3>
              <p className="text-gray-600">Issuer includes ERC-FIX interface in token</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">2</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Register</h3>
              <p className="text-gray-600">Issuer registers token&apos;s fixDigest in registry</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">3</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Resolve</h3>
              <p className="text-gray-600">Receiver reads fixMessage, verifies digest, parses FIX</p>
            </div>
          </div>
          
          {/* Canonical FIX example */}
          <div className="bg-gray-900 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-white font-semibold">Canonical FIX Example (Fixed-rate Bond)</h4>
              <button 
                className="text-gray-400 hover:text-white transition-colors"
                onClick={() => navigator.clipboard.writeText(`8=FIX.4.4\\x01
35=d\\x01
48=XS0123456789\\x01
22=4\\x01
55=XS0123456789\\x01
167=DBOND\\x01
15=EUR\\x01
541=20301231\\x01
223=5.000\\x01`)}
                aria-label="Copy FIX example to clipboard"
              >
                Copy
              </button>
            </div>
            <pre className="text-gray-300 text-sm overflow-x-auto">
              <code>{`8=FIX.4.4\\x01
35=d\\x01
48=XS0123456789\\x01        // SecurityID
22=4\\x01                    // SecurityIDSource = ISIN
55=XS0123456789\\x01        // Symbol (mirror ISIN)
167=DBOND\\x01               // CFICode/SecurityType
15=EUR\\x01                  // Currency
541=20301231\\x01            // MaturityDate (YYYYMMDD)
223=5.000\\x01               // CouponRate (fixed)`}</code>
            </pre>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-gray-400">
              <button
                className="px-3 py-1 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors"
                onClick={() => navigator.clipboard.writeText('[15]')}
                aria-label="Copy example pathCBOR JSON"
              >Copy example path [15]</button>
              <span>SOH not used; business fields only.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why it matters Section */}
      <section id="why" className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why it matters</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-200 to-orange-300 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Native FIX legibility</h3>
              <p className="text-gray-600">Token → FIX → parse → map, in one pass</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-200 to-blue-300 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Interoperability</h3>
              <p className="text-gray-600">Same token slots into FIX-integrated systems without bespoke adapters</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-200 to-purple-300 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Auditability</h3>
              <p className="text-gray-600">On-token payload + registry digest give clean, revocable link</p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <p className="text-gray-600 leading-relaxed text-center">
              ERC-FIX connects Ethereum securities to the FIX rails that already run modern credit markets. 
              No new schemas, no custom adapters—just a clean bridge from token address to existing workflows.
            </p>
          </div>
          
          {/* Micro FAQ */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-8">Micro-FAQ</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-gray-300 pl-4">
                <h4 className="font-semibold text-gray-900 mb-1">Does this replace compliance?</h4>
                <p className="text-gray-600">No. ERC-FIX handles instrument identity and terms. Compliance remains separate.</p>
              </div>
              <div className="border-l-4 border-gray-300 pl-4">
                <h4 className="font-semibold text-gray-900 mb-1">Why FIX?</h4>
                <p className="text-gray-600">FIX is the established standard for credit trading. ERC-FIX speaks that language.</p>
              </div>
              <div className="border-l-4 border-gray-300 pl-4">
                <h4 className="font-semibold text-gray-900 mb-1">Sidecar vs native?</h4>
                <p className="text-gray-600">Phase 1: sidecar for existing tokens. Phase 2: native interface for new issuances.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem (today) Section */}
      <section className="relative z-10 container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">The problem (today)</h2>
          <ul className="grid md:grid-cols-3 gap-4 text-gray-700">
            <li className="bg-gray-50 p-4 rounded-lg">Token metadata is ad-hoc; FIX identity doesn&apos;t resolve</li>
            <li className="bg-gray-50 p-4 rounded-lg">On-chain FIX parsing is gas-heavy and brittle</li>
            <li className="bg-gray-50 p-4 rounded-lg">No deterministic binding to a FIX dictionary</li>
          </ul>
        </div>
      </section>

      {/* Spec Highlights Section */}
      <section id="spec" className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Spec highlights</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Canonicalization</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Map FIX tags/groups to a canonical tree</li>
                <li>Canonical CBOR: uint keys, sorted, definite lengths</li>
                <li>Dictionary lock: <code className="bg-gray-100 px-1 rounded">dictHash = keccak(FIX Orchestra)</code></li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Merkle commitment</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Leaf = keccak(pathCBOR || valueBytes)</li>
                <li>Binary Merkle root; promote odd nodes</li>
                <li>Path = CBOR array <code className="bg-gray-100 px-1 rounded">[groupTag, index, tag]</code></li>
              </ul>
            </div>
          </div>

          {/* Code snippets */}
          <div className="space-y-8">
            <div className="bg-gray-900 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-white font-semibold">On-chain descriptor</h4>
                <button 
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={() => navigator.clipboard.writeText(`struct FixDescriptor {\n  uint16  fixMajor;\n  uint16  fixMinor;\n  bytes32 dictHash;\n  bytes32 fixRoot;\n  address fixCBORPtr;\n  uint32  fixCBORLen;\n  string  fixURI;\n}`)}
                  aria-label="Copy FixDescriptor snippet"
                >Copy</button>
              </div>
              <pre className="text-gray-300 text-sm overflow-x-auto"><code>{`struct FixDescriptor {
  uint16  fixMajor;     // e.g., 4
  uint16  fixMinor;     // e.g., 4
  bytes32 dictHash;     // FIX dictionary / Orchestra hash
  bytes32 fixRoot;      // Merkle root over (pathCBOR || valueBytes)
  address fixCBORPtr;   // SSTORE2-style data contract address
  uint32  fixCBORLen;   // length of CBOR bytes
  string  fixURI;       // optional mirror (ipfs:// or https://)
}`}</code></pre>
            </div>

            <div className="bg-gray-900 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-white font-semibold">Verifier API</h4>
                <button 
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={() => navigator.clipboard.writeText(`function verify(\n  bytes32 root,\n  bytes calldata pathCBOR,\n  bytes calldata value,\n  bytes32[] calldata proof\n) internal pure returns (bool);`)}
                  aria-label="Copy verify signature"
                >Copy</button>
              </div>
              <pre className="text-gray-300 text-sm overflow-x-auto"><code>{`function verify(
  bytes32 root,
  bytes calldata pathCBOR,
  bytes calldata value,
  bytes32[] calldata proof
) internal pure returns (bool);`}</code></pre>
              <p className="text-gray-400 text-xs mt-3">Storage: CBOR via SSTORE2-style contract; retrieve with EXTCODECOPY. Verifiers should check <code className="bg-gray-800 px-1 rounded">dictHash</code>.</p>
            </div>

            {/* Demo highlight card */}
            <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-xl p-6 border border-orange-100/60">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <h4 className="text-gray-900 font-semibold mb-1">Try it in your browser</h4>
                  <p className="text-gray-600 text-sm">Paste a FIX descriptor, preview canonical CBOR, and build a proof for any field.</p>
                </div>
                <div className="flex gap-3">
                  <a href="https://fixdescriptor.vercel.app/" className="px-4 py-2 rounded-md bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition-colors">Open Demo ↗</a>
                  <a href="https://github.com/swapnilraj/fix-descriptor" className="px-4 py-2 rounded-md border border-gray-300 text-gray-800 text-sm font-semibold hover:bg-white/50 transition-colors">View Source ↗</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Developers Section */}
      <section id="developers" className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Developers</h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="#spec" className="bg-gray-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors">
              Spec (v0.x)
            </a>
            <a href="https://fixdescriptor.vercel.app/" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-50 transition-colors">
              Try the Demo ↗
            </a>
            <a href="https://github.com/swapnilraj/fix-descriptor" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-50 transition-colors">
              Get the Library ↗
            </a>
          </div>
          
          {/* Code snippet */}
          <div className="bg-gray-900 rounded-lg p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-white font-semibold">Client SDK Helper</h4>
              <button 
                className="text-gray-400 hover:text-white transition-colors"
                onClick={() => navigator.clipboard.writeText(`resolve(token) → { 
  fix, 
  digestVerified, 
  fields: { ISIN, Maturity, Coupon, Currency, CFICode } 
}`)}
                aria-label="Copy SDK example to clipboard"
              >
                Copy
              </button>
            </div>
            <pre className="text-gray-300 text-sm overflow-x-auto">
              <code>{`resolve(token) → { 
  fix, 
  digestVerified, 
  fields: { ISIN, Maturity, Coupon, Currency, CFICode } 
}`}</code>
            </pre>
          </div>
          
          <div className="text-center text-gray-600 mb-8">
            <p>Versioning and revoke path supported. Provenance (EIP-1271) — optional v1.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-gradient-to-br from-orange-400 to-blue-500 rounded flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-sm"></div>
                </div>
                <span className="text-white font-semibold">ERC-FIX Association</span>
              </div>
              <p className="text-gray-400 text-sm">
                Independent, non-profit association setting standards for FIX-legible tokenized securities.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Governance</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#members" className="hover:text-white transition-colors">Members</a></li>
                <li><a href="#governance" className="hover:text-white transition-colors">Advisory Board</a></li>
                <li><a href="#statutes" className="hover:text-white transition-colors">Statutes</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="https://github.com/erc-fix" className="hover:text-white transition-colors">GitHub</a></li>
                <li><a href="#docs" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#audits" className="hover:text-white transition-colors">Security Audits</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400 mb-4">
              <a href="https://opensource.org/licenses/MIT" className="hover:text-white transition-colors">MIT License</a>
              <span>•</span>
              <span>v0.2-draft</span>
              <span>•</span>
              <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            </div>
            <p className="text-gray-400 text-sm">
              &copy; 2024 ERC-FIX Association. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
