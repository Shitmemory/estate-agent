import { Building2, Phone, Star, Heart, Shield, Clock, Award, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const testimonials = [
  {
    name: "Jennifer Smith",
    rating: 5,
    comment:
      "Exceptional service from start to finish. The team went above and beyond to help us find our perfect home.",
    service: "Property Purchase",
    date: "December 2023",
  },
  {
    name: "Robert Johnson",
    rating: 5,
    comment: "Professional, knowledgeable, and always available. Made selling our property stress-free.",
    service: "Property Sale",
    date: "November 2023",
  },
  {
    name: "Maria Garcia",
    rating: 5,
    comment: "Outstanding lettings service. Quick, efficient, and found us excellent tenants within a week.",
    service: "Property Letting",
    date: "October 2023",
  },
  {
    name: "James Wilson",
    rating: 5,
    comment: "Accurate valuation and excellent market knowledge. Sold our house for asking price within two weeks.",
    service: "Property Valuation & Sale",
    date: "September 2023",
  },
]

const serviceFeatures = [
  {
    icon: Heart,
    title: "Personal Touch",
    description:
      "We treat every client like family, providing personalized attention and care throughout your property journey.",
  },
  {
    icon: Shield,
    title: "Trust & Transparency",
    description:
      "Complete transparency in all dealings with no hidden fees or surprises. Your trust is our foundation.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock support when you need it most. We're always here to answer your questions.",
  },
  {
    icon: Award,
    title: "Award-Winning Service",
    description: "Recognized by industry bodies for our exceptional customer service and professional standards.",
  },
]

export default function FiveStarServicePage() {
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
          <div className="flex justify-center mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-8 w-8 text-yellow-400 fill-current" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">5-Star Service Excellence</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Delivering exceptional customer service that consistently exceeds expectations and earns five-star reviews
          </p>
        </div>
      </section>

      {/* Service Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="h-12 w-12 text-blue-800 mx-auto mb-4" />
              <div className="text-3xl font-bold text-blue-800 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Award className="h-12 w-12 text-blue-800 mx-auto mb-4" />
              <div className="text-3xl font-bold text-blue-800 mb-2">15+</div>
              <div className="text-gray-600">Industry Awards</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Heart className="h-12 w-12 text-blue-800 mx-auto mb-4" />
              <div className="text-3xl font-bold text-blue-800 mb-2">95%</div>
              <div className="text-gray-600">Repeat Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Our Service 5-Star */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">What Makes Our Service 5-Star</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence is reflected in every aspect of our service delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <feature.icon className="h-12 w-12 text-blue-800 mx-auto mb-4" />
                  <h4 className="font-bold text-lg mb-3">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h3>
            <p className="text-gray-600">Real reviews from real clients who experienced our 5-star service</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <p className="text-sm text-gray-600">{testimonial.service}</p>
                    </div>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">"{testimonial.comment}"</p>
                  <p className="text-sm text-gray-500">{testimonial.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Guarantee */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <Shield className="h-16 w-16 mx-auto mb-6 text-blue-200" />
          <h3 className="text-3xl font-bold mb-4">Our Service Guarantee</h3>
          <p className="text-blue-100 max-w-3xl mx-auto mb-8">
            We're so confident in our 5-star service that we guarantee your satisfaction. If you're not completely happy
            with our service, we'll work tirelessly to make it right or provide a full refund.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div>
              <Clock className="h-8 w-8 mx-auto mb-3 text-blue-200" />
              <h4 className="font-semibold mb-2">Response Guarantee</h4>
              <p className="text-blue-100 text-sm">We respond to all inquiries within 2 hours during business hours</p>
            </div>
            <div>
              <Heart className="h-8 w-8 mx-auto mb-3 text-blue-200" />
              <h4 className="font-semibold mb-2">Satisfaction Promise</h4>
              <p className="text-blue-100 text-sm">100% satisfaction guaranteed or we'll make it right</p>
            </div>
            <div>
              <Award className="h-8 w-8 mx-auto mb-3 text-blue-200" />
              <h4 className="font-semibold mb-2">Quality Assurance</h4>
              <p className="text-blue-100 text-sm">Every service delivery is quality checked by our senior team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Experience Our 5-Star Service</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who have experienced our award-winning service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-appointment">
              <button className="bg-blue-800 text-white px-8 py-3 rounded-lg hover:bg-blue-900 transition-colors">
                Book Consultation
              </button>
            </Link>
            <Link href="/contact">
              <button className="border border-blue-800 text-blue-800 px-8 py-3 rounded-lg hover:bg-blue-800 hover:text-white transition-colors">
                Contact Us Today
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
