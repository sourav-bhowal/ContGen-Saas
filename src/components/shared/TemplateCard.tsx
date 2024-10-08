import Image from "next/image";
import { TemplateProps } from "./Templates";
import Link from "next/link";

// TEMPLATE CARD COMPONENT
function TemplateCard({ template }: { template: TemplateProps }) {
  return (
    <Link href={`/dashboard/content/${template?.slug}`}>
      <div
        className="p-5 shadow-md rounded-md border bg-white flex flex-col gap-4 cursor-pointer
    hover:scale-105 transition-all h-[300px]"
      >
        <Image
          src={template.icon}
          alt={template.name}
          width={100}
          height={100}
        />
        <h2 className="font-semibold text-lg">{template.name}</h2>
        <p className="text-muted-foreground line-clamp-3">{template.desc}</p>
      </div>
    </Link>
  );
}

export default TemplateCard;
