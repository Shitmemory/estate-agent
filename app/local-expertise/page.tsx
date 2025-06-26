import { Building2, Phone, MapPin, TrendingUp, Users, Home, BarChart3, Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const areas = [
  {
    name: "Leyton",
    properties: "150+ Active",
    avgPrice: "£485,000",
    growth: "+8.2%",
    description: "Our home base with deep community connections and market knowledge.",
  },
  {
    name: "Leytonstone",
    properties: "120+ Active",
    avgPrice: "£520,000",
    growth: "+7.8%",
    description: "Vibrant area with excellent transport links and growing popularity.",
  },
  {
    name: "Walthamstow",
    properties: "200+ Active",
    avgPrice: "£580,000",
    growth: "+9.1%",
    description: "Family-friendly area with Victorian charm and modern amenities.",
  },
  {
    name: "Stratford",
    properties: "180+ Active",
    avgPrice: "£450,000",
    growth: "+12.5%",
    description: "Olympic legacy area with excellent regeneration and investment potential.",
  },
]

const marketInsights = [
  {
    title: "East London Property Boom",
    insight: "Property values in E10-E17 have increased by 45% over the past 5 years",
    impact: "Strong investment potential for buyers and sellers",
  },
  {
    title: "Transport Improvements",
    insight: "Crossrail and improved Overground services boosting local property demand",
    impact: "15-20% premium for properties near transport hubs",
  },
  {
    title: "First-Time Buyer Hotspot",
    insight: "40% of our sales are to first-time buyers seeking value in East London",
    impact: "Competitive market requiring expert negotiation skills",
  },
  {
    title: "Rental Market Growth",
    insight: "Rental yields averaging 4.5-5.2% across our coverage areas",
    impact: "Strong buy-to-let opportunities for investors",
  },
]

export default function LocalExpertisePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <Building2 className="h-8 w-8" />
              <div>
                <h1 className="text-2xl font-bold">CAPITAL</h1>
                <p className="text-sm text-blue-100">Letting & Estate Agents</p>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/services" className="hover:text-blue-200 transition-colors">
                Services
              </Link>
              <Link href="/properties" className="hover:text-blue-200 transition-colors">
                Properties
              </Link>
              <Link href="/about" className="hover:text-blue-200 transition-colors">
                About
              </Link>
              <Link href="/contact" className="hover:text-blue-200 transition-colors">
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Phone className="h-4 w-4" />
              <a href="tel:02085685680" className="text-sm hover:text-blue-200">
                020 8568 5680
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <MapPin className="h-16 w-16 mx-auto mb-6 text-blue-200" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Local Expertise</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Deep local knowledge and community connections that make the difference in East London property markets
          </p>
        </div>
      </section>

      {/* Local Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Local Presence</h3>
            <p className="text-gray-600">Established expertise across East London's key property markets</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <MapPin className="h-12 w-12 text-blue-800 mx-auto mb-4" />
              <div className="text-3xl font-bold text-blue-800 mb-2">20+</div>
              <div className="text-gray-600">Years in East London</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Home className="h-12 w-12 text-blue-800 mx-auto mb-4" />
              <div className="text-3xl font-bold text-blue-800 mb-2">650+</div>
              <div className="text-gray-600">Properties Managed</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="h-12 w-12 text-blue-800 mx-auto mb-4" />
              <div className="text-3xl font-bold text-blue-800 mb-2">2000+</div>
              <div className="text-gray-600">Local Clients Served</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Award className="h-12 w-12 text-blue-800 mx-auto mb-4" />
              <div className="text-3xl font-bold text-blue-800 mb-2">95%</div>
              <div className="text-gray-600">Local Market Share</div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Coverage Areas</h3>
            <p className="text-gray-600">Specialist knowledge across East London's most sought-after locations</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {areas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-blue-800">{area.name}</CardTitle>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      {area.growth} growth
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Active Properties</p>
                      <p className="font-semibold">{area.properties}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Average Price</p>
                      <p className="font-semibold">{area.avgPrice}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Local Market Insights</h3>
            <p className="text-gray-600">Expert analysis of East London property trends and opportunities</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {marketInsights.map((insight, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <TrendingUp className="h-6 w-6 mr-2 text-blue-800" />
                    {insight.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">{insight.insight}</p>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-blue-800">Impact:</p>
                    <p className="text-sm text-blue-700">{insight.impact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Local Connections */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Users className="h-16 w-16 mx-auto mb-6 text-blue-200" />
            <h3 className="text-3xl font-bold mb-4">Deep Community Connections</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Our local expertise goes beyond property knowledge - we're part of the community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-700 p-6 rounded-lg mb-4">
                <Building2 className="h-12 w-12 mx-auto text-blue-200" />
              </div>
              <h4 className="font-semibold text-xl mb-3">Local Partnerships</h4>
              <p className="text-blue-100 text-sm">
                Strong relationships with local solicitors, surveyors, and mortgage brokers for seamless transactions.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-700 p-6 rounded-lg mb-4">
                <MapPin className="h-12 w-12 mx-auto text-blue-200" />
              </div>
              <h4 className="font-semibold text-xl mb-3">Neighborhood Knowledge</h4>
              <p className="text-blue-100 text-sm">
                Intimate knowledge of local schools, transport, amenities, and future development plans.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-700 p-6 rounded-lg mb-4">
                <Users className="h-12 w-12 mx-auto text-blue-200" />
              </div>
              <h4 className="font-semibold text-xl mb-3">Community Involvement</h4>
              <p className="text-blue-100 text-sm">
                Active participation in local events and community initiatives, building trust and relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Market Data */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Market Performance Data</h3>
            <p className="text-gray-600">Real-time insights from our local property transactions</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-6 w-6 mr-2 text-blue-800" />
                  Sales Performance by Area
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Leyton (E10)</span>
                    <span className="text-sm text-gray-600">28 days avg</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Leytonstone (E11)</span>
                    <span className="text-sm text-gray-600">32 days avg</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Walthamstow (E17)</span>
                    <span className="text-sm text-gray-600">25 days avg</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Stratford (E15)</span>
                    <span className="text-sm text-gray-600">30 days avg</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-6 w-6 mr-2 text-blue-800" />
                  Price Trends (Last 12 Months)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">1-2 Bed Flats</span>
                    <span className="text-sm text-green-600">+6.8%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">2-3 Bed Houses</span>
                    <span className="text-sm text-green-600">+8.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">3-4 Bed Houses</span>
                    <span className="text-sm text-green-600">+7.5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">4+ Bed Houses</span>
                    <span className="text-sm text-green-600">+9.1%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Leverage Our Local Expertise</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get insider knowledge and expert guidance from the area's leading property professionals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-appointment">
              <button className="bg-blue-800 text-white px-8 py-3 rounded-lg hover:bg-blue-900 transition-colors">
                Book Local Consultation
              </button>
            </Link>
            <Link href="/contact">
              <button className="border border-blue-800 text-blue-800 px-8 py-3 rounded-lg hover:bg-blue-800 hover:text-white transition-colors">
                Get Market Report
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Building2 className="h-6 w-6" />
                <span className="font-bold text-lg">CAPITAL</span>
              </div>
              <p className="text-blue-200 text-sm">
                The property professionals - your trusted partner for all property needs in London.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Services</h5>
              <ul className="space-y-2 text-sm text-blue-200">
                <li>
                  <Link href="/services" className="hover:text-white">
                    Property Sales
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    Lettings
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    Property Management
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    Valuations
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Areas</h5>
              <ul className="space-y-2 text-sm text-blue-200">
                <li>Clapham</li>
                <li>Canary Wharf</li>
                <li>Richmond</li>
                <li>Battersea</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Contact</h5>
              <div className="space-y-2 text-sm text-blue-200">
                <p>
                  <a href="tel:02085685680" className="hover:text-white">
                    020 8568 5680
                  </a>
                </p>
                <p>info@capital-estates.co.uk</p>
                <p>www.capital-estates.co.uk</p>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-sm text-blue-200">
            <p>&copy; 2025 CAPITAL Letting & Estate Agents. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
