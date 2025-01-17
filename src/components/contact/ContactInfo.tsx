import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: Mail,
      title: "Email",
      details: "contact@bmecreators.com",
      link: "mailto:contact@bmecreators.com"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) XXX-4567",
      link: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "New York, NY",
      link: null
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Mon-Fri: 9AM-6PM EST",
      link: null
    }
  ];

  return (
    <div className="space-y-8">
      <div className="prose prose-lg">
        <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
        <p className="text-gray-6 Want to learn more about our agency or how we can help elevate your platform? Drop us a message—we’d love to connect and discuss your goals! Ready to take the next step? Click Apply at the top right to get started.00">
         
        </p>
      </div>

      <div className="grid gap-6">
        {contactDetails.map((item, index) => (
          <div
            key={index}
            className="flex items-start space-x-4"
          >
            <div className="bg-primary-100 rounded-lg p-3">
              <item.icon className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
              {item.link ? (
                <a
                  href={item.link}
                  className="text-primary-600 hover:text-primary-700"
                >
                  {item.details}
                </a>
              ) : (
                <p className="text-gray-600">{item.details}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}