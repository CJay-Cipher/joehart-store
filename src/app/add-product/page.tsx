import Header from "@/components/Header/page";
import AddProductForm from "./AddProductForm";

export default function AddProduct() {
  return (
    <div className="font-montserrat max-sm:bg-custom-gray-light overflow-y-visible">
      <Header hideActionCounter={true} />
      <AddProductForm />
    </div>
  );
}
