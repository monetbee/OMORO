import { ContactForm } from "@/components/contact-form";

export default function ContactPage({
  searchParams,
}: {
  searchParams?: Promise<{ service?: string }> | { service?: string };
}) {
  const params = searchParams instanceof Promise ? undefined : searchParams;
  const selectedServiceSlug = params?.service;

  return <ContactForm selectedServiceSlug={selectedServiceSlug} />;
}
