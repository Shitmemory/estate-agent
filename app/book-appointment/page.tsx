"use client"

import type React from "react"

import { useState } from "react"
import { Building2, Phone, Calendar, Clock, MapPin, User, MailIcon, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export default function BookAppointmentPage() {
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [appointmentType, setAppointmentType] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const timeSlots = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Appointment request submitted! We'll contact you shortly to confirm.")
  }

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Book an Appointment</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Schedule a consultation with our property professionals
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Booking Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-800">Schedule Your Appointment</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="name"
                            placeholder="Your full name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <div className="relative">
                          <MailIcon className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="your.email@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="pl-10"
                            required
                          />
                        </div>
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
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="appointment-type">Appointment Type</Label>
                      <Select value={appointmentType} onValueChange={setAppointmentType}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select appointment type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="valuation">Property Valuation</SelectItem>
                          <SelectItem value="viewing">Property Viewing</SelectItem>
                          <SelectItem value="consultation">General Consultation</SelectItem>
                          <SelectItem value="landlord">Landlord Services</SelectItem>
                          <SelectItem value="tenant">Tenant Services</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="date">Preferred Date</Label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="date"
                            type="date"
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            className="pl-10"
                            min={new Date().toISOString().split("T")[0]}
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="time">Preferred Time</Label>
                        <Select value={selectedTime} onValueChange={setSelectedTime}>
                          <SelectTrigger>
                            <Clock className="h-4 w-4 mr-2" />
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Additional Information</Label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Textarea
                          id="message"
                          placeholder="Tell us more about your requirements..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="pl-10 min-h-[100px]"
                        />
                      </div>
                    </div>

                    <Button type="submit" className="w-full bg-blue-800 hover:bg-blue-900">
                      Book Appointment
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Office Location & Map */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-800">Visit Our Office</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-blue-800 mt-1" />
                      <div>
                        <p className="font-semibold">CAPITAL Letting & Estate Agents</p>
                        <p className="text-gray-600">316 High Road</p>
                        <p className="text-gray-600">Leyton, London E10 5PW</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-blue-800" />
                      <a href="tel:02085685680" className="text-gray-600 hover:text-blue-800">
                        020 8568 5680
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MailIcon className="h-5 w-5 text-blue-800" />
                      <span className="text-gray-600">info@capital-estates.co.uk</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Embedded Map */}
              <Card>
                <CardContent className="p-0">
                  <div className="h-96 w-full rounded-lg overflow-hidden">
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
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-800">Office Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
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
              <h5 className="font-semibent mb-4">Contact</h5>
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
