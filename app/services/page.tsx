"use client";

import {
  Building2,
  Phone,
  Home,
  Key,
  TrendingUp,
  Users,
  Shield,
  Clock,
  CheckCircle,
  Star,
  Award,
  Calculator,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Navbar } from "@/components/navbar";

const services = [
  {
    id: "property-sales",
    icon: Home,
    title: "Property Sales",
    subtitle: "Expert guidance through your property sale",
    description:
      "Comprehensive sales service from initial valuation to completion, ensuring maximum value and minimal stress.",
    features: [
      "Free market appraisal and valuation",
      "Professional photography and floor plans",
      "Multi-platform marketing strategy",
      "Accompanied viewings and feedback",
      "Expert negotiation and offer management",
      "Legal and completion support",
    ],
    process: [
      "Initial consultation and property assessment",
      "Market valuation and pricing strategy",
      "Professional marketing launch",
      "Viewings and buyer qualification",
      "Offer negotiation and acceptance",
      "Legal process and completion",
    ],
    pricing: "No sale, no fee - Competitive commission rates from 1.5%",
    timeframe: "Average sale time: 28 days",
    guarantee: "Price match guarantee on comparable properties",
  },
  {
    id: "lettings",
    icon: Key,
    title: "Lettings & Property Management",
    subtitle: "Complete lettings service for landlords",
    description:
      "Full-service lettings and property management, from tenant finding to ongoing maintenance and rent collection.",
    features: [
      "Tenant finding and referencing",
      "Rent collection and arrears management",
      "Property maintenance and repairs",
      "Regular property inspections",
      "Legal compliance and safety certificates",
      "24/7 emergency support for tenants",
    ],
    process: [
      "Property assessment and rental valuation",
      "Marketing and tenant advertising",
      "Tenant viewings and applications",
      "Referencing and credit checks",
      "Tenancy agreement and deposit handling",
      "Ongoing management and support",
    ],
    pricing: "Tenant finding: 8-12% of annual rent | Full management: 12-15%",
    timeframe: "Average let time: 14 days",
    guarantee: "Rent guarantee insurance available",
  },
  {
    id: "property-valuation",
    icon: TrendingUp,
    title: "Property Valuations",
    subtitle: "Accurate valuations from qualified professionals",
    description:
      "Professional property valuations for sales, lettings, insurance, probate, and financial purposes.",
    features: [
      "RICS qualified surveyors",
      "Comprehensive market analysis",
      "Detailed valuation reports",
      "Insurance and probate valuations",
      "Investment yield calculations",
      "Market trend analysis",
    ],
    process: [
      "Property inspection appointment",
      "Detailed property assessment",
      "Market research and comparables",
      "Valuation calculation and analysis",
      "Comprehensive written report",
      "Follow-up consultation if needed",
    ],
    pricing: "Free for sales/lettings | Professional reports from £150",
    timeframe: "Same-day verbal, written report within 48 hours",
    guarantee: "Accuracy guarantee backed by professional indemnity",
  },
  {
    id: "property-management",
    icon: Shield,
    title: "Property Management",
    subtitle: "Complete property management solutions",
    description:
      "Comprehensive property management service taking care of all aspects of your rental investment.",
    features: [
      "Rent collection and accounting",
      "Maintenance and repair coordination",
      "Tenant relations and support",
      "Legal compliance management",
      "Financial reporting and statements",
      "Property improvement advice",
    ],
    process: [
      "Property onboarding and setup",
      "Tenant handover and inventory",
      "Monthly rent collection",
      "Regular property inspections",
      "Maintenance issue resolution",
      "Annual financial reporting",
    ],
    pricing: "12-15% of monthly rental income",
    timeframe: "Ongoing service with monthly reporting",
    guarantee: "Service level agreement with response times",
  },
  {
    id: "investment-advice",
    icon: Calculator,
    title: "Investment Advisory",
    subtitle: "Expert property investment guidance",
    description:
      "Professional investment advice to help you build and optimize your property portfolio.",
    features: [
      "Portfolio analysis and optimization",
      "Market opportunity identification",
      "Yield and ROI calculations",
      "Tax efficiency planning",
      "Exit strategy planning",
      "Market timing advice",
    ],
    process: [
      "Investment goals assessment",
      "Current portfolio review",
      "Market opportunity analysis",
      "Investment strategy development",
      "Property sourcing and acquisition",
      "Ongoing portfolio monitoring",
    ],
    pricing: "Consultation from £200 | Success-based fees available",
    timeframe: "Initial consultation: 1-2 hours",
    guarantee: "Independent advice with no hidden commissions",
  },
  {
    id: "first-time-buyers",
    icon: Users,
    title: "First-Time Buyer Support",
    subtitle: "Dedicated support for first-time buyers",
    description:
      "Comprehensive support service helping first-time buyers navigate the property market with confidence.",
    features: [
      "Mortgage advice and broker connections",
      "Property search and shortlisting",
      "Viewing coordination and guidance",
      "Offer strategy and negotiation",
      "Legal process support",
      "Post-purchase aftercare",
    ],
    process: [
      "Initial needs assessment meeting",
      "Budget and mortgage pre-approval",
      "Property search and viewings",
      "Offer preparation and submission",
      "Legal and survey coordination",
      "Completion and handover",
    ],
    pricing: "Free service for property purchases through us",
    timeframe: "Average purchase time: 8-12 weeks",
    guarantee: "Dedicated support throughout the entire process",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* nav */}
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-2xl text-blue-100 max-w-2xl mx-auto">
            Comprehensive property services designed to meet all your
            residential and investment needs
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Property Solutions
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-xl">
              From buying and selling to letting and management, we provide
              expert guidance at every step
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card
                key={service.id}
                className="hover:shadow-lg transition-shadow cursor-pointer"
              >
                <CardHeader className="text-center">
                  <service.icon className="h-12 w-12 text-blue-800 mx-auto mb-4" />
                  <CardTitle className="text-blue-800">
                    {service.title}
                  </CardTitle>
                  <p className="text-gray-600 text-lg">{service.subtitle}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700  mb-4">{service.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-gray-600">{service.timeframe}</span>
                    </div>
                    <div className="flex items-center ">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-gray-600">{service.guarantee}</span>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-blue-800 hover:bg-blue-900"
                    onClick={() =>
                      document
                        .getElementById(service.id)
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-16 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="flex items-center mb-6">
                  <service.icon className="h-12 w-12 text-blue-800 mr-4" />
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-xl">{service.subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 text-lg">
                  {service.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Clock className="h-5 w-5 text-blue-800 mr-2" />
                      <span className="font-semibold text-lg text-blue-800">
                        Timeframe
                      </span>
                    </div>
                    <p className=" text-gray-700">{service.timeframe}</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Shield className="h-5 w-5 text-green-800 mr-2" />
                      <span className="font-semibold text-lg text-green-800">
                        Guarantee
                      </span>
                    </div>
                    <p className="text-gray-700">{service.guarantee}</p>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Calculator className="h-5 w-5 text-yellow-800 mr-2" />
                    <span className="font-semibold text-lg text-yellow-800">
                      Pricing
                    </span>
                  </div>
                  <p className=" text-gray-700">{service.pricing}</p>
                </div>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <Star className="h-6 w-6 mr-2 text-blue-800" />
                      What's Included
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <Award className="h-6 w-6 mr-2 text-blue-800" />
                      Our Process
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-3">
                      {service.process.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start">
                          <Badge
                            variant="outline"
                            className="mr-3 mt-0.5 flex-shrink-0"
                          >
                            {stepIndex + 1}
                          </Badge>
                          <span className=" text-gray-700">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/book-appointment" className="flex-1">
                    <Button className="w-full text-lg bg-blue-800 hover:bg-blue-900">
                      Book Consultation
                    </Button>
                  </Link>
                  <Link href="/contact" className="flex-1">
                    <Button
                      variant="outline"
                      className="w-full border-blue-800 text-lg text-blue-800 hover:bg-blue-800 hover:text-white"
                    >
                      Get Quote
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Why Choose Our Services */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Why Choose CAPITAL Services?
            </h3>
            <p className="text-blue-100 max-w-2xl mx-auto text-xl">
              Our commitment to excellence and client satisfaction sets us apart
              in the London property market
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <h4 className="font-semibold text-xl mb-3">Expert Team</h4>
              <p className="text-blue-100 text-lg">
                Qualified professionals with extensive local knowledge and
                industry expertise.
              </p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <h4 className="font-semibold text-xl mb-3">Full Protection</h4>
              <p className="text-blue-100 text-lg">
                Comprehensive insurance and legal protection for all our
                services and clients.
              </p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <h4 className="font-semibold text-xl mb-3">Fast Results</h4>
              <p className="text-blue-100 text-lg">
                Proven track record of delivering results faster than market
                averages.
              </p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <h4 className="font-semibold text-xl mb-3">Award Winning</h4>
              <p className="text-blue-100 text-lg">
                Industry recognition for our exceptional service standards and
                client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Service Packages
            </h3>
            <p className="text-gray-600 text-xl">
              Tailored packages to meet different needs and budgets
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-blue-800">
                  Essential
                </CardTitle>
                <p className="text-gray-600 text-xl">
                  Perfect for straightforward transactions
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-lg">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>Basic marketing package</span>
                  </li>
                  <li className="flex items-center text-lg">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>Standard photography</span>
                  </li>
                  <li className="flex items-center text-lg">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>Online property portals</span>
                  </li>
                  <li className="flex items-center text-lg">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>Viewing coordination</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-800 hover:bg-blue-900">
                  From 1.5%
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-800 hover:shadow-lg transition-shadow relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-800">
                Most Popular
              </Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-blue-800">Premium</CardTitle>
                <p className="text-gray-600 text-xl">
                  Comprehensive service for best results
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>Professional photography & floor plans</span>
                  </li>
                  <li className="flex items-center text-lg">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>Premium marketing campaign</span>
                  </li>
                  <li className="flex items-center text-lg">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>Social media promotion</span>
                  </li>
                  <li className="flex items-center text-lg">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>Dedicated account manager</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-800 hover:bg-blue-900">
                  From 2.0%
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-blue-800">
                  Platinum
                </CardTitle>
                <p className="text-gray-600 text-xl">
                  Ultimate service for luxury properties
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-lg">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>Professional video tours</span>
                  </li>
                  <li className="flex items-center text-lg">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>Luxury marketing materials</span>
                  </li>
                  <li className="flex items-center text-lg">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>International marketing</span>
                  </li>
                  <li className="flex items-center text-lg">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>Concierge service</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-800 hover:bg-blue-900">
                  From 2.5%
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-xl">
            Contact us today to discuss your property needs and find the perfect
            service package for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-appointment">
              <Button
                size="lg"
                className="bg-blue-800 hover:bg-blue-900 text-lg"
              >
                Book Free Consultation
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white text-lg"
              >
                Get Custom Quote
              </Button>
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
              <p className="text-blue-200 text-lg">
                The property professionals - your trusted partner for all
                property needs in London.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Services</h5>
              <ul className="space-y-2 text-lg text-blue-200">
                <li>
                  <Link
                    href="/services#property-sales"
                    className="hover:text-white"
                  >
                    Property Sales
                  </Link>
                </li>
                <li>
                  <Link href="/services#lettings" className="hover:text-white">
                    Lettings
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#property-management"
                    className="hover:text-white"
                  >
                    Property Management
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#property-valuation"
                    className="hover:text-white"
                  >
                    Valuations
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Areas</h5>
              <ul className="space-y-2 text-lg text-blue-200">
                <li>Leyton</li>
                <li>Leytonstone</li>
                <li>Walthamstow</li>
                <li>Stratford</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Contact</h5>
              <div className="space-y-2 text-lg text-blue-200">
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
            <p>
              &copy; 2025 CAPITAL Letting & Estate Agents. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
