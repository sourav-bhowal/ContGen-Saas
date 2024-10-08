import { TemplateProps } from "@/components/shared/Templates";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// INTERFACE OF FORM
interface FormProps {
  selectedTemplate: TemplateProps;
  userFormData: (formData: FormData) => void;
  loading: boolean;
}

// FORM COMPONENT
export function Form({ selectedTemplate, userFormData, loading }: FormProps) {
  // Form Data state
  const [formData, setFormData] = useState<FormData>(new FormData());

  // On submit
  const onSubmit = (e: any) => {
    e.preventDefault();
    // Send form data to parent
    userFormData(formData);
  };

  // Handle input change
  function handleInputChange(e: any) {
    // Get input name and value
    const { name, value } = e.target;
    // Set form data
    setFormData({ ...formData, [name]: value });
  }

  // RENDER FORM
  return (
    <div className="p-5 shadow-md border rounded-lg bg-white">
      <Image
        src={selectedTemplate?.icon}
        alt={selectedTemplate?.name}
        width={70}
        height={70}
      />
      <h1 className="text-2xl font-bold mb-2 text-primary">
        {selectedTemplate?.name}
      </h1>
      <p className="text-muted-foreground text-sm">{selectedTemplate?.desc}</p>

      <form className="mt-6" onSubmit={onSubmit}>
        {selectedTemplate.form?.map((item, index) => (
          <div key={index} className="my-3 flex flex-col gap-2 mb-7">
            <label className="font-semibold">{item.label}</label>
            {item.field == "input" ? (
              <Input
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
              />
            ) : (
              item.field == "textarea" && (
                <Textarea
                  name={item.name}
                  required={item?.required}
                  onChange={handleInputChange}
                />
              )
            )}
          </div>
        ))}
        <Button
          type="submit"
          className="w-full py-7 text-lg"
          disabled={loading}
        >
          {loading ? (
            <Loader2 className="animate-spin h-5 w-5" />
          ) : (
            "Generate Content"
          )}
        </Button>
      </form>
    </div>
  );
}
