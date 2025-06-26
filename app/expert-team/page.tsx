import { Building2, Phone, Users, Award, GraduationCap, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Senior Property Consultant",
    experience: "12 years",
    specialization: "Residential Sales",
    qualifications: ["NAEA Qualified", "ARLA Licensed"],
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Michael Chen",
    role: "Lettings Manager",
    experience: "8 years",
    specialization: "Property Management",
    qualifications: ["ARLA Qualified", "Property Management Certified"],
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Emma Thompson",
    role: "Property Valuer",
    experience: "15 years",
    specialization: "Property Valuations",
    qualifications: ["RICS Qualified", "Chartered Surveyor"],
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "David Williams",
    role: "Sales Negotiator",
    experience: "6 years",
    specialization: "First-Time Buyers",
    qualifications: ["NAEA Member", "Customer Service Excellence"],
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function ExpertTeamPage() {
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
          <Users className="h-16 w-16 mx-auto mb-6 text-blue-200" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expert Team</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Meet our qualified professionals who bring years of experience and local expertise to every property
            transaction
          </p>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Award className="h-12 w-12 text-blue-800 mx-auto mb-4" />
              <div className="text-3xl font-bold text-blue-800 mb-2">50+</div>
              <div className="text-gray-600">Years Combined Experience</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <GraduationCap className="h-12 w-12 text-blue-800 mx-auto mb-4" />
              <div className="text-3xl font-bold text-blue-800 mb-2">100%</div>
              <div className="text-gray-600">Qualified Professionals</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="h-12 w-12 text-blue-800 mx-auto mb-4" />
              <div className="text-3xl font-bold text-blue-800 mb-2">1000+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Clock className="h-12 w-12 text-blue-800 mx-auto mb-4" />
              <div className="text-3xl font-bold text-blue-800 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experienced professionals are here to guide you through every step of your property journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">{member.name}</h4>
                  <p className="text-blue-800 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-3">{member.experience} experience</p>
                  <p className="text-gray-600 text-sm mb-4">Specializes in {member.specialization}</p>
                  <div className="space-y-1">
                    {member.qualifications.map((qual, qualIndex) => (
                      <Badge key={qualIndex} variant="outline" className="text-xs">
                        {qual}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Team Stands Out */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Why Our Team Stands Out</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Our commitment to excellence and professional development sets us apart
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <GraduationCap className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <h4 className="font-semibold text-xl mb-3">Continuous Training</h4>
              <p className="text-blue-100">
                Our team regularly updates their skills and knowledge to stay current with market trends and
                regulations.
              </p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <h4 className="font-semibold text-xl mb-3">Industry Recognition</h4>
              <p className="text-blue-100">
                Multiple awards and certifications from leading property industry bodies validate our expertise.
              </p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <h4 className="font-semibold text-xl mb-3">Client-Focused Approach</h4>
              <p className="text-blue-100">
                We prioritize understanding your unique needs and providing personalized solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Work with Our Expert Team?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to speak with one of our qualified property professionals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-appointment">
              <button className="bg-blue-800 text-white px-8 py-3 rounded-lg hover:bg-blue-900 transition-colors">
                Book Consultation
              </button>
            </Link>
            <Link href="/contact">
              <button className="border border-blue-800 text-blue-800 px-8 py-3 rounded-lg hover:bg-blue-800 hover:text-white transition-colors">
                Contact Us
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
