"use client";

import {
  Building2,
  Phone,
  Mail,
  MapPin,
  Users,
  Home,
  Key,
  TrendingUp,
  Star,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero";

export default function HomePage() {
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("info@capital-estates.co.uk");
    alert("Email copied to clipboard!");
  };

  return (
    <div>
      {/* Header */}

      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Services
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-xl">
              Comprehensive property services tailored to meet your needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/book-appointment">
              <Card className="border-blue-200 hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <Home className="h-12 w-12 text-blue-800 mx-auto mb-4" />
                  <CardTitle className="text-blue-800">
                    Property Sales
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center text-lg">
                    Expert guidance through the entire sales process with
                    competitive rates and professional marketing.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/book-appointment">
              <Card className="border-blue-200 hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <Key className="h-12 w-12 text-blue-800 mx-auto mb-4" />
                  <CardTitle className="text-blue-800">Lettings</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center text-lg">
                    Comprehensive lettings service for landlords and tenants
                    with full property management options.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/book-appointment">
              <Card className="border-blue-200 hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <TrendingUp className="h-12 w-12 text-blue-800 mx-auto mb-4" />
                  <CardTitle className="text-blue-800">
                    Property Valuation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center text-lg">
                    Accurate property valuations from experienced professionals
                    with local market knowledge.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section id="properties" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Featured Properties
            </h3>
            <p className="text-gray-600 text-xl">
              Discover our latest property listings
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card
                key={i}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src={
                      i === 1
                        ? "/images/property-1.png"
                        : i === 2
                        ? "/images/property-2.png"
                        : "/images/property-3.png"
                    }
                    alt={`Property ${i}`}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-800">
                    {i === 1 ? "For Sale" : i === 2 ? "To Let" : "Sold STC"}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-2">
                    {i === 1
                      ? "3 Bed Victorian House"
                      : i === 2
                      ? "2 Bed Modern Apartment"
                      : "4 Bed Family Home"}
                  </h4>
                  <p className="text-gray-600 mb-3">
                    {i === 1
                      ? "Clapham, SW4"
                      : i === 2
                      ? "Canary Wharf, E14"
                      : "Richmond, TW9"}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl md:text-2xl font-bold text-blue-800">
                      {i === 1
                        ? "£750,000"
                        : i === 2
                        ? "£2,500/month"
                        : "£950,000"}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white text-xl"
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-xl">
              Don't just take our word for it - hear from our satisfied clients
              about their experience with CAPITAL
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Helena Pombares Review */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-10">
                  <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    H
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-gray-900">
                      Helena Pombares
                    </h4>
                    <div className="flex items-center text-sm text-gray-600">
                      <span>Verified Client</span>
                    </div>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-lg">
                  "Staff is amazingly professional. They go above and beyond to
                  help their customers and to provide the best service. Their
                  properties are always very well kept and the maintenance team
                  is spot on!"
                </p>
              </CardContent>
            </Card>

            {/* Adam Powers Review */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-10">
                  <div className="w-12 h-12 bg-green-800 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    A
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-gray-900">Adam Powers</h4>
                    <div className="flex items-center text-sm text-gray-600">
                      <span>Verified Client</span>
                    </div>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-lg">
                  "Amazing service at Capital Lettings. Very friendly staff. One
                  of the best estate agents around and one I highly recommend!"
                </p>
              </CardContent>
            </Card>
            {/* Anonymous Review */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-10">
                  <div className="w-12 h-12 bg-purple-800 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    K
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-gray-900">
                      Keczán József
                    </h4>
                    <div className="flex items-center text-sm text-gray-600">
                      <span>Verified Client</span>
                    </div>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-lg">
                  "Nice, helpful people, especially Kaldipe. Thank you for your
                  service. I can only recommend them."
                </p>
              </CardContent>
            </Card>

            {/* John English Review */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-10">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    J
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-gray-900">
                      John English
                    </h4>
                    <div className="flex items-center text-sm text-gray-600">
                      <span>Verified Client</span>
                    </div>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-lg">
                  "Made letting my property simple and straightforward,
                  especially after my previous not so good experiences. I have
                  been with Capital now for a number of years and I have never
                  had any concerns in regards to my rental payments or the well
                  being of of my property. Excellent Service."
                </p>
              </CardContent>
            </Card>

            {/* Additional Review Card for Balance */}
            <Card className="hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-10">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    B
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-gray-900">
                      Balwant Sehmi
                    </h4>
                    <div className="flex items-center text-sm text-gray-600">
                      <span>Verified Client</span>
                    </div>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-lg">
                  "Capital lettings have fully managed our property for a number
                  of years. The staff are friendly and professional. Kaldipe
                  deals with any issues which arise and keeps us in the loop all
                  the time. We would gladly recommend Capital Lettings for
                  property management."
                </p>
              </CardContent>
            </Card>

            {/* Call to Action Card */}
            <Card className="bg-blue-800 text-white hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <CardContent className="p-6 text-center mt-12">
                <Users className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                <h4 className="font-bold text-2xl mb-3">
                  Join Our Happy Clients
                </h4>
                <p className="text-blue-100 text-lg mb-4">
                  Experience the CAPITAL difference for yourself. Book a
                  consultation today.
                </p>
                <Link href="/book-appointment">
                  <Button className="bg-white text-blue-800 text-lg hover:bg-blue-50">
                    Book Consultation
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Why Choose CAPITAL?
            </h3>
            <p className="text-blue-100 max-w-2xl mx-auto text-xl">
              Years of experience and local expertise make us the trusted choice
              for property services
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link
              href="/expert-team"
              className="text-center hover:bg-blue-700 p-4 rounded-lg transition-colors"
            >
              <Users className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <h4 className="font-semibold mb-2 text-xl">Expert Team</h4>
              <p className="text-blue-100 text-lg">
                Qualified professionals with extensive local knowledge
              </p>
            </Link>
            <Link
              href="/five-star-service"
              className="text-center hover:bg-blue-700 p-4 rounded-lg transition-colors"
            >
              <Star className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <h4 className="font-semibold mb-2 text-xl">Excellent Service</h4>
              <p className="text-blue-100 text-lg">
                Exceptional customer service and satisfaction
              </p>
            </Link>
            <Link
              href="/"
              className="text-center hover:bg-blue-700 p-4 rounded-lg transition-colors"
            >
              <CheckCircle className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <h4 className="font-semibold text-xl mb-2">Proven Results</h4>
              <p className="text-blue-100 text-lg">
                Track record of successful sales and lettings
              </p>
            </Link>
            <Link
              href="/local-expertise"
              className="text-center hover:bg-blue-700 p-4 rounded-lg transition-colors"
            >
              <MapPin className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <h4 className="font-semibold mb-2 text-xl">Local Expertise</h4>
              <p className="text-blue-100 text-lg">
                Deep understanding of the local property market
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                About CAPITAL
              </h3>
              <p className="text-gray-600 mb-4 text-lg">
                CAPITAL Letting & Estate Agents has been serving the London
                property market for more than two decades. We pride ourselves on
                being "the property professionals" - delivering exceptional
                service with integrity, expertise, and local knowledge.
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                Our experienced team understands that buying, selling, or
                renting a property is one of life's most important decisions.
                That's why we're committed to providing personalised service and
                expert guidance every step of the way.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-800">500+</div>
                  <div className="text-lg text-gray-600">Properties Sold</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-800">20+</div>
                  <div className="text-lg text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/capital-storefront.png"
                alt="CAPITAL Storefront"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h3>
            <p className="text-gray-600 text-xl">
              Ready to start your property journey?{" "}
              <span className="font-bold">Contact us today.</span>
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <a href="tel:02085685680" className="block">
              <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <Phone className="h-8 w-8 text-blue-800 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Phone</h4>
                  <p className="text-gray-600 hover:text-blue-800">
                    020 8568 5680
                  </p>
                </CardContent>
              </Card>
            </a>
            <Card
              className="text-center hover:shadow-lg transition-shadow cursor-pointer"
              onClick={copyEmailToClipboard}
            >
              <CardContent className="p-6">
                <Mail className="h-8 w-8 text-blue-800 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="text-gray-600 hover:text-blue-800">
                  info@capital-estates.co.uk
                </p>
              </CardContent>
            </Card>
            <a
              href="https://maps.google.com/?q=316+High+Road+Leyton+London+E10+5PW"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <MapPin className="h-8 w-8 text-blue-800 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Visit Us</h4>
                  <p className="text-gray-600 hover:text-blue-800">
                    316 High Road
                    <br />
                    Leyton, London E10 5PW
                  </p>
                </CardContent>
              </Card>
            </a>
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
                <p>
                  <button
                    onClick={copyEmailToClipboard}
                    className="hover:text-white"
                  >
                    info@capital-estates.co.uk
                  </button>
                </p>
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
