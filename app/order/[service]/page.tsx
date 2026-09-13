import { notFound } from "next/navigation";
import { OrderForm } from "@/components/order-form";
import { serviceMap } from "@/data/services";

export default async function OrderPage({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params;
  const selectedService = serviceMap[service];

  if (!selectedService) notFound();

  return <OrderForm service={selectedService} defaultServiceSlug={selectedService.slug} />;
}
