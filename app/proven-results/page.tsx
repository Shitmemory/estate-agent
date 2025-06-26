// import { Building2, Phone, CheckCircle, TrendingUp, Target, BarChart3, Home, Key, Award } from "lucide-react"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Progress } from "@/components/ui/progress"
// import Link from "next/link"

// const results = [
//   {
//     metric: "Properties Sold",
//     value: "500+",
//     period: "Last 2 Years",
//     icon: Home,
//     color: "text-green-600",
//   },
//   {
//     metric: "Average Sale Time",
//     value: "28 Days",
//     period: "vs 45 Day Average",
//     icon: Target,
//     color: "text-blue-600",
//   },
//   {
//     metric: "Price Achievement",
//     value: "98.5%",
//     period: "Of Asking Price",
//     icon: TrendingUp,
//     color: "text-purple-600",
//   },
//   {
//     metric: "Successful Lettings",
//     value: "300+",
//     period: "Last Year",
//     icon: Key,
//     color: "text-orange-600",
//   },
// ]

// const caseStudies = [
//   {
//     title: "Victorian House Sale - Clapham",
//     challenge: "Property had been on market for 6 months with another agent",
//     solution: "Professional photography, strategic pricing, targeted marketing",
//     result: "Sold within 3 weeks at 102% of asking price",
//     savings: "£15,000 above previous asking price",
//   },
//   {
//     title: "Portfolio Letting - Canary Wharf",
//     challenge: "Landlord struggling to find quality tenants for 5 properties",
//     solution: "Comprehensive tenant screening, professional management service",
//     result: "All properties let within 2 weeks to verified tenants",
//     savings: "Zero void periods, 100% rent collection",
//   },
//   {
//     title: "First-Time Buyer Support",
//     challenge: "Young couple struggling in competitive market",
//     solution: "Market insights, negotiation support, mortgage guidance",
//     result: "Secured dream home £20,000 under asking price",
//     savings: "£20,000 saved plus ongoing support",
//   },
// ]

// export default function ProvenResultsPage() {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header */}
//       <header className="bg-blue-800 text-white shadow-lg">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex items-center justify-between">
//             <Link href="/" className="flex items-center space-x-3">
//               <Building2 className="h-8 w-8" />
//               <div>
//                 <h1 className="text-2xl font-bold">CAPITAL</h1>
//                 <p className="text-sm text-blue-100">Letting & Estate Agents</p>
//               </div>
//             </Link>
//             <nav className="hidden md:flex space-x-6">
//               <Link href="/services" className="hover:text-blue-200 transition-colors">
//                 Services
//               </Link>
//               <Link href="/properties" className="hover:text-blue-200 transition-colors">
//                 Properties
//               </Link>
//               <Link href="/about" className="hover:text-blue-200 transition-colors">
//                 About
//               </Link>
//               <Link href="/contact" className="hover:text-blue-200 transition-colors">
//                 Contact
//               </Link>
//             </nav>
//             <div className="flex items-center space-x-4">
//               <Phone className="h-4 w-4" />
//               <a href="tel:02085685680" className="text-sm hover:text-blue-200">
//                 020 8568 5680
//               </a>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-16">
//         <div className="container mx-auto px-4 text-center">
//           <CheckCircle className="h-16 w-16 mx-auto mb-6 text-green-400" />
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Results</h2>
//           <p className="text-lg text-blue-100 max-w-2xl mx-auto">
//             Track record of success with measurable results that speak for themselves
//           </p>
//         </div>
//       </section>

