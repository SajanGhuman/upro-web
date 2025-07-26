"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const plans = [
  {
    title: "Training Mat",
    price: "$199",
    button: "Buy Mat",
    image: "/training-mat.png",
    cells: [
      { label: "Material", desc: "Durable and comfortable" },
      { label: "Player Access", desc: "Single player" },
      { label: "Player Access", desc: "Multiple players" },
      { label: "Material", desc: "Durable and comfortable" },
      { label: "Player Access", desc: "Single player" },
      { label: "Player Access", desc: "Multiple players" },
      { label: "Material", desc: "Durable and comfortable" },
    ],
  },
  {
    title: "Monthly Subscription",
    price: "$9.99",
    button: "Subscribe",
    image: "/monthly-subscription.png",
    cells: [
      { label: "", desc: "" },
      { label: "Family Pack", desc: "3 players" },
      { label: "Monthly Subscription", desc: "Unlimited" },
      { label: "", desc: "" },
      { label: "Family Pack", desc: "3 players" },
      { label: "Monthly Subscription", desc: "Unlimited" },
      { label: "", desc: "" },
    ],
  },
  {
    title: "Family Pack",
    price: "$19.99",
    button: "Subscribe",
    image: "/family-pack.png",
    cells: [
      { label: "Free Trial", desc: "1 drill" },
      { label: "", desc: "" },
      { label: "Free Trial", desc: "Try your first drill free" },
      { label: "Free Trial", desc: "1 drill" },
      { label: "", desc: "" },
      { label: "Free Trial", desc: "1 drill" },
      { label: "", desc: "" },
    ],
  },
];

export default function PricingTable() {
  return (
    <section className="bg-[#0F0F0F] text-white py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Pricing & Access</h2>

      <div
        className="max-w-7xl mx-auto border"
        style={{ borderColor: "#192719" }}
      >
        {/* Top section: Image + Titles */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ borderColor: "#192719" }}
        >
          {plans.map((plan, index) => (
            <Card
              key={index}
              className="bg-[#0F0F0F] rounded-none border-none"
              style={{
                borderLeft: index !== 0 ? "1px solid #192719" : undefined,
              }}
            >
              <div className="flex flex-col items-center text-center px-6 py-8">
                <Image
                  src={plan.image}
                  alt={plan.title}
                  width={150}
                  height={150}
                  className="mb-4"
                />
                <h3 className="text-lg text-white font-semibold">
                  {plan.title}
                </h3>
                <p className="text-2xl text-white font-bold my-2">
                  {plan.price}
                </p>
                <Button
                  className="w-full text-black font-semibold"
                  style={{ backgroundColor: "#00FF00" }}
                >
                  {plan.button}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Divider */}
        <div style={{ height: 1, backgroundColor: "#192719" }} />

        {/* Feature rows */}
        {Array.from({ length: 7 }).map((_, rowIndex) => (
          <div
            key={rowIndex}
            className="grid grid-cols-1 md:grid-cols-3"
            style={{
              borderBottom: rowIndex < 6 ? "1px solid #192719" : undefined,
            }}
          >
            {plans.map((plan, colIndex) => {
              const cell = plan.cells[rowIndex];
              return (
                <div
                  key={colIndex}
                  className="px-6 py-5 flex flex-col items-center min-h-[96px]"
                  style={{
                    borderLeft:
                      colIndex !== 0 ? "1px solid #192719" : undefined,
                  }}
                >
                  {/* Fake picture placeholder */}
                  <div
                    className="bg-gray-700 rounded mb-2"
                    style={{ width: 48, height: 48, flexShrink: 0 }}
                    aria-hidden="true"
                  ></div>

                  {/* Text content centered horizontally */}
                  {cell?.label ? (
                    <div className="text-center">
                      <p className="font-medium leading-tight">{cell.label}</p>
                      <p className="text-sm text-gray-400">{cell.desc}</p>
                    </div>
                  ) : (
                    <div className="text-center text-sm text-gray-500">—</div>
                  )}
                </div>
              );
            })}{" "}
          </div>
        ))}
      </div>
    </section>
  );
}
