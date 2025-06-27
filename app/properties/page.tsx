"use client";

import { useState } from "react";
import {
  Building2,
  Phone,
  Search,
  Filter,
  MapPin,
  Bed,
  Bath,
  Car,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";

const properties = [
  {
    id: 1,
    title: "3 Bed Victorian House",
    location: "Clapham, SW4",
    price: "£750,000",
    type: "sale",
    beds: 3,
    baths: 2,
    parking: 1,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "2 Bed Modern Apartment",
    location: "Canary Wharf, E14",
    price: "£2,500/month",
    type: "rent",
    beds: 2,
    baths: 2,
    parking: 1,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "4 Bed Family Home",
    location: "Richmond, TW9",
    price: "£950,000",
    type: "sale",
    beds: 4,
    baths: 3,
    parking: 2,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "1 Bed Studio Flat",
    location: "Leyton, E10",
    price: "£1,200/month",
    type: "rent",
    beds: 1,
    baths: 1,
    parking: 0,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    title: "5 Bed Detached House",
    location: "Walthamstow, E17",
    price: "£1,200,000",
    type: "sale",
    beds: 5,
    baths: 4,
    parking: 3,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    title: "3 Bed Terraced House",
    location: "Leytonstone, E11",
    price: "£2,800/month",
    type: "rent",
    beds: 3,
    baths: 2,
    parking: 1,
    image: "/placeholder.svg?height=200&width=300",
  },
];

export default function PropertiesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [propertyType, setPropertyType] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [bedrooms, setBedrooms] = useState("all");

  const filteredProperties = properties.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType =
      propertyType === "all" || property.type === propertyType;
    const matchesBedrooms =
      bedrooms === "all" || property.beds.toString() === bedrooms;

    return matchesSearch && matchesType && matchesBedrooms;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Find Your Perfect Property
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Browse our extensive collection of properties for sale and rent in
            London
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search location or property type..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={propertyType} onValueChange={setPropertyType}>
                <SelectTrigger>
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="sale">For Sale</SelectItem>
                  <SelectItem value="rent">To Rent</SelectItem>
                </SelectContent>
              </Select>
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger>
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="0-500000">£0 - £500k</SelectItem>
                  <SelectItem value="500000-1000000">£500k - £1M</SelectItem>
                  <SelectItem value="1000000+">£1M+</SelectItem>
                </SelectContent>
              </Select>
              <Select value={bedrooms} onValueChange={setBedrooms}>
                <SelectTrigger>
                  <SelectValue placeholder="Bedrooms" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Bedrooms</SelectItem>
                  <SelectItem value="1">1 Bedroom</SelectItem>
                  <SelectItem value="2">2 Bedrooms</SelectItem>
                  <SelectItem value="3">3 Bedrooms</SelectItem>
                  <SelectItem value="4">4+ Bedrooms</SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-blue-800 hover:bg-blue-900">
                <Filter className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900">
              {filteredProperties.length} Properties Found
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <Card
                key={property.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-800">
                    {property.type === "sale" ? "For Sale" : "To Let"}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-2">
                    {property.title}
                  </h4>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>

                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      <span>{property.beds}</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      <span>{property.baths}</span>
                    </div>
                    {property.parking > 0 && (
                      <div className="flex items-center">
                        <Car className="h-4 w-4 mr-1" />
                        <span>{property.parking}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-xl md:text-2xl font-bold text-blue-800">
                      {property.price}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white"
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No properties found matching your criteria.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setPropertyType("all");
                  setPriceRange("all");
                  setBedrooms("all");
                }}
                className="mt-4 bg-blue-800 hover:bg-blue-900"
              >
                Clear Filters
              </Button>
            </div>
          )}
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
