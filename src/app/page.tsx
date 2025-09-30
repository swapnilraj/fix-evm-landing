"use client";

// Simple tooltip component
function Tooltip({ children, text }: { children: React.ReactNode; text: string }) {
  return (
    <span className="group relative inline-block">
      {children}
      <span className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 text-xs text-white bg-gray-900 rounded-md whitespace-nowrap z-10 pointer-events-none">
        {text}
        <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></span>
      </span>
    </span>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Geometric Elements (subtle) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[28rem] h-[28rem] bg-gradient-to-br from-orange-100/30 to-blue-100/30 rounded-full blur-3xl"></div>
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
          <a href="https://github.com/swapnilraj/fix-descriptor" className="border border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-50 transition-colors font-medium">
            GitHub ↗
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="main-content" className="relative z-10 container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Traditional finance and blockchain don&apos;t speak the same language
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed max-w-3xl mx-auto">
            You tokenize a bond. Your custodian&apos;s system can&apos;t read it. Your risk platform can&apos;t classify it. You build custom adapters for every platform—and they break with every update.
          </p>
          <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto font-medium">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-600">ERC‑FIX</span> solves this by embedding standardized <Tooltip text="FIX (Financial Information eXchange) is the global protocol that powers securities trading across 300+ venues worldwide"><span className="cursor-help underline decoration-dotted">FIX</span></Tooltip> descriptors directly in your token contract —— so every system can read it natively. No adapters. No waiting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a href="https://fixdescriptor.vercel.app/spec" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-orange-500 to-blue-600 text-white px-8 py-4 rounded-md text-lg font-semibold hover:from-orange-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl">
              Read the Technical Spec ↗
            </a>
            <a href="https://fixdescriptor.vercel.app/" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-md text-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors">
              Try the Demo ↗
            </a>
          </div>
          <p className="text-sm text-gray-500">For asset issuers, custodians, and financial institutions tokenizing securities</p>
        </div>
      </section>

      {/* Problem (today) Section - moved up for narrative clarity */}
      <section className="relative z-10 container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-4">
            <h2 className="text-3xl font-bold text-gray-900 relative inline-block">
              <span className="relative z-10">What breaks today</span>
              <div className="absolute inset-x-0 bottom-1 h-3 bg-gradient-to-r from-red-200/40 to-orange-200/40 -z-10"></div>
            </h2>
              </div>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">Without a standard way to describe onchain securities, every integration becomes a custom project. Systems can&apos;t communicate, data gets lost in translation, and updates break everything.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-red-100 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center mb-3">
                <span className="text-red-600 text-xl font-bold">✗</span>
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">Integration takes months</h3>
              <p className="text-sm text-gray-600 mb-3">Your custodian needs custom code to read your token. Their OMS needs different code. Your risk system needs yet another adapter.</p>
              <div className="text-xs text-gray-500 bg-gray-50 border border-gray-200 rounded-md p-3">Result: 2-6 month integration cycles, per platform, per token type.</div>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-orange-100 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center mb-3">
                <span className="text-orange-600 text-xl font-bold">⚠</span>
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">Data gets lost in translation</h3>
              <p className="text-sm text-gray-600 mb-3">Manual mapping between your JSON and their FIX fields introduces errors. Coupon rates misread, maturity dates off by a day, ISINs missing.</p>
              <div className="text-xs text-gray-500 bg-gray-50 border border-gray-200 rounded-md p-3">Result: Settlement failures, compliance gaps, operational risk.</div>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-red-100 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center mb-3">
                <span className="text-red-600 text-xl font-bold">↻</span>
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">Updates break everything</h3>
              <p className="text-sm text-gray-600 mb-3">Add a new field? Change your metadata format? Every adapter breaks. You spend weeks coordinating updates across counterparties.</p>
              <div className="text-xs text-gray-500 bg-gray-50 border border-gray-200 rounded-md p-3">Result: Frozen metadata schemas, no room to evolve.</div>
            </div>
          </div>
          
        </div>
      </section>

      

      {/* What ERC-FIX is Section */}
      <section id="what" className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">What ERC‑FIX is</h2>
          <p className="text-base text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          ERC-FIX embeds a standard FIX descriptor directly in your token contract - so every financial system can read it without custom code. It uses the market’s existing language—FIX—for identification and terms, and defines a uniform, deterministic way to attach that information to the token.</p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-base font-semibold text-gray-900 mb-2">Use the language markets speak</h3>
              <p className="text-sm text-gray-600">Describe instruments using standard FIX tags that trading and data systems already understand.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-base font-semibold text-gray-900 mb-2">Make it uniform and deterministic</h3>
              <p className="text-sm text-gray-600">A single, canonical layout so every implementation produces the same bytes for the same descriptor.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-base font-semibold text-gray-900 mb-2">Attach it to the asset</h3>
              <p className="text-sm text-gray-600">Keep the descriptor with the token itself, so consumers can fetch and verify it directly from the contract.</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 text-center mb-10">Policy‑agnostic: defines how to encode and attach descriptors, not what business fields must be included.</p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Token Interface Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-200 to-orange-300 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Embedded Descriptor</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">•</span>
                  <span><code className="bg-gray-100 px-2 py-1 rounded text-sm">getFixDescriptor()</code> → complete descriptor struct</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">•</span>
                  <span><code className="bg-gray-100 px-2 py-1 rounded text-sm">getFixRoot()</code> → Merkle root for verification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">•</span>
                  <span><code className="bg-gray-100 px-2 py-1 rounded text-sm">verifyField()</code> → prove any field with Merkle proof</span>
                </li>
              </ul>
            </div>
            
            {/* CBOR Storage Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6"><Tooltip text="CBOR = a compact, standard binary format; here we use a deterministic flavor"><span className="cursor-help underline decoration-dotted">CBOR</span></Tooltip> Storage</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">•</span>
                  <span>Canonical CBOR stored via <Tooltip text="SSTORE2 = store bytes as contract bytecode and read with EXTCODECOPY"><span className="cursor-help underline decoration-dotted">SSTORE2-style contracts</span></Tooltip></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">•</span>
                  <span>FIX dictionary hash for semantic consistency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">•</span>
                  <span>Gas-efficient retrieval with <code className="bg-gray-100 px-2 py-1 rounded text-sm">EXTCODECOPY</code></span>
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
                onClick={() => navigator.clipboard.writeText(`interface IFixDescriptor {
    function getFixDescriptor() external view returns (FixDescriptor memory);
    function getFixRoot() external view returns (bytes32);
    function verifyField(
        bytes calldata pathCBOR,
        bytes calldata value,
        bytes32[] calldata proof,
        bool[] calldata directions
    ) external view returns (bool);
}`)}
                aria-label="Copy Solidity interface to clipboard"
              >
                Copy
              </button>
            </div>
            <pre className="text-gray-300 text-sm overflow-x-auto">
              <code>{`interface IFixDescriptor {
    function getFixDescriptor() external view returns (FixDescriptor memory);
    function getFixRoot() external view returns (bytes32);
    function verifyField(
        bytes calldata pathCBOR,
        bytes calldata value,
        bytes32[] calldata proof,
        bool[] calldata directions
    ) external view returns (bool);
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Why Embedded Section */}
      <section className="relative z-10 container mx-auto px-6 py-16 bg-gradient-to-br from-blue-50/30 to-purple-50/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Why embedded?</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">Why put the descriptor in the contract itself instead of a database or external registry?</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                  <span className="text-red-600 text-xl font-bold">✗</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Off-chain database</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  <span>Goes offline, data vanishes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  <span>Sync issues with on-chain state</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  <span>Single point of failure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  <span>No cryptographic guarantees</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                  <span className="text-orange-600 text-xl font-bold">⚠</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">External registry</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500">•</span>
                  <span>Permission gatekeeping</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500">•</span>
                  <span>Centralized control over who can register</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500">•</span>
                  <span>Extra contract interaction required</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500">•</span>
                  <span>Governance overhead</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl border-2 border-green-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 text-xl font-bold">✓</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Embedded (ERC‑FIX)</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  <span><strong>Always available</strong> with the token</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  <span><strong>Permissionless</strong> — issuer controls</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  <span><strong>Implicit mapping:</strong> address → descriptor</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  <span><strong>Cryptographically verifiable</strong></span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 bg-white p-6 rounded-xl border-2 border-blue-100">
            <p className="text-sm text-gray-700 text-center">
              <strong>The key design principle:</strong> The descriptor lives with the asset. No external dependencies, no gatekeepers, no sync issues. Just read the contract.
            </p>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section id="how" className="relative z-10 bg-gradient-to-br from-gray-50 to-blue-50/30 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">How it works</h2>
          <p className="text-sm text-gray-500 text-center mb-10">Deterministic outputs • Efficient verification • Interop and clear audit trails</p>
          
          {/* 3-step timeline */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">1</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Embed</h3>
              <p className="text-gray-600">Issuer embeds FIX descriptor directly in asset contract</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">2</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Store</h3>
              <p className="text-gray-600">CBOR data stored as contract bytecode, Merkle root committed</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">3</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Verify</h3>
              <p className="text-gray-600">Anyone can verify specific fields using Merkle proofs</p>
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

      {/* Why FIX (motivation) */}
      <section className="relative z-10 bg-gradient-to-br from-orange-50/50 to-blue-50/50 container mx-auto px-6 py-14">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Why FIX is the answer</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-2">
            <strong>FIX (Financial Information eXchange)</strong> is the global standard that powers securities trading. It&apos;s how Bloomberg, exchanges, custodians, and every major financial platform already communicate.
          </p>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
            Instead of inventing yet another format, use the language traditional finance already speaks.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="text-3xl font-bold text-orange-600 mb-2">300+</div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">Trading venues worldwide</h3>
              <p className="text-sm text-gray-600">Exchanges, ECNs, OMS/EMS, custodians—all use FIX natively.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">Billions</div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">Trades processed daily</h3>
              <p className="text-sm text-gray-600">Battle-tested for decades across equities, fixed income, FX, and derivatives.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="text-3xl font-bold text-purple-600 mb-2">Zero</div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">New integrations needed</h3>
              <p className="text-sm text-gray-600">Your token speaks FIX, their systems already understand it.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border-2 border-orange-100">
            <p className="text-sm text-gray-700 text-center">
              <strong>The key insight:</strong> Traditional finance isn&apos;t going to rebuild for blockchain. But if your tokens speak FIX, they slot into existing infrastructure with zero friction.
            </p>
          </div>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="relative z-10 container mx-auto px-6 py-14 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Before vs. After</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">See the difference between custom integration and standardized descriptors.</p>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl border-2 border-red-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center">
                  <span className="text-red-600 text-2xl font-bold">✗</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Without ERC‑FIX</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 text-lg flex-shrink-0">1.</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Issue token with custom JSON</p>
                      <p className="text-xs text-gray-600 mt-1">Your format, your field names</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 text-lg flex-shrink-0">2.</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Send docs to each platform</p>
                      <p className="text-xs text-gray-600 mt-1">PDFs, spreadsheets, email threads</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 text-lg flex-shrink-0">3.</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">They build custom adapters</p>
                      <p className="text-xs text-gray-600 mt-1">2-6 months per integration</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 text-lg flex-shrink-0">4.</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Manual data mapping</p>
                      <p className="text-xs text-gray-600 mt-1">Errors, delays, reconciliation</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 text-lg flex-shrink-0">5.</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Updates break everything</p>
                      <p className="text-xs text-gray-600 mt-1">Coordinate changes across all counterparties</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-red-100 rounded-lg">
                <p className="text-sm font-semibold text-red-900 text-center">Timeline: 2-4 months per integration</p>
              </div>
            </div>

            {/* After */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl border-2 border-green-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 text-2xl font-bold">✓</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">With ERC‑FIX</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 text-lg flex-shrink-0">1.</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Embed FIX descriptor in token</p>
                      <p className="text-xs text-gray-600 mt-1">Standard format, canonical fields</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 text-lg flex-shrink-0">2.</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Systems read it natively</p>
                      <p className="text-xs text-gray-600 mt-1">OMS, custodians, risk—all understand FIX</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 text-lg flex-shrink-0">3.</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Automatic integration</p>
                      <p className="text-xs text-gray-600 mt-1">No custom code, no adapters</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 text-lg flex-shrink-0">4.</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Cryptographic verification</p>
                      <p className="text-xs text-gray-600 mt-1">Prove any field with Merkle proofs</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 text-lg flex-shrink-0">5.</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Updates are versioned</p>
                      <p className="text-xs text-gray-600 mt-1">Systems recognize new formats automatically</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-green-100 rounded-lg">
                <p className="text-sm font-semibold text-green-900 text-center">Timeline: Days to deploy, instant recognition</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution: ERC‑FIX */}
      <section className="relative z-10 container mx-auto px-6 py-14">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-4">
            <h2 className="text-3xl font-bold relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-600">Solution: ERC‑FIX</span>
            </h2>
          </div>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">Standardize how tokens carry instrument data by embedding a canonical FIX descriptor on‑chain, with a cryptographic commitment for field‑level proofs.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 p-6 rounded-xl border border-orange-200/50">
              <h3 className="text-base font-semibold text-gray-900 mb-2">Embedded descriptor</h3>
              <p className="text-sm text-gray-600">Descriptor lives in the asset contract (no registry), discoverable and permissionless.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-6 rounded-xl border border-blue-200/50">
              <h3 className="text-base font-semibold text-gray-900 mb-2">Canonical CBOR + dict lock</h3>
              <p className="text-sm text-gray-600">Deterministic CBOR, integer keys, and <code className="bg-gray-100 px-1 rounded">dictHash</code> bind semantics.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 p-6 rounded-xl border border-purple-200/50">
              <h3 className="text-base font-semibold text-gray-900 mb-2">Merkle‑proof verification</h3>
              <p className="text-sm text-gray-600">Per‑field proofs against the committed root—no on‑chain FIX parsing required.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Concrete Benefits Section */}
      <section className="relative z-10 container mx-auto px-6 py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">What you get</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">Concrete, measurable improvements to how you issue and manage tokenized securities.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border-2 border-green-100 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Integration: months → days</h3>
                  <p className="text-gray-600">Custodians, OMS/EMS, risk systems read your token natively. No custom adapters. No mapping documents. Deploy once, integrate everywhere.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl border-2 border-blue-100 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Zero translation errors</h3>
                  <p className="text-gray-600">No manual JSON-to-FIX mapping. No misread coupons or wrong maturity dates. The descriptor is canonical and cryptographically verifiable.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl border-2 border-purple-100 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time settlement</h3>
                  <p className="text-gray-600">When every system speaks the same language, you can settle cross-platform trades instantly—no reconciliation delays.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl border-2 border-orange-100 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Update without breaking</h3>
                  <p className="text-gray-600">Embedded descriptors with versioning. Add fields, update terms, and systems automatically recognize the new format.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="relative z-10 container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Who this is for</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">Real scenarios where ERC‑FIX eliminates weeks of integration work.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-xl border border-orange-200 shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Bond issuer</h3>
              <p className="text-sm text-gray-600 mb-4">You&apos;re tokenizing a corporate bond. Instead of sending PDF term sheets to every custodian, your token carries the full FIX descriptor.</p>
              <div className="bg-white p-3 rounded-lg border border-orange-100 text-xs text-gray-700">
                <strong>Result:</strong> Custodians import positions automatically. No manual data entry, no classification errors.
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-200 shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Cross-platform settlement</h3>
              <p className="text-sm text-gray-600 mb-4">A tokenized treasury trades between DeFi and a TradFi custodian. Both sides need to verify terms instantly.</p>
              <div className="bg-white p-3 rounded-lg border border-blue-100 text-xs text-gray-700">
                <strong>Result:</strong> DeFi contract reads FIX descriptor. Custodian&apos;s OMS reads same descriptor. Settlement happens in minutes.
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl border border-purple-200 shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Regulatory reporting</h3>
              <p className="text-sm text-gray-600 mb-4">Regulators need standardized instrument data for oversight. Your token already has it in the format they expect.</p>
              <div className="bg-white p-3 rounded-lg border border-purple-100 text-xs text-gray-700">
                <strong>Result:</strong> Generate compliance reports directly from on-chain data. No manual reconciliation.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why it matters Section - consolidated */}
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Gatekeepers</h3>
              <p className="text-gray-600">Asset address → descriptor mapping with no central registry or permissions</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-200 to-purple-300 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Auditability</h3>
              <p className="text-gray-600">Embedded descriptor + Merkle proofs give cryptographic verification</p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <p className="text-gray-600 leading-relaxed text-center">
              ERC-FIX embeds FIX descriptors directly in asset contracts with cryptographic verification. 
              No external dependencies, no registries—just self-describing tokens that speak FIX natively.
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
                <h4 className="font-semibold text-gray-900 mb-1">How is this different from metadata URIs?</h4>
                <p className="text-gray-600">ERC-FIX embeds descriptors directly in contracts with cryptographic proofs, not external references.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem (today) Section - removed old duplicate (now placed above) */}

      {/* Spec Highlights Section */}
      <section id="spec" className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Spec highlights</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Canonicalization <Tooltip text="One deterministic layout so everyone gets the same bytes for the same content"><span className="inline-block align-middle text-gray-400 cursor-help">ⓘ</span></Tooltip></h3>
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
                  onClick={() => navigator.clipboard.writeText(`function verify(\n  bytes32 root,\n  bytes calldata pathCBOR,\n  bytes calldata value,\n  bytes32[] calldata proof,\n  bool[] calldata directions\n) internal pure returns (bool);`)}
                  aria-label="Copy verify signature"
                >Copy</button>
              </div>
              <pre className="text-gray-300 text-sm overflow-x-auto"><code>{`function verify(
  bytes32 root,
  bytes calldata pathCBOR,
  bytes calldata value,
  bytes32[] calldata proof,
  bool[] calldata directions
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
  descriptor: { fixMajor, fixMinor, dictHash, fixRoot, fixCBORPtr },
  cbor: decodedCBOR,
  fields: { ISIN, Maturity, Coupon, Currency, CFICode },
  proveField: (path) => { proof, directions }
}`)}
                aria-label="Copy SDK example to clipboard"
              >
                Copy
              </button>
            </div>
            <pre className="text-gray-300 text-sm overflow-x-auto">
              <code>{`resolve(token) → { 
  descriptor: { fixMajor, fixMinor, dictHash, fixRoot, fixCBORPtr },
  cbor: decodedCBOR,
  fields: { ISIN, Maturity, Coupon, Currency, CFICode },
  proveField: (path) => { proof, directions }
}`}</code>
            </pre>
          </div>
          
          <div className="text-center text-gray-600 mb-8">
            <p>Descriptor updates via new CBOR contracts. ERC165 interface detection. No external dependencies.</p>
          </div>
        </div>
      </section>

      {/* Independent Standards Body - moved near footer
      <section className="relative z-10 container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Independent Standards Body</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            ERC-FIX is developed by an independent, non-profit association of leading actors from the financial,
            technological, and legal sectors to create common standards for FIX-legible tokenized securities.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-4">
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
      </section> */}

      {/* Footer
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
                <li><a href="https://github.com/swapnilraj/fix-descriptor" className="hover:text-white transition-colors">GitHub</a></li>
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
      </footer> */}

    </div>
  );
}
