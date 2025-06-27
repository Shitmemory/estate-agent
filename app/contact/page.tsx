"use client";

import type React from "react";

import { useState } from "react";
import {
  Building2,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  User,
  Home,
  TrendingUp,
  Send,
  CheckCircle,
  Calendar,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Navbar } from "@/components/navbar";

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    primary: "020 8568 5680",
    secondary: "Mon-Fri: 9AM-6PM, Sat: 9AM-4PM",
    action: "tel:02085685680",
    description: "Speak directly with our property experts",
  },
  {
    icon: Mail,
    title: "Email",
    primary: "info@capital-estates.co.uk",
    secondary: "We respond within 2 hours",
    action: "mailto:info@capital-estates.co.uk",
    description: "Send us your property inquiries",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp",
    primary: "+44 20 8568 5680",
    secondary: "Quick responses 9AM-9PM",
    action: "https://wa.me/442085685680",
    description: "Chat with us instantly",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    primary: "316 High Road, Leyton",
    secondary: "London E10 5PW",
    action: "https://maps.google.com/?q=316+High+Road+Leyton+London+E10+5PW",
    description: "Drop by our office anytime",
  },
];

const departments = [
  {
    name: "Sales Team",
    email: "sales@capital-estates.co.uk",
    phone: "020 8568 5681",
    description: "Property sales, valuations, and market advice",
  },
  {
    name: "Lettings Team",
    email: "lettings@capital-estates.co.uk",
    phone: "020 8568 5682",
    description: "Property rentals and tenant services",
  },
  {
    name: "Property Management",
    email: "management@capital-estates.co.uk",
    phone: "020 8568 5683",
    description: "Landlord services and property maintenance",
  },
  {
    name: "New Business",
    email: "newbusiness@capital-estates.co.uk",
    phone: "020 8568 5684",
    description: "New client inquiries and consultations",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiryType: "",
    propertyType: "",
    budget: "",
    timeframe: "",
    message: "",
    newsletter: false,
    terms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        inquiryType: "",
        propertyType: "",
        budget: "",
        timeframe: "",
        message: "",
        newsletter: false,
        terms: false,
      });
    }, 3000);
  };

  const copyEmailToClipboard = (email: string) => {
    navigator.clipboard.writeText(email);
    alert(`Email ${email} copied to clipboard!`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Get in touch with our property experts. We're here to help with all
            your property needs.
          </p>
        </div>
      </section>

      {/* Quick Contact Methods */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h3>
            <p className="text-gray-600">
              Choose the contact method that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow cursor-pointer"
              >
                <CardContent className="p-6">
                  <method.icon className="h-12 w-12 text-blue-800 mx-auto mb-4" />
                  <h4 className="font-bold text-lg mb-2">{method.title}</h4>
                  <p className="text-gray-700 font-semibold mb-1">
                    {method.primary}
                  </p>
                  <p className="text-gray-600 text-sm mb-3">
                    {method.secondary}
                  </p>
                  <p className="text-gray-500 text-xs mb-4">
                    {method.description}
                  </p>
                  <a
                    href={method.action}
                    target={
                      method.action.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      method.action.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="inline-block"
                  >
                    <Button size="sm" className="bg-blue-800 hover:bg-blue-900">
                      Contact Now
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form and Office Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-800">
                    Send Us a Message
                  </CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 2
                    hours
                  </p>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-green-600 mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-gray-600">
                        Thank you for contacting us. We'll respond within 2
                        hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <div className="relative">
                            <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                              id="firstName"
                              placeholder="Your first name"
                              value={formData.firstName}
                              onChange={(e) =>
                                handleInputChange("firstName", e.target.value)
                              }
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <div className="relative">
                            <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                              id="lastName"
                              placeholder="Your last name"
                              value={formData.lastName}
                              onChange={(e) =>
                                handleInputChange("lastName", e.target.value)
                              }
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                              id="email"
                              type="email"
                              placeholder="your.email@example.com"
                              value={formData.email}
                              onChange={(e) =>
                                handleInputChange("email", e.target.value)
                              }
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                              id="phone"
                              type="tel"
                              placeholder="020 XXXX XXXX"
                              value={formData.phone}
                              onChange={(e) =>
                                handleInputChange("phone", e.target.value)
                              }
                              className="pl-10"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="inquiryType">Inquiry Type *</Label>
                          <Select
                            value={formData.inquiryType}
                            onValueChange={(value) =>
                              handleInputChange("inquiryType", value)
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select inquiry type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="buying">
                                Buying a Property
                              </SelectItem>
                              <SelectItem value="selling">
                                Selling a Property
                              </SelectItem>
                              <SelectItem value="renting">
                                Renting a Property
                              </SelectItem>
                              <SelectItem value="letting">
                                Letting a Property
                              </SelectItem>
                              <SelectItem value="valuation">
                                Property Valuation
                              </SelectItem>
                              <SelectItem value="management">
                                Property Management
                              </SelectItem>
                              <SelectItem value="investment">
                                Investment Advice
                              </SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="propertyType">Property Type</Label>
                          <Select
                            value={formData.propertyType}
                            onValueChange={(value) =>
                              handleInputChange("propertyType", value)
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select property type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="flat">
                                Flat/Apartment
                              </SelectItem>
                              <SelectItem value="house">House</SelectItem>
                              <SelectItem value="studio">Studio</SelectItem>
                              <SelectItem value="commercial">
                                Commercial
                              </SelectItem>
                              <SelectItem value="land">Land</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="budget">Budget Range</Label>
                          <Select
                            value={formData.budget}
                            onValueChange={(value) =>
                              handleInputChange("budget", value)
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="under-300k">
                                Under £300k
                              </SelectItem>
                              <SelectItem value="300k-500k">
                                £300k - £500k
                              </SelectItem>
                              <SelectItem value="500k-750k">
                                £500k - £750k
                              </SelectItem>
                              <SelectItem value="750k-1m">
                                £750k - £1M
                              </SelectItem>
                              <SelectItem value="over-1m">Over £1M</SelectItem>
                              <SelectItem value="rental-under-1500">
                                Rental: Under £1,500/month
                              </SelectItem>
                              <SelectItem value="rental-1500-2500">
                                Rental: £1,500-£2,500/month
                              </SelectItem>
                              <SelectItem value="rental-over-2500">
                                Rental: Over £2,500/month
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="timeframe">Timeframe</Label>
                          <Select
                            value={formData.timeframe}
                            onValueChange={(value) =>
                              handleInputChange("timeframe", value)
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select timeframe" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="asap">ASAP</SelectItem>
                              <SelectItem value="1-3-months">
                                1-3 months
                              </SelectItem>
                              <SelectItem value="3-6-months">
                                3-6 months
                              </SelectItem>
                              <SelectItem value="6-12-months">
                                6-12 months
                              </SelectItem>
                              <SelectItem value="over-12-months">
                                Over 12 months
                              </SelectItem>
                              <SelectItem value="just-browsing">
                                Just browsing
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message">Message</Label>
                        <div className="relative">
                          <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Textarea
                            id="message"
                            placeholder="Tell us more about your requirements..."
                            value={formData.message}
                            onChange={(e) =>
                              handleInputChange("message", e.target.value)
                            }
                            className="pl-10 min-h-[120px]"
                          />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="newsletter"
                            checked={formData.newsletter}
                            onCheckedChange={(checked) =>
                              handleInputChange(
                                "newsletter",
                                checked as boolean
                              )
                            }
                          />
                          <Label htmlFor="newsletter" className="text-sm">
                            Subscribe to our newsletter for market updates and
                            property insights
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="terms"
                            checked={formData.terms}
                            onCheckedChange={(checked) =>
                              handleInputChange("terms", checked as boolean)
                            }
                            required
                          />
                          <Label htmlFor="terms" className="text-sm">
                            I agree to the{" "}
                            <Link
                              href="/privacy"
                              className="text-blue-800 hover:underline"
                            >
                              Privacy Policy
                            </Link>{" "}
                            and{" "}
                            <Link
                              href="/terms"
                              className="text-blue-800 hover:underline"
                            >
                              Terms of Service
                            </Link>{" "}
                            *
                          </Label>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-blue-800 hover:bg-blue-900"
                        disabled={isSubmitting || !formData.terms}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Office Information */}
            <div className="space-y-6">
              {/* Office Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-800">
                    Visit Our Office
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-blue-800 mt-1" />
                      <div>
                        <p className="font-semibold">
                          CAPITAL Letting & Estate Agents
                        </p>
                        <p className="text-gray-600">316 High Road</p>
                        <p className="text-gray-600">Leyton, London E10 5PW</p>
                        <a
                          href="https://maps.google.com/?q=316+High+Road+Leyton+London+E10+5PW"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-800 hover:underline text-sm"
                        >
                          Get Directions →
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-blue-800" />
                      <div>
                        <a
                          href="tel:02085685680"
                          className="font-semibold text-gray-700 hover:text-blue-800"
                        >
                          020 8568 5680
                        </a>
                        <p className="text-gray-600 text-sm">
                          Main office line
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-blue-800" />
                      <div>
                        <button
                          onClick={() =>
                            copyEmailToClipboard("info@capital-estates.co.uk")
                          }
                          className="font-semibold text-gray-700 hover:text-blue-800"
                        >
                          info@capital-estates.co.uk
                        </button>
                        <p className="text-gray-600 text-sm">
                          Click to copy email
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Globe className="h-5 w-5 text-blue-800" />
                      <div>
                        <p className="font-semibold text-gray-700">
                          www.capital-estates.co.uk
                        </p>
                        <p className="text-gray-600 text-sm">
                          Visit our website
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl text-blue-800">
                    <Clock className="h-6 w-6 mr-2" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Monday - Friday</span>
                      <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Saturday</span>
                      <span className="text-gray-600">9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Sunday</span>
                      <span className="text-gray-600">Closed</span>
                    </div>
                    <div className="border-t pt-3 mt-3">
                      <p className="text-sm text-gray-600">
                        <strong>Emergency Contact:</strong> Available 24/7 for
                        existing clients and urgent property matters
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Department Contacts */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-800">
                    Department Contacts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {departments.map((dept, index) => (
                      <div
                        key={index}
                        className="border-b border-gray-200 pb-3 last:border-b-0"
                      >
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {dept.name}
                        </h4>
                        <p className="text-gray-600 text-sm mb-2">
                          {dept.description}
                        </p>
                        <div className="flex flex-col space-y-1 text-sm">
                          <a
                            href={`tel:${dept.phone.replace(/\s/g, "")}`}
                            className="text-blue-800 hover:underline"
                          >
                            {dept.phone}
                          </a>
                          <button
                            onClick={() => copyEmailToClipboard(dept.email)}
                            className="text-blue-800 hover:underline text-left"
                          >
                            {dept.email}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-800">
                    Follow Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <a
                      href="https://facebook.com/capitalestates"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a
                      href="https://twitter.com/capitalestates"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a
                      href="https://instagram.com/capitalestates"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a
                      href="https://linkedin.com/company/capitalestates"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                  <p className="text-gray-600 text-sm mt-3">
                    Stay updated with our latest properties, market insights,
                    and company news
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h3>
            <p className="text-gray-600">
              Located in the heart of Leyton High Road
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-96 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.8234567890123!2d-0.0123456789!3d51.5678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s316%20High%20Road%2C%20Leyton%2C%20London%20E10%205PW!5e0!3m2!1sen!2suk!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CAPITAL Estate Agents Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Need Immediate Assistance?
            </h3>
            <p className="text-gray-600">
              Choose from our quick action options
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Calendar className="h-12 w-12 text-blue-800 mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-3">Book Appointment</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Schedule a consultation with our experts
                </p>
                <Link href="/book-appointment">
                  <Button className="bg-blue-800 hover:bg-blue-900">
                    Book Now
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-3">Free Valuation</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Get an instant property valuation
                </p>
                <Link href="/book-appointment">
                  <Button className="bg-green-600 hover:bg-green-700">
                    Get Valuation
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Home className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-3">View Properties</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Browse our latest property listings
                </p>
                <Link href="/properties">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    View Properties
                  </Button>
                </Link>
              </CardContent>
            </Card>
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