//       {/* Key Metrics */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Track Record</h3>
//             <p className="text-gray-600">Numbers that demonstrate our commitment to delivering results</p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {results.map((result, index) => (
//               <Card key={index} className="text-center hover:shadow-lg transition-shadow">
//                 <CardContent className="p-6">
//                   <result.icon className={`h-12 w-12 mx-auto mb-4 ${result.color}`} />
//                   <div className="text-3xl font-bold text-gray-900 mb-2">{result.value}</div>
//                   <div className="text-lg font-semibold text-gray-700 mb-1">{result.metric}</div>
//                   <div className="text-sm text-gray-500">{result.period}</div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Performance Comparison */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h3 className="text-3xl font-bold text-gray-900 mb-4">How We Compare</h3>
//             <p className="text-gray-600">Our performance vs industry averages</p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             <Card>
//               <CardHeader>
//                 <CardTitle className="flex items-center">
//                   <BarChart3 className="h-6 w-6 mr-2 text-blue-800" />
//                   Sales Performance
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-6">
//                 <div>
//                   <div className="flex justify-between mb-2">
//                     <span className="text-sm font-medium">Time to Sale</span>
//                     <span className="text-sm text-gray-600">28 days vs 45 days average</span>
//                   </div>
//                   <Progress value={85} className="h-2" />
//                   <p className="text-xs text-gray-500 mt-1">38% faster than market average</p>
//                 </div>
//                 <div>
//                   <div className="flex justify-between mb-2">
//                     <span className="text-sm font-medium">Price Achievement</span>
//                     <span className="text-sm text-gray-600">98.5% vs 94% average</span>
//                   </div>
//                   <Progress value={98} className="h-2" />
//                   <p className="text-xs text-gray-500 mt-1">4.5% above market average</p>
//                 </div>
//                 <div>
//                   <div className="flex justify-between mb-2">
//                     <span className="text-sm font-medium">Success Rate</span>
//                     <span className="text-sm text-gray-600">96% vs 78% average</span>
//                   </div>
//                   <Progress value={96} className="h-2" />
//                   <p className="text-xs text-gray-500 mt-1">18% higher success rate</p>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card>
//               <CardHeader>
//                 <CardTitle className="flex items-center">
//                   <Key className="h-6 w-6 mr-2 text-blue-800" />
//                   Lettings Performance
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-6">
//                 <div>
//                   <div className="flex justify-between mb-2">
//                     <span className="text-sm font-medium">Time to Let</span>
//                     <span className="text-sm text-gray-600">14 days vs 21 days average</span>
//                   </div>
//                   <Progress value={90} className="h-2" />
//                   <p className="text-xs text-gray-500 mt-1">33% faster than market average</p>
//                 </div>
//                 <div>
//                   <div className="flex justify-between mb-2">
//                     <span className="text-sm font-medium">Rent Collection</span>
//                     <span className="text-sm text-gray-600">99.2% vs 94% average</span>
//                   </div>
//                   <Progress value={99} className="h-2" />
//                   <p className="text-xs text-gray-500 mt-1">5.2% above market average</p>
//                 </div>
//                 <div>
//                   <div className="flex justify-between mb-2">
//                     <span className="text-sm font-medium">Tenant Retention</span>
//                     <span className="text-sm text-gray-600">87% vs 72% average</span>
//                   </div>
//                   <Progress value={87} className="h-2" />
//                   <p className="text-xs text-gray-500 mt-1">15% higher retention rate</p>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Case Studies */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h3 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h3>
//             <p className="text-gray-600">Real examples of how we deliver results for our clients</p>
//           </div>

