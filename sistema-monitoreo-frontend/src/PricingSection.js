import React from 'react';
import { Button } from "./components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./components/ui/card"

export default function PricingSection() {
  return (
    <section className="py-12 px-4">
      <h2 className="text-2xl font-semibold text-center mb-8 text-purple-600">
        Elige el servicio a tu medida
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {[
          { hours: 5, price: 89, description: "El que se adapta a ti y a tus horarios" },
          { hours: 6, price: 99, description: "El más popular por los clientes", popular: true },
          { hours: 7, price: 114, description: "Para los amantes de la limpieza" },
        ].map((plan, index) => (
          <Card key={index} className={`flex flex-col ${plan.popular ? 'border-purple-500 border-2' : ''}`}>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-center">
                {plan.hours} horas
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center flex-grow">
              <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
              <p className="text-3xl font-bold text-purple-600">
                S/ {plan.price}
              </p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                Reservar
              </Button>
            </CardFooter>
            {plan.popular && (
              <div className="absolute top-0 right-0 bg-green-500 text-white text-xs px-2 py-1 rounded-bl-lg rounded-tr-lg">
                Popular
              </div>
            )}
          </Card>
        ))}
      </div>
    </section>
  )
}