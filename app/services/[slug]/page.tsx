import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailContent } from "@/components/service-detail";
import { serviceMap, services } from "@/data/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const service = serviceMap[slug];
    if (!service) return { title: "Service" };

    return {
      title: service.name,
      description: service.description,
    };
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceMap[slug];

  if (!service) notFound();

  return <ServiceDetailContent service={service} />;
}