//           <div className="space-y-8">
//             {caseStudies.map((study, index) => (
//               <Card key={index} className="hover:shadow-lg transition-shadow">
//                 <CardContent className="p-8">
//                   <div className="grid md:grid-cols-4 gap-6">
//                     <div>
//                       <h4 className="font-bold text-lg mb-2 text-blue-800">{study.title}</h4>
//                       <Award className="h-8 w-8 text-yellow-500" />
//                     </div>
//                     <div>
//                       <h5 className="font-semibold mb-2 text-red-600">Challenge</h5>
//                       <p className="text-sm text-gray-600">{study.challenge}</p>
//                     </div>
//                     <div>
//                       <h5 className="font-semibold mb-2 text-blue-600">Solution</h5>
//                       <p className="text-sm text-gray-600">{study.solution}</p>
//                     </div>
//                     <div>
//                       <h5 className="font-semibold mb-2 text-green-600">Result</h5>
//                       <p className="text-sm text-gray-600 mb-2">{study.result}</p>
//                       <p className="text-sm font-semibold text-green-700">{study.savings}</p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Awards & Recognition */}
//       <section className="py-16 bg-blue-800 text-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <Award className="h-16 w-16 mx-auto mb-6 text-yellow-400" />
//             <h3 className="text-3xl font-bold mb-4">Awards & Recognition</h3>
//             <p className="text-blue-100 max-w-2xl mx-auto">
//               Our proven results have been recognized by industry bodies and client organizations
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="text-center">
//               <div className="bg-blue-700 p-6 rounded-lg mb-4">
//                 <Award className="h-12 w-12 mx-auto text-yellow-400" />
//               </div>
//               <h4 className="font-semibold text-xl mb-2">Estate Agent of the Year</h4>
//               <p className="text-blue-100 text-sm">London Property Awards 2023</p>
//             </div>
//             <div className="text-center">
//               <div className="bg-blue-700 p-6 rounded-lg mb-4">
//                 <TrendingUp className="h-12 w-12 mx-auto text-yellow-400" />
//               </div>
//               <h4 className="font-semibold text-xl mb-2">Best Sales Performance</h4>
//               <p className="text-blue-100 text-sm">Regional Property Excellence 2023</p>
//             </div>
//             <div className="text-center">
//               <div className="bg-blue-700 p-6 rounded-lg mb-4">
//                 <CheckCircle className="h-12 w-12 mx-auto text-yellow-400" />
//               </div>
//               <h4 className="font-semibold text-xl mb-2">Customer Service Excellence</h4>
//               <p className="text-blue-100 text-sm">National Customer Awards 2023</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact CTA */}
//       <section className="py-16">
//         <div className="container mx-auto px-4 text-center">
//           <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to See Results?</h3>
//           <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
//             Let our proven track record work for you. Contact us today to discuss your property needs.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link href="/book-appointment">
//               <button className="bg-blue-800 text-white px-8 py-3 rounded-lg hover:bg-blue-900 transition-colors">
//                 Book Consultation
//               </button>
//             </Link>
//             <Link href="/contact">
//               <button className="border border-blue-800 text-blue-800 px-8 py-3 rounded-lg hover:bg-blue-800 hover:text-white transition-colors">
//                 Get Free Valuation
//               </button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-blue-900 text-white py-12">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-4 gap-8">
//             <div>
//               <div className="flex items-center space-x-2 mb-4">
//                 <Building2 className="h-6 w-6" />
//                 <span className="font-bold text-lg">CAPITAL</span>
//               </div>
//               <p className="text-blue-200 text-sm">
//                 The property professionals - your trusted partner for all property needs in London.
//               </p>
//             </div>
//             <div>
//               <h5 className="font-semibold mb-4">Services</h5>
//               <ul className="space-y-2 text-sm text-blue-200">
//                 <li>
//                   <Link href="/services" className="hover:text-white">
//                     Property Sales
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/services" className="hover:text-white">
//                     Lettings
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/services" className="hover:text-white">
//                     Property Management
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/services" className="hover:text-white">
//                     Valuations
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h5 className="font-semibold mb-4">Areas</h5>
//               <ul className="space-y-2 text-sm text-blue-200">
//                 <li>Clapham</li>
//                 <li>Canary Wharf</li>
//                 <li>Richmond</li>
//                 <li>Battersea</li>
//               </ul>
//             </div>
//             <div>
//               <h5 className="font-semibold mb-4">Contact</h5>
//               <div className="space-y-2 text-sm text-blue-200">
//                 <p>
//                   <a href="tel:02085685680" className="hover:text-white">
//                     020 8568 5680
//                   </a>
//                 </p>
//                 <p>info@capital-estates.co.uk</p>
//                 <p>www.capital-estates.co.uk</p>
//               </div>
//             </div>
//           </div>
//           <div className="border-t border-blue-800 mt-8 pt-8 text-center text-sm text-blue-200">
//             <p>&copy; 2025 CAPITAL Letting & Estate Agents. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }
