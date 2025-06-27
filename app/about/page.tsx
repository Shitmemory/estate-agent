"use client";

import {
  Building2,
  Phone,
  Users,
  Award,
  Heart,
  Shield,
  Target,
  TrendingUp,
  Star,
  CheckCircle,
  Calendar,
  Handshake,
  Key,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";

const timeline = [
  {
    year: "insert",
    title: "Foundation",
    description:
      "CAPITAL Letting & Estate Agents was founded with a vision to provide exceptional property services in East London.",
    milestone: "Opened first office in Leyton High Road",
  },
  {
    year: "2008",
    title: "Expansion",
    description:
      "Expanded services to include comprehensive property management and investment advisory.",
    milestone: "Reached 100+ properties under management",
  },
  {
    year: "2012",
    title: "Recognition",
    description:
      "Received first industry award for customer service excellence and local market expertise.",
    milestone: "Won 'Local Estate Agent of the Year'",
  },
  {
    year: "2016",
    title: "Digital Innovation",
    description:
      "Launched advanced digital marketing platform and online property management portal.",
    milestone: "Introduced virtual property tours",
  },
  {
    year: "2020",
    title: "Resilience",
    description:
      "Adapted quickly to market changes, maintaining service excellence during challenging times.",
    milestone: "Achieved 98% client satisfaction rating",
  },
  {
    year: "2024",
    title: "Excellence",
    description:
      "Celebrating 20 years of service with over 500 successful sales and 300+ managed properties.",
    milestone: "Industry leader in East London",
  },
];

const values = [
  {
    icon: Heart,
    title: "Client-First Approach",
    description:
      "Every decision we make is guided by what's best for our clients. Your success is our success.",
    examples: [
      "Personalized service plans",
      "24/7 client support",
      "No hidden fees policy",
    ],
  },
  {
    icon: Shield,
    title: "Integrity & Transparency",
    description:
      "We believe in honest, transparent dealings with complete disclosure at every step.",
    examples: [
      "Clear fee structures",
      "Regular progress updates",
      "Honest market assessments",
    ],
  },
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "We're committed to delivering measurable results that exceed expectations.",
    examples: [
      "Faster sale times",
      "Higher price achievements",
      "Proven track record",
    ],
  },
  {
    icon: Users,
    title: "Community Focus",
    description:
      "As local specialists, we're invested in the communities we serve.",
    examples: [
      "Local market expertise",
      "Community partnerships",
      "Neighborhood knowledge",
    ],
  },
  {
    icon: TrendingUp,
    title: "Continuous Innovation",
    description:
      "We embrace new technologies and methods to improve our service delivery.",
    examples: [
      "Digital marketing tools",
      "Virtual property tours",
      "Online client portals",
    ],
  },
  {
    icon: Handshake,
    title: "Professional Excellence",
    description:
      "Maintaining the highest professional standards through continuous training and development.",
    examples: [
      "Industry qualifications",
      "Regular training programs",
      "Professional memberships",
    ],
  },
];

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Managing Director",
    experience: "15 years",
    qualifications: ["NAEA Qualified", "ARLA Licensed", "MBA Property"],
    bio: "Sarah founded CAPITAL with a vision to revolutionize property services in East London. Her leadership has driven the company's growth and reputation for excellence.",
    specialties: ["Strategic planning", "Market analysis", "Client relations"],
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Michael Chen",
    role: "Head of Sales",
    experience: "12 years",
    qualifications: [
      "NAEA Qualified",
      "Negotiation Specialist",
      "Property Law Certified",
    ],
    bio: "Michael leads our sales team with exceptional market knowledge and negotiation skills, consistently achieving above-market results for clients.",
    specialties: ["Property sales", "Market valuations", "Negotiation"],
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Emma Thompson",
    role: "Lettings Manager",
    experience: "10 years",
    qualifications: [
      "ARLA Qualified",
      "Property Management Certified",
      "Legal Compliance Expert",
    ],
    bio: "Emma oversees our lettings division, ensuring landlords and tenants receive exceptional service and support throughout their journey.",
    specialties: ["Lettings", "Property management", "Legal compliance"],
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "David Williams",
    role: "Senior Property Consultant",
    experience: "8 years",
    qualifications: [
      "NAEA Member",
      "First-Time Buyer Specialist",
      "Investment Advisory Certified",
    ],
    bio: "David specializes in helping first-time buyers and investors navigate the property market with confidence and success.",
    specialties: ["First-time buyers", "Investment advice", "Market research"],
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Lisa Rodriguez",
    role: "Property Manager",
    experience: "6 years",
    qualifications: [
      "ARLA Licensed",
      "Maintenance Coordination",
      "Tenant Relations Expert",
    ],
    bio: "Lisa ensures all managed properties are maintained to the highest standards while providing excellent tenant and landlord support.",
    specialties: ["Property maintenance", "Tenant relations", "Compliance"],
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "James Mitchell",
    role: "Marketing & Digital Specialist",
    experience: "5 years",
    qualifications: [
      "Digital Marketing Certified",
      "Photography Professional",
      "Social Media Expert",
    ],
    bio: "James leads our marketing efforts, creating compelling campaigns that showcase properties and attract the right buyers and tenants.",
    specialties: ["Digital marketing", "Photography", "Social media"],
    image: "/placeholder.svg?height=400&width=400",
  },
];

const achievements = [
  {
    year: "2023",
    award: "Estate Agent of the Year",
    organization: "London Property Awards",
    description: "Recognized for outstanding service and market performance",
  },
  {
    year: "2023",
    award: "Customer Service Excellence",
    organization: "National Customer Awards",
    description: "Achieved 98% client satisfaction rating",
  },
  {
    year: "2022",
    award: "Best Lettings Agency",
    organization: "East London Property Awards",
    description: "Leading lettings performance in the region",
  },
  {
    year: "2022",
    award: "Innovation in Property Marketing",
    organization: "UK Property Marketing Awards",
    description: "Pioneering digital marketing strategies",
  },
  {
    year: "2021",
    award: "Community Impact Award",
    organization: "Leyton Business Association",
    description: "Outstanding contribution to local community",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About CAPITAL</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Twenty years of excellence in East London property services, built
            on trust, expertise, and community commitment
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h3>
              <p className="text-gray-700 mb-4 text-lg">
                Founded in 2004, CAPITAL Letting & Estate Agents began with a
                simple mission: to provide exceptional property services that
                put clients first. What started as a small local agency has
                grown into East London's most trusted property professionals.
              </p>
              <p className="text-gray-700 mb-4">
                Over two decades, we've helped thousands of clients buy, sell,
                rent, and manage properties across East London. Our success is
                built on deep local knowledge, professional expertise, and an
                unwavering commitment to client satisfaction.
              </p>
              <p className="text-gray-700 mb-6">
                Today, we're proud to be recognized as industry leaders, but we
                never forget our roots as a community-focused business that
                treats every client like family.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-800">20+</div>
                  <div className="text-sm text-gray-600">
                    Years of Excellence
                  </div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-800">2000+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/storefront-updated.png"
                alt="CAPITAL Office"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Journey
            </h3>
            <p className="text-gray-600">
              Two decades of growth, innovation, and service excellence
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-3">
                          <Calendar className="h-5 w-5 text-blue-800 mr-2" />
                          <Badge
                            variant="outline"
                            className="text-blue-800 border-blue-800"
                          >
                            {item.year}
                          </Badge>
                        </div>
                        <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                        <p className="text-gray-700 mb-3">{item.description}</p>
                        <p className="text-sm font-semibold text-blue-800">
                          {item.milestone}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-blue-800 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our
              relationships with clients and community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <value.icon className="h-12 w-12 text-blue-800 mx-auto mb-4" />
                  <CardTitle className="text-blue-800">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{value.description}</p>
                  <div className="space-y-2">
                    {value.examples.map((example, exampleIndex) => (
                      <div
                        key={exampleIndex}
                        className="flex items-center text-sm"
                      >
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{example}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experienced professionals are the heart of CAPITAL, bringing
              expertise, dedication, and local knowledge to every client
              interaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center mb-4">
                    <h4 className="font-bold text-lg mb-1">{member.name}</h4>
                    <p className="text-blue-800 font-semibold mb-1">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {member.experience} experience
                    </p>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">{member.bio}</p>
                  <div className="mb-4">
                    <h5 className="font-semibold text-sm mb-2">Specialties:</h5>
                    <div className="flex flex-wrap gap-1">
                      {member.specialties.map((specialty, specialtyIndex) => (
                        <Badge
                          key={specialtyIndex}
                          variant="outline"
                          className="text-xs"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm mb-2">
                      Qualifications:
                    </h5>
                    <div className="space-y-1">
                      {member.qualifications.map((qual, qualIndex) => (
                        <div
                          key={qualIndex}
                          className="flex items-center text-xs"
                        >
                          <Award className="h-3 w-3 text-blue-800 mr-1" />
                          <span className="text-gray-600">{qual}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Award className="h-16 w-16 mx-auto mb-6 text-yellow-400" />
            <h3 className="text-3xl font-bold mb-4">Awards & Recognition</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by industry
              bodies and client organizations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="bg-blue-700 border-blue-600 text-white"
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-yellow-400 text-blue-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8" />
                  </div>
                  <Badge className="mb-3 bg-blue-600 text-white">
                    {achievement.year}
                  </Badge>
                  <h4 className="font-bold text-lg mb-2">
                    {achievement.award}
                  </h4>
                  <p className="text-blue-100 text-sm mb-3">
                    {achievement.organization}
                  </p>
                  <p className="text-blue-200 text-xs">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Impact
            </h3>
            <p className="text-gray-600">
              Numbers that reflect our commitment to excellence and client
              success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <TrendingUp className="h-12 w-12 text-blue-800 mx-auto mb-4" />
              <div className="text-3xl font-bold text-blue-800 mb-2">500+</div>
              <div className="text-gray-600">Successful Sales</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <Key className="h-12 w-12 text-green-800 mx-auto mb-4" />
              <div className="text-3xl font-bold text-green-800 mb-2">300+</div>
              <div className="text-gray-600">Properties Let</div>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <Users className="h-12 w-12 text-purple-800 mx-auto mb-4" />
              <div className="text-3xl font-bold text-purple-800 mb-2">
                2000+
              </div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center p-6 bg-yellow-50 rounded-lg">
              <Star className="h-12 w-12 text-yellow-800 mx-auto mb-4" />
              <div className="text-3xl font-bold text-yellow-800 mb-2">
                4.9/5
              </div>
              <div className="text-gray-600">Client Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Community Commitment
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're proud to be part of the East London community and actively
              support local initiatives
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-3">Local Charities</h4>
                <p className="text-gray-700 text-sm">
                  Supporting local charities through donations, fundraising
                  events, and volunteer work.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-blue-800 mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-3">Community Events</h4>
                <p className="text-gray-700 text-sm">
                  Sponsoring and participating in local events, festivals, and
                  community gatherings.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Building2 className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-3">Local Business</h4>
                <p className="text-gray-700 text-sm">
                  Supporting local businesses and contributing to the economic
                  growth of East London.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Work with CAPITAL?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Experience the difference that 20 years of expertise and community
            commitment can make for your property journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-appointment">
              <Button
                size="lg"
                className="bg-white text-blue-800 hover:bg-blue-50"
              >
                Book Consultation
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-800"
              >
                Contact Us
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
              <p className="text-blue-200 text-sm">
                The property professionals - your trusted partner for all
                property needs in London.
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
                <li>Leyton</li>
                <li>Leytonstone</li>
                <li>Walthamstow</li>
                <li>Stratford</li>
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
            <p>
              &copy; 2025 CAPITAL Letting & Estate Agents. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
